import express from 'express';
import multer from 'multer';
import path from 'path';
import bodyParser from 'body-parser';

import subCategoryController from '../controllers/subCategoryController.js';

const sub_category_route = express.Router();

sub_category_route.use(bodyParser.json()); // Handle JSON data
sub_category_route.use(bodyParser.urlencoded({ extended: true })); // Handle form data

sub_category_route.use(express.static('public'));

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

sub_category_route.post('/create-sub-category', upload.none(), subCategoryController.createSubCategory);

sub_category_route.get('/get-sub-categories', subCategoryController.getSubCategories);

sub_category_route.get('/delete-sub-category/:id', subCategoryController.deleteSubCategory);

sub_category_route.post('/update-sub-category',upload.none(),subCategoryController.updateSubCategory);

export default sub_category_route;
