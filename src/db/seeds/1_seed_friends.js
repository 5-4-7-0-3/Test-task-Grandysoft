/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex){
    // Deletes ALL existing entries
    await knex('friends').del()
    let friends = [
      {"subscribe":1,"subscribe_to":2},
      {"subscribe":1,"subscribe_to":3},
      {"subscribe":1,"subscribe_to":4},
      {"subscribe":1,"subscribe_to":5},
      {"subscribe":2,"subscribe_to":1},
      {"subscribe":3,"subscribe_to":1},
      {"subscribe":4,"subscribe_to":1},
      {"subscribe":5,"subscribe_to":1},
      {"subscribe":6,"subscribe_to":1}
  ];
    for (let i = 0; i < 200; i++) {
      friends.push({
          subscribe: getRandomIntInclusive(i, 150),
          subscribe_to: getRandomIntInclusive(1, 200)
        })
    }
    await knex('friends').insert(friends);
};


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
