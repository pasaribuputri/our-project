import express from "express";
import UserController from "../../controller/UserController";
import auth from "../../middleware/auth";

const router = express.Router();

router.get("/getUser", auth, UserController.GetUser());
router.post("/signup", UserController.CreateUser());
router.post("/login", UserController.LoginUser());

// router.put("/updateUser", UserController.Updateuser());
// router.delete("/deleteUser", UserController.DeleteUser());

export default router;
