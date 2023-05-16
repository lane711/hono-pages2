// import { Hono } from 'hono'
// const app = new Hono()


import { Hono } from "hono";
import { loadForm } from "./forms/form";
import { loadSite, loadSites } from "./pages/sites";
import {
  loadAdmin,
  loadContentType,
  loadContentTypes,
  loadModule,
  loadModules,
} from "./theme";

import { Bindings } from "../types/bindings";
const admin = new Hono<{ Bindings: Bindings }>();

// const html = `
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width,initial-scale=1">
//     <title>Todos</title>
//     <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"></link>
//   </head>
//   <body class="bg-blue-100">
//     <div class="w-full h-full flex content-center justify-center mt-8">
//       <div class="bg-white shadow-md rounded px-8 pt-6 py-8 mb-4">
//         <h1 class="block text-grey-800 text-md font-bold mb-2">Todos</h1>
//         <div class="flex">
//           <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-800 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" placeholder="A new todo"></input>
//           <button class="bg-blue-500 hover:bg-blue-800 text-white font-bold ml-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="create" type="submit">Create</button>
//         </div>
//         <div class="mt-4" id="todos"></div>
//       </div>
//     </div>
//   </body>
// </html>
// `

//   export default app

admin.get("/ping", (c) => {
  return c.text(Date());
});

admin.get("/", async (c) => c.html(await loadAdmin(c)));

admin.get("/sites", async (c) => c.html(await loadSites(c)));
admin.get("/sites/*", async (c) => c.html(await loadSite(c)));

admin.get("/modules", async (c) => c.html(await loadModules(c)));
admin.get("/modules/*", async (c) => c.html(await loadModule(c)));

admin.get("/content-types", async (c) =>
  c.html(await loadContentTypes(c))
);
admin.get("/content-types/*", async (c) =>
  c.html(await loadContentType(c))
);

// app.get("/api/forms", async (c) => c.html(await loadForm(c)));

// app.get("/api/form-components", async (c) => {
//   return c.json(await getForm());
// });

export { admin };
