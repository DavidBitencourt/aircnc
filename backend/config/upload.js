const multer = require('multer');
const path = require('path');
module.exports = {
    storage:multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        filename: (req, file, cb) => {
            const ex = path.extname(file.originalname);
            const name = path.basename(file.originalname, ex);
            cb(null, `${name}-${Date.now()}${ex}`);
        }
        
    })
};