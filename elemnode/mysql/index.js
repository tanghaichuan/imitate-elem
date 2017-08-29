import mysql from 'mysql';
import options from './db';

const pool=mysql.createPool(options);

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
		return rows;
	}catch(err) {
		throw err;
	}
}

