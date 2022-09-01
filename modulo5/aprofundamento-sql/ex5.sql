USE '35.226.146.116';

-- a)
SELECT *
FROM projetos
ORDER BY dueDate DESC;

-- b)
SELECT name, dueDate
FROM projetos
ORDER BY dueDate ASC LIMIT 2;