const { log } = require('console');
const express = require('express');
const http = require('http');
const path = require('path');
var app = express();
app.use(express.static(path.join(__dirname)));
const server = http.createServer(app).listen(80);

const USER_DB = [
  {id : "kopo1@naver.com", pw: "kopo1"},
  {id : "kopo2@naver.com", pw: "kopo2"}, 
  {id : "kopo3@naver.com", pw: "kopo3"},
  {id : "kopo4@naver.com", pw: "kopo4"},
]


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/login1', function (req, res) {
  let status = 200
  let email = req.query.email
  let pw = req.query.pw



  for (let i = 0; i < USER_DB.length; i++) {

    if (USER_DB[i].id === email){
      if (USER_DB[i].pw === pw){
        status = 200
        break
      } else {
        status = 400
        break
      }
    } 
    break
  }
  console.log(status)
  res.send(status + "");
});


app.get('/mid3', function (req, res) {
  res.sendFile(path.join(__dirname, 'mid3.html'));
});
app.get('/submid3', function (req, res) {
  let message = ""
  let height = Number(req.query.height)
  let heightM = Number(height / 100)
  let weight = Number(req.query.weight)
  let bmi = Number((weight / (heightM * heightM)).toFixed(1))
  if (bmi < 20){
    message = "저체중"
  } else if (bmi>= 20 && bmi < 25){
    message = "정상"
  } else if (bmi >= 25 && bmi < 30){
    message = "과체중"
  } else {
    message = "비만"
  }
  res.send('판정결과 :' + message);
});


