import { pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

// YOUR DB SCHEMA
export const form = pgTable("youtable", {
  id: uuid("id").defaultRandom().primaryKey(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at"),
});
