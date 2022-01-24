import {
  createUserBody,
  createUser,
  loginUser,
  loginUserBody,
} from "./userdocs.js";
import {
  updateEvent,
  createEvent,
  createNewEvent,
  getAllEventByUid,
  getAllEvents,
  getEventById,
  deleteAllEvents,
  deleteEventById,
} from "./eventdocs.js";
const apiDocumentation = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "User Event Api",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:5000",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "user authentication",
    },
    {
      name: "Events",
      description: "user events endpoints",
    },
  ],
  schemes: ["http"],
  paths: {
    "/api/user/register": {
      post: createUser,
    },
    "/api/user/login": {
      post: loginUser,
    },

    "/api/event": {
      post: createEvent,
      get: getAllEvents,
      delete: deleteAllEvents,
    },
    "/api/event/{id}":{
      get:getEventById,
      delete:deleteEventById,
    },
    "/api/event/update/{id}":{
      patch:updateEvent
    },
    "/api/event/user":{
      get:getAllEventByUid
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      createUserBody,
      loginUserBody,
      createNewEvent,
    },
  },
};
export { apiDocumentation };
