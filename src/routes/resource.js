import express from "express";
import {
  GET_ALL_RESOURCES,
  GET_RESOURCE_BY_ID,
  INSERT_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE_BY_ID,
} from "../controllers/resource.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/resources", auth, GET_ALL_RESOURCES);

router.get("/resources/:id", GET_RESOURCE_BY_ID);

router.post("/resources", INSERT_RESOURCE);

router.put("/resources/:id", UPDATE_RESOURCE);

router.delete("/resources/:id", DELETE_RESOURCE_BY_ID);

export default router;
