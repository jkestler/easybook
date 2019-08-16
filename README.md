# easyBook
A visually oriented bookmarking app to help boost your productivity.


### Live DEMO
[Heroku App](https://jkestler-easybook.herokuapp.com/)

Use this test account to see easyBook in action: 

**email:**   

`testemail@gmail.com`

**password:**  

`testing123`


## Build Setup

1. Clone the repository
  ```sh
  git clone https://github.com/jkestler/easybook.git
  ```

2. Change Directories into the project
  ```sh
  cd easybook
  ```

3. Install dependencies for Client and Server
  ```sh
  npm install; npm install --prefix client
  ```

4. Create .env file - creat a string called `cookieSecret` and set it `=` to any random string for a session key. 

  ```sh
  touch .env
  ```
  ex. 
  ```sh
  cookieSecret='mysupersecretkey'
  ```

5. Run sequlize migrate if this is the first time the app is being used
  ```sh
   sequelize db:migrate
  ```

6. You can run the client or server by themselves or run both together with the following commands.

#### Together
```sh
npm run dev
```
#### Client
```sh
npm run client
```
#### Server
```sh
npm run server
```
