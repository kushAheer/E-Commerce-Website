import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads') //cb -> it is  a callback function which takes two parameters 1st is error and 2nd is destination
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }

});

export const upload = multer({ storage: storage }); //upload is a middleware which is used to upload the file in the destination folder