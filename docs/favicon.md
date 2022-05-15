# Favicon usage
Created on 12th April 2022

* It is recommended to use a favicon generator, or automate the favicon generation with a build script.
* There is also an explanation included on how to write favicons generally.
* This is done, so you can understand the purpose of each file, which should be in the output of a favicon generator.


## Automatic favicon generation

* There are multiple websites and tools to streamline the creation of favicons.
* For simplicities sake, we are going to use https://realfavicongenerator.net/, because it offers comprehensive options and is easy to use.


## Manual favicon generation

### File structure
```bash
favicon.ai                  # raw icon file, Illustrator, includes default, dev and maskable
  (artboard) default        # vanilla icon on web page
  (artboard) dev            # development icon during production (to recognize dev build)
  (artboard) maskable       # full bleed icon for android, safe zone is a circle with 80% width
favicon.ico                 # modern browser, production icon (.ico = set of bitmaps essentially)
  favicon.png (16x16)
  favicon.png (32x32)
favicon-dev.ico             # modern browser, dev icon, (.ico = set of bitmaps essentially)
  favicon-dev.png (16x16)
  favicon-dev.png (32x32)
favicon.svg                 # modern browser, production icon
favicon-dev.svg             # modern browser, dev icon
safari-mask-icon.svg        # safari, monochrome svg
apple-touch-icon.png        # iOS, apple touch icon (140x140 with 20px padding, so 180x180)
icon-192.png                # android, low dpi
icon-512.png                # android, high dpi
android-maskable-192.png    # android, maskable icon for home screen (192x192)
manifest.webmanifest        # android, manifest for progressive web apps
```


### HTML

```html
<!-- 
  1) For browsers that don't support .svg favicons (pretty much just Safari right now).
  2) For browsers that DO support SVG favicons (most of them now).
  3) A special SVG for Safari assuming a single color is OK.
  4) Touch icon for iOS devices.
  5) Manifest for Progressive Web Apps.
-->
<link rel="icon" href="/favicon.ico" sizes="any">                   <!-- (1) -->
<link rel="icon" href="/icon.svg" type="image/svg+xml">             <!-- (2) -->
<link rel="mask-icon" href="/safari-mask-icon.svg" color="#990000"> <!-- (3) -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">          <!-- (4) -->
<link rel="manifest" href="/manifest.webmanifest">                  <!-- (5) -->
```


### Dev favicon 

* This implementation example uses EJS and Webpack.

```diff
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>My website</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
-     <link rel="icon" href="/favicon.ico" sizes="any">
+     <link rel="icon" sizes="any" href="<%=
+       process.env.NODE_ENV === 'production'
+         ? '/favicon.ico'
+         : require('./favicon-dev.ico').default
+     %>">
      <link rel="icon" type="image/svg+xml" href="<%=
-       require('./icon.svg').default
+       process.env.NODE_ENV === 'production'
+         ? require('./icon.svg').default
+         : require('./icon-dev.svg').default
      %>">
      <link rel="apple-touch-icon" href="<%=
        require('./apple-touch-icon.png').default
      %>">
    </head>
    <body></body>
  </html>
```


### Custom favicon on very small sizes

* With `.ico` files, you can specifiy a custom bitmap for very small favicon dimensions (16×16).
* This might be necessary when the favicon gets very blurry.
* Instructions by [Andrey Sitnik](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs):
  > To include a separate 16×16 version of an icon:
  > 
  > 1. Open favicon.ico with the 32×32 icon.
  > 2. Create a new layer with a 16×16 size.
  > 3. Put the 16×16 version of an icon into this layer.
  > 4. Export the file. GIMP will save each layout as a separate version of the icon.
  > 
  > Or you can do the same in ImageMagick by:
  > 
  > `convert ./icon-32.png ./icon-16.png ./favicon.ico`



### `manifest.webmanifest`

```json
{
  "name": "Your website name",
  "short_name": "A shorter version of your website name",
  "icons": [
    { 
      "src": "/192.png", 
      "type": "image/png", 
      "sizes": "192x192" 
    },
    { 
      "src": "/512.png", 
      "type": "image/png", 
      "sizes": "512x512" 
    },
    { 
      "src": "/android-maskable-192.png", 
      "type": "image/png", 
      "sizes": "192x192", 
      "purpose": "maskable" 
    },
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```


### Tools

* Adobe Illustrator   -- raw favicon file
* GIMP                -- convert png files to .ico


## Dark theme favicons

* SVG favicons can change color depending on media queries.
* See [`prefers-color-scheme` in SVG favicons for dark mode icons - blog.tomayac.com](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/).
* Instructions:
  1) Create a file `favicon.svg`.
  2) Modify the file by adding a media query to the css:
     ```diff
       <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
         <style>
           circle {
             fill: yellow;
             stroke: black;
             stroke-width: 3px;
           }
     +     @media (prefers-color-scheme: dark) {
     +       circle {
     +         fill: black;
     +         stroke: yellow;
     +       }
     +     }
         </style>
         <circle cx="50" cy="50" r="47" />
       </svg>
     ```
  3) Reference the file inside the `<head>`:
     ```diff
       <link rel="icon" href="/favicon.ico" sizes="any">
     + <link rel="icon" type="image/svg+xml" href="/favicon.svg">
       <link rel="mask-icon" href="/safari-mask-icon.svg" color="#990000">
       <link rel="apple-touch-icon" href="/apple-touch-icon.png">
       <link rel="manifest" href="/manifest.webmanifest">
     ```
  4) Modern browsers will load the SVG favicon in favor of a flat `favicon.ico` favicon and apply the media query.


## Different favicon depending on development mode

* Depending on the technology you build your website with, you can use different favicons when you are in development.
* For example, if you work with Nuxt 2, you can load a different favicon in `nuxt.config.js`:
  ```diff
  + const isDev = process.env.NODE_ENV !== 'production';
    export default {
      // ...
      head: {
        title: 'My wonderful application',
        htmlAttrs: { lang: 'en' },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  +       ...isDev ? [
  +         { name: 'msapplication-TileColor', content: '#ffcc00' },
  +         { name: 'theme-color', content: '#ffcc00' },
  +       ] : [
  +         { name: 'msapplication-TileColor', content: '#212529' },
  +         { name: 'theme-color', content: '#212529' },
  +       ], 
        ],
        link: [
  +       ...isDev ? [
  +         { rel: 'icon', type: 'image/svg+xml', href: '/favicon/dev/favicon.svg' },
  +         { rel: 'shortcut icon', href: '/favicon/dev/favicon.ico' },
  +       ] : [
  +         { rel: 'icon', type: 'image/svg+xml', href: '/favicon/production/favicon.svg' },
  +         { rel: 'shortcut icon', href: '/favicon/production/favicon.ico' },
  +       ], 
        ]
      },
      // ...
    }
  ```
* `...object` is the Spread Operator in JavaScript, useful to unpack objects or arrays.
* `condition ? expressionTrue : expressionFalse` is the Conditional (Ternary) Operator in JavaScript.


## Sources

* https://css-tricks.com/how-to-favicon-in-2021/
* https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
* https://www.leereamsnyder.com/blog/favicons-in-2021
* https://css-tricks.com/maskable-icons-android-adaptive-icons-for-your-pwa/
* https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7
