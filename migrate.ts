import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import logger from "./src/logger";
import * as schema from "@/persistance/schema";

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL || "", { max: 1 });
// migrate(drizzle(migrationClient),
const db = drizzle(migrationClient, { schema });

function main() {
  migrate(db, { migrationsFolder: "drizzle" })
    .then((r) => {
      logger.info("Migration complete");
      process.exit();
    })
    .catch((err) => {
      logger.error(`Migration failed: ${err.message}`);
      process.exit(1);
    });
}

main();
