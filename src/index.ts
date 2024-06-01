import upload from "./uploadFile";

const components = [
  {
    type: "BACKEND",
    function: "FILESTORAGE",
  },
];

const config = {
  components,
  url: null,
  settingsSchema: {
    type: "object",
    properties: {
      serviceKeyPath: {
        type: "string",
      },
      storageBucket: {
        type: "string",
      },
    },
    required: ["serviceKeyPath", "storageBucket"],
  },
};

export default {
  config,

  //expose all functions needed by components
  upload,
};
