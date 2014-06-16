
/**
 * Dependencies
 */

var fs = require('fs');

/**
 * Export `RequireAll`
 */

module.exports = function (folderName) {
  
  return new RequireAll(folderName);

};

/**
 * Require all .js files in a folder and return them as an object
 * 
 * @param {String} folderName Folder to require files in
 * @return {Object} Required files
 */
function RequireAll (folderName) {
 
  var files   = fs.readdirSync(folderName),
      modules = {};

  files.forEach(function (file) {

    var extensionName = file.split('.')[file.split('.').length-1];
    
    if (extensionName === 'js')
      modules[file.replace('.js', '')] = require(folderName + '/' + file);

  });

  return modules;

}