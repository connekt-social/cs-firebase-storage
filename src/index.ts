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
};

export default {
  config,

  //expose all functions needed by components
  upload,
};
