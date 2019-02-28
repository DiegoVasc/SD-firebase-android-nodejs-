var express = require('express');
var router = express.Router();
//var firebase = require('firebase');
var admin = require('firebase-admin'); 

var serviceAccount = require('account.json')


// console.log(serviceAccount)
var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://sgaa-a0c8f.firebaseio.com' 
})

// Create authentication
function isAuthenticated(req, res, next){
	// check if user is logged 
}



router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
})

router.get('/cadastro',(req,res)=>{
	res.render('cadastro')
})


router.get('/menu',(req,res)=>{
  res.render('menu')
})

router.get('/perfil',isAuthenticated,(req, res, next)=>{
	res.render('perfil')
})

router.get('/remover',(req,res)=>{
	res.render('remover')
})




module.exports = router;
