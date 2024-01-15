import express from "express";
import UserController from "../../controller/UserController";

const router = express.Router();

router.get("/getUser", UserController.GetUser());
router.post("/createUser", UserController.CreateUser());
router.put("/updateUser", UserController.Updateuser());
router.delete("/deleteUser", UserController.DeleteUser());

export default router;
