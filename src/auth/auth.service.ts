import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: bcrypt.hash('changeme', 10),
    },
    {
      userId: 2,
      username: 'chris',
      password: bcrypt.hash('secret', 10),
    },
  ];

  constructor(private jwtService: JwtService, private configService : ConfigService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.users.find(user => user.username === username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    
   
    return {
      access_token: await this.jwtService.signAsync(payload, { secret : this.configService.get<string>('JWT_SECRET') }),
    };
  }
}
