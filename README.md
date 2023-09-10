## Template

Template to create a node service

- Connect to postgress DB
- Prisma for ORM and migrations
- Logging via winston

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

run following command to initiate migrations once a schema is setup

```bash
bunx prisma migrate dev --name init
```

Access prisma studio

```bash
bunx prisma studio
```

Build using docker

```bash
docker build  -t <tag-name> .
```

Run docker image

```bash
docker run --env-file .env -p <host-port>:<internal-port>  -t <tag-name>
```
