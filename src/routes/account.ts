// import packages and dependencies
import { isAuthenticated, isSigner, createWallet, setClaim, updateUser, postSecret } from '../libs/utils';
import account from "../controllers/account";
import { multer } from "../libs/utils";
import express from "express";
const router = express();

// router.get('/', account.getAccounts);

router.post('/', updateUser, createWallet, setClaim, postSecret, account.addAccount);

router.post('/image', isAuthenticated, multer.single('file'), account.postImage);

router.put('/:address', isAuthenticated, updateUser, isSigner, account.updateAccount);

router.get('/:address', isAuthenticated, isSigner, account.getAccount);
 
export default router;