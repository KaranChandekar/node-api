import {
  createNewUser,
  deleteUserById,
  getAllUsers,
  getSpecialUser,
  getUserById,
  updateUserById,
} from "../controllers/user.js";
import express from "express";

const router = express.Router();

router.get("/all", getAllUsers);

router.get("/userid/special", getSpecialUser);

router
  .route("/userid/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router.post("/new", createNewUser);

export default router;
