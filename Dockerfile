FROM node:22-slim AS build
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
RUN corepack enable
WORKDIR /app

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./
COPY apps/api/package.json apps/api/
COPY packages/database/package.json packages/database/
COPY packages/shared/package.json packages/shared/
COPY packages/shared/tsconfig.json packages/shared/
COPY packages/database/prisma.config.ts packages/database/
COPY packages/database/prisma packages/database/prisma
COPY packages/shared/src packages/shared/src
COPY apps/api apps/api

RUN pnpm install --frozen-lockfile
RUN pnpm --filter @neurofamilia/shared build
RUN pnpm --filter @neurofamilia/database exec prisma generate
RUN pnpm --filter api build && ls apps/api/dist/main.js

FROM node:22-slim AS runtime
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
RUN corepack enable
WORKDIR /app

COPY --from=build /app /app

ENV NODE_ENV=production
EXPOSE 3001

CMD ["sh", "-c", "pnpm --filter @neurofamilia/database exec prisma migrate deploy && node apps/api/dist/main.js"]