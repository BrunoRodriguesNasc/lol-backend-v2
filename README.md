# 🔥 League of Legends Stats API

## 🎮 Descrição

Seja bem-vindo(a) à **League of Legends Stats API**, uma réplica em miniatura do famoso site [OP.GG](https://op.gg), construída usando **NestJS**. Esta API oferece uma coleção de serviços que acessam os dados da Riot Games, permitindo que você obtenha informações detalhadas sobre contas de jogadores, campeões, partidas e muito mais! 🏆

---

## 📜 Funcionalidades

- **Account**: Consulte dados sobre as contas de jogadores da Riot Games, como ID e nome de usuário.
- **Auth**: Sistema de autenticação seguro para garantir o uso da API.
- **Summoner**: Obtenha detalhes sobre invocadores, incluindo nome, nível e estatísticas gerais.
- **Match**: Acesse informações detalhadas sobre o histórico de partidas dos jogadores.
- **Champions**: Explore os dados dos campeões, incluindo taxas de vitória e outros detalhes importantes.

---

## 🚀 Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de APIs robustas e escaláveis.
- **Riot Games API**: Interface poderosa para acessar os dados do League of Legends.
- **Axios**: Cliente HTTP para realizar requisições à API da Riot.
- **JSON Web Token (JWT)**: Implementação de autenticação e segurança.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

---

## 📚 Endpoints Principais

### Champions
- **GET** `/champions/`: Retorna todos os campeões.
- **GET** `/champions/:name`: Retorna um campeão espeficico

### Summoner
- **GET** `/summoner/:puuid`: Retorna dados de um invocador.

### Match
- **GET** `/match/getById/:matchId`: Retorna detalhes de uma partida pelo ID.

---

## ⚙️ Instalação e Configuração

1. Clone este repositório:

```bash
git clone https://github.com/BrunoRodriguesNasc/lol-backend-v2.git
```

2. Instale as dependências:

```bash
cd lol-backend-v2
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto com as seguintes chaves:

```
RIOT_API_KEY=your-riot-api-key
JWT_SECRET=your-jwt-secret
```

4. Inicie a aplicação:

```bash
npm run start:dev
```

---

## 🛠️ Como Usar

1. Faça suas requisições HTTP nos endpoints acima.
2. Utilize sua chave de API da Riot para autenticação e obtenha as informações dos jogadores e campeões.
3. Personalize os parâmetros e as consultas para retornar os dados conforme sua necessidade!

---

## 🌐 Links Importantes

- [Documentação Oficial da Riot Games API](https://developer.riotgames.com/)
- [NestJS - Documentação](https://nestjs.com/)

---

## 🦸 Autor

Feito com 💙 por **Bruno Rodrigues**. Quer saber mais sobre este projeto ou colaborar? Entre em contato!

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir um **pull request** ou **issue**.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---
