import User from "../../models/User.js";


export const getUserByNP = async (req, res) => {
    const { nombre, contraseña } = req.body;
    try {
        const getByNP = await User.findOne({nombre, contraseña});
        console.log('getByNP', getByNP);
        res.json(getByNP);
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const getById = await User.findById(id);

        res.json(getById);
    } catch (error) {
        console.log(error);
    }
}


export const postUser = async (req, res) => {
    const { 
        nombre,
        apellido, 
        contraseña, 
        email, 
        direccion, 
        telefono,
        admin, 
        itemList,
        ticketHistory 
    } = req.body;

    try {
        const add = await User.findById(_id);   
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (req, res) => {
    try {
        const getDB = await User.find().populate('itemList');
        
        if(!getDB)  return res.status(404).send('No se encontro nada en User');
        return res.json(getDB);
    } catch (error) {
        console.log(error);
    }
};