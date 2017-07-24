
import crypto from 'crypto'
import formidable from 'formidable'
import dtime from 'time-formater'
import query from '../../mysql/index';

class Admin{
	constructor(){
		this.login = this.login.bind(this)
		this.register = this.register.bind(this)
		this.encryption = this.encryption.bind(this)
	}
	async test() {
		return 1;
	}
	async login(req,res,next) {
		// formidable表单数据处理模块
		const form =await new formidable.IncomingForm();
		form.parse(req, async(err, fields, files) => {
			if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
				return
			}
			const {username, password, status = 2} = fields;
			/*res.send({
				username:username,
				password:password,
				status:2
			})*/
			try {
				if(!username) {
					throw new Error('用户名参数错误');
				}
				else if(!password){
					throw new Error('密码参数错误');
				}
			}
			catch(err){
				res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
				return
			}
			const md5Pwd = this.encryption(password);
			try {
				let sql = `select * from admin where username='${username}' and password='${md5Pwd}'`;
				let rows = await query(sql);
				if(rows.length === 0) {
					res.send({
						status: 0,
						type: 'LOGIN_ADMIN_FAILED',
						message: '登录管理员失败',
					})
				}else{
					//记录session
					req.session.admin_id = rows.id;
					res.send({
						status: 1,
						success: '登录成功',
						data:rows
					});
					res.end();
				}
			}
			catch(err) {
				console.log(err);
			}

		})
	}

	async register(req,res,next) {
		let password = '123456';
		const username = 'admin';
		const newPwd = this.encryption(password);
		const create_time = dtime().format('YYYY-MM-DD');
		const status = 2;
		//const sql = "insert into admin(username,password,create_time,status) values("+ username + "," + password + "," + create_time+ "," + status+")";
		let sql = `insert into admin(username,password,create_time,status) values('${username}','${newPwd}','${create_time}','${status}')`;
		let select = `select * from admin`; 
		query(sql, (err, rows) => {
			if(err){
				res.send(err);
				console.log("注册失败");
			}else{
				res.send("注册成功");
				console.log("注册成功");
				
			}
		});
		/*const form = new formidable.IncomingForm();
		// 表单验证
		form.parse(req, async(err, fields, files) => {
			if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
				return
			}
			const {username, password, status = 1} = fields;
			try{
				if (!username) {
					throw new Error('用户名错误')
				}else if(!password){
					throw new Error('密码错误')
				}
			}catch(err){
				console.log(err.message, err);
				res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
				return
			}

			const newPwd = this.encryption(password);
			try {
				const newAdmin = {
					username,
					password: newpwd, 
					create_time: dtime().format('YYYY-MM-DD'),
					status: 2,
				}
				// 表操作

			}catch(err){
				console.log('注册管理员失败', err);
				res.send({
					status: 0,
					type: 'REGISTER_ADMIN_FAILED',
					message: '注册管理员失败',
				})
			}
		})*/
	}
	async singout(req, res, next) {
		try {
			if(req.session.admin_id){
				delete req.session.admin_id;
				res.send({
					status: 1,
					success: '退出成功'
				})
				res.end();
				return
			}else{
				res.send({
					status: 1,
					success: '退出成功'
				})
				res.end();
			}
			
		}catch(err) {
			console.log('退出失败', err)
			res.send({
				status: 0,
				message: '退出失败'
			})
			res.end();
		}
	}

	async getAdminInfo(req, res, next) {
		const admin_id = req.session.admin_id;
		if(!admin_id || !Number(admin_id)) {
			res.send({
				status: 0,
				type: 'ERROR_SESSION',
				message: '获取管理员信息失败'
			});
			return
		}
		try {
			let sql = `select * from admin where id = '${admin_id}'`;
			const adminInfo = await query(sql);
			if (!adminInfo) {
				throw new Error('未找到当前管理员');
			}else{
				res.send({
					status: 1,
					data: adminInfo
				})
			}
		} catch(err) {
			res.send({
				status: 0,
				type: 'GET_ADMIN_INFO_FAILED',
				message: '获取管理员信息失败'
			})
		}
	}

	encryption(password){
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}

	Md5(password){
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
}

export default new Admin()