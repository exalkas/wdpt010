const multer = require('multer')

const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wdpt010',
      format: async (req, file) => { // return the extension

        let extension = '';

        if (file.mimetype.includes('image'))
         {
            // mimetype: "image/png"
            extension = file.mimetype.slice(6)
        }

        return extension
      }, 
      public_id: (req, file) => (req.body._id + '-' + Date.now()),
    },
  });

  const cloudinaryUpload = multer({ storage: storage });

  module.exports = {cloudinaryUpload}