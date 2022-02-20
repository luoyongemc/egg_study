'use strict';

const { app } = require('egg-mock/bootstrap');

describe('jspang -index', () => {
//   it('should assert', () => {
//     const pkg = require('../../../package.json');
//     assert(app.config.keys.startsWith(pkg.name));

  //     // const ctx = app.mockContext({});
  //     // yield ctx.service.xx();
  //   });

  it('jspang index page', () => {
    return app.httpRequest()
      .get('/jspangpang')
      .expect('<h1>I am pang pang</h1>')
      .expect(200);
  });

  it('jspang getGirls page', async () => {
    return app.httpRequest()
      .get('/getGirls')
      .expect('<h1>小红，正向你走来</h1>')
      .expect(200);
  });
});
