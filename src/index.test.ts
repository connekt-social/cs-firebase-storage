import "jest";
import { FirebaseConfig } from "./firebase";
import upload from "./uploadFile";
import { readFileSync } from "fs";
import dayjs from "dayjs";

describe("firebase file upload", () => {
  it("should upload", async () => {
    expect(process.env.FIREBASE_JSON_PATH).toBeTruthy();
    expect(process.env.TESTING_FILE).toBeTruthy();
    expect(process.env.FIREBASE_STORAGE_BUCKET).toBeTruthy();
    const config: FirebaseConfig = {
      serviceKeyPath: process.env.FIREBASE_JSON_PATH!,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET!,
    };

    const file = readFileSync(process.env.TESTING_FILE!);

    const fileUrl = await upload(
      {
        contents: file,
        uploadPath: "testuploads/" + dayjs().toISOString(),
      },
      config
    );
    expect(fileUrl).toBeTruthy();

    console.log("FILE UPLOADED: " + fileUrl);
  });
});
