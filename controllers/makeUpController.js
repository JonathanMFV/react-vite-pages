const MakeUp = require('../models/makeUpModel');

const createMakeUp = async (req, res) => {
    try {
        const makeUp = new MakeUp({
            titleMakeUp: req.body.titleMakeUp,
            categoryMakeUp: req.body.categoryMakeUp,
            subCategoriesMakeUp: req.body.subCategoriesMakeUp,
            date: req.body.date,
            image: req.file.filename,
            description: req.body.description,
            keyWords: req.body.keyWords,
            tags: req.body.tags
        });

        const makeUpData = await makeUp.save();

        res.status(200).send({ success: true, msg: 'MakeUp created', data: makeUpData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message, data: error.msg});
    }
};

const getMakeUps = async(req,res)=>{
    try{
        const makeUps = await MakeUp.find({});
        res.status(200).send({success:true,msg:'Post Data',data:makeUps});
    } catch(error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const deleteMakeUp = async(req,res)=>{
    try{
        const id = req.params.id;
        await MakeUp.deleteOne({_id: id});
        res.status(200).send({success:true,msg:'Post deleted Succesfully!'});
    } catch(error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const updateMakeUp = async (req, res) => {
    try {
        const id = req.body.id;
        const updateFields = {};

        if (req.body.titleMakeUp) {
            updateFields.titleMakeUp = req.body.titleMakeUp;
        }

        if (req.body.categoryMakeUp) {
            updateFields.categoryMakeUp = req.body.categoryMakeUp;
        }

        const subCategoriesMakeUp = req.body.subCategoriesMakeUp;

        if (!subCategoriesMakeUp || subCategoriesMakeUp.length === 0) {
            updateFields.subCategoriesMakeUp = [];
        } else {
            updateFields.subCategoriesMakeUp = subCategoriesMakeUp;
        }

        if (req.body.date) {
            updateFields.date = req.body.date;
        }

        if (req.file) {
            updateFields.image = req.file.filename;
        }

        if (req.body.description) {
            updateFields.description = req.body.description;
        }

        if (Array.isArray(req.body.keyWords)) {
            updateFields.keyWords = req.body.keyWords;
        }

        if (Array.isArray(req.body.tags)) {
            updateFields.tags = req.body.tags;
        }

        await MakeUp.findByIdAndUpdate({ _id: id }, updateFields);

        res.status(200).send({ success: true, msg: 'MakeUp updated successfully!' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};


module.exports = {
    createMakeUp,
    getMakeUps,
    deleteMakeUp,
    updateMakeUp
}