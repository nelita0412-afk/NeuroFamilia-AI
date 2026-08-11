# MIGRATION.md — NeuroFamilia AI

Inventario técnico completo del proyecto para continuar el desarrollo en otro entorno (OpenCode u otro). Generado a partir del estado real del código al 2026-08-11.

---

## 1. Estructura de carpetas principal

```
NeuroFamilia-AI/
├── docker-compose.yml          # Postgres (pgvector) + Redis para desarrollo local
├── package.json                 # Scripts raíz del monorepo (pnpm workspaces)
├── pnpm-workspace.yaml
├── apps/
│   ├── api/                      # Backend NestJS
│   │   └── src/
│   │       ├── main.ts           # Bootstrap: helmet, CORS, ValidationPipe, puerto
│   │       ├── app.module.ts     # Módulo raíz, guards globales
│   │       ├── config/env.validation.ts
│   │       ├── database/         # DatabaseModule/Service (Prisma)
│   │       └── modules/
│   │           ├── auth/                     # Login/registro JWT
│   │           ├── family/                   # Familias y miembros
│   │           ├── profile/                  # Perfiles (personas con expediente)
│   │           ├── growth/                   # Observaciones y reporte de crecimiento
│   │           ├── mentor/                   # Chat con mentores (IA)
│   │           ├── relationship-permissions/  # Motor de permisos (sin controller propio, usado por Mentor)
│   │           ├── scientific-intelligence/   # Integración Gemini (providers/ports/prompts)
│   │           └── health/                    # Healthcheck
│   └── web/                      # Frontend Next.js 16 (App Router)
│       └── src/
│           ├── app/
│           │   ├── page.tsx              # Redirect a /login
│           │   ├── (auth)/login/
│           │   └── (dashboard)/dashboard/
│           │       ├── page.tsx           # Home/Dashboard (incluye Archipiélago de Mentores)
│           │       ├── personas/
│           │       ├── familias/
│           │       ├── expedientes/
│           │       ├── growth/
│           │       ├── mentores/          # Chat de mentores
│           │       └── configuracion/
│           ├── components/ (forms, home, layout, mentors, providers, ui)
│           └── lib/ (api.ts, constants.ts, mentor-identity.ts, personas.ts, storage.ts, types.ts, utils.ts)
├── packages/
│   ├── database/                 # Prisma schema + migraciones (paquete compartido @neurofamilia/database)
│   ├── ai/                       # (placeholder, sin contenido relevante aún)
│   └── shared/                   # (placeholder, sin contenido relevante aún)
└── mockups/neurofamilia-galapagos-home/  # Mockup estático HTML de referencia de diseño
```

---

## 2. Stack tecnológico

**Backend (`apps/api`)**
- NestJS 11 (Express platform)
- Prisma ORM 7.9 + `@prisma/adapter-pg` (PostgreSQL con soporte pgvector)
- Autenticación JWT (`@nestjs/jwt`, `@nestjs/passport`, `passport-jwt`), hashing con `bcrypt`
- `@nestjs/throttler` (rate limiting global)
- `helmet` (seguridad HTTP)
- `@google/genai` (integración Gemini para mentores IA)
- Validación con `class-validator` / `class-transformer`
- Testing: Jest + Supertest

**Frontend (`apps/web`)**
- Next.js 16.3 (App Router, Turbopack)
- React 19.2 / React DOM 19.2
- TanStack React Query 5 (data fetching/estado servidor)
- Tailwind CSS 4 (vía `@tailwindcss/postcss`)
- React Hook Form + `@hookform/resolvers` + Zod (formularios y validación)
- `lucide-react` (iconos), `framer-motion` (animaciones), `clsx` + `tailwind-merge` (utilidades de clases)

**Base de datos (`packages/database`)**
- Prisma 7.9, PostgreSQL, migraciones versionadas en `prisma/migrations`

**Infraestructura local**
- Docker Compose: `pgvector/pgvector:pg17` (puerto host `5433`) + `redis:7-alpine` (puerto `6379`)

**Gestor de paquetes**: pnpm 11.20 (workspaces monorepo)

---

## 3. Variables de entorno requeridas (.env)

