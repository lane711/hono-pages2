import { Hono } from "hono";
import { getForm, loadForm } from "../admin/forms/form";
import { getById, getDataByPrefix, putData } from "../data/data";
import { Bindings } from "../types/bindings";

const api = new Hono<{ Bindings: Bindings }>();

api.get("/ping", (c) => {
  return c.text(Date());
});

api.get("/data", async (c) => {
  const data = await getDataByPrefix(c.env.KVDATA, "")
  return c.json(data);
});

api.get("/forms", async (c) => c.html(await loadForm(c)));

api.get("/form-components/:contentType", async (c) => {
  const id = c.req.param("contentType");

  console.log("id--->", id);

  const ct = await getById(c.env.KVDATA, `${id}`);
  return c.json(ct);
});

api.post("/form-components", async (c) => {
  const param = await c.req.json();

  console.log("formComponents-->", param);
  //put in kv
  const result = await putData(
    c.env.KVDATA,
    "site1",
    "content-type",
    param,
    "site1::content-type::blog-post"
  );

  console.log("form put", result);
  return c.text("Created!", 201);
});

export { api };
