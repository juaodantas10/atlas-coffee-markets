# Atlas Mercados de Café

Plataforma SaaS para gestão comercial de café com autenticação, dashboard protegido, cotação e simulador de margem.

## Stack

- **Backend:** Node.js, Express, JWT, bcrypt, estrutura MVC.
- **Frontend:** React com Vite, React Router e contexto de autenticação.
- **Banco (preparação):** configuração inicial para PostgreSQL via `pg`.

## Estrutura do projeto

```bash
atlas-coffee-markets/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Como rodar o backend

1. Acesse a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o arquivo de ambiente:

   ```bash
   cp .env.example .env
   ```

4. Rode em desenvolvimento:

   ```bash
   npm run dev
   ```

API disponível em `http://localhost:4000`.

### Rotas backend

- `POST /auth/register`
- `POST /auth/login`
- `GET /dashboard` (protegida por JWT)
- `GET /coffee/quote` (simulada inicialmente)

## Como rodar o frontend

1. Em outro terminal, acesse a pasta do frontend:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Opcional: configure a URL da API:

   ```bash
   echo "VITE_API_URL=http://localhost:4000" > .env
   ```

4. Rode o app:

   ```bash
   npm run dev
   ```

Frontend disponível em `http://localhost:5173`.

## Funcionalidades implementadas

- Cadastro e login com senha criptografada (`bcrypt`) e token JWT.
- Middleware de autenticação para rotas privadas.
- Dashboard protegido por sessão.
- Tela de cotação com retorno da API.
- Simulador com:
  - Preço ICE (USD/lb)
  - Conversão para USD/saca (60kg)
  - Conversão para BRL/saca
  - Preço de compra e venda
  - Quantidade
  - Cálculo de margem unitária e total

## Próximos passos para produção

1. Persistir usuários e operações em PostgreSQL (migrations + ORM/query builder).
2. Adicionar refresh token, recuperação de senha e políticas de segurança (rate limit, helmet, auditoria).
3. Integrar cotação real da ICE e feed cambial confiável.
4. Criar testes automatizados (unitários, integração e e2e).
5. Pipeline CI/CD com validação de qualidade, build e deploy.
6. Observabilidade (logs estruturados, métricas e alertas).

---
Projeto pronto para evolução incremental em ambiente produtivo.
