const express = require("express");
const usersCtrl = require("../../controllers/api/users");
// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");
// Router for all users related end-points
const router = express.Router();

// POST /api/users
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.logIn);
// GET /api/users/check-token
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
