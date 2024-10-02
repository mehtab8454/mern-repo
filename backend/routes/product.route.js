import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

//app verbs : get, post, put, delete
router.get("/", getProducts); 
router.post('/', createProduct);
router.put('/:id', updateProduct );
router.delete('/:id', deleteProduct);


export default router;