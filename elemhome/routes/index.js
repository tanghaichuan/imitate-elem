//var express = require('express');
import express from 'express';

const router = express.Router();
const app = express();



app.use(express.static('./public'));
app.use((err, req, res, next) => {
	res.status(404).send('未找到当前路由');
});
module.exports = router;
