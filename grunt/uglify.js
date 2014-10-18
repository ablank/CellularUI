module.exports = {
  prod: {
    options: {
      mangle: true,
      beautify: false,
      preserveComments: 'some',
      compress: true,
      expand: true,
    },
    files: {
      'js/jquery.cellular.min.js': ['js/jquery.cellular.js'],
    },
  },
  dev: {
    options: {
      mangle: false,
      beautify: true,
      mangle: false,
      beautify: true,
      preserveComments: 'all',
      comments: 'all'
    },
    files: {
      'js/jquery.cellular.js': ['js/jquery.cellular.js'],
    }
  }
};