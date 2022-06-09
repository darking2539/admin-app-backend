# init

```sh
cp .env.default .env
docker-compose up -d
```

# Migrations

**Create migration**

```sh
npm run typeorm migration:create ./src/migrations/<migrationName>
```

**Run migration**

```sh
npm run typeorm migration:run
```
