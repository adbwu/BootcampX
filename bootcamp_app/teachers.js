const { Pool } = require('pg');

const pool = new Pool({
  user: 'allison',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const { Client } = require('pg');

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students on students.id = student_id
JOIN teachers on teachers.id = teacher_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = '${process.argv[2]}'
ORDER BY teachers.name
`)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  });