⚠️ **No existe archivo `.env` ni `.env.example` en el repo** (verificado, no se encontró ninguno). Estas variables deben crearse manualmente en `apps/api/.env` (y opcionalmente `apps/web/.env.local`).

### Backend (`apps/api`) — validadas al arrancar (`src/config/env.validation.ts`)
Obligatorias (el proceso lanza error si faltan):
| Variable | Descripción |
|---|---|
| `DATABASE_URL` | Cadena de conexión PostgreSQL (Prisma) |
| `JWT_SECRET` | Secreto para firmar tokens JWT |
| `GEMINI_API_KEY` | API key de Google Gemini (mentores IA) |
| `GEMINI_MODEL` | Nombre del modelo Gemini a usar |

Opcionales (con defaults en código):
| Variable | Default | Uso |
|---|---|---|
| `PORT` | `3001` | Puerto del servidor NestJS |
| `CORS_ORIGIN` | `*` | Orígenes permitidos (coma-separados). **Con credentials habilitado, usar explícito** ej. `http://localhost:3000`, no `*` |
| `JWT_EXPIRES_IN_SECONDS` | `3600` | Expiración del token JWT |
| `RATE_LIMIT_TTL` | `60` (segundos) | Ventana del throttler |
| `RATE_LIMIT_LIMIT` | `100` | Máximo de requests por ventana |

### Frontend (`apps/web`)
| Variable | Default | Uso |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | `http://localhost:3001` | URL base del backend consumida por `src/lib/api.ts` |

### Docker Compose (valores hardcodeados en `docker-compose.yml`, no via .env)
- `POSTGRES_USER=neurofamilia`, `POSTGRES_PASSWORD=neurofamilia`, `POSTGRES_DB=neurofamilia`, puerto host `5433`.
- Ejemplo de `DATABASE_URL` compatible: `postgresql://neurofamilia:neurofamilia@localhost:5433/neurofamilia`

---

## 4. Comandos para ejecutar frontend y backend

```bash
# Instalar dependencias (raíz del monorepo)
pnpm install

# Levantar infraestructura local (Postgres + Redis)
docker compose up -d

# Backend (NestJS) — desde la raíz o apps/api
pnpm --filter api start:dev
# equivalente: cd apps/api && pnpm start:dev

# Frontend (Next.js) — desde apps/web
cd apps/web && pnpm dev
# script raíz "pnpm dev" actualmente solo levanta el backend (pnpm --filter api start:dev)

# Prisma (desde packages/database)
cd packages/database && pnpm generate   # prisma generate
cd packages/database && pnpm migrate    # prisma migrate dev
cd packages/database && pnpm studio     # prisma studio
```

---

## 5. Comandos para build y deploy

```bash
# Build de todo el monorepo (recursivo, todos los paquetes)
pnpm build   # -> pnpm -r build

# Build individual
pnpm --filter api build     # nest build -> apps/api/dist
pnpm --filter web build     # next build

# Producción
cd apps/api && pnpm start:prod   # node dist/main
cd apps/web && pnpm start        # next start

# Lint
pnpm --filter api lint
pnpm --filter web lint
```

No hay pipeline de deploy (CI/CD, Dockerfile de producción, IaC) configurado en el repo actualmente — pendiente de definir infraestructura de destino.

---

## 6. Dependencias críticas

- **Prisma 7.9 + `@prisma/adapter-pg`**: acceso a datos; requiere `DATABASE_URL` válido y `prisma generate` tras cualquier cambio de schema.
- **`@google/genai` + `GEMINI_API_KEY`/`GEMINI_MODEL`**: sin estas credenciales el módulo Mentor no puede generar respuestas de IA (revisar fallback en `scientific-intelligence`).
- **`@nestjs/jwt` + `JWT_SECRET`**: sin esto no arranca el backend (falla `validateEnv`).
- **pgvector** (imagen `pgvector/pgvector:pg17`): necesario si el schema/migraciones usan tipos vectoriales.
- **pnpm workspaces**: el proyecto asume resolución de dependencias vía workspace (`pnpm-workspace.yaml`); no usar npm/yarn.
- **Next.js 16 / React 19**: versiones recientes, verificar compatibilidad de cualquier librería nueva antes de instalar.

