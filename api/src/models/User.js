import pkg from "mongoose";
const { Schema, model } = pkg;

const usersSchema = new Schema({
	nombre: {
		type: String,
		required: true,
		trim: true
	},
	apellido: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		required: true
	},
	contraseña: {
		type: String,
        required: true
	},
    direccion: {
        type: String
    },
    telefono:{
        type:String,
    },
    admin:{
        type: Boolean,
        default: false
	},
    itemList:[{
        item:{
            type: Schema.Types.ObjectId,
            ref: 'Item',
        }
    }],
    ticketHistory:[{
        ticket:{
            type: Schema.Types.ObjectId,
            ref: 'Ticket',
        }
    }],
}, {
	versionKey: false,
	timestamps: true
});

export default model("Users", usersSchema);