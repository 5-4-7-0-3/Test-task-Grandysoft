import knex from 'knex';
import options from './knexfile.js';

const dbSetup = knex(options);

export default dbSetup;
