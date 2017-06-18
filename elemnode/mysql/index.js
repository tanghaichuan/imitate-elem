import mysql from 'mysql';

const options = {
	host:"localhost",
	user: 'root',
    port:"3304",
    password:"123456",
    database:"elem"
}

export const connection=mysql.createConnection(options);
