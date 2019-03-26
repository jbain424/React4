const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/relieve_me");

module.exports = db;
