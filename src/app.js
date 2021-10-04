const dotenv = require('dotenv').config();
const express = require('express'); // -->ES5
const cors =   require('cors');
const morgan  = require('morgan');
const path = require('path');
const ruta = require('./routes/index');
const connectDB = require('./middlewares/db');
//GET, POST PUT DELETE
const PORT = 8080;
const app = express();

// console.log(process.env.URI_MONGO)
app.use(express.static(path.join(__dirname,'../public')))
app.use(cors());
app.use(morgan());
app.use(express.json());

app.use('/api',ruta);

async function db(){
  await connectDB();
}
db()

module.exports= app;
// app.listen(PORT,async()=>{
//   // await 
//   console.log('El servidor se ha arrancado')
// })








