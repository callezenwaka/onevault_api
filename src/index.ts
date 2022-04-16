// import 'dotenv/config';

import express, {Application, Request, Response, NextFunction} from "express";
import admin from 'firebase-admin';
import cors from "cors";
import document from "./routes/document";
import service from "./routes/service";
import account from "./routes/account";

const app: Application = express();
// Initialize firebase admin sdk config
// admin.initializeApp({
//   'credential': admin.credential.applicationDefault(),
// });

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process?.env?.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

// Route middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ping healthz route
app.get('/healthz',async (req: Request, res: Response) => {
  try {
    return res.status(200).json('Healthz');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
});

// Verify request
app.use('/account', account);
app.use('/service', service);
app.use('/document', document);

// Ping home route
app.get('/', (req: Request, res: Response) => {
  try {
    return res.status(200).json('Ok');
  } catch (error) {
    return res.status(500).json('Internal Server Error!');
  }
});

// notfound route handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = {
    statusText: new Error('Not Found'),
    status: 404
  };
  next(error);
})

// Set up port and start the server
app.listen( process.env.PORT, () => {
  console.log(`Server running at:`);
  console.log(`- Local: http://localhost:${process.env.PORT}`);
  console.log(`- Network: http://000.000.0.000:${process.env.PORT}`);
});

export default app;