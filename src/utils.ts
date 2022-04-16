'use strict';

// Import packages and dependencies
import Multer from 'multer';
import admin from 'firebase-admin';
import { ethers } from 'ethers';
import { NextFunction } from 'express';

export const multer = Multer({
  storage: Multer.memoryStorage(),
  // no larger than 5mb
  limits: { fileSize: 5 * 1024 * 1024 },
});

/**
 * [START GET AUTH TOKEN]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define auth helper function.
 */
const getAuthToken = (req: any, res: Response, next: NextFunction) => {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		req.authToken = req.headers.authorization.split(' ')[1];
	} else {
		req.authToken = null;
	}
	next();
};
// [END GET AUTH TOKEN]

/**
 * [START CHECK AUTHENTICATED]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define authenticated middleware.
 */
export const isAuthenticated = async (req: any, res: any, next: NextFunction) => {
	getAuthToken(req, res, async () => {
		try {
      // TODO: verify token
			const { authToken } = req;
			const userInfo = await admin.auth().verifyIdToken(authToken);
			req.user = userInfo;
			return next();
		} catch (error) {
			return res.status(401).json('Unauthorized access!');
		}
	});
}
// [END CHECK AUTHENTICATED]

/**
 * [START CHECK SIGNER]
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * Define signer middleware.
 */
export const isSigner = async (req: any, res: any, next: any) => {
    try {
      // TODO: get signer identity
      if(!req.user.isActive || !req.user.isActivated) return;
      const secret = await admin.firestore().collection('secrets').doc(req.user.uid).get();
      if (!secret.exists) return res.status(401).json('Unauthorized access!');
      req.secret = secret?.data()?.secret;

      const provider = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
      const wallet = new ethers.Wallet(`${req.secret}`);
      req.signer = wallet.connect(provider);
      
      return next();
    } 
    catch (error) {
      return res.status(501).json('Unauthorized request!');
    }
};
// [END CHECK SIGNER]

/**
 * [START UPDATE USER]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define update user middleware.
 */
export const updateUser = async (req: any, res: any, next: any) => {
  try {
    // Get users from request body, and add each to database
    const { displayName, photoURL, phoneNumber, uid, email, password, role, isActive, isActivated } = req.body;
    if(!displayName || !email || !role || !isActive || !isActivated) return;
    req.uid = uid;
    req.role = role;
    req.isActive = isActive;
    req.isActivated = isActivated;
    if(uid !== undefined && password === undefined) {
      await admin.auth().updateUser(uid, {
        displayName: displayName,
        phoneNumber: phoneNumber,
        photoURL: photoURL,
        emailVerified: true,
      });
    } else {
      const user = await admin.auth().createUser({
        email,
        phoneNumber,
        password,
        displayName,
        photoURL,
        emailVerified: true,
        disabled: false,
      });
      req.uid = user.uid;
    }
    next();
  } catch (error) {
    return res.status(501).json('Internal error!');
  }
};
// [END UPDATE USER]

/**
 * [START CREATE WALLET]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define create wallet middleware.
 */
export const createWallet = async (req: any, res: any, next: any) => {
  try {
    // TODO: create wallet
    const { address } = req.body;
    if(!address) return;

    const wallet = ethers.Wallet.createRandom();
    req.address = wallet.address;
    req.secret = wallet.privateKey;
    if(req.role.toLowerCase() === 'admin') {
      req.affiliate = address;
    } else {
      req.affiliate = wallet.address;
    }
    next();
  } catch (error) {
    return res.status(501).json('Internal error!');
  }
};
// [END CREATE WALLET]

/**
 * [START SET CLAIM]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define set claim middleware.
 */
export const setClaim = async (req: any, res: any, next: any) => {
  try {
    // TODO: set claim
    const { address, affiliate, role, isActive, isActivated, uid } = req;
    if(!address || !affiliate || !role ||!isActive || !isActivated || !uid) return;

    await admin.auth().setCustomUserClaims(uid, {
      role, 
      isActive, 
      isActivated, 
      address,
      affiliate,
    });
    next();
  } catch (error) {
    return res.status(501).json('Internal error!');
  }
}
// [END SET CLAIM]

/**
 * [START POST SECRET]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * Define post secret middleware.
 */
export const postSecret = async (req: any, res: any, next: any) => {
  try {
    // TODO: post secret to firestore
    await admin.firestore().collection('secrets').doc(req.uid).set({ secret: req.secret });
    next();
  } catch (error) {
    return res.status(501).json('Internal error!');
  }
};
// [END POST SECRET]