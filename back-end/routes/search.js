//处理搜索
var express = require('express');
var router = express.Router();
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/';

router.get('/citylist',function(req,res){
  var val = req.query.val;
  console.log(val)
  var filter = new RegExp(val)
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client){
    if (err) {
      console.log("连接数据库失败",err)
      res.json({
        code: 1,
        msg: '网络异常, 请稍候重试'
      })
    } else {
      var db = client.db('maizuo');
      async.series([
        function(cb) {
          if (err) {
            cb(err)
          } else {
            cb(null);
          }
        },
        function(cb) {
          db.collection('cinema').find({
            name: filter
          }).toArray(function(err,data) {
            if (err) {
              cb(err)
            } else {
              cb(null,data)
            }
          })
        }
      ],function(err, result) {
        if (err) {
          res.json({
            code:1,
            msg:'网络异常, 请稍候重试'
          })
        } else {
          res.json({
            code:0,
            msg:'OK',
            data:result
          })
        }
        client.close();
      })
    }
  })
})

module.exports = router;
