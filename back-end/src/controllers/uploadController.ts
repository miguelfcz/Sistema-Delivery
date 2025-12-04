import {Request, Response} from 'express';

export class UploadController {
    upload(req: Request, res: Response) {
        if (!req.file) {
            return res.status(400).json({message: 'Nenhum arquivo enviado.'});
        }

        const url = `/uploads/${req.file.filename}`;
        res.json({url});
    }
}