import { app } from './app'
import { getProducts, getPurchases, getUsers } from './endpoints/get'
import { postProducts, postPurchases, postUser } from './endpoints/post'


app.get('/users', getUsers)
app.get('/products', getProducts)
app.get('/purchases', getPurchases)

app.post('/users', postUser)
app.post('/products' , postProducts)
app.post('/purchases' , postPurchases)

