import express from "express";
import {
  GET_ALL_RESOURCES,
  GET_RESOURCE_BY_ID,
  INSERT_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE_BY_ID,
  GET_ALL_RESOURCES_BY_USER_ID,
} from "../controllers/resource.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/resources", auth, GET_ALL_RESOURCES);

router.get("/resources/user", auth, GET_ALL_RESOURCES_BY_USER_ID);

router.get("/resources/:id", auth, GET_RESOURCE_BY_ID);

router.post("/resources", auth, INSERT_RESOURCE);

router.put("/resources/:id", auth, UPDATE_RESOURCE);

router.delete("/resources/:id", auth, DELETE_RESOURCE_BY_ID);

export default router;
