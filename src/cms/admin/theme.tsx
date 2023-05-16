import { getById, getDataByPrefix, putData } from "../data/data";


const Layout = (props: {
  children?: string;
  formComponents?: any[];
  screenTitle?: string;
  newItemButtonText?: string;
}) => {
  return (
<html lang="en" data-bs-theme="auto">
  <head>
    
    <script src="/public/js/color-modes.js"></script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content=""/>

    <title>SonicJs Admin</title>
    <link
      rel="icon"
      type="image/x-icon"
      href="/public/images/favicon.ico"
    />

<link href="/public/css/bootstrap.min.css" rel="stylesheet" />

<link rel="stylesheet" href="/public/css/admin.css" />
        <link
          rel="stylesheet"
          href="https://cdn.form.io/formiojs/formio.full.min.css"
        />

<meta name="theme-color" content="#712cf9" />
    
    <link href="/public/css/admin.css" rel="stylesheet" />
  </head>
  <body>
   

    <div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
              id="bd-theme"
              type="button"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              aria-label="Toggle theme (auto)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
            <svg class="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>

    
<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="/admin">
  <img class="logo" src="/public/images/sonicjs-logo.svg" />
  </a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="#">Sign out</a>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/admin/sites">
              <span data-feather="home" class="align-text-bottom"></span>
              Sites
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin">
              <span data-feather="file" class="align-text-bottom"></span>
              Content
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/modules">
              <span data-feather="shopping-cart" class="align-text-bottom"></span>
              Modules
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin/content-types">
              <span data-feather="users" class="align-text-bottom"></span>
              Content Types
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/api/forms">
              <span data-feather="bar-chart-2" class="align-text-bottom"></span>
              Forms
            </a>
          </li>
      
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" class="align-text-bottom"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text" class="align-text-bottom"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">{props.screenTitle}</h1>
      </div>

      <h2>Section title</h2>
     
     {props.children}

    </main>
  </div>
</div>


    <script src="/public/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  
    <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js" integrity="sha384-gdQErvCNWvHQZj6XZM0dNsAoY4v+j5P1XDpNkcM3HJG1Yx04ecqIHk7+4VBOCHOG" crossorigin="anonymous"></script>
    <script src="/public/js/dashboard.js"></script>

      <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"
          integrity="sha512-uMtXmF28A2Ab/JJO2t/vYhlaa/3ahUOgj1Zf27M5rOo8/+fcTUVH0/E0ll68njmjrLqOBjXM3V9NiPFL5ywWPQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script src="/public/js/admin.js"></script>
        <script src="/public/js/form.js"></script>

  </body>
</html>
)
}


const old = `

    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>SonicJs Admin</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/public/images/favicon.ico"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />

        <link rel="stylesheet" href="/public/css/admin.css" />
        <link
          rel="stylesheet"
          href="https://cdn.form.io/formiojs/formio.full.min.css"
        />
      </head>

      <body class="bg-dark text-light">
        <nav class="navbar navbar-dark sticky-top bg-darker flex-md-nowrap p-0">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            <img class="logo" src="/public/images/sonicjs-logo.svg" />
          </a>
          {/* <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </nav>

        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-2 d-none d-md-block bg-darker text-muted sidebar px-0">
              <div class="sidebar-sticky">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link text-light" href="/admin/sites">
                      <span data-feather="file"></span>
                      Sites
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-light" href="/admin">
                      <span data-feather="home"></span>
                      Content <span class="sr-only">(current)</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link text-light" href="/admin/modules">
                      <span data-feather="shopping-cart"></span>
                      Modules
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  text-light" href="/admin/content-types">
                      <span data-feather="users"></span>
                      Content Types
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link  text-light" href="/api/forms">
                      <span data-feather="users"></span>
                      Form Builder
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">{props.screenTitle}</h1>
              </div>

              {props.children}
            </main>
          </div>
        </div>

        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossorigin="anonymous"
        ></script>

        <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"
          integrity="sha512-uMtXmF28A2Ab/JJO2t/vYhlaa/3ahUOgj1Zf27M5rOo8/+fcTUVH0/E0ll68njmjrLqOBjXM3V9NiPFL5ywWPQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script src="/public/js/admin.js"></script>
        <script src="/public/js/form.js"></script>
      </body>
    </html>
`

export const Top = (props: {
  items: object[];
  screenTitle: string;
  newItemButtonText: string;
}) => {
  return (
    <Layout screenTitle={props.screenTitle}>
      <div class="pb-2 mb-3">
        <button
          id="contentFormSaveButton"
          class="btn btn-warning"
          onclick="onContentFormSave()"
        >
          {props.newItemButtonText}
        </button>{" "}
      </div>

      <ul>
        {props.items.map((item: any) => {
          return (
            <li>
              <a class="text-light" href={item.path}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const Detail = (props: { item: any; screenTitle: string }) => {
  return <Layout screenTitle={props.screenTitle}>{props.item}</Layout>;
};

const Form = (props: { title: string; screenTitle: string }) => {
  return (
    <Layout screenTitle={props.screenTitle + ": " + props.title}>
      <div class="pb-2 mb-3">
        <button
          id="contentFormSaveButton"
          class="btn btn-warning"
          onclick="onContentFormSave()"
          disabled
        >
          Save Content Type
        </button>{" "}
      </div>

      <div id="formio"></div>
    </Layout>
  );
};

export async function loadAdmin(context) {
  // await putData(context.env.KVDATA, 'site1', 'content', {title: '20230508a'});

  const data = await getDataByPrefix(context.env.KVDATA);

  console.log("load admin data", data);

  const list = data.keys.map((item) => {
    return {
      title: item.name,
      path: `/admin/content/${item.name}`,
    };
  });

  return <Top items={list} screenTitle="Content" />;
}

export async function loadModules(context) {
  const data = await getDataByPrefix(context.env.KVDATA, "site1::module");

  const list = data.keys.map((item) => {
    return {
      title: item.name,
      path: `/admin/modules/${item.name}`,
    };
  });

  return <Top items={list} screenTitle="Modules" />;
}

export async function loadModule(context) {
  console.log("context url", context.req);
  const id = context.req.path.split("/").pop();
  console.log("context id", id);

  const data = await getById(context.env.KVDATA, id);

  console.log("data module", data);

  return <Detail item={data.title} screenTitle="Module" />;
}

// export async function loadSites(context) {
//   const data = await getById(context.env.KVDATA, "host::sites");

//   // console.log('data site', data[0])
//   const list = data.map((item) => {
//     return {
//       title: item.title,
//       path: `/admin/content-types/${item.name}`,
//     };
//   });

//   return <Top items={list} screenTitle="Sites" />;
// }

export async function loadContentTypes(context) {
  console.log("loadContentTypes KVDATA", context.env.KVDATA);

  const data = await getDataByPrefix(context.env.KVDATA, "site1::content-type");
  console.log("data", data);

  const list = data.keys.map((item) => {
    return {
      title: item.name,
      path: `/admin/content-types/${item.name}`,
    };
  });

  return <Top items={list} screenTitle="Content Types" />;
}

export async function loadContentType(context, id) {
  const data = await getById(context.env.KVDATA, id);

  return <Form title={data.title} screenTitle="Content Type" />;
}

// app.get("/new", async (c) => {
//   KVDATA.put(`todo_${Date.now()}`, JSON.stringify({ "foo": "bar" }));

//   const list = [];

//   return c.html(<Top messages={list} />);
// });
