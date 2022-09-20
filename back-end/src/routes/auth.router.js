const Router = require('express');

const router = Router();
router.post('/', (req, res) => authController.login(req, res));

export default router;
