var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the modules.
//
builder.bundle('js/bootstrap3.js')
    .withExternalModuleMapping('jquery-detached-2.1.4', 'jquery-detached:jquery2')
    .less('js/bootstrap3/style.less')
    .inDir('./target/classes/assets/')
    // UNTIL js-builder is fixed: .asJenkinsModuleResource()
    .export();
