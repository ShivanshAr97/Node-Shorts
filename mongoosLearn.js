const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/learning').then(() => { console.log("Connection successful") }).catch((err) => { console.log(err) });
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: {
        type: String,
        required: true
    },
    videos: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    active: {
        type: Boolean
    },
    submittedDate: {
        type: Date,
        default: Date.now
    }
})

const Playlist = mongoose.model('Playlist', playlistSchema);
const reactPlaylist = new Playlist({
    name: "ReactJS",
    ctype: "Frontend",
    videos: 35,
    author: "Abcd",
    active: true
})
const mongoPlaylist = new Playlist({
    name: "MongoDB",
    ctype: "Database",
    videos: 25,
    author: "Xyz",
    active: true
})
const mongoosePlaylist = new Playlist({
    name: "MongooseJS",
    ctype: "Database",
    videos: 5,
    author: "Tyu",
    active: true
})
const nodePlaylist = new Playlist({
    name: "NodeJS",
    ctype: "Backend",
    videos: 45,
    author: "Efg",
    active: true
})
const expressPlaylist = new Playlist({
    name: "Express",
    ctype: "Backend",
    videos: 15,
    author: "Pqr",
    active: true
})

// const videos1 = Playlist.insertMany([reactPlaylist, mongoPlaylist, mongoosePlaylist, nodePlaylist, expressPlaylist]);
// const videos2 = new Playlist({ name: 'Javascript', ctype:'Frontend', videos:150, author:"Abc", active:false });
// videos2.save()

const readDoc = async () => {
    // const res = await Playlist.find({ctype:"Frontend"})
    // const res = await Playlist.find({ctype:"Frontend"}).select({name:1})
    // const res = await Playlist.find({videos:{$gt:30}}).select({name:1})
    // const res = await Playlist.find({ctype:{$in:["Frontend","Database"]}}).select({name:1})
    // const res = await Playlist.find({$or:[{ctype:"Frontend"},{ctype:"Database"}]}).select({name:1})
    // const res = await Playlist.find({$and:[{ctype:"Frontend"},{author:"Abcd"}]}).select({name:1})
    // const res = await Playlist.find({ctype:"Frontend"}).select({name:1}).countDocuments()
    const res = await Playlist.find().select({ name: 1 }).sort({ name: 1 })
    console.log(res);
}
readDoc()

const updateDoc = async (_id) => {
    // const resu = await Playlist.updateOne({_id},{
    //     $set:{
    //         name:"JS"
    //     }
    // })
    // console.log(resu)
    const resu = await Playlist.findByIdAndUpdate({ _id }, {
        $set: {
            name: "Javascript"
        }
    })
    console.log(resu)
}

// updateDoc('63b401c92016eb4e237376ee')

const deleteDoc = async (_id)=>{
    // const resul = await Playlist.deleteOne({_id})
    const resul = await Playlist.findByIdAndDelete({_id})
}

deleteDoc('63b401c92016eb4e237376ee')