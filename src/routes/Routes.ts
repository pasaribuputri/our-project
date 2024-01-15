import RouterRole from "./Role/index";
import RouterUser from "./User/index";
import express from "express";

const router = express.Router();

router.use("/role", RouterRole);
router.use("/user", RouterUser);

export default router;
