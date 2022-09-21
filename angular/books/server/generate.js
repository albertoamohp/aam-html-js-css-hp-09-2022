const faker = require('faker')
const database = { books: [] }
const total = 10
for (let i = 1; i < total; i++) {
  database.books.push({
    id: i,
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    published: true
  })
}
console.log(JSON.stringify(database))