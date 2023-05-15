/**
 * minimist是一个nodejs的包，用于解析命令行参数。它可以帮助你解析命令行参数字符创，并将其转换为一个对象，其中对象的每个属性对应一个命令行
 * 参数和值。
 * 
 * minimist是一个非常轻量级的工具，只有一个方法，仅用于解析命令行
 * 参数，不支持子命令、自动帮助文档、版本号等CLI工具中常用的功能。
 * minimist支持单破折现和双破折线两种参数标识方式，如-a或者--name yivn，
 * 单破折线只适用于简写，双破折线适用于全称。
 * 
 * 如果只是简单的应用，而不需要支持子命令、自动生成帮助文档、版本号等高级功能时，使用minimist
 * 可以更加的轻量级和简单，如果需要支持更多高级功能，使用commander则会更加方便
 */

const minimist = require('minimist');
const argv = process.argv;

const args = minimist(argv.slice(2));

debugger;