/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('friends').del()
  let friends = [];
  for (let i = 0; i < 100; i++) {
    friends.push({
        subscribe: 1,
        subscribe_to: 2+i
      })
  }
  for (let i = 0; i < 200; i++) {
    friends.push({
        subscribe: getRandomIntInclusive(i, 200),
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
