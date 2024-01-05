import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.DATABASE_URL || "");
const db = drizzle(client, { schema });

export default db;

export function transact(
  fn: (txn: PostgresJsDatabase<typeof schema>) => Promise<unknown>
) {
  return db.transaction(fn);
}
