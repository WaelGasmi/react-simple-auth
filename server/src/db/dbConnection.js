import { Client } from "pg";
import {
  DB_DATABASE,
  DB_PORT,
  DB_HOST,
  DB_PASSWORD,
  DB_USER,
} from "../config/index.js";

export const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export async function connect() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error.message);
  }
}
