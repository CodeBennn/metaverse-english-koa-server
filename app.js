const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

router.get("/",async ctx=>{
    ctx.body={msg:'Hello Koa Interfaces'};
})

const port =process.env.PORT || 5000;

app.listen(port=>{
    console.log("app listen on 5000");
})