import { getById, getDataByPrefix, putData } from "../../data/data";
import { Top } from "../theme";

export async function loadSites(ctx) {

  await ctx.env.KVDATA.put("host::sites::site3", JSON.stringify({ title: "The Orange Website" }));

  // console.log("mods ctx", ctx);
  // console.log("ctx KVDATA", ctx.env.KVDATA);


  const sites = await getDataByPrefix(ctx.env.KVDATA, "host::sites");
  console.log("sites -->", sites);

//   const data = await getDataByPrefix(ctx.env.KVDATA, "host::sites::");

//   console.log("data site", data[0]);

  // let data = [{id:"123",title:'ipsum'}];
  const list = sites.keys.map((item) => {
    console.log("data site", item);

    return {
      title: item.name,
      path: `/admin/sites/${item.name}`,
    };
  });

  return <Top items={list} screenTitle="Sites" />;
}

export async function loadSite(ctx) {
  const data = await getById(ctx.env.KVDATA, "host::sites::orange-site");

  console.log("data site", data[0]);
  const list = data.map((item) => {
    return {
      title: item.title,
      path: `/admin/content-types/${item.name}`,
    };
  });

  return <Top items={list} screenTitle="Sites" />;
}
