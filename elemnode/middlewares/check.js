class Check {
    constructor() {

    }
    async checkLogin(req, res, next) {
        const admin_id = req.session.admin_id;
        if (!admin_id) {
            res.send({
                status: 0,
                type: 'ERROR_SESSION',
                message: '请先登录'
            })
            return
        }
        next()
    }
}

export default new Check()