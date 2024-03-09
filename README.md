# Using sql.js with SvelteKit

This repository provides an example of how to use sql.js in a SvelteKit project.

To achieve this, [`vite-plugin-static-copy`](https://www.npmjs.com/package/vite-plugin-static-copy) is utilised. It copies `'sql-wasm.wasm'` from `'/node_modules/sql.js/dist/sql-wasm.wasm'` to `'/static/sql.js'`.

Please feel free to create an issue if you have any suggestions for improvements or alterations.

### Goal

The primary goal was to enable sql.js to function in both development and production builds. Please note that while this repository demonstrates how to get sql.js working, it may not provide the best practices for setting it up or utilizing it in your project.
