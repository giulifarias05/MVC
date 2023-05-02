//ejemplo para alojar datos en una DB mongo
const mongoose=require("mongoose");

//creacion de schema
const postSchema= new mongoose.Schema({
    title:{
        type: String,
        required:[true,"Un post debe tener un titulo"],
    },
    descripcion:{
        type: String,
        required:[true,"Un post debe tener descripcion"],
    },
    date:{
        type: Date,
        required: [true, "Un post debe tener una fecha"],
    },
    technologies:{
        type: [String],
        required:[true,"Un post debe tener tecnologias"],
    },


});

//creo modelo post

const Post= mongoose.model("Post", postSchema);

module.esports=Post;


