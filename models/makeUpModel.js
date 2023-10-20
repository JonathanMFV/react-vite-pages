import mongoose from "mongoose";

const makeUpSchema = mongoose.Schema({
    titleMakeUp:{
        type:String,
        required:true
    },
    categoryMakeUp: {
        type:String,
        required:true
    },
    subCategoriesMakeUp: [
        {
          nameSubCategory: { type: String }
        }
    ],
    date:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    keyWords: [
        {
          nameKeyWord: { type: String }
        }
      ],
    tags: [
    {
        nameTag: { type: String }
    }
    ],
});

export default mongoose.model("MakeUp", makeUpSchema);