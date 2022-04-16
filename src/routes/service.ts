// import packages and dependencies
import { isAuthenticated, isSigner } from '../utils';
import service from "../controllers/service";
import express from "express";
const router = express();

router.get('/', isAuthenticated, isSigner, service.getServices);

router.post('/', isAuthenticated, isSigner, service.addService);

router.put('/:index', isAuthenticated, isSigner, service.updateService);

router.get('/:index', isAuthenticated, isSigner, service.getService);

router.delete('/:index', isAuthenticated, isSigner, service.deleteService);

// router.get('/', isAuthenticated, service.getServices);
 
export default router;