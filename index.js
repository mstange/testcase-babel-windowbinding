const before = window.performance.now();

require('./benchmark');

const after = window.performance.now();

console.log(after - before);
