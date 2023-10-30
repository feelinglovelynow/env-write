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


## 🎁 All our NPM Packages
* [@feelinglovelynow/env-write](https://github.com/feelinglovelynow/env-write)
* [@feelinglovelynow/get-form-entries](https://github.com/feelinglovelynow/get-form-entries)
* [@feelinglovelynow/get-relative-time](https://github.com/feelinglovelynow/get-relative-time)
* [@feelinglovelynow/global-style](https://github.com/feelinglovelynow/global-style)
* [@feelinglovelynow/jwt](https://github.com/feelinglovelynow/jwt)
* [@feelinglovelynow/loop-backwards](https://github.com/feelinglovelynow/loop-backwards)
* [@feelinglovelynow/slug](https://github.com/feelinglovelynow/slug)
* [@feelinglovelynow/svelte-loading-anchor](https://github.com/feelinglovelynow/svelte-loading-anchor)
* [@feelinglovelynow/svelte-modal](https://github.com/feelinglovelynow/svelte-modal)
* [@feelinglovelynow/svelte-turnstile](https://github.com/feelinglovelynow/svelte-turnstile)
* [@feelinglovelynow/toast](https://github.com/feelinglovelynow/toast)
