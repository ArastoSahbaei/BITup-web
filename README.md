# SETTING UP WEB(REACT)
1. Setup the project on local machine:
``` 
  git clone https://github.com/ArastoSahbaei/transbit-web.git
  cd <folder>
  npm install
  npm start
```
2. Create a `.env` file in the root of the project with the following variables:
```
  REACT_APP_ENVIROMENT = DEVELOPMENT
```
# SETTING UP SERVER(NODE.TS EXPRESS MONGOOSE)
1. Setup the project on local machine:
``` 
  git clone https://github.com/ArastoSahbaei/BITup-server
  cd <folder>
  npm install
  npm start
```
2. Create a `.env` file in the root of the project with the following variables:
```
  #COMMON
    ENVIROMENT = DEVELOPMENT
    TOKEN_SECRET = <string>
    BCRYPT_SALT_ROUNDS = <number>
    EMAIL_PW = <string>

  #DEV 
    DEV_DATABASE_URL = <string> EXAMPLE: mongodb://localhost:27017/bitup
    DEV_BTCPAY_TOKEN = <string>
    DEV_BINANCE_TOKEN = <string>
    DEV_BINANCE_SECRET = <string>
    DEV_WEB_URL = <string> EXAMPLE: http://localhost:3000
```

# SETTING UP MOBILE(REACT NATIVE)