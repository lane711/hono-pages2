import { Hono } from 'hono'
import { html } from 'hono/html'
import { jsx } from 'hono/jsx'

interface SiteData {
    title: string
    children?: any
  }

const Layout = (props: SiteData) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>${props.title}</title>
    </head>
    <body>
      ${props.children}
    </body>
  </html>`

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <h1>Hello {props.name}</h1>
  </Layout>
)



export async function loadTest(app) {
console.log('---- loading test')
    app.get('test/:name', (c) => {
        const { name } = c.req.param()
        const props = {
          name: name,
          siteData: {
            title: 'JSX with html sample',
          },
        }
        return c.html(<Content {...props} />)
      })

}