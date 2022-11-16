const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
	groupLeaderId: { type: Schema.Types.ObjectId, ref: 'User' },
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	logo: {
		type: String,
		default: "team_default.png"
	},
	createdDate: {
		type: Date,
		default: Date.now(),
	},
	themingSide: {
		type: String,
		enum: ['LIGHT', 'DARK'],
		default: 'LIGHT',
	},
	members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Team = model('Team', TeamSchema);

const createTeam = (data) => {
	return Team.create(data);
};

const getTeamData = (id) => {
	return Team.findOne({ _id: id }).populate('members');
};

const deleteTeam = (id) => {
	return Team.deleteOne({ _id: id });
};

const updateTeam = (id, data) => {
	return Team.updateOne({ _id: id }, { ...data });
};

module.exports = {
	createTeam,
	getTeamData,
	deleteTeam,
	updateTeam,
	Team,
};
