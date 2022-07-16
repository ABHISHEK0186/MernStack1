const express = require('express');
const router = express.Router();
const Controller = require("../controller/controller.js")

router.get("/popular_videos", Controller.getVideos);  // fetches all popular videos

router.get("/filter_videos", Controller.getVideosbyFilter);  // fetches videos by title filter 


module.exports = router;