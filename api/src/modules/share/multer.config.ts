import multer from "multer";
import path from "path";
import fs from "fs";


export const UPLOAD_DIR = path.resolve("./upload");

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("./upload")); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Apenas arquivos de imagem são permitidos!"));
  }
  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  
});