---

## 7. Estado actual de cada módulo

### Auth
- Backend: `POST /auth/register`, `POST /auth/login` (públicos, `@Public()`). JWT con estrategia Passport. Guards globales (`JwtAuthGuard`, `RolesGuard`) protegen el resto de la API.
- Frontend: `/login` (formulario), token guardado vía `src/lib/storage.ts`, `src/lib/api.ts` limpia el token en 401.
- ⚠️ La respuesta de login usa `access_token` (snake_case), no `accessToken` — ver nota en riesgos.
- Sin registro de usuario visible en UI (endpoint existe en backend pero no hay página `/register` confirmada en frontend).

### Personas (Perfiles)
- Backend: `POST /profiles`, `GET /profiles`, `GET /profiles/:id`.
- Frontend: `/dashboard/personas`, `/dashboard/personas/nueva`, `/dashboard/personas/[id]`.
- Persona detalle integra datos reales de `/families`, `/profiles`, `/growth/profiles/:id/report` y `/mentor/chat`. La asignación persistida de mentor por persona **no existe en backend** — se muestra como "No disponible" (decisión de diseño intencional, no bug).

### Familias
- Backend: `POST /families`, `GET /families`, `POST /families/:id/members`.
- Frontend: `/dashboard/familias`.
- Funcional end-to-end (crear familia, listar, agregar miembros).

### Expedientes
- No es un módulo backend independiente; es una vista frontend (`/dashboard/expedientes`, `/dashboard/expedientes/[id]`) que combina datos de Personas + Growth + Mentores (pestañas: Información, Growth, Observaciones, Conversaciones, Mentores).
- La pestaña "Mentores" indica que el historial vive en el módulo Mentores (no hay endpoint de expedientes dedicado).

### Growth
- Backend: `POST /growth/observations` (categorías `strength`/`opportunity`), `GET /growth/profiles/:profileId/report`.
- Frontend: `/dashboard/growth`.
- El reporte alimenta el "Growth Score" y sugerencias visibles en Dashboard y en el chat de Mentores.

### Mentores
- Backend: `POST /mentor/chat` (protegido, usa `RelationshipPermissionsService` internamente para validar permisos y `ScientificIntelligenceService`/Gemini para generar la respuesta, con fallback técnico si falla la IA).
- Frontend: `/dashboard/mentores` — rediseñado en esta sesión (ver sección 8). Acepta `?mentor=NOMBRE` para preselección.
- Historial de conversación es **solo client-side** (`sessionStorage`, clave `neurofamilia_mentores_session_v1`), no se persiste en backend.
- 8 mentores fijos definidos en `apps/web/src/lib/constants.ts` (`MENTORS`): ALBA, NIA, MAKI, BOBBY, LEO, CORA, PINGO, DARWIN. Identidad narrativa (tagline, especialidad, imagen) centralizada en `apps/web/src/lib/mentor-identity.ts`.

---

## 8. Cambios realizados durante esta sesión

1. **Home/Dashboard — Galería de mentores** (`apps/web/src/app/(dashboard)/dashboard/page.tsx`):
   - Reemplazo de tarjetas placeholder por galería visual con imagen, nombre, especialidad y botón "Conversar" (enlaza a `/dashboard/mentores?mentor=NOMBRE`).
   - Rediseño posterior con encabezado ("Archipiélago de Mentores" + subtítulo + badge "8 mentores, infinitas posibilidades"), grid responsive (1/2/4 columnas) y recorte de imagen vía CSS (`aspect-[9/16]` + `object-cover object-right`) para minimizar el texto/logo incrustado en los PNG originales.
2. **`apps/web/src/lib/mentor-identity.ts`**: se agregó el campo `specialty` como fuente única de verdad (antes duplicado en varios archivos).
3. **`apps/web/src/app/(dashboard)/dashboard/mentores/page.tsx`** (chat de Mentores):
   - Soporte de preselección de mentor vía `?mentor=` (`useSearchParams`, envuelto en `<Suspense>` según lo exige Next.js).
   - Rediseño premium: cabecera con avatar grande + tagline + indicador "en línea" + botón "Nueva conversación"; estado vacío tipo hero con preguntas sugeridas por mentor (`mentorSuggestedPrompts`); composer estilo ChatGPT (textarea auto-resize + botón circular de envío); avatar recortado con `object-right`.
