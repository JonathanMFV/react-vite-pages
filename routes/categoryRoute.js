import express from 'express';
import multer from 'multer';
import path from 'path';
import bodyParser from 'body-parser';

import categoryController from '../controllers/categoryController.js';

const category_route = express();

category_route.use(bodyParser.json());
category_route.use(bodyParser.urlencoded({ extended: true })); 
category_route.use(express.static('public'));
category_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, '../public/postImages'), function(error, success) {
            if(error) {
                console.log(error);
            }
        });
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,success){
            if(error) {
                console.log(error);
            }
        });
    },
    devTools: false
});

const upload = multer({storage:storage});


category_route.post('/create-category', upload.none(), categoryController.createCategory);

category_route.get('/get-categories', categoryController.getCategories);

category_route.get('/delete-category/:id', categoryController.deleteCategory);

category_route.post('/update-category',upload.none(),categoryController.updateCategory);

export default category_route;
