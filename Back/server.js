import express, { urlencoded } from 'express'
import cors from 'cors'
import { add_user, addTask, getUsername } from './model/supabase.js'

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


app.post('/todolist', async (req, res) => {
    try {
        const username = req.body.name;
        const task = req.body.taskName;
        let { data: users,error:errorName } = await getUsername(username);
        
        console.log(users);
        const id=users[0].id;

        const { data, error } = await addTask(id, task);
    
        res.status(200).json('ajout ok.');
    } catch (error) {
        console.error('Error ajout', error.message);
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Hello I'm here ${port}`);
});