import { Injectable } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Injectable()
export class ThumbnailFileUploadInterceptor extends FileInterceptor('thumbnailkey', {
  storage: diskStorage({
    destination: 'uploads/thumbnails',
    filename: (req, file, cb) => {
      const timestamp = Date.now();
      const randomChars = Math.random().toString(36).substring(2, 8);
      const uniqueName = `${timestamp}-${randomChars}-${file.originalname}`;    
      cb(null, uniqueName);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/webp'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
}) {}
