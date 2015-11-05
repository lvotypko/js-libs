var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the modules.
//
builder.bundle('js/jquery2.js')
    .inDir('./target/classes/assets/')
    // UNTIL js-builder is fixed: .asJenkinsModuleResource()
    .export();

builder.bundle('js/jqueryui1.js')
    .less('js/jqueryui1/style.less')
    .withExternalModuleMapping('jquery-detached-2.1.4', 'jquery-detached:jquery2')
    .inDir('./target/classes/assets/')
    // UNTIL js-builder is fixed: .asJenkinsModuleResource()
    .export();
