const { HttpStatusCode } = require('../constants');
const { createSkill, getSkillData, deleteSkill, updateSkill, Skill } = require('../models/Skill');

const handleAddSkill = async (req, res) => {
	try {
		const result = await createSkill(req.body);

		res.status(HttpStatusCode.OK).send(result);
	} catch (error) {
		res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ error });
	}
};

module.exports = {
	handleAddSkill,
};
