import {Router} from "express";

const controller = Router();

controller.get("/",getAllTasks);

async function getAllTasks(req:Request,res:Response) {

}

