/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1645279725163_8598';

  // add your middleware config here
  config.middleware = [];

  //csrf enable false
  config.security = {
    csrf:{
      enable:false
    }
  }

  config.view = {
    mapping:{
      ".html":"ejs"
    }
  }

  config.ejs = {
    // delimiter:"$"
  }

  // config.mysql = {
  //   app:true,
  //   agent:false,
  //   client:{
  //     host:'127.0.0.1',
  //     port:'3306',
  //     user:'root',
  //     password:'root',
  //     database:'egg-test'
  //   }
  // }

  // config.static = {
  //   prefix:"/assets/"
  // }

  config.session={
    key:"pang_sess",
    httpOnly:false,
    maxAge:1000*60,
    renew:true
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
