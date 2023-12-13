- Inicializar o projeto ao baixar o repositório:
```
npm install
```

- Após criar um model, para criar sua respectiva migration:
```
npx sequelize migration:generate --name create-[nome do model a ser criado no plural]
```

- Criar o database/schema no banco:
```
npx sequelize db:create
```

- Criar as tabelas no banco:
```
npx sequelize db:migrate
```

- Caso haja necessidade de reinstalar alguma dependência:
```
npm i sequelize mysql2 express nodemon body-parser sequelize-cli cors
```

- Resolução de erro de conexão com o azure:
https://learn.microsoft.com/en-us/azure/mysql/flexible-server/how-to-connect-tls-ssl