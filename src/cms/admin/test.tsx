import { Hono } from "hono";
import { html } from "hono/html";
import { jsx } from "hono/jsx";

interface SiteData {
  title: string;
  children?: any;
}

const Layout = (props: { children?: string }) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
};

const Top = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};


export async function loadTest(app) {
  console.log("---- loading test");

  app.get("/jsx", (c) => {

    const messages = ["Good Morning", "Good Evening", "Good Night"];
    return c.html(<Top messages={messages} />);

  });
}
