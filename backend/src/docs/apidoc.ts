import {
  createDevice,
  createUpdateDeviceBody,
  getAllDevices,
  getDevice,
  updateDevice,
  deleteDevice,
} from "./devices";

const apiDocumentation = {
  openapi: "3.0.1",
  info: {
    version: "1.3.0",
    title: "My REST API - Documentation",
    description: "Description of my API here",
    contact: {
      name: "Vinitha Thanasekaran",
      email: "thanasekaran.v@eppendorf.de",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:3001/",
      description: "Local Server",
    },
  ],
  tags: [
    {
      name: "Devices",
    },
  ],
  paths: {
    "/devices": {
      post: createDevice,
      get: getAllDevices,
    },
    "/devices/{id}": {
      get: getDevice,
      patch: updateDevice,
      delete: deleteDevice,
    },
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
      createUpdateDeviceBody,
    },
  },
};

export { apiDocumentation };
