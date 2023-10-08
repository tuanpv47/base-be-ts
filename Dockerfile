#declare node version
FROM node:14

# create directory workplace
WORKDIR /docker/base-be-ts

# copy file package.json & package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy project to workplace
COPY . .

# app will run on port in .env
EXPOSE 3000

# compile files .ts to .js
RUN npm run build

# executes npm run start
CMD ["npm", "run", "start"]
