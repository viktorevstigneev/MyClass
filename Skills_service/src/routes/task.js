const express = require('express');
const multer = require('multer');

const {
	handleAddTask,
	handleGetTask,
	handleGetAllTasks,
	handleDeleteTask,
	handleUpdateTask,
} = require('../controllers/task');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './src/uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/svg'].includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({ storage, fileFilter });
const router = express();
const type = upload.single('avatar');

router.post('/task', type, handleAddTask);
router.get('/task/:id', handleGetTask);
router.get('/task', handleGetAllTasks);
router.delete('/task', handleDeleteTask);
router.patch('/task', handleUpdateTask);

module.exports = router;
