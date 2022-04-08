const sql = require('databaseConnector')
async function insertMurray(body){
    console.log(body)
    const xs = await sql`
  insert into users (
    name, age
  ) values (
    'Murray', 68
  )

  returning *
`
}

module.exports = { insertMurray }
