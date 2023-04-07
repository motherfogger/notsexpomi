# notsexpomi
server stack using:  NodeJS + TypeScript + ExpressJS + PostgreSQL + MikroORM 


codes-initially-setup with: [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter)

## Installation

1. clone the repo or setup your way to notsexpomi-stack

   ```bash
    git clone https://github.com/motherfogger/notsexpomi.git
   ```

2. Install
    ```bash
        cd notsexpomi
        npm install
    ```

3. Setup .env file and Run

```bash
    npm run dev
```

4. Migrations: To generate a migration, apply changes or rollback migrations

```bash
    npx mikro-orm migration:create
    npx mikro-orm migration:up
    npx mikro-orm migration:down
```

## Contributing

- please contribute directly to: [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter)
