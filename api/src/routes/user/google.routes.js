require ("./auth") 

const session = require("express-session");
const express = require("express");
const passport = require("passport");

function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(401);
}

const app = express();

app.use(session({ secret: "cats" }))
app.use(passport.initialize());
app.use(passport.session());

app.get("/login", 
	passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get("/callback", 
	passport.authenticate(
		"google", 
		{
			successRedirect: "/home",
			failureRedirect: "/auth/failure"
		}
	)
)

app.get("/auth/failure", (req, res) => {
	res.send("something went wrong")
})

app.get("/home"), (req, res) => {
	console.log ("hola")
}

module.exports = app;