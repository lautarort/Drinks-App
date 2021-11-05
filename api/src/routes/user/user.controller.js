const passport = require("passport");
const jwt = require("jsonwebtoken");


const postUser = async (req, res) => {
    res.json({ message: "Se registro correctamente", user: req.user });
};

const postLogin = async (req, res) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error("New Error");
                return error;
            }

            req.login(user, { session: false }, async (err) => {
                if (err) return err;

                const body = { id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, "top_secret");

                return res.json({ token });
            });
        } catch (error) {
            console.log(error);
        }
    })(req, res)
};

const profileAuthenticate = async (req, res, next) => {
    res.json({
        message: 'Dale que sos vos',
        user: req.user,
        token: req.query.secret_token,
    });
};


//  const getUserByNP = async (req, res) => {
//     const { nombre, contraseña } = req.body;
//     try {
//         const getByNP = await User.findOne({nombre, contraseña});
//         console.log('getByNP', getByNP);
//         res.json(getByNP);
//     } catch (error) {
//         console.log(error);
//     }
// }

//  const getUserById = async (req, res) => {
//     const { id } = req.params
//     try {
//         const getById = await User.findById(id);

//         res.json(getById);
//     } catch (error) {
//         console.log(error);
//     }
// }


//  const getUser = async (req, res) => {
//     try {
//         const getDB = await User.find().populate('itemList');

//         if(!getDB)  return res.status(404).send('No se encontro nada en User');
//         return res.json(getDB);
//     } catch (error) {
//         console.log(error);
//     }
// };

// getUserByNP,
// getUserById,
// getUser

module.exports = {
    postLogin,
    postUser,
    profileAuthenticate,
}