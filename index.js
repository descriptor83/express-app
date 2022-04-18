const [{ Server: h1 }, x] = [require('http'), require('express')];

const Router = x.Router();
const PORT = 4321;
const { log } = console;
const hu = { 'Content-Type': 'text/plain; charset=utf-8' };
const cors = { 'Access-Control-Allow-Origin' : '*' };
const app = x();
Router
  .route('/')
  .get(r => r.res.end('Привет мир!'));
app
  .use((r, rs, n) => rs.status(200).set(hu).set(cors) && n())
  .use(x.static('.'))
  .use('/', Router)
  .get('/login/', (req, res, next) => {
    if(req.query.error == 'yes') return next();
    res.status(200).set(hu).set(cors);
    res.set( );
    res.send("descriptor83");
  })
  .get('/sample/', (req, res, next) => {
    if(req.query.error == 'yes') return next();
    res.status(200).set(hu).set(cors);
    res.send("function task(x){ return x*this*this }");
  })
  .use(({ res: r }) => r.status(404).set(hu).send('Пока нет!'))
  .use((e, r, rs, n) => rs.status(500).set(hu).send(`Ошибка: ${e}`))
  /* .set('view engine', 'pug') */
  .set('x-powered-by', false);
module.exports = h1(app)
  .listen(process.env.PORT || PORT, () => log(process.pid));


/*

для варианта с type="module"

import { Server } from 'http';
import x from 'express';

и в предпоследней строке

export default Server(app)

*/
