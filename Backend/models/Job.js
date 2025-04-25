const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  "Job ID (Numeric)": {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  job_link: {
    type: String,
    required: false
  },
  seniority_level: {
    type: String,
    required: false
  },
  employment_type: {
    type: String,
    required: false
  },
  source: {
    type: String,
    default: 'linkedin'
  },
  experience: {
    type: String,
    required: false
  },
  company_url: {
    type: String,
    required: false
  },
  companyImageUrl: {
    type: String,
    required: false
  },
  postedDateTime: {
    type: Date,
    default: Date.now
  },
  min_exp: {
    type: Number,
    required: false
  },
  max_exp: {
    type: Number,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  companytype: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});




const Job = mongoose.model('Job', jobSchema);

module.exports = Job;