import {Request, Response} from 'express';
import { person } from './db-data';


export function getPerson(req: Request, res: Response) {

  console.log("Retrieving courses data ...");

  setTimeout(() => {

    res.status(200).json((person));

  }, 200);
}
