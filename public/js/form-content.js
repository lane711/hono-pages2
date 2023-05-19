//        Formio.builder(document.getElementById('builder'), {}, {});
var contentTypeComponents;

(function () {
  const url = window.location.href;
  var mode;

  if (url.indexOf("admin/content/new") > 0) {
    mode = "new";
  }

  if (url.indexOf("admin/content/edit") > 0) {
    mode = "edit";
  }

  if (!mode) {
    return;
  }

  if (mode == "edit") {
    editContent();
  }

  if (mode == "new") {
    newContent();
  }
})();

function newContent() {
  const contentType = window.location.href.split("/").pop();
  console.log("contentType", contentType);

  axios.get(`/api/form-components/${contentType}`).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);

    Formio.icons = "fontawesome";
    // Formio.createForm(document.getElementById("formio"), {
    Formio.createForm(document.getElementById("formio"), {
      components: response.data,
    }).then(function (form) {
      form.on("submit", function (data) {
        saveNewContent(data);
      });
      form.on("change", async function (event) {
        $("#contentFormSaveButton").removeAttr("disabled");
        if (event.components) {
          contentTypeComponents = event.components;
          console.log("event ->", event);
        }
      });
    });
  });
}

function editContent() {
  const contentId = $("#formio").attr("data-id");
  console.log("contentType", contentId);
  axios.get(`/api/content/${contentId}`).then((response) => {
    console.log(response.data);

    Formio.icons = "fontawesome";
    // Formio.createForm(document.getElementById("formio"), {
    Formio.createForm(document.getElementById("formio"), {
      components: response.data.contentType,
    }).then(function (form) {
      form.on("submit", function (data) {
        saveNewContent(data);
      });
      form.submission = {
        data: response.data.content.data,
      };
      form.on("change", async function (event) {
        $("#contentFormSaveButton").removeAttr("disabled");
        if (event.components) {
          contentTypeComponents = event.components;
          console.log("event ->", event);
        }
      });
    });
  });
}

function saveNewContent(data) {
  console.log(data);

  axios.post("/api/content", data).then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    if (response.status === 200 || response.status === 201) {
      location.href = "/admin";
    }
  });
}
