import { faker } from '@faker-js/faker';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  let users = [];
  for (let i = 0; i < 200; i++) {
      users.push({
          first_name: faker.name.firstName(),
          gender: faker.name.sex()
        })
  }
  await knex('users').insert(users);
}
