const express = require('express');
const make_up_route = express();
// TODO: Chanear el archivo
const bodyParser = require('body-parser');
make_up_route.use(bodyParser.json());
make_up_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer');
const path = require('path');

make_up_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, '../public/makeUpImages'), function(error, success) {
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

const makeUpController = require('../controllers/makeUpController');

make_up_route.post('/create-make-up',upload.single('image'),makeUpController.createMakeUp);

make_up_route.get('/get-make-ups', makeUpController.getMakeUps);

make_up_route.get('/delete-make-up/:id', makeUpController.deleteMakeUp);

make_up_route.post('/update-make-up',upload.single('image'),makeUpController.updateMakeUp);

module.exports = make_up_route;