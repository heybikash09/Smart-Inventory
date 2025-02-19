import express from 'express'
import { addProduct, deleteProduct } from '../controller/product.controller.js'
const router=express.Router()

router.post('/add',addProduct)
router.delete('/delete',deleteProduct)

export default router