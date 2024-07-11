import express from "express";
import {
  CreateListing,
  DeleteListing,
  EditListing,
  GetAllListings,
  GetListing,
  GetListingsByOwner,
} from "../controllers/Property.controller.js";
import { VerifyJWT } from "../middleware/VerifyJWT.js";

const router = express.Router();

router.post("/", VerifyJWT, CreateListing);
router.post("/:id", VerifyJWT, EditListing);
router.delete("/:id", VerifyJWT, DeleteListing);
router.get("/:id", GetListing);
router.get("/", GetAllListings);
router.get("/owner/:id", GetListingsByOwner);

export default router;
