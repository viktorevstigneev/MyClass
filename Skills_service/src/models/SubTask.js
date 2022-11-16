const { Schema, model } = require('mongoose');


const SubTask = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	priority: {
		type: String,
		enum: ['Low', 'Normal', 'High'],
	},
	status: {
		type: String,
		enum: ['TO_DO', 'IN_PROGRESS', 'DONE'],
	},
});

const subTask = model('SubTask', SubTask);

const createSubTask = (data) => {
	return subTask.create(data);
};

const getSubTask = (id) => {
	return subTask.findOne({ _id: id });
};

const deleteSubTask = (id) => {
	return subTask.deleteOne({ _id: id });
};

const updateSubTask = (id, data) => {
	return subTask.updateOne({ _id: id }, { ...data });
};

module.exports = {
	createSubTask,
	getSubTask,
	deleteSubTask,
	updateSubTask,
};
