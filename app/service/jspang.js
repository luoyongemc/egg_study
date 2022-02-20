'use strict';

const Service = require("egg").Service;

class JspangService extends Service {
    async getGirl(id) {
        return {
            id,
            name:'xiaohong',
            age:18
        }
    }
}

module.exports = JspangService;