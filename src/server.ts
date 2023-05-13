import { Hono } from "hono";
// import { html } from 'hono/html'
// import { jsx } from 'hono/jsx'

import { setAdmin } from "./cms/admin/admin";
import { setupApi } from "./cms/api/api";

const app = new Hono();

app.get("/", (ctx) => ctx.text("Hello world, this is SonicJs 2023!!"));

app.get("/public/*", async (ctx) => {
  return await ctx.env.ASSETS.fetch(ctx.req.raw);
});

setupApi(app);
setAdmin(app);

export default app;
