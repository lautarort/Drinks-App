const pkg = require("mongoose");
const bcrypt  = require("bcrypt")
const { Schema, model } = pkg;

const usersSchema = new Schema({
	nombre: {
		type: String,
		//required: true,
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

usersSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.contraseña, 10)
    this.contraseña = hash
    next()
})

usersSchema.methods.isValidContraseña = async (contraseña) => {
   const user = this
   const compara = await bcrypt.compare(contraseña, user.contraseña)
   return compara
}

module.exports =  model("Users", usersSchema);