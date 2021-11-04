const passport =  require("passport");
const User = require("../../models/User.js");
const localStrategy = require('passport-local').Strategy



passport.use("register" , new localStrategy({
    usernameField: "email",
    passwordField: "contraseña"
}, async (email, contraseña, done) => {
    try{
        const user = await User.create({email, contraseña})
        return done(null, user)
    }catch (e) {
        done(e)
    }
}
))

// passport.use("login", new localStrategy({
//     usernameField: "email",
//     passwordField: "contraseña"
// }, async (email, contraseña, done) => {
//  try {
//      const user = await User.findOne({email})
//      if(!user){
//          return done(null, false, {message: "No se econtro el usuario"})
//      }
//      const validate = await user.isValidContraseña(contraseña)
//      if(!validate){
//          return done(null, false, {message: "No se econtro la validacion"})
//      }
//      return done(null, user, {message: "Se logueo Correctamente"})
//  } catch (e) {
//      done(e)
//  }
// }
// ))
