SELECT teachers.name as teacher, cohorts.name as cohort, COUNT(*) as total_assistances
FROM assistance_requests
JOIN students on students.id = student_id
JOIN teachers on teachers.id = teacher_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name