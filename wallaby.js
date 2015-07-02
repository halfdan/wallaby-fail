module.exports = function (wallaby) {
  return {
    files: [
      "lib/*.js"
    ],

    tests: [
      "test/*_spec.js"
    ],
    env: {
      type: "node"
    },
    workers: {
      initial: 6,
      regular: 2,
      recycle: true
    },
    testFramework: 'mocha',
    debug: true
  };
};
