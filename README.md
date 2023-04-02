# portfolio-uxd-nuxt

UX design portfolio.

Run `npm run unpack` to unpack Power UI prototype zips into the `static folder`.

Run `npm run generate` to create static files and upload them to a webhoster of your choice.

Also check out the [development notes](docs/development-notes.md).


## Build Setup

```bash
# unpack zip files
$ npm run unpack

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).


## Generate in Powershell

```powershell
# generate static project with base url in PowerShell
$env:BASE_URL="https://example.org"; npm run generate 
```

* **Important!** Running this powershell script will set the `BASE_URL` environment variable for the whole process (= as long as the terminal is open)!
  * See https://stackoverflow.com/a/43025189/pass-node-js-environment-variable-with-windows-powershell
* We need the baseUrl to generate absolute paths, like in the `<meta property="og:image">` tag, because that one needs absolute links.
* Normally, you would use a dependency like `cross-env` to make sure that you can set `process.env.BASE_URL` regardless of terminal and system.
* But I try to keep the dependency count low for now.
* Another solution would be to hard-code the `baseUrl` into `nuxt.config.js`:
  * `baseUrl: process.env.NODE_ENV === "production" ? "https://example.org" : "http://localhost:3000"`
  * I don't like this solution, because now you cannot set a `BASE_URL`. Instead it is dependent on the run mode.


## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.


### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).


### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).


### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).


### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).


### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


## Future migration of Nuxt

## vue-i18n

* The package `@nuxtjs/i18n` v7.2.0 uses `vue-i18n` v8 under the hood.
* There are some breaking changes from `vue-i18n` v8 to `vue-i18n` v9+.
* One of them is that we can no longer use `$t('messageKey')[0]` to return items of a message array. 
* See https://vue-i18n.intlify.dev/guide/migration/breaking.html#translation-api-return-value.
