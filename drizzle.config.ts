import { type Config } from "drizzle-kit";

export default {
    out: "./drizzle",
    schema: "./src/server/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    tablesFilter: ["peopletakemyleaves_*"],
} satisfies Config;
