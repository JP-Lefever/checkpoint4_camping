import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split(" ").join(" _"));
  },
});

const MAX_SIZE = 1000000000;
export const upload = multer({
  storage: storage,
  limits: { files: MAX_SIZE },
  fileFilter: (req, file, cb) => {
    const MIME_TYPE = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    const fileType = MIME_TYPE.includes(file.mimetype);
    if (fileType) {
      cb(null, true);
    } else {
      cb(new Error("Format non accepté"));
    }
  },
});
export const cpUpload = upload.fields([{ name: "photo" }, { name: "photoMh" }]);
