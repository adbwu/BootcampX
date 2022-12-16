const cohort = process.argv.slice(2);
const values = [cohort[0]];
const { Pool } = require('pg');

const pool = new Pool({
  user: 'allison',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students on students.id = student_id
JOIN teachers on teachers.id = teacher_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;`;

pool
  .query(queryString, values)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  });