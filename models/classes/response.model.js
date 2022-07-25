class Response {
    constructor(res, status, msg) {
        this.res = res;
        this.status = status;
        this.msg = msg;
    }
    
    sendResult(){
        this.res.status(this.status).send(this.msg);
    }
}

module.exports = Response

