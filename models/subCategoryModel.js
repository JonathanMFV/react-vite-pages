import mongoose from "mongoose";

const subCategorySchema = mongoose.Schema({
    nameSubCategory:{
        type:String,
        required:true
    }
});

export default mongoose.model("SubCategory", subCategorySchema);