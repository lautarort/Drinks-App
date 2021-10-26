import Item from "../../models/Item.js";

export const getItems = async (req, res) => {
	const items = await Item.find();
	res.json(items);
}

export const createItem = async (req, res) => {
	let newItem = new Item(req.body);
	newItem = await newItem.save();
	res.send(newItem);
}

export const getItemById = async (req, res) => {
	const item = await Item.findById(req.params.id);
	res.json(item);
}