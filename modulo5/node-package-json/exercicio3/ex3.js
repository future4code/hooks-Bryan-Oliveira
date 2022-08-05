// exercício 3:

    const fs = require('fs');
    const {writeFile} = fs 
    const persistData = (file, persistData)=>{    
        writeFile(file,persistData,(err) => {
            if (err)
            console.log(err);
        });
    }

    const json = require("./toDoList.json")

    const newTask = process.argv[2]
    json.toDo.push(newTask)

    persistData("./toDoList.json", JSON.stringify(json))
    console.log('Tarefa adicionada com sucesso!')
    console.table(json.toDo)

