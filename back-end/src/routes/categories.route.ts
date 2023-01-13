import { Router } from "express";

import {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
} from "../controllers/categories.controller";

export const router = Router();

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

export default router;