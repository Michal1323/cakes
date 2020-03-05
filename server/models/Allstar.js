const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const AllstarSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }

  }, SchemeConfig);

  module.exports.Allstar = mongoose.model('Allstar', AllstarSchema);