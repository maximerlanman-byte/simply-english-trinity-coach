import { handleRequest } from "../src/worker.js";

export const config = { runtime: "edge" };

export default function handler(request) {
  return handleRequest(request, {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  });
}
