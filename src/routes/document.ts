// import packages and dependencies
import { isAuthenticated, isSigner } from '../utils';
import document from "../controllers/document";
import { multer } from "../utils";
import express from "express";
const router = express();

router.get('/', isAuthenticated, isSigner, document.getDocuments);

router.post('/', isAuthenticated, isSigner, document.addDocument);

router.post('/image', isAuthenticated, multer.single('file'), document.postImage);

router.put('/:index', isAuthenticated, isSigner, document.updateDocument);

router.get('/metrics', isAuthenticated, isSigner, document.getMetrics);

router.get('/:index', isAuthenticated, isSigner, document.getDocument);
 
export default router;