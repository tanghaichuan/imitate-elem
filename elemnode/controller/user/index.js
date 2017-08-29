import crypto from 'crypto'
import formidable from 'formidable'
import dtime from 'time-formater'
import moment from 'moment'
import query from '../../mysql/index';

class User {
    constructor() {

    }
    async addUser(req, res, next) {
        const form = await new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                })
                return
            }
            let create_time = dtime().format('YYYY-MM-DD hh:mm:ss');
            let update_time = dtime().format('YYYY-MM-DD hh:mm:ss');
            const {
                name,
                phone,
                weichat,
                iden
            } = fields;
            try {
                if (!name || !phone || !weichat || !iden) {
                    throw new Error('用户名参数错误');
                    return
                }
            } catch (error) {
                res.send({
                    status: 0,
                    type: 'GET_ERROR_PARAM',
                    message: err.message,
                })
                return
            }
            try {
                let sql = `select * from user where name='${name}' and phone='${phone}' and weichat='${weichat}' and iden='${iden}'`;
                let row = await query(sql);
                if (row[0]) {
                    res.send({
                        status: 0,
                        message: '重复添加'
                    });
                } else {
                    sql = `insert into user(name,phone,weichat,iden,create_time,update_time) values('${name}','${phone}','${weichat}','${iden}','${create_time}','${update_time}')`;
                    await query(sql);
                    res.send({
                        status: 1,
                        message: '添加成功'
                    });
                }
            } catch (error) {
                console.error(error);
                res.send({
                    status: 0,
                    message: '添加失败'
                });
            }
        })
    }
    async getUserList(req, res, next) {
        try {
            let sql = `select * from user`;
            let row = await query(sql);
            if (row) {
                res.send(row);
            }

        } catch (error) {
            res.send({
                status: 0,
                message: '查询失败'
            });
        }
    }
    async editUser(req, res, next) {
        const form = await new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                })
                return
            }
            let update_time = dtime().format('YYYY-MM-DD hh:mm:ss');
            const {
                id,
                name,
                phone,
                weichat,
                iden
            } = fields;

            try {
                if (!name || !phone || !weichat || !iden) {
                    throw new Error('用户名参数错误');
                    return
                }
            } catch (error) {
                console.log(error);
                res.send({
                    status: 0,
                    type: 'GET_ERROR_PARAM',
                    message: err.message
                })
                return
            }

            try {
                let sql = `update user set name='${name}', phone='${phone}', weichat='${weichat}', iden='${iden}', update_time='${update_time}' where id = '${id}'`;
                let row = await query(sql);
                if (row) {
                    res.send({
                        status: 1,
                        message: '修改成功'
                    })
                }
            } catch (error) {
                res.send({
                    status: 0,
                    message: error
                })
                return
            }
        })
    }
    async delUserInfo(req, res, next) {
        const form = await new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            if (err) {
                res.send({
                    status: 0,
                    type: 'FORM_DATA_ERROR',
                    message: '表单信息错误'
                })
                return
            }
            try {
                let sql = `delete from user where id = '${fields.id}'`;
                let row = await query(sql);
                if (row) {
                    res.send({
                        status: 1,
                        message: '删除成功'
                    })
                } else {
                    res.send({
                        status: 0,
                        message: '删除失败'
                    })
                }
            } catch (error) {
                throw error;
            }
        })
    }
}

export default new User()