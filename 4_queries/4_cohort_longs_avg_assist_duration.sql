SELECT cohorts.name as name, AVG(completed_at - started_at) as average_assistance_time
FROM assistance_requests
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY AVG(completed_at - started_at) DESC
LIMIT 1
