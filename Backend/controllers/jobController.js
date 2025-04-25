const Job = require('../models/Job');


const getJobs = async (req, res) => {
  try {
    const { location } = req.query;
    let query = {};
    
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }
    
    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: 'Error creating job', error: error.message });
  }
};


const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: 'Error updating job', error: error.message });
  }
};


const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json({ message: 'Job removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};


const seedJobs = async (req, res) => {
  try {
    const sampleJobs = require('../data/sampleJobs.json');
    await Job.deleteMany({});
    await Job.insertMany(sampleJobs);
    res.json({ message: 'Database seeded successfully', count: sampleJobs.length });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding database', error: error.message });
  }
};

module.exports = {
    getJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
    seedJobs,
  };