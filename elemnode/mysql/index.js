import mysql from 'mysql';

const options = {
	host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'elem',
    port: 3306
}

const pool=mysql.createPool(options);

// 将query封装
export default async(sql, callback) =>{
	pool.getConnection((err, connection) =>{
		connection.query(sql, (err, rows) => {
			callback(err, rows);
            connection.release();
		})
	})
}
