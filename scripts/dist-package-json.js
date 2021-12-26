let DotJson = require('dot-json');
let packageJSON = new DotJson('dist/lib/package.json');

packageJSON
    .delete('devDependencies')
    .delete('dependencies')
    .delete('scripts')
    .delete('main')
    .save();
