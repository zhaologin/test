const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser=require('body-parser');
const md5=require('md5')
const mysql = require('mysql');
const pool = mysql.createPool({
  //MySQL数据库服务器的地址
  host:'127.0.0.1',
  //端口号
  port:3306,
  //数据库用户的用户名
  user:'root',
  //数据库用户的密码
  password:'',
  //数据库名称
  database:'xzqa',
  //最大连接数据
  connectionLimit:10
});


server.use(cors({
  origin:['http://127.0.0.1:8080','http://localhost:8080','http://127.0.0.1:8081','http://localhost:8081']
}));
server.use(bodyParser.urlencoded({
  extended:false
}));
server.post('/register',(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    // console.log(username,password);
    let sql='select id from xzqa_author WHERE username=?';
    pool.query(sql,[username],(error,results)=>{
      if (error) throw error;
      if(results.length==0){
      sql='INSERT INTO xzqa_author(username,password) VALUES(?,MD5(?))';
    pool.query(sql,[username,password],(error,results)=>{
      if(error)throw error;
      res.send({message:'注册成功',code:1})
    })
    }else{res.send({message:'用户名已存在',code:0})}
    })
});
server.post('/login',(req,res)=>{
  let username=req.body.username;
  let password=md5(req.body.password);
  let sql = 'SELECT id,username,nickname,avatar FROM xzqa_author where username=? and password=?';
  pool.query(sql,[username,password],(error,results)=>{
    if(error) throw error;
    if(results.length==1){
        res.send({message:'登录成功',code:1,info:results[0]})
    }else{
          res.send({message:'登录失败',code:0})
    }
  })
})
server.get ('/vuex',(req,res)=>{
  res.send('OK');
})
server.listen(3000,()=>{
  console.log('server is running...');
});