## Manual installation
- Install nodejs locally ()
- Clone the repo
- Install dependencies (npm install)
- Start db locally
    - docker run -e POSTGRES_PASSWORD=mysecretpassword =d -p 5432:5432 postgres
    - Go to neon.tech and get yourself a new db
- Change the .env and update your creds
- npx prisma migrate dev
- npx prisma generate
- npm run build
- npm run start

## Docker installation

- Install Docker
- Start postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword =d -p 5432:5432 postgres
- Build the image - `docker build -t user-project`
- Start the image - `docker run -p 3000:3000 user-project`

## Docker Compose Installation steps

- Install
    - Docker
    - Docker-Compose
- Run `docker-compose up`