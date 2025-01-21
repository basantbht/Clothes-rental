import express from 'express'
import {placeOrder, placeOrderKhalti, allOrders,userOrders,updateStatus} from '../controllers/orderControllers.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

//admin
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// payment
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/khalti',authUser,placeOrderKhalti)

// user feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter