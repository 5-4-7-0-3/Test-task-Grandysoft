import knex from 'knex';
import options from './knexfile.js';
import {Model} from 'objection';
function dbSetup(){
    const db = knex(options);
    Model.knex(db);
}


export default dbSetup;
