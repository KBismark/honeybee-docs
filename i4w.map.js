const path = require('path');
const { getDependencyMap } = require('import-for-web')
const dirname = path.dirname(__filename)
module.exports =() => (
{
  ...getDependencyMap('honeybee-client',`${dirname}`),
  "/modules/beejs-docs@1.0.0/components/header.js": path.join(`${__dirname}/dist/modules`,"/components/header.js"),
  "/modules/beejs-docs@1.0.0/home/frontpage.js": path.join(`${__dirname}/dist/modules`,"/home/frontpage.js"),
  "/modules/beejs-docs@1.0.0": path.join(`${__dirname}/dist/modules`,"/index.js"),
})