import knex from "knex";
const options = require("./knexfile.js");

const dbSetup = knex(options.development);

export default dbSetup;
