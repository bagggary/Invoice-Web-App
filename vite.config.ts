import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dotenv from 'dotenv';

// dotenv.config(); // load env vars from .env


// https://vitejs.dev/config/
export default defineConfig({
  envPrefix : "REACT_APP_",
  plugins: [react()  ],
  // define: {
  //   __API_KEY__: `"${process.env.REACT_APP_API_KEY }"`,
  //   __AUTH_KEY__:`"${process.env.REACT_APP_AUTH_DOMAIN}"`,
  //   __PROJECT_ID__:`"${process.env.REACT_APP_PROJECT_ID}"`,
  //   __STORAGE_BUCKET__:`"${process.env.REACT_APP_STORAGE_BUCKET}"`,
  //   __MESSAGING_SENDER_ID__: `"${process.env.REACT_APP_MESSAGING_SENDER_ID}"` ,
  //   __APP_ID__: `"${process.env.REACT_APP_ID}"`,
  //   __DATABASE_URL__ : `"${process.env.REACT_APP_DATABASE_URL}"`
  // },
});

