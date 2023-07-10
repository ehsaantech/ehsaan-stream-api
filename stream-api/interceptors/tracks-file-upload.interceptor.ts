import { Injectable } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Injectable()
export class TracksFileUploadInterceptor extends FileInterceptor('src', {
  storage: diskStorage({
    destination: 'uploads/tracks',
    filename: (req, file, cb) => {
      const uniqueName = file.originalname;    
      cb(null, uniqueName);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'audio/mpeg' ||
      file.mimetype === 'audio/mp3'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
}) {}
