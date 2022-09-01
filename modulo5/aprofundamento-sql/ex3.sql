USE '35.226.146.116';

-- a)
ALTER TABLE projetos
DROP COLUMN title;

-- b)
ALTER TABLE projetos
CHANGE date dueDate DATE NOT NULL;
