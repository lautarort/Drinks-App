import Item from "../../models/Item.js";

export const getItems = async (req, res) => {
	try {
		let {name, category} = req.query;
		console.log(name)
		let items = await Item.find()
		if (name){
			items = items.filter(x => x.name.toLowerCase().includes(name.toLowerCase()))
			res.json(items);
		 																															 
		} else {
			if (category){
				items = items.filter(x => x.categoria === category)	
			}
		}
		res.json(items)
	} 
	catch (err){
		console.log(err)
	}
}

export const getCategories = async(req, res) => {
	try {
		let categories = await Item.find();
		categories = categories.map(x => x.categoria);
		categories = [...new Set(categories)];
		res.json(categories);
	}
	catch (error) {
		console.log(error);
	}
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

