import { Router } from 'express'
const router = Router();

router.get('/list', function(req, res, next) {
    res.render('list');
  });
  
  router.get('/register', function(req, res, next) {
    res.render('register');
  });
  
  router.get('/home', function(req, res, next) {
    res.render('home');
  });
  router.get('/update', function(req, res, next) {
    res.render('update');
  });

  router.get('/', function(req, res, next) {
    res.render('index');
  });
  
  export default router