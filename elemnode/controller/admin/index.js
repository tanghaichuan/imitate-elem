
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

	async login(req,res,next) {
		//const form = new formidable.IncomingForm();
		//res.send(form);
		res.send('login');
	}

	async register(req,res,next) {
		let password = '123456';
		const username = 'admin';
		const newPwd = this.encryption(password);
		const create_time = dtime().format('YYYY-MM-DD');
		const status = 2;
		//const sql = "insert into admin(username,password,create_time,status) values("+ username + "," + password + "," + create_time+ "," + status+")";
		const sql = `insert into admin(username,password,create_time,status) values('${username}','${newPwd}','${create_time}','${status}')`;
		const select = `select * from admin`; 
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