'use strict';

const Service = require("egg").Service;
class testdbService extends Service {

    async addGirl(params){
        try {
            // const {app} = this;
            // const res = await app.mysql.insert('girls',params);
            // return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async delGirl(id){
        try {
            const {app} = this;
            const res = await app.mysql.delete('girls',id);
            return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateGirl(params){
        try {
            // const {app} = this;
            // const res = await app.mysql.update('girls',params);
            // return res;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async getGirl(){
        try {
            // const {app} = this.app;
            // const res = await app.mysql.select('girls');
            // return res;
            return {
                name:'xiaohong',
                age:18
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = testdbService;