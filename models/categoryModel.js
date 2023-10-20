import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    nameCategory:{
        type:String,
        required:true
    },
    subCategories: [
        {
          nameSubCategory: { type: String }
        }
      ]
});

export default mongoose.model("Category", categorySchema);