## Template

Template to create a bun service

- express web server
- Connect to postgress DB
- Drizzle for ORM and migrations
- Logging via pino

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

To run in dev:

```bash
bun run dev
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

run following command to initiate migrations once a schema is setup

Create migrations using

```bash
bun run generate
```

Run migrations

```bash
bun run migrate
```

Access drizzle kit studio

```bash
bunx drizzle-kit studio
```

Build using docker

```bash
docker build  -t <tag-name> .
```

Run docker image

```bash
docker run --env-file .env -p <host-port>:<internal-port>  -t <tag-name>
```
