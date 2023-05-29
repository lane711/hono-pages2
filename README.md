# SonicJs Headless CMS

# Overview
## SonicJs: Empowering Global API Performance with Cloudflare Workers

Experience the power of SonicJs, a cutting-edge Headless CMS built on the robust Cloudflare Workers platform. SonicJs revolutionizes API performance, delivering an astounding average speed improvement of 🔥🔥🔥 6 times faster 🔥🔥🔥 than a standard node application.

Read the docs here [https://sonicjs.com](https://sonicjs.com)
# Getting Started
```
git clone https://github.com/lane711/sonicjs
cd sonicjs
npm install
```

Update the account id and KV namespace in your wrangler.toml file:
```
# Enter your account id
# This can be found at https://dash.cloudflare.com/ --> Workers & Pages --> Overview, then in the right sidebar
account_id = "xxx"

# run the `wrangler kv:namespace create sonicjs` command and copy the id below
kv_namespaces = [
  { binding = "KVDATA", id = "xxx" }
]
```

```
npm run dev
```