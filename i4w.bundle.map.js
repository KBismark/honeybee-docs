const path = require('path')
const { getPath } = require('import-for-web')
const deps = {value:{dependencyMap:{},dependentsMap:{}}};
 const Map1 = 
{
  [`${path.join(`${__dirname}/dist/modules`,"/codes/hompage.js")}`]: [],

  [`${path.join(`${__dirname}/dist/modules`,"/components/header.js")}`]: [
  getPath('honeybee-client',path.join(`${__dirname}`),deps)
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/features.js")}`]: [
  getPath('honeybee-client',path.join(`${__dirname}`),deps)
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/frontpage.js")}`]: [
  getPath('honeybee-client',path.join(`${__dirname}`),deps)
],

  [`${path.join(`${__dirname}/dist/modules`,"/index.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/components/header.js"),
  path.join(`${__dirname}/dist/modules`,"/home/features.js"),
  path.join(`${__dirname}/dist/modules`,"/codes/hompage.js"),
  path.join(`${__dirname}/dist/modules`,"/home/frontpage.js"),
  getPath('honeybee-client',path.join(`${__dirname}`),deps)
],

}
const Map2 = {
  [`${path.join(`${__dirname}/dist/modules`,"/codes/hompage.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/components/header.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/features.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/frontpage.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/index.js")}`]: [],

  [`${path.join(`${__dirname}/dist/modules`,"/codes/hompage.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/components/header.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/features.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/frontpage.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/index.js")}`]: [],

  [`${path.join(`${__dirname}/dist/modules`,"/codes/hompage.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/components/header.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/features.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/home/frontpage.js")}`]: [
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

  [`${path.join(`${__dirname}/dist/modules`,"/index.js")}`]: [],

  [`${getPath('honeybee-client',path.join(`${__dirname}`),{value:{dependencyMap:{},dependentsMap:{}}})}`]: [
  path.join(`${__dirname}/dist/modules`,"/components/header.js"),
  path.join(`${__dirname}/dist/modules`,"/home/features.js"),
  path.join(`${__dirname}/dist/modules`,"/home/frontpage.js"),
  path.join(`${__dirname}/dist/modules`,"/index.js"),
  path.join(`${__dirname}/dist/modules`,"/components/header.js"),
  path.join(`${__dirname}/dist/modules`,"/home/features.js"),
  path.join(`${__dirname}/dist/modules`,"/home/frontpage.js"),
  path.join(`${__dirname}/dist/modules`,"/index.js"),
  path.join(`${__dirname}/dist/modules`,"/components/header.js"),
  path.join(`${__dirname}/dist/modules`,"/home/features.js"),
  path.join(`${__dirname}/dist/modules`,"/home/frontpage.js"),
  path.join(`${__dirname}/dist/modules`,"/index.js")
],

}
deps.value.dependencyMap = {
  ...deps.value.dependencyMap, ...Map1
}
deps.value.dependentsMap = {
  ...deps.value.dependentsMap, ...Map2
}
module.exports = deps.value