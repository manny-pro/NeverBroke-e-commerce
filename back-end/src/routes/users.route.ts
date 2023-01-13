import { Router } from "express";

import {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
  auth,
  register,
} from "../controllers/users.controller";


export const router = Router();

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

router.post("/auth", auth);

router.post("/register", register);

export default router;