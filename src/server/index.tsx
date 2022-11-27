import Koa from 'koa';
import koaStatic from 'koa-static';
import childProcess from 'child_process';
import path from 'path';
// const { koaBody } = require('koa-body');
import React from 'react';
//引入index 组件
import { renderToString } from 'react-dom/server';
import Index from '../pages/index';

const app = new Koa();

// app.use(koaBody());
// 注入事件处理的脚本
app.use(koaStatic(path.resolve(process.cwd(), 'client_build')));

app.use((ctx, next) => {
    const html = renderToString(<Index />);
    ctx.body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${html}
    </div>
</body>
</html>
<script type="text/javascript"  src="index.js"></script>
`;

    return next();
});

//启动服务
app.listen(3000, () => {
    console.log('ssr-server listen on 3000');
});

childProcess.exec('start http://127.0.0.1:3000');
