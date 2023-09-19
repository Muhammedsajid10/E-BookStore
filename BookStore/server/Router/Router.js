const express = require('express');
const { createAdmin, verifyToken } = require('../Controll/adminCreate');
const protect = require('../Middleware/adminTokenVerification');
const toCompareadmin = require('../Controll/toCompareAdmin');
const createBook = require('../Controll/BookCreate');
const {bookGetUpdDlt,getIdPassBook} = require('../Controll/BookGetUptDlt');
const teamMem = require('../Controll/TeamMembers/TeamMembersCreate');
const {teamGetPutDlt, idPassTeamMem} = require('../Controll/TeamMembers/TeamMemberGetPutDlt');
const createOrder = require('../Controll/Orders/OrdersCreate');
const {orderGetUpdDlt,getOrderPass} = require('../Controll/Orders/OrdersGetUpdDlt');
const {createUser, tokenVerification} = require('../Controll/Users/userCreaste');
const {userGtPtDt,idPassUser} = require('../Controll/Users/userGetPutDlt');
const toCompareUser = require('../Controll/Users/toCompareUserLogin');
const {createCart, cartItemGet, getAllCart, updateCartCount, deleteCart} = require('../Controll/Users/CartCreate');
const createUserOrder = require('../Controll/Users/UserOrderCreate');
const router = express.Router();

// const Middleware = [protect];

// Admin........................
router.route('/').post(createAdmin);
router.route('/jwt').get(verifyToken);
router.route('/compAdmin').post(toCompareadmin)
router.route('/book').post(createBook)
router.route('/books').get(bookGetUpdDlt)
router.route('/books/:id').put(bookGetUpdDlt)
router.route('/books/:id').delete(bookGetUpdDlt)
router.route('/idPassBook/:id').get(getIdPassBook)
router.route('/team').post(teamMem)
router.route('/team').get(teamGetPutDlt)
router.route('/team/:id').put(teamGetPutDlt)
router.route('/team/:id').delete(teamGetPutDlt)
router.route('/idPassTeam/:id').get(idPassTeamMem)
router.route('/order').post(createOrder)
router.route('/order').get(orderGetUpdDlt)
router.route('/order/:id').put(orderGetUpdDlt)
router.route('/order/:id').delete(orderGetUpdDlt)
router.route('/order/:id').get(getOrderPass)

// Users..........
router.route('/user').post(createUser)
router.route('/user/verify').get(tokenVerification)
router.route('/user').get(userGtPtDt)
router.route('/user/:id').put(userGtPtDt)
router.route('/user/:id').delete(userGtPtDt)
router.route('/user/:id').get(idPassUser)
router.route('/user/login').post(toCompareUser)
router.route('/cart').post(createCart)
router.route('/cart/:bookId').get(cartItemGet)
router.route('/cart').get(getAllCart)
router.route('/cartCountUpdate/:id').put(updateCartCount)
router.route('/cart/:id').delete(deleteCart)
router.route('/userOrderr').post(createUserOrder)
module.exports = router;





