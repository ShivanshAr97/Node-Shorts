const mongoose = require('mongoose');
const validator = require('validator')

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/learning').then(() => { console.log("Connection successful") }).catch((err) => { console.log(err) });
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        uppercase:true,
        trim:true,
        minlength:3
    },
    ctype: {
        type: String,
        required: true
    },
    videos: {
        type: Number,
        required: true,
        validate(val){
            if(val<0){
                throw new Error("Videos less than 0 not possible")
            }
        }
    },
    author: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error ("Invalid email")
            }
        }
    },
    active: {
        type: Boolean
    },
    submittedDate: {
        type: Date,
        default: Date.now
    }
})

const Playlist2 = mongoose.model('Playlist2', playlistSchema);
const reactPlaylist = new Playlist2({
    name: "ReacJS",
    ctype: "Frontend",
    videos: 35,
    author: "Abcd",
    email:"shivansh@gmail.com",
    active: true
})

// const mongoPlaylist = new Playlist2({
//     name: "MongoDB",
//     ctype: "Database",
//     videos: 25,
//     author: "Xyz",
//     active: true
// })
// const nodePlaylist = new Playlist2({
//     name: "NodeJS",
//     ctype: "Backend",
//     videos: 45,
//     author: "Efg",
//     active: true
// })
const videos1 = Playlist2.insertMany([reactPlaylist]);