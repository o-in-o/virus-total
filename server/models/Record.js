const mongoose = require("mongoose");
const { Schema } = mongoose;

const Record = new Schema({
	to: String,
	title: String,
	isActive: Boolean,
});

module.exports = mongoose.model("Record", Record);