4. **Memoria de repositorio actualizada** (`/memories/repo/neurofamilia-ai.md`) con hallazgos técnicos reutilizables (ver también sección 10 de este documento).

---

## 9. Pendientes técnicos

- **Imágenes de mentores no son assets aislados**: los PNG en `apps/web/public/images/mentores/*.png` son posters completos (fondo fotográfico + texto "Hola, soy X" + logo) — actualmente se "disimulan" con CSS (`object-position`/`aspect-ratio`), pero lo ideal es reemplazarlos por PNG con el personaje recortado sobre fondo transparente (requiere diseño gráfico o herramienta de *background removal* no disponible en este entorno de agente).
- **Sin archivo `.env`/`.env.example`**: hay que documentar/crear las variables de entorno manualmente en el nuevo entorno (ver sección 3).
- **Sin pipeline de build/deploy**: no hay Dockerfile de producción, CI/CD ni IaC definidos.
- **Registro de usuario**: endpoint `/auth/register` existe pero no se confirmó una pantalla de registro en el frontend.
- **Historial de mentor no persistido**: las conversaciones viven solo en `sessionStorage` del navegador; si se requiere persistencia real, falta modelar esto en Prisma + exponerlo vía API.
- **Asignación de mentor por persona**: no existe en el modelo de datos actual; el frontend lo marca explícitamente como "No disponible".
- **Suite de tests**: solo se ven `*.spec.ts` básicos en backend (auth, database, app.controller) y `app.e2e-spec.ts`; sin cobertura de family/growth/profile/mentor ni tests de frontend.

---

## 10. Riesgos conocidos

- **Auth**: la respuesta de `/auth/login` usa `access_token` (snake_case), no `accessToken` — cualquier integración nueva debe respetar ese contrato.
- **CORS + credenciales**: con `credentials: true` en `main.ts`, `CORS_ORIGIN` **no puede ser `*`** en entornos donde el frontend envía cookies/credenciales; usar el origen explícito (ej. `http://localhost:3000`).
- **DTO de chat de mentor**: el campo esperado es `mentor` (no `mentorName`).
- **Normalización de Markdown**: las respuestas del modelo IA pueden traer artefactos Markdown (`**`, `#`, listas); el frontend normaliza esto manualmente (`normalizeMentorResponse` en `mentores/page.tsx`) — si se cambia el prompt/modelo, revisar que la normalización siga siendo suficiente.
- **Entorno de desarrollo sandboxed (VS Code)**: `pnpm dev`/`pnpm install` dentro de un sandbox con red restringida puede colgarse por reintentos de verificación de "supply-chain policies" contra `registry.npmjs.org`; en ese caso ejecutar sin sandbox de red o con acceso de red habilitado explícitamente.
- **Sesión/401**: el dashboard redirige a `/login` si cualquier llamada a la API responde 401 (no hay manejo de "sesión expirada" amigable); no hay credenciales de prueba/seed documentadas para QA manual.
- **`RelationshipPermissionsModule`** no tiene controller propio ni se importa a nivel de `AppModule` — solo se usa internamente dentro de `MentorModule`; esto es intencional pero puede confundir si se busca un endpoint REST de permisos que no existe.

---

## 11. Rutas principales de frontend

