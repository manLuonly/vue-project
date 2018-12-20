// 处理影院页
var express = require('express');
var router = express.Router();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

router.get('/list',function(req,res){
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) {
      console.log("连接数据库失败",err)
      res.json({
        code: 1,
        msg: '网络异常, 请稍候重试'
      })
    } else {
      var db = client.db('maizuo');
      db.collection('cinema').find().toArray(function(err,data){
        if (err) {
          console.log("查询数据库失败")
          res.json({
            code: 1,
            msg: '网络异常, 请稍候重试'
          })
        } else {
          res.json({
            code:0,
            msg:"ok",
            data:data
          })
        }
      })
    }
  })
})

module.exports = router;
