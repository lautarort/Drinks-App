const { Router } = require ('express');
const userRouter = require ("./user/user.routes.js");
const googleRouter = require ("./user/google.routes.js");

const router = Router();

router.use("/user", userRouter);
router.use("/google", googleRouter);

module.exports = router;
