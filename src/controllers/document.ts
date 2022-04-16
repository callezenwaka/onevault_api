import { Response, NextFunction } from "express";
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import Document from '../types/Document';
import { documentAddress, documentsABI } from '../config';
const client = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

/**
 * [START GET DOCUMENTS]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve items
 */
export const getDocuments = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for documents
    const {affiliate} = req.query;
    if (!affiliate) return;

    const documentContract = new ethers.Contract(documentAddress, documentsABI, req.signer);
    const results = await documentContract.getDocuments(affiliate);
    if (!results.length) return res.status(200).json([]);

    let documents:Document[] = [];
    documents =  await Promise.all(results.map(async (result:any) => {
      return {
        requester: result.requester,
        verifier: result.verifier,
        certifier: result.certifier,
        name: result.name,
        imageURL: result.imageURL,
        fee: Number(ethers.utils.formatUnits(result.fee.toString(), 'ether')),
        index: Number(result.index),
        status: result.status,
      }
    }));
    
		return res.status(200).json(documents);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET DOCUMENTS]

/**
 * [START POST DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Add item
 */
export const addDocument = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and add a document
    const { certifier, verifier, requester, name, imageURL, fee } = req.body;
    if (!certifier || !verifier || !name || !requester || !fee) return;
    const _fee = ethers.utils.parseUnits(fee.toString(), 'ether');

    const documentContract = new ethers.Contract(documentAddress, documentsABI, req.signer);
    const result = await documentContract.addDocument(certifier, verifier, name, _fee, { value: _fee });
    await result.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END POST DOCUMENT]

/**
 * [START GET DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve item
 */
export const getDocument = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for document
    const { index } = req.params;
    if (!index) return;

    const documentContract = new ethers.Contract(documentAddress, documentsABI, req.signer);
    const result = await documentContract.getDocument(index);
		if (!result) return res.status(200).json({});

    let document = { 
      requester: result.requester,
      verifier: result.verifier,
      certifier: result.certifier,
      name: result.name,
      imageURL: result.imageURL,
      fee: Number(ethers.utils.formatUnits(result.fee.toString(), 'ether')),
      index: Number(result.index),
      status: result.status,
    }

		return res.status(200).json(document);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET DOCUMENT]

/**
 * [START GET METRICS]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Retrieve items
 */
export const getMetrics = async (req: any, res: Response, next: NextFunction) => {
	try {
		// Todo: create a provider and query for metrics
    const { address } = req.query;
    if (!address) return;

    const documentContract = new ethers.Contract(documentAddress, documentsABI, req.signer);
    const result = await documentContract.getMetrics(address);
		if (!result) return res.status(200).json({});

    let metrics = {
      pending: Number(result[0]),
      certified: Number(result[1]),
      declined: Number(result[2]),
      verified: Number(result[3]),
      rejected: Number(result[4]),
      total: Number(result[5]),
    }

		return res.status(200).json(metrics);
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END GET METRICS]

/**
 * [START POST IMAGE]
 * Create a request. If an image is uploaded, add public URL from cloud storage to firestore
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object}
 * Add image
 */
 export const postImage = async (req: any, res: Response, next: NextFunction) => {
  try {
    // TODO: Add file
    if (!req.file) return res.json("Please choose file to upload!");

    // Send url back to client
    const result = await client.add(Buffer.from(req.file.buffer));
    const imageURL = `https://ipfs.infura.io/ipfs/${result.path}`;

    return res.status(200).json(imageURL);
  } catch (error) {
		return res.status(500).json('Internal Server Error!');
  }
};
// [END POST IMAGE]

/**
 * [START UPDATE DOCUMENT]
 * @param {object} req Express request context.
 * @param {object} res Express response context.
 * @param {object} next Express next context.
 * @return {object} json account
 * Updatea item
 */
export const updateDocument = async (req: any, res: Response, next: NextFunction) => {
	try {
		// TODO: create a provider and update a document
    const { index } = req.params;
    const { imageURL, fee, status } = req.body;
    if (!imageURL || !fee || !status || !index) return;

    const documentContract = new ethers.Contract(documentAddress, documentsABI, req.signer);
    const result = await documentContract.updateDocument(imageURL, index, status);
    await result.wait();
    
		return res.status(200).json('Success');
	} catch (error) {
		return res.status(500).json('Internal Server Error!');
	}
}
// [END UPDATE DOCUMENT]


export default {
  getDocuments,
	addDocument,
  getDocument,
  getMetrics,
  postImage,
  updateDocument,
}