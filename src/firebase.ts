import { initializeApp, cert } from "firebase-admin/app";

export type FirebaseConfig = {
  serviceKeyPath: string;
  storageBucket: string;
};
const app = ({ serviceKeyPath, storageBucket }: FirebaseConfig) => {
  return initializeApp({
    credential: cert(serviceKeyPath),
    storageBucket,
  });
};

export default app;
