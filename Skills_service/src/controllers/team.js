const { HttpStatusCode } = require('../constants');
const { Team, createTeam, getTeamData, deleteTeam, updateTeam } = require('../models/Team');

const handleAddTeam = async (req, res) => {
	try {
		const result = await createTeam(req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleGetTeam = async (req, res) => {
	try {
		let result;
		result = await getTeamData(req.params.id);

		if (!req.params.id) {
			result = Req.session.passport.user;
		}
		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleDeleteTeam = async (req, res) => {
	try {
		const result = await deleteTeam(req.body.id);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUpdateTeam = async (req, res) => {
	try {
		console.log(req.body);
		console.log(req.file);
		const result = await updateTeam(req.params.id, {
			name: req.body.name,
			description: req.body.description,
			createdDate: req.body.createdDate,
			logo: req.file.filename,
		});

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

const handleUploadPhoto = async (req, res) => {
	try {
		console.log('req.query: ', req.query);
		let filedata = req.file;
		console.log('filedata: ', filedata);

		const result = await updateTeam(req.query.id, { avatar: filedata.filename });

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddTeam,
	handleGetTeam,
	handleDeleteTeam,
	handleUploadPhoto,
	handleUpdateTeam,
};
