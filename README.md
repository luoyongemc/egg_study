# egg_study



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org





###Controller
1.作用：
    *RESTful Controller  处理接口请求
    *HTML URL 处理url
    *代理服务器
###Service  封装的一个抽象层，数据库交互的代码
    *保持Controller 逻辑更加简单
    *独立性，Service 多个Controller
    *写测试用例简单