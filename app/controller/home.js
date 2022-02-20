'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async jspang() {
    const { ctx } = this;
    ctx.body = '<h1>hello pangpang</h1>';
  }

  async testGetGirl() {
    const { ctx } = this;
    let id = ctx.query.id;
    const res = await ctx.service.jspang.getGirl(id);
    ctx.body = res;
  }
}

module.exports = HomeController;
