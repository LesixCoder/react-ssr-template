import Koa from 'koa';
import koaStatic from 'koa-static';
import childProcess from 'child_process';
import path from 'path';
// const { koaBody } = require('koa-body');
import React, { createContext } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { matchRoutes, RouteObject } from 'react-router-dom';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import App from '@/client/App';
import router from '@/router';

const app = new Koa();

// app.use(koaBody());
// 注入事件处理的脚本
app.use(koaStatic(path.resolve(process.cwd(), 'client_build')));

app.use((ctx, next) => {
    const path = ctx.request.path;

    const routeMap = new Map<string, () => Promise<any>>();
    router.forEach((item) => {
        if (item.path && item.loadData) {
            routeMap.set(item.path, item.loadData());
        }
    });

    // 匹配当前路由的routes
    const matchedRoutes = matchRoutes(router as RouteObject[], path);

    const promises: Array<() => Promise<any>> = [];
    matchedRoutes?.forEach((route) => {
        if (routeMap.has(route.pathname)) {
            promises.push(routeMap.get(route.pathname)!);
        }
    });
    Promise.all(promises).then((data) => {
        const context: any = {
            initialData: data,
        };
        const html = renderToString(
            <StaticRouter location={path}>
                <App routeList={router}></App>
            </StaticRouter>
        );
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
    });

    return next();
});

//启动服务
app.listen(3000, () => {
    console.log('ssr-server listen on 3000');
});

childProcess.exec('start http://127.0.0.1:3000');
