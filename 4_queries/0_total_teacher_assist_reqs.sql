SELECT COUNT(assistance_requests) as total_assistances, name
FROM teachers
JOIN assistance_requests on teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY name