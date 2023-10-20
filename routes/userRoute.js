import express from 'express';
import UserController from '../controllers/userController.js'

const router = express.Router();

const user_controller = new UserController();

router.post('/register', async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await user_controller.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'No se pudo crear el usuario' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await user_controller.authenticateUser(username, password);
    
    if (user) {
      res.status(200).json({ message: 'Autenticación exitosa', user });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Algo salió mal' });
  }
});


export default router;