| Ruta | Archivo | Descripción |
|---|---|---|
| `/` | `src/app/page.tsx` | Redirige a `/login` |
| `/login` | `(auth)/login/page.tsx` | Ingreso |
| `/dashboard` | `(dashboard)/dashboard/page.tsx` | Home: saludo, mentor recomendado, ruta de crecimiento, Archipiélago de Mentores, recursos, actividad, accesos rápidos |
| `/dashboard/personas` | `.../personas/page.tsx` | Listado de personas |
| `/dashboard/personas/nueva` | `.../personas/nueva/page.tsx` | Alta de persona |
| `/dashboard/personas/[id]` | `.../personas/[id]/page.tsx` | Detalle de persona (integra growth + mentor) |
| `/dashboard/familias` | `.../familias/page.tsx` | Gestión de familias |
| `/dashboard/expedientes` | `.../expedientes/page.tsx` | Listado de expedientes |
| `/dashboard/expedientes/[id]` | `.../expedientes/[id]/page.tsx` | Detalle con tabs: Información, Growth, Observaciones, Conversaciones, Mentores |
| `/dashboard/growth` | `.../growth/page.tsx` | Vista de crecimiento |
| `/dashboard/mentores` | `.../mentores/page.tsx` | Chat con mentores, acepta `?mentor=NOMBRE` |
| `/dashboard/configuracion` | `.../configuracion/page.tsx` | Configuración |

---

## 12. Endpoints disponibles del backend

Base URL por defecto: `http://localhost:3001` (prefijo sin versión, sin `/api`).

| Método | Ruta | Auth | Módulo | Descripción |
|---|---|---|---|---|
| GET | `/health` | Público | Health | Estado de la API/DB |
| POST | `/auth/register` | Público | Auth | Registro de cuenta |
| POST | `/auth/login` | Público | Auth | Login, devuelve `access_token` |
| GET | `/families` | JWT | Family | Listar familias del usuario |
| POST | `/families` | JWT | Family | Crear familia |
| POST | `/families/:id/members` | JWT | Family | Agregar miembro a familia |
| GET | `/profiles` | JWT | Profile | Listar perfiles |
| POST | `/profiles` | JWT | Profile | Crear perfil |
| GET | `/profiles/:id` | JWT | Profile | Detalle de perfil |
| POST | `/growth/observations` | JWT | Growth | Crear observación (strength/opportunity) |
| GET | `/growth/profiles/:profileId/report` | JWT | Growth | Reporte de crecimiento (score, fortalezas, oportunidades) |
| POST | `/mentor/chat` | JWT | Mentor | Chat con mentor (usa permisos + IA Gemini) |

Todas las rutas excepto las marcadas `Público` pasan por `JwtAuthGuard` + `RolesGuard` globales (`app.module.ts`), además de `ThrottlerGuard` para rate limiting.

---

## 13. Ubicación de assets e imágenes de mentores

- Imágenes: `apps/web/public/images/mentores/{ALBA,NIA,MAKI,BOBBY,LEO,CORA,PINGO,DARWIN}.png`
- Metadatos por mentor (tagline, especialidad, ruta de imagen, ícono): `apps/web/src/lib/mentor-identity.ts` (`MENTOR_IDENTITY`)
- Lista canónica de mentores: `apps/web/src/lib/constants.ts` (`MENTORS`)
- ⚠️ Ver limitación en sección 9: son posters completos, no cutouts transparentes.

---

## 14. Ubicación de Prisma schema y migraciones

- Schema: `packages/database/prisma/schema.prisma`
- Config Prisma: `packages/database/prisma.config.ts`
- Migraciones (orden cronológico):
  - `packages/database/prisma/migrations/20260807135023_init/`
  - `packages/database/prisma/migrations/20260807140531_core_domain/`
  - `packages/database/prisma/migrations/20260807180549_relationship_permissions_engine/`
  - `migration_lock.toml` (provider: postgresql)
- Enums definidos: `DevelopmentStage`, `PersonRole`, `RelationshipType`, `PermissionAction`.
- Paquete compartido: `@neurofamilia/database` (scripts: `generate`, `migrate`, `studio`).

---

## Notas finales para el equipo que continúa en OpenCode

- Respetar el gestor de paquetes **pnpm** y la estructura de workspaces (no mezclar con npm/yarn).
- Crear `.env` en `apps/api` antes de arrancar el backend (ver sección 3) — el proceso falla rápido y explícito si falta alguna variable requerida.
- Levantar `docker compose up -d` antes de `prisma migrate`/`start:dev`.
- Para el frontend, confirmar `NEXT_PUBLIC_API_BASE_URL` apunte al backend correcto en el nuevo entorno.
- Revisar sección 9 y 10 antes de tocar Auth, Mentores o las imágenes de mentores para no repetir investigación ya hecha.
