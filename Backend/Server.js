const app= require("./app")
const dotenv = require('dotenv');
const path = require('path');
const ConnectDB=require("./config/db")
const configPath = path.resolve(__dirname, '../Backend/utils/config.env');

dotenv.config({ path: configPath });
ConnectDB();

const sever=app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  
  });


  