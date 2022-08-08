const deviceProps = {
  id: {
    type: "number",
    example: 1,
  },
  location: {
    type: "string",
    example: "Varniţa",
  },
  type: {
    type: "string",
    example: "freezer",
  },
  device_health: {
    type: "string",
    example: "broken",
  },
  last_used: {
    type: "string",
    example: "10/10/2018",
  },
  price: {
    type: "string",
    example: "79.00",
  },
  color: {
    type: "string",
    example: "#541738",
  },
};

const internalServerError = {
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
};

const getAllDevices = {
  tags: ["Devices"],
  description: "Get all devices",
  operationId: "getAllDevices",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    "200": {
      description: "All devices read successfully!",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              type: "object",
              properties: deviceProps,
            },
          },
        },
      },
    },
    "500": internalServerError,
  },
};

const getDevice = {
  tags: ["Devices"],
  description: "Get a device",
  operationId: "getDevice",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Device ID",
      required: true,
      type: "number",
    },
  ],
  responses: {
    "200": {
      description: "Device read successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: deviceProps,
          },
        },
      },
    },
    "500": internalServerError,
  },
};

const createUpdateDeviceBody = {
  type: "object",
  properties: {
    location: {
      type: "string",
      example: "Varniţa",
    },
    type: {
      type: "string",
      example: "freezer",
    },
    device_health: {
      type: "string",
      example: "broken",
    },
    last_used: {
      type: "string",
      example: "10/10/2018",
    },
    price: {
      type: "string",
      example: "79.00",
    },
    color: {
      type: "string",
      example: "#541738",
    },
  },
};

const createDevice = {
  tags: ["Devices"],
  description: "Create a new device in the file system",
  operationId: "createDevice",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: createUpdateDeviceBody,
      },
    },
    required: true,
  },
  responses: {
    "201": {
      description: "Device created successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: deviceProps,
          },
        },
      },
    },
    "500": internalServerError,
  },
};

const updateDevice = {
  tags: ["Devices"],
  description: "Update a device in the file system",
  operationId: "updateDevice",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Device ID",
      required: true,
      type: "number",
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: createUpdateDeviceBody,
      },
    },
    required: true,
  },
  responses: {
    "200": {
      description: "Device updated successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: deviceProps,
          },
        },
      },
    },
    "500": internalServerError,
  },
};

const deleteDevice = {
  tags: ["Devices"],
  description: "Delete a device",
  operationId: "deleteDevice",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Device ID",
      required: true,
      type: "number",
    },
  ],
  responses: {
    "200": {
      description: "Device deleted successfully!",
      content: {
        "application/json": {
          schema: {
            type: "string",
            properties: {
              message: {
                type: "string",
                example: "Device deleted successfully!",
              },
            },
          },
        },
      },
    },
    "500": internalServerError,
  },
};

export {
  getAllDevices,
  getDevice,
  createDevice,
  createUpdateDeviceBody,
  updateDevice,
  deleteDevice,
};
