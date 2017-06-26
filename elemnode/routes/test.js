var express = require('express');
var router = express.Router();
//var Test = require('../initData/data.json');

/* GET users listing. */
/*router.get('/', function(req,res){
	const sql = "select * from admin";
	conn.query(sql,1,function(err,rows,fields){
		console.log(rows);
	})
	res.json(Test.test);

});*/

/*router.all('/test',function(req,res){
	console.log(req.method);                       	//获取请求方法
	console.log(req.baseUrl);						//获取请求资源路径/api
	console.log(req.path);							// /test
	console.log(req.headers['user-agent']);			// 获取某一个头的数据
	console.log(req.get('user-agent'));				// 同上
	console.log(req.query);							// 从url请求中获取查询参数
	console.log(req.query.id);						
	console.log(req.body);							// post请求时，获取body中的参数值
	console.log(req.body.id);
	res.send('respond with a resource');
})*/
router.get('/test',function(req,res,next){
	//req.session.isLogin = "1";
	res.send("test");
})
module.exports = router;