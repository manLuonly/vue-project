// 专门处理用户相关的接口
var express = require('express');
var router = express.Router();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

// 登录
router.post('/login',function(req,res){
  let username =  req.body.username;
  let password =  req.body.password;
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err,client){
    if (err) {
      console.log('连接失败',err);
      res.json( {
        code: 1,
        msg: '网络异常, 请稍候重试'
      })
      return;
    }
    var db = client.db('maizuo');
    async.series([
      function(cb) {
        db.collection('user').find({username: username}).count(function(err,num){
          if (err) {
            cb(err)
          } else if(num > 0) {
            cb({
              code:2,
              msg:'用户存在'
            });
          } else {
            cb(null)
          }
        })
      },
      function(cb) {
        db.collection('user').insertOne({
          username: username,
          password: password
        })
      },function(err) {
        if (err) {
          cb(err)
        } else {
          cb(null)
        }
      }
    ],function(err,result){
      if (err) {
        res.json(err)
      } else {
        res.json({
          code:0,
          msg:'登陆成功'
        })
      }
      client.close();
    })
  })
})

module.exports = router;
