const videoModel = require("../model/model");
const {google} = require("googleapis");
const service = google.youtube({
    version: 'v3',
    auth: 'AIzaSyBsu31g7P3860v5ShjjvOjzWyKT03tUL_o'
});

const getVideos = async (req,res) =>{
    try{
        const result = await service.videos.list({
            "part": [
                "snippet"
            ],
            "chart": "mostPopular",
            "regionCode": "IN"
        } , async (err, result) =>{
            if(err) {return res.status(400).send(err.message)};
            const videos = result.data.items;
          
            if(videos.length){
                let data={}
                for(let i=0; i<videos.length; i++){
                    data.title = videos[i].snippet.title;
                    data.link = `https://www.youtube.com/watch?v=${videos[i].id}`
                    await videoModel.create(data);
                }
                const output =  await videoModel.find().select({_id:0, __v:0}).limit(`${videos.length}`);
                return res.status(200).send({status:true, message: "The most popular videos in your region are =>", data: output})
            }
        })
    }
    catch(error){
        return res.status(500).send(error.message)

    }
}


const getVideosbyFilter = async(req,res) =>{
    try{
        let data = req.body.title;
        let filter = {};

        if (data != null){
            filter['title'] = { $regex: `.*${data.trim()}.*` }
        }

        const videos = await videoModel.find(filter)
        if (videos.length == 0) {
            return res.status(404).send({ status: false, message: "No video found that matches your search" })
        }
        return res.status(200).send({ status: true, message: "Results", data: videos })

    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = {getVideos, getVideosbyFilter};