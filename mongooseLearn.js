const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/learning').then(()=>{console.log("Connection successful")}).catch((err)=>{console.log(err)});
const playlistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:{
        type:String,
        required:true
    },
    videos:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    active:{
        type:Boolean
    },
    submittedDate:{
        type:Date,
        default:Date.now
    }
})

const Playlist = mongoose.model('Playlist', playlistSchema);

const videos1 = new Playlist({ name: 'Javascript', ctype:',', videos:61, author:"Def", active:false });
videos1.save().then(() => console.log('Done'));