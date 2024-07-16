/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:Gf1qBL2QloMt@ep-fancy-block-a5vp8xud.us-east-2.aws.neon.tech/AI%20Content%20Generator?sslmode=require',
    }
  };
  