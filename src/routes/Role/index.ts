import express from "express";
import Rolecontroller from "../../controller/RoleController";

const router = express.Router();

router.get("/getRole", Rolecontroller.GetRole());
router.post("/createRole", Rolecontroller.CreateRole());
router.put("/updateRole/:id", Rolecontroller.UpdateRole());
router.delete("/deleteRole/:id", Rolecontroller.DeleteRole());

export default router;
