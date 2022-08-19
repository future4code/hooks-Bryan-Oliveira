import express, {Request, Response} from 'express'
import cors from 'cors'
import { toDos } from './examples'
import { ToDo } from './types'
const app = express()

app.use(express.json())
app.use(cors())

app.get('/todos', (req: Request, res: Response)=>{

        const completed = req.query.completed as string
        
        const toDosMatched = toDos.filter( toDo =>completed? `${toDo.completed}` === completed : true).flat(1)
        
        res.send(toDosMatched)
    
})
app.get('/users/:userId/todos', (req: Request, res: Response)=>{

        try {
            const user_Id = Number(req.params.userId)
            if(!user_Id) throw new Error("passe um id de usuario")
            const toDosMatched = toDos.filter( ({userId}) => userId === user_Id).flat(1)
            if(!toDosMatched.length) throw new Error("nenhum afazer encontrado")
            
            res.send(toDosMatched)
        } catch (error: any) {
            res.send(error.message)
        }
    
})
app.put('/todos/:toDoId', (req: Request, res: Response)=>{

        try {
            const toDoId = req.params.toDoId? Number(req.params.toDoId) : false
            if (!toDoId) throw new Error("passe o id do afazer")
            
            let toDosMatched: ToDo | undefined  = toDos.find(({id}) => id === toDoId)
            if (!(toDosMatched as ToDo).id) throw new Error("nenhum afazer encontrado")
            
            
            toDos.forEach(toDo => {
                if(toDo.id === (toDosMatched as ToDo).id  ){
                    toDo.completed = !toDo.completed
                }
            });

            res.send(`"${toDosMatched?.title}" foi alterado para ${toDosMatched?.completed}`)
        } catch (error: any) {
            res.send(error.message)
        }
    
})

app.delete('/todos/:toDoId', (req: Request, res: Response)=>{

    try {
        const toDoId = req.params.toDoId? Number(req.params.toDoId) : false
        if (!toDoId) throw new Error("passe o id do afazer")
        
        let toDosMatched: ToDo | undefined  = toDos.find(({id}) => id === toDoId)
        if (!(toDosMatched as ToDo)?.id) throw new Error("nenhum afazer encontrado")
        
        
        toDos.forEach((toDo,index) => {
            if(toDo.id === (toDosMatched as ToDo).id  ){
                toDos.splice(index, 1)
            }
        });

        res.send(`"${toDosMatched?.title}" foi deletado`)
    } catch (error: any) {
        res.send(error.message)
    }

})



app.listen('3003', ()=>{
    console.log('escutando na porta 3003')
})