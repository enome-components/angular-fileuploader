var utils = {
  contains: function (files, file) {
    return files.some(function (f) {
      return f.name === file.name;
    });
  }
};

module.exports = utils;
