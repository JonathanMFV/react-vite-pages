
import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import process from 'process';

import userRoute from './routes/userRoute.js';
import category_route from './routes/categoryRoute.js';
import sub_category_route from './routes/subCategoryRoute.js';

dotenv.config();

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "https://duende-beauty-shop-app.onrender.com", "http://localhost:5173"]
}));


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conexión a MongoDB confirmada"))
  .catch(err => console.error(err));

// Rutas
app.use('/api/category', category_route);
app.use('/api/subCategory', sub_category_route);
app.use('/api/user', userRoute);

// Punto de entrada
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/home.html');
});

// Escucha del servidor
const PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log('Server is running');
});
