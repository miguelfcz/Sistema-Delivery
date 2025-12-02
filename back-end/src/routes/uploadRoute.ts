import {Router} from 'express';
import {upload} from '../config/multerConfig';
import {UploadController} from '../controllers/uploadController';

const router = Router();
const uploadController = new UploadController();

router.post('/', upload.single('file'), uploadController.upload);

export default router;