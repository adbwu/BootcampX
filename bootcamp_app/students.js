const user = process.argv.slice(2);
const cohortName = user[0];
const limit = user[1] || 5;

const values = ['%{cohortName}%', limit];

const { Pool } = require('pg');

const pool = new Pool({
  user: 'allison',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const { Client } = require('pg');

const queryString = `
SELECT students.id as id, students.name as name, cohorts.name as cohort_name
FROM students
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool
  .query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    });
  })
  .catch(e => console.error(e.stack));

