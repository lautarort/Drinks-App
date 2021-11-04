const { Router } =  require("express");
const { postUser, getUser, getUserById, getUserByNP, postLogin } = require("./user.controller.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = Router();

router.get('/user', getUser);
router.post('/user/register', passport.authenticate("register", {session: false}),postUser);
// router.get('/user/:id', getUserById);
//router.get('/user/login',postLogin);

module.exports =  router;