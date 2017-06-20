//var express = require('express');
import express from 'express';
import users from './users';
import test from './test';
import admin from './admin';

const app = express();

app.use('/users', users);
app.use('/api', test);

app.use('/api/admin', admin);


app.use(express.static('./public'));
app.use((err, req, res, next) => {
	res.status(404).send('未找到当前路由');
});
module.exports = app;
