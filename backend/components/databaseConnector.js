import postgres from 'postgres'

const sql = postgres('postgres://username:password@host:port/database', {
  host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
  port                 : 5432,          // Postgres server port[s]
  database             : 'improvavelmarket',            // Name of database to connect to
  username             : 'postgres',            // Username of database user
  password             : 'postgres',            // Password of database user
})

export default sql