var mysql = requrie('mysql');
const {password} = require('./config.js')

dbConnection = mysql.createConnection({
  user:'root',
  password:password,
  database:'suggestPlace'
});

dbConnection.connect(err =>{
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('database connected');
  }
})