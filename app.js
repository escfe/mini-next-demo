const Koa = require('koa');
const miniNext = require('mini-next');
const app = new Koa();
new miniNext(app);
app.listen(8001);
// eslint-disable-next-line no-console
console.log('app started at port 8001...');