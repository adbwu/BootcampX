const user = process.argv.slice(2);
const cohort = user[0];
const resultAmt = user[1];

const { Pool } = require('pg');

const pool = new Pool({
  user: 'allison',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const { Client } = require('pg');

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort_name
FROM students
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name LIKE '${cohort}%'
LIMIT ${resultAmt || 5};
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`);
    });
  });