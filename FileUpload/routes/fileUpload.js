const express = require('express');
const router = express.Router();

const { localFileUpload,imageUpload,videoUpload,imageSizeReduceUpload } = require('../controllers/FileUpload');

router.post("/localfileupload",localFileUpload);
router.post("/imageupload",imageUpload);
router.post("/videoupload",videoUpload);
router.post("/imagesizereducer",imageSizeReduceUpload);

module.exports = router;