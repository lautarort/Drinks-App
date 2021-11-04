const { Router } = require("express");
const { postUser, postLogin, profileAuthenticate } = require("./user.controller.js");
const passport = require("passport");

// getUser, getUserById, getUserByNP otros contolers

const router = Router();

// router.get('/user', getUser);
// router.get('/user/:id', getUserById);
router.post('/user/register', passport.authenticate("register", { session: false }), postUser);
router.post('/user/login', postLogin);
router.get('/user/profile', passport.authenticate('jwt', { session: false }), profileAuthenticate);

module.exports = router;

// Hagan npm i en api 
// POST A REGISTER ANDA BIEN 
// Despiues tienen que hacer un post a login
// con los mismo datos que se registraron 
// solo cambiando la ruta a login. y ahi tiene que tirar
// un token. se queda cargando y nunca lo tira.


