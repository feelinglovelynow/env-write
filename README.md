# 🕉 @feelinglovelynow/env-write


## 💎 Install
```bash
pnpm add @feelinglovelynow/env-write
```


## 🙏 Description
* Set keys and values in `.env` file with `bash`.
* Helpful if using `.env` file in an environment where `process` is undefined.
* If key is found in the `.env` file the new value is set.
* If key is not found in the `.env` file the key and value are added @ the end of the file.
* Only works if each key in `.env` file is on its own line.


## 💚 Example: package.json w/o optional bash
```json
{
  "scripts": {
    "localEnv": "node node_modules/@feelinglovelynow/env-write/dist/index.js ENVIRONMENT=local HOST=http://localhost:5173 API=https://dev-api.example.com",
    "devEnv": "node node_modules/@feelinglovelynow/env-write/dist/index.js ENVIRONMENT=development HOST=https://dev.example.com API=https://dev-api.example.com",
    "mainEnv": "node node_modules/@feelinglovelynow/env-write/dist/index.js ENVIRONMENT=production HOST=https://app.example.com API=https://api.example.com"
  }
}
```


## 💛 Example: `.env` file below based on `mainEnv` script above
```toml
# foo here before
ENVIRONMENT='production'
HOST='https://app.example.com'
API='https://api.example.com'
# bar remains
```


## 🧡 Example: Bash script (optional) `(env.sh)`
```bash
#!/bin/bash
node node_modules/@feelinglovelynow/env-write/dist/index.js ENVIRONMENT=$env HOST=$host API=$api
```


## ❤️ Example: package.json w/ optional bash
```json
{
  "scripts": {
    "localEnv": "env=local host=http://localhost:5173 api=https://dev-api.example.com bash ./src/lib/scripts/env.sh",
    "devEnv": "env=development host=https://dev.example.com api=https://dev-api.example.com bash ./src/lib/scripts/env.sh",
    "mainEnv": "env=production host=https://app.example.com api=https://api.example.com bash ./src/lib/scripts/env.sh"
  }
}
```


## 🎁 All Our Packages
1. @feelinglovelynow/dgraph: [NPM](https://www.npmjs.com/package/@feelinglovelynow/dgraph) ⋅ [Github](https://github.com/feelinglovelynow/dgraph)
1. @feelinglovelynow/env-write: [NPM](https://www.npmjs.com/package/@feelinglovelynow/env-write) ⋅ [Github](https://github.com/feelinglovelynow/env-write)
1. @feelinglovelynow/get-form-entries: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-form-entries) ⋅ [Github](https://github.com/feelinglovelynow/get-form-entries)
1. @feelinglovelynow/get-relative-time: [NPM](https://www.npmjs.com/package/@feelinglovelynow/get-relative-time) ⋅ [Github](https://github.com/feelinglovelynow/get-relative-time)
1. @feelinglovelynow/global-style: [NPM](https://www.npmjs.com/package/@feelinglovelynow/global-style) ⋅ [Github](https://github.com/feelinglovelynow/global-style)
1. @feelinglovelynow/jwt: [NPM](https://www.npmjs.com/package/@feelinglovelynow/jwt) ⋅ [Github](https://github.com/feelinglovelynow/jwt)
1. @feelinglovelynow/loop-backwards: [NPM](https://www.npmjs.com/package/@feelinglovelynow/loop-backward) ⋅ [Github](https://github.com/feelinglovelynow/loop-backwards)
1. @feelinglovelynow/slug: [NPM](https://www.npmjs.com/package/@feelinglovelynow/slug) ⋅ [Github](https://github.com/feelinglovelynow/slug)
1. @feelinglovelynow/svelte-catch: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-catch) ⋅ [Github](https://github.com/feelinglovelynow/svelte-catch)
1. @feelinglovelynow/svelte-kv: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-kv) ⋅ [Github](https://github.com/feelinglovelynow/svelte-kv)
1. @feelinglovelynow/svelte-loading-anchor: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-loading-anchor) ⋅ [Github](https://github.com/feelinglovelynow/svelte-loading-anchor)
1. @feelinglovelynow/svelte-modal: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-modal) ⋅ [Github](https://github.com/feelinglovelynow/svelte-modal)
1. @feelinglovelynow/svelte-turnstile: [NPM](https://www.npmjs.com/package/@feelinglovelynow/svelte-turnstile) ⋅ [Github](https://github.com/feelinglovelynow/svelte-turnstile)
1. @feelinglovelynow/toast: [NPM](https://www.npmjs.com/package/@feelinglovelynow/toast) ⋅ [Github](https://github.com/feelinglovelynow/toast)
