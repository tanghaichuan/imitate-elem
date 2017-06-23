import mysql from 'mysql';
import options from './db';

const pool=mysql.createPool(options);

// 由于mysql是关系型数据库语言,我尽量将CROD的操作同mongoose进行统一。
// 需要理解的是，连接中的sql查询请求是按队列查询的。
// 每次查询完最好释放连接，1、防止在高并发状态下,mysql连接池发生溢出，阻塞进程;2、防止mysql连接超时(8小时)自动断开(也可以采用断线重连的方案)
// connection(mysql连接操作,非特指connection函数)最好封装成单独的文件，避免连接丢失。


async function connection() {
	return await new Promise(async(resolve, reject) => {
		pool.getConnection(async(err, connection) => {
			if(err) throw err;
			resolve(connection);
		})
	})
}

async function find(sql){
	return await new Promise(async(resolve, reject) => {
		let conn = await connection();
		conn.query(sql, async(err, rows) => {
			if(err) reject(err);
			resolve(rows);
			conn.release();
		})
	})
}

export default async (sql) => {
	try {
		let rows = await find(sql);
		return rows[0];
	}catch(err) {
		throw err;
	}
}

