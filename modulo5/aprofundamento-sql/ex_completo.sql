USE '35.226.146.116';

CREATE TABLE projetos (
id VARCHAR(255) PRIMARY KEY ,
name VARCHAR(255) UNIQUE NOT NULL,
title VARCHAR(255) NOT NULL,
date DATE NOT NULL
);

INSERT INTO projetos (id, name, title, date)
VALUES ("001", "LabeSky", "LSy", "2023/10/05"),
		( "002", "Labefy", "LFy", "2024/01/06"),
        ( "003", "AstroZoom", "AZm", "2022/12/20");
        
ALTER TABLE projetos
DROP COLUMN title;

DESCRIBE projetos;

ALTER TABLE projetos
CHANGE date dueDate DATE NOT NULL;

ALTER TABLE projetos
ADD description VARCHAR(255);

UPDATE projetos
SET description = "Projeto de sistema em nuvem da Labenu." 
WHERE id = "001";

UPDATE projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." 
WHERE id = "002";

UPDATE projetos
SET description = "Projeto de rede de comunicação da Labenu." 
WHERE id = "003";

SELECT *
FROM projetos
ORDER BY dueDate DESC;

SELECT name, dueDate
FROM projetos
ORDER BY dueDate ASC LIMIT 2;