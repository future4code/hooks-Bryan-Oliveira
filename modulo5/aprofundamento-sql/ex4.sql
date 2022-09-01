USE '35.226.146.116';

-- a)
ALTER TABLE projetos
ADD description VARCHAR(255);

-- b)
UPDATE projetos
SET description = "Projeto de sistema em nuvem da Labenu." 
WHERE id = "001";

UPDATE projetos
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu." 
WHERE id = "002";

UPDATE projetos
SET description = "Projeto de rede de comunicação da Labenu." 
WHERE id = "003";