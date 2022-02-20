'use strict';

const Controller = require('egg').Controller;

class GirlsManageController extends Controller {
    async addGirl(){
        const {ctx} = this;
        const params = {
            name:'小白',
            age:18,
            skill:'头疗'
        }
        const res = await ctx.service.testdb.addGirl(params);
        ctx.body = "添加女孩";
    }

    async delGirl(){
        const {ctx} = this;
        const id = {id:3};
        const res = await ctx.service.testdb.delGirl(id);
        if(res){
            ctx.body="删除女孩-成功"
        }else {
            ctx.body = "删除女孩--失败";
        }
        
    }

    async updateGirl(){
        const {ctx} = this;
        const params = {
            id:3,
            name:'小白',
            age:20,
            skill:'头疗'
        }
        const res = await ctx.service.testdb.updateGirl(params);
        if(res){
            ctx.body = "修改女孩--成功";
        }else {
            ctx.body = "修改女孩--失败";
        }
        
    }

    async getGirl(){
        const {ctx} = this;
        const res = await ctx.service.testdb.getGirl();
        ctx.body = "查询女孩:" + JSON.stringify(res);
    }
}

module.exports = GirlsManageController;