const express = require('express');
const { handleAddSkill } = require('../controllers/skills');

const router = express();
router.post('/skills', handleAddSkill);

module.exports = router;
