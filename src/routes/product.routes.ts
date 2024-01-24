import { Router } from 'express';
import {createPatient, deletePatient, getPatient, getPatients, updatePatient} from "../controller/product.controller";
 

const productRoutes = Router();

productRoutes.route('/').get(getPatients).post(createPatient);
productRoutes.route('/:productId').get(getPatient).put(updatePatient).delete(deletePatient);

export default productRoutes;
