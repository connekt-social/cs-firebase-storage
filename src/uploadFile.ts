import app, { FirebaseConfig } from "./firebase";
import { getStorage } from "firebase-admin/storage";

export type FileOptions = {
  uploadPath: string;
  contents: string | Buffer;
};
let initializedApp: any = null;
const upload = async (file: FileOptions, config: FirebaseConfig) => {
  if (!initializedApp) {
    initializedApp = app(config);
  }
  const cloudFile = getStorage().bucket().file(file.uploadPath);
  await cloudFile.save(file.contents);

  await cloudFile.makePublic();

  return cloudFile.publicUrl();
};

export default upload;
