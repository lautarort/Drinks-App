import pkg from "mongoose";
const { Schema, model } = pkg;

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	descripcion: {
		type: String,
		trim: true
	},
	precio: {
		type: String,
		required: true
	},
	imagen: {
		type: String,
	},
	rating: {
		type: String,
	},
	categoria: {
		type: String,
	}
}, {
	versionKey: false,
	timestamps: true
});

export default model("Item", itemSchema);