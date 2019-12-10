const Koa =require('koa')
const app = new Koa()
/**
 * 中间件的执行  洋葱模型
 */
const mid1 = async (ctx,next)=>{
  ctx.body = 'hello'
  await next()
  ctx.body = ctx.body+'===='
}
const mid2 = async (ctx,next)=>{
  ctx.body = ctx.body+'pop'
  ctx.type = 'text/html;chartset=utf-8'
  await next()
  
}
const mid3 = async (ctx,next)=>{
  ctx.body = ctx.body+'大河向东流'
  await next()
}

app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(5000,()=>{
  console.log('running ... 5000')
})