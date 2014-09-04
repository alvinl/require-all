
/**
 * Dependencies
 */

var fs = require('fs');

/**
 * Export `RequireAll`
 */

module.exports = RequireAll;

/**
 * Require all .js & .json files in a folder and return them as an object
 *
 * @param {String} folderName Folder to require files in
 * @return {Object} Required files
 * @class
 */
function RequireAll (folderName) {

  if (!(this instanceof RequireAll))
    return new RequireAll(folderName);

  var files   = fs.readdirSync(folderName),
      modules = {};

  files.forEach(function (file) {

    var extensionName = file.split('.')[file.split('.').length-1];

    if (extensionName === 'js' || extensionName === 'json')
      modules[file.replace('.' + extensionName, '')] = require(folderName + '/' + file);

  });

  return modules;

}
