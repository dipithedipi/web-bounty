# Run sveltekit project
npm run dev

# Setup database
https://codevoweb.com/implement-jwt-authentication-in-sveltekit-api-routes/

""" docker-compose.yml
services:
  postgres:
    image: postgres
    container_name: postgres
    ports:
      - 6500:5432
    env_file:
      - ./.env
    volumes:
      - postgres:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    ports:
      - "5050:80"
    env_file:
      - ./.env
    volumes:
      - pgadmin-data:/var/lib/pgadmin
    restart: always
volumes:
  postgres:
  pgadmin-data:

"""

""" .env
# -----------------------------------------------------------------------------
# PostgreSQL Credentials for Docker Compose
# -----------------------------------------------------------------------------
POSTGRES_HOST=127.0.0.1
POSTGRES_USER=admin
POSTGRES_PASSWORD=password123
POSTGRES_DB=sveltekit_secureTest_app
POSTGRES_PORT=6500

# -----------------------------------------------------------------------------
# pgAdmin4 Credentials for Docker Compose
# -----------------------------------------------------------------------------
PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=password123
PGADMIN_LISTEN_PORT=80


# -----------------------------------------------------------------------------
# Database (PostgreSQL - Docker)
# -----------------------------------------------------------------------------
DATABASE_URL=postgresql://admin:password123@localhost:6500/sveltekit_secureTest_app?schema=public
"""

docker-compose up -d

# Setup Prisma
npm i @prisma/client 
npm i -D prisma

npx prisma init --datasource-provider postgresql

npx prisma migrate dev --name init

# Setup zod
it’s essential to validate incoming data before storing it in the database to ensure data integrity. To achieve this, we’ll use the zod library, which provides powerful schema validation capabilities.

npm i zod

# Setup JWT(Json Web Token)
npm i jose

added:
""" .env
# -----------------------------------------------------------------------------
# JSON Web Token Credentials
# -----------------------------------------------------------------------------
JWT_SECRET_KEY=my_ultra_secure_jwt_secret_key
JWT_EXPIRES_IN=60
JWT_ALG=HS512
"""

# Install Bcryptjs
npm i bcryptjs 
npm i -D @types/bcryptjs