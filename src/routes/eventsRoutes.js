import express from "express";
import auth_token from "../middleware/authvalidation.js";
import {
  createEvent,
  allEvents,
  eventById,
  updateEvent,
  usersEventById,
  deleteById,
  deleteAllEvents,
} from "../controllers/events_controller.js";

const route = express.Router();
route.post("/", auth_token, createEvent); //create an event
route.get("/", allEvents); // get All events
route.get("/user", auth_token, usersEventById); //get all event by uid
route.get("/:id", eventById); //get eventById
route.patch("/update/:id", auth_token, updateEvent); //update event by id
route.delete("/:id", auth_token, deleteById); //delete by id
route.delete("/", auth_token, deleteAllEvents); //delete all events
export default route;
