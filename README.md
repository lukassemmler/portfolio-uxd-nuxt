# Portfolio UXD Nuxt

* User Experience Design (UXD) portfolio of [Lukas Semmler](https://lukassemmler.de).
* Written with the Nuxt 2 framework, which is based on Vue.js.
* This project is intended to be a sophisticated *Static Site Generator* (SSG).
* The generated content is pure static files and can be hosted on any webserver, regardless of language.
* Third iteration of the portfolio (first was built with PHP, second one was built with Handlebars).


## See also

* [Development notes](/docs/development-notes.md)
* [Favicon handling](/docs/favicon.md)
* [Locale tools](/docs/locale-tools.md)
* [Nuxt v2 → v3 migration](/docs/migration.md)
* [Project ideas](/docs/project-ideas.md)


## Installation

1. Make sure you have Node v16 installed. Newer Node versions seem to break with Nuxt v2.
2. It is recommended to install *NVM* (Node Version Manager): https://github.com/nvm-sh/nvm.
3. Clone this repository with `git clone git@github.com:lukassemmler/portfolio-uxd-nuxt.git`.
4. Run `npm install` to install dependencies.
5. Run `npm run unpack` to unpack the static ZIP files for the Power UI prototypes into the `static` folder.
6. Run `npm run dev` to start the development server at `https://localhost:3000`.


## Development

For detailed explanation on how things work, check out the [Nuxt docs](https://nuxtjs.org).

<table><thead><tr><th>
Command
</th><th>
Explanation
</th></tr></thead><tbody><tr><td>

```bash
$ npm run unpack
```
</td><td>
Unpack zip files.
</td></tr><tr><td>

```bash
$ npm install
```
</td><td>
Install dependencies.
</td></tr><tr><td>

```bash
$ npm run dev
```
</td><td>
Serve with hot reload at localhost:3000.
</td></tr><tr><td>

```bash
$ npm run build
$ npm run start
```
</td><td>
Build for production and launch server.
</td></tr><tr><td>

```bash
$ npm run generate
```
</td><td>
Generate static project.
</td></tr></tbody></table>


## Deploying

Run `npm run generate` to create static files and upload them to a webhoster of your choice.\*

> **Important!** You should build the project with the target domain as environment variable:
> ```powershell
> # generate static project with base url in PowerShell
> $env:BASE_URL="https://example.org"; npm run generate 
> ```

* Running this powershell script will set the `BASE_URL` environment variable for the whole process (= as long as the terminal is open)!
  * See https://stackoverflow.com/a/43025189/pass-node-js-environment-variable-with-windows-powershell
* We need the baseUrl to generate absolute paths, like in the `<meta property="og:image">` tag, because that one needs absolute links.
* Normally, you would use a dependency like `cross-env` to make sure that you can set `process.env.BASE_URL` regardless of terminal and system.
* But I try to keep the dependency count low for now.
* Another solution would be to hard-code the `baseUrl` into `nuxt.config.js`:
  * `baseUrl: process.env.NODE_ENV === "production" ? "https://example.org" : "http://localhost:3000"`
  * I don't like this solution, because now you cannot set a `BASE_URL`. Instead it is dependent on the run mode.


## Directory tree

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

<table><thead><tr><th>
Dir entry
</th><th>
Explanation
</th></tr></thead><tbody><tr><td>

`/assets`
</td><td>

* The assets directory contains our uncompiled assets such as Stylus or Sass files, images, or fonts.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/directory-structure/assets).
</td></tr><tr><td>

`/bin`
</td><td>

* Custom scripts that can be run to help automate processes.
</td></tr><tr><td>

`/components`
</td><td>

* The components directory contains our Vue.js components. 
* Components make up the different parts of our page and can be reused and imported into our pages, layouts and even other components.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/directory-structure/components).
</td></tr><tr><td>

`/docs`
</td><td>

* Includes helpful development notes, ideas for projects that can be showcased and a migration guide.
* See section [Docs](#Docs).
</td></tr><tr><td>

`/layouts`
</td><td>

* Layouts are a great help when you want to change the look and feel of our Nuxt app, whether we want to include a sidebar or have distinct layouts for mobile and desktop.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/directory-structure/layouts).
</td></tr><tr><td>

`/locales`
</td><td>

* Language files (i18n), which contain all strings in a key-value like fashion.
* Currently supported languages are German `de.json` and English `en.json`.
</td></tr><tr><td>

`/pages`
</td><td>

* This directory contains our application views and routes. 
* Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/get-started/routing).

</td></tr><tr><td>

`/plugins`
</td><td>

* The plugins directory contains JavaScript plugins that we want to run before instantiating the root Vue.js Application. 
* This is the place to add Vue plugins and to inject functions or constants. 
* Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

</td></tr><tr><td>

`/static`
</td><td>

* This directory contains our static files. Each file inside this directory is mapped to `/`.
* Example: `/static/robots.txt` is mapped as `/robots.txt`.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/directory-structure/static).
</td></tr><tr><td>

`/store`
</td><td>

* This directory contains our Vuex store files. Creating a file in this directory automatically activates Vuex.
* More information about the usage of this directory in the [Nuxt v2 docs](https://nuxtjs.org/docs/2.x/directory-structure/store).
</td></tr></tbody></table>


## Credits

Created by Lukas Semmler (c) 2021 – 2023.

For license, see [LICENSE](/license).
