import { cert, initializeApp } from "firebase-admin";
import fs from "fs";

let serviceAccount;

if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
} else {
    const serviceAccountPath = new URL(
        "../serviceAccountKey.json",
        import.meta.url
    );

    serviceAccount = JSON.parse(
        fs.readFileSync(serviceAccountPath, "utf8")
    );
}

export const app = initializeApp({
    credential: cert(serviceAccount)
});