import { checkPostCount } from '../middlewares/checkPostCount.middleware';
import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';

let testArr = [4,5,6,3,5,3,7,5,13,5,6,4,3,6,3,6];

class PostController implements Controller {
   public path = '/api/post';
   public router = Router();

   constructor() {
       this.initializeRoutes();
   }

   private initializeRoutes() {
       this.router.get(`${this.path}/latest`, this.getAll);
       this.router.get(`${this.path}/:id`, this.getElemByID);
       this.router.get(`${this.path}s`, this.getAll);

       this.router.post(`${this.path}/:id`, this.addData);
       this.router.post(`${this.path}s/:num`, checkPostCount, this.getNElement);

       this.router.delete(`${this.path}/:id`, this.deleteData);
       this.router.delete(`${this.path}s`, this.deleteAll);
       
   }

    private getAll = async (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(testArr);
}

    
    private addData = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        testArr.push(parseInt(id));

        res.status(200).json(testArr);
    }
    
    private getElemByID = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        if (parseInt(id) >= testArr.length || parseInt(id) < 0) res.status(404).json({});
        else res.status(200).json(testArr[parseInt(id)]);
    }

    private getNElement = async (req: Request, res: Response, next: NextFunction) => {
        const num = parseInt(req.params.num);
    
        if (isNaN(num) || num < 1) {
            res.status(400).json({ error: 'Invalid number parameter' });
        } else {
            const result = testArr.slice(0, num);
            res.status(200).json(result);
        }
    }

    private deleteData = async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        if (parseInt(id) >= testArr.length || parseInt(id) < 0) res.status(404).json({});
        else testArr.splice(parseInt(id), 1);
        res.status(200).json(testArr);
    }

    private deleteAll = async (req: Request, res: Response, next: NextFunction) => {
        testArr = [];
        res.status(200).json(testArr);
    }

         
}

export default PostController;