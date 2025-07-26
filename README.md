# Objective

- Learn how to create reusable JavaScript modules in Node.js.
- Practice importing and exporting functions across multiple files.
- Build a simple Node.js application that demonstrates modular code organization.


## 1. export / import vs module.exports / require
    - Describe one key technical difference.
### Answer: <br>Export/Import is a way of using your written functions across multiple files rather than rewriting each or copy/paste so that the code comes out cleaner looking. Export the function from the file in which it was written and Import it at the top of the file its being added to.<br>Module.exports/require is a way of using a particular part of an npm without installing the whole library.

## 2. Why choose ES modules for modern Node projects?

    - State one clear reason

### Answer: <br>ES Modules provides a more structured and statically analyzable way to work with modules compared to CommonJS, with benefits like tree-shaking(or Module.export/require) for smaller builds.
