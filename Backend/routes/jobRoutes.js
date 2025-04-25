const express = require('express');
const router = express.Router();
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  seedJobs
} = require('../controllers/jobController');


router.get('/getjob', getJobs);


router.get('/:id', getJobById);


router.post('/createjob', createJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

router.post('/seed', seedJobs);

module.exports = router;