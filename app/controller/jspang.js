'use strict';

const Controller = require('egg').Controller;

class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '<h1>I am pang pang</h1>';
    const username = ctx.session.username;
    console.log(ctx.session.counter,'counter');
    await ctx.render('jspang.html',{
        id:2021,
        name:"xiaohong",
        age:18,
        username,
        skills:["泰式按摩","精油搓背","水疗SPA"],
        nowTime:this.app.currentTime()
    })
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>小红，正向你走来</h1>');
      }, 5000);
    });
  }
//   //自由传参模式
//   async getGirl() {
//       const {ctx} = this;
//       ctx.body = ctx.query;
//   }

  
  async getGirl() {
    const {ctx} = this;
    const res = await ctx.service.jspang.getGirl('1');
    console.log(res,333);
    ctx.body = res;
}

  //严格传参模式
  async getGirl2() {
    const {ctx} = this;
    ctx.body = 'getGirl2:' + ctx.params.name;
  }

  //post请求
//   async add() {
//     const {ctx} = this;
//     ctx.body = {
//         status:200,
//         data:ctx.request.body
//     };
//   }

  async add(){
      const {ctx} = this;
      ctx.cookies.set("user","技术胖",{
          maxAge:1000*60,
          httpOnly:true,//是否允许客户端操作cookie
          encrypt:true,//cookie允许有中文
      });
      ctx.session.username="jspang";
      ctx.body={
          status:200,
          data:"cookie add success"
      }
  }

  async del(){
    const {ctx} = this;
    ctx.cookies.set("user",null);
    ctx.body={
        status:200,
        data:"cookie add success"
    }
  }

  async editor(){
    const {ctx} = this;
    ctx.cookies.set("user","bilibili");
    ctx.session.username = "技术胖"
    ctx.body={
        status:200,
        data:"cookie add success"
    }
  }

  async show(){
    const {ctx} = this;
    const user = ctx.cookies.get("user",{
        encrypt:true
    });
    console.log(user);
    ctx.body={
        status:200,
        data:"cookie add success"
    }
  }


  async newContext() {
      const {ctx} = this;
      const params = ctx.params();
      console.log(params,'params');
      ctx.body = "new context";
  }

  async newRequest() {
    const {ctx} = this;
    const token = ctx.request.token;
    
    ctx.body = {
        status:200,
        body:token
    };
  }

  async newResponse() {
    const {ctx} = this;
    ctx.response.token = 'jspang.com';
    const testBase64 = ctx.helper.base64Encode('jspang.com');
    ctx.body = testBase64;
  }

  



}


module.exports = JspangController;
