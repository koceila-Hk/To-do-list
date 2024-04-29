import express, { urlencoded } from 'express'
import cors from 'cors'
import { add_user, addTask } from './model/supabase.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}));

////////// Post 
app.post('/user', async (req, res) => {
    try {
        const { data, error } = await add_user(req.body);
        res.json(data)
    } catch (error) {
        res.status(500).json({error : `Erreur lors de l'ajout d'utlisateur`})
    }
});

app.post('/task', async (req,res) => {
    try {
        const { data, error } = await addTask(req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({error : `Erreur lors de l'ajout tâche`})
    }
});

app.listen(port, () => {
    console.log(`Hello I'm here ${port}`);
});