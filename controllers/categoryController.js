import Category from '../models/categoryModel.js';

const createCategory = async (req, res) => {
    try {
        const category = new Category({
            nameCategory: req.body.nameCategory,
            subCategories: req.body.subCategories, 
        });

        const categoryData = await category.save();

        res.status(200).send({ success: true, msg: 'Category created', data: categoryData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message, data: req.body });
    }
};

const getCategories = async(req,res)=>{
    try{
        const categories = await Category.find({});
        res.status(200).send({success:true,msg:'Post Data',data:categories});
    } catch(error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const deleteCategory = async(req,res)=>{
    try{
        const id = req.params.id;
        await Category.deleteOne({_id: id});
        res.status(200).send({success:true,msg:'Post deleted Succesfully!'});
    } catch(error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

const updateCategory = async (req, res) => {
    try {
        const id = req.body.id;
        const updateFields = {};

        if (req.body.nameCategory) {
            updateFields.nameCategory = req.body.nameCategory;
        }

        const subCategories = req.body.subCategories;

        if (!subCategories || subCategories.length === 0) {
            updateFields.subCategories = [];
        } else {
            updateFields.subCategories = subCategories;
        }

        await Category.findByIdAndUpdate({ _id: id }, updateFields);

        res.status(200).send({ success: true, msg: 'Category updated successfully!' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};

// Export all methods
export default {
    createCategory,
    getCategories,
    deleteCategory,
    updateCategory
};