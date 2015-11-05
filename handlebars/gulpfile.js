var builder = require('jenkins-js-builder');

//
// Use the predefined tasks from jenkins-js-builder.
//
builder.defineTasks(['test', 'bundle']);

//
// Bundle the module.
//
builder.bundle('handlebars', 'handlebars3')
    .inDir('./target/classes/assets/')
    // UNTIL js-builder is fixed: .asJenkinsModuleResource()
    .export();