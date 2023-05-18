import { Hono } from "hono";
import { getForm, loadForm } from "../admin/forms/form";
import { getById, getDataByPrefix, putData, saveContent, saveContentType } from "../data/data";
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

  // console.log("id--->", id);

  const ct = await getById(c.env.KVDATA, `${id}`);
  return c.json(ct);
});

api.post("/form-components", async (c) => {
  const formComponents = await c.req.json();

  console.log("formComponents-->", formComponents);
  //put in kv
  const result = await saveContentType(
    c.env.KVDATA,
    "site1",
    formComponents
  );

  console.log("form put", result);
  return c.text("Created!", 201);
});

api.post("/content", async (c) => {
  const content = await c.req.json();

  console.log("content-->", content);
  //put in kv
  const result = await saveContent(
    c.env.KVDATA,
    "site1",
    content
  );

  console.log("form put", result);
  return c.text("Created!", 201);
});

export { api };
