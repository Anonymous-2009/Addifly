run server 
docker run -d -p 3000:3000 -e DATABASE_URL=postgresql://something:something@database:5432/something --name server --network=addifly server:v1

run database 
docker run -d -e POSTGRES_USER=something -e POSTGRES_PASSWORD=something -e POSTGRES_DB=something --network=addifly --name database postgres

run database with volume 
docker run -d -v addifly-data:/var/lib/postgresql/data -e POSTGRES_USER=something -e POSTGRES_PASSWORD=something -e POSTGRES_DB=something --network=addifly --name database postgres

run client 
docker run -p 5173:5173 --name client --network=addifly client:v1

create a table for this 
CREATE TABLE "User" (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, age INTEGER NOT NULL, gender VARCHAR(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, salary DOUBLE PRECISION NOT NULL); CREATE TABLE "Admin" (id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, otp DOUBLE PRECISION NULL, "otpExpires" TIMESTAMP NULL);

create network 
docker create network addifly -d bridge 

and inspect network 
docker network inspect addifly