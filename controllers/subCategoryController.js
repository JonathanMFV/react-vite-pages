import subcasubCategorySchema from '../models/subCategoryModel.js';

const createSubCategory = async(req,res)=>{
    try {

        
        const subCategory = new subcasubCategorySchema({
            nameSubCategory: req.body.nameSubCategory
        });
        const subCategoryData = await subCategory.save();

        res.status(200).send({success:true,msg:'Post Data',data:subCategoryData});
    } catch(error) {
        res.status(400).send({success:false,msg:error, data:req.body});
    }
}

const getSubCategories = async(req,res)=>{
    try{
        const subCategories = await subcasubCategorySchema.find({});
        res.status(200).send({success:true,msg:'Post Data',data:subCategories});
    } catch(error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const deleteSubCategory = async(req,res)=>{
    try{
        const id = req.params.id;
        await subcasubCategorySchema.deleteOne({_id: id});
        res.status(200).send({success:true,msg:'Post deleted Succesfully!'});
    } catch(error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const updateSubCategory = async (req, res) => {
    try {
        const id = req.body.id;
        const updateFields = {};

        if (req.body.nameSubCategory) {
            updateFields.nameSubCategory = req.body.nameSubCategory;
        }

        await subcasubCategorySchema.findByIdAndUpdate({ _id: id }, { $set: updateFields });

        res.status(200).send({ success: true, msg: 'Subcategory updated successfully!' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

export default {
    createSubCategory,
    getSubCategories,
    deleteSubCategory,
    updateSubCategory
};