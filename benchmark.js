// This file uses the "extends" keyword, which causes babel's transform
// runtime plugin to require the "inherits" module from the core-js library,
// which transitively includes _object-gopn-ext.js, which calls
// Object.getOwnPropertyNames(window) during the module's initialization.

class Base {}
class Derived extends Base {}
