export const createEvent = {
  tags: ["Events"],
  description: "Create a new event",
  operationId: "createEvent",
  parameters: [
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/createNewEvent",
        },
      },
    },
    required: true,
  },
  responses: {
    201: {
      description: "item added succefully",
      content: {
        "application/json": {
          schema: {
            properties: {
              uid: {
                type: "string",
                description: "user id",
                example: "lksjdoijaklnfdhjoajlkddkoasnd",
              },
              name: {
                type: "string",
                description: "event name",
                example: "end year party",
              },
              occurance: {
                type: "string",
                example: "WEEKLY",
              },
              startDate: {
                type: "date",
                example: "August 30, 2022, 08:00:00",
              },
              endDate: {
                type: "date",
                example: "August 30, 2022, 08:00:00",
              },
            },
          },
        },
      },
    },
  },
};

export const getAllEvents = {
  tags: ["Events"],
  description: "get all events",
  operationId: "getAllevents",
  parameters: [],

  responses: {
    201: {
      "application/json": {
        content: {
          schema: {
            properties: [
              {
                uid: {
                  type: "string",
                  description: "user id",
                  example: "lksjdoijaklnfdhjoajlkddkoasnd",
                },
                name: {
                  type: "string",
                  description: "event name",
                  example: "end year party",
                },
                occurance: {
                  type: "string",
                  example: "WEEKLY",
                },
                startDate: {
                  type: "date",
                  example: "August 30, 2022, 08:00:00",
                },
                endDate: {
                  type: "date",
                  example: "August 30, 2022, 08:00:00",
                },
              },
            ],
          },
        },
      },
    },
  },
};

export const getAllEventByUid = {
  tags: ["Events"],
  description: "get all events by userid",
  operationId: "getAllEventByUid",
  parameters: [
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],

  responses: {
    201: {
      "application/json": {
        content: {
          schema: {
            properties: [
              {
                uid: {
                  type: "string",
                  description: "user id",
                  example: "lksjdoijaklnfdhjoajlkddkoasnd",
                },
                name: {
                  type: "string",
                  description: "event name",
                  example: "end year party",
                },
                occurance: {
                  type: "string",
                  example: "WEEKLY",
                },
                startDate: {
                  type: "date",
                  example: "August 30, 2022, 08:00:00",
                },
                endDate: {
                  type: "date",
                  example: "August 30, 2022, 08:00:00",
                },
              },
            ],
          },
        },
      },
    },
  },
};
export const getEventById = {
  tags: ["Events"],
  description: "get an event by id",
  operationId: "getEventByid",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Item ID",
      required: true,
      type: "string",
    },
  ],

  responses: {
    201: {
      description: "item added succefully",
      content: {
        "application/json": {
          schema: {
            properties: {
              uid: {
                type: "string",
                description: "user id",
                example: "lksjdoijaklnfdhjoajlkddkoasnd",
              },
              name: {
                type: "string",
                description: "event name",
                example: "end year party",
              },
              occurance: {
                type: "string",
                example: "WEEKLY",
              },
              startDate: {
                type: "date",
                example: "August 30, 2022, 08:00:00",
              },
              endDate: {
                type: "date",
                example: "August 30, 2022, 08:00:00",
              },
            },
          },
        },
      },
    },
  },
};
export const updateEvent = {
  tags: ["Events"],
  description: "update event",
  operationId: "updateEvent",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Item ID",
      required: true,
      type: "string",
    },
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/createNewEvent",
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: "event updated successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "event updated successfully!",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};
export const deleteEventById = {
  tags: ["Events"],
  description: "Delete an event by id",
  operationId: "deleteCart",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Item ID",
      required: true,
      type: "string",
    },
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "User deleted successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "User deleted successfully!",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};
export const deleteAllEvents = {
  tags: ["Events"],
  description: "Delete all event by uid",
  operationId: "deleteCart",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],
  responses: {
    200: {
      description: "User deleted successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "User deleted successfully!",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};

export const createNewEvent = {
  type: "object",
  properties: {

    name: {
      type: "string",
      description: "event name",
      example: "end year party",
    },
    occurance: {
      type: "string",
      example: "WEEKLY",
    },
    startDate: {
      type: "date",
      example: "August 30, 2022, 08:00:00",
    },
    endDate: {
      type: "date",
      example: "August 30, 2022, 08:00:00",
    },
  },
};
