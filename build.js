const fs = require('fs-extra');
const sass = require('node-sass');
const tildeImporter = require('node-sass-package-importer');
const chalk = require('chalk');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const srcPath = './src/index.scss';
const outPath = './dist/index.css';

sass.render({
  file: srcPath,
  outputStyle: 'compressed',
  importer: tildeImporter(),
}, function(err, result) {
  if (err) {
    console.log(chalk.red('error!', err));
  } else {
    postcssrc().then(({ plugins, options }) => {
      postcss(plugins)
      .process(result.css, options)
      .then((result) => {
        fs.outputFile(outPath, result, function(err) {
          if (!err) {
            console.log(chalk.green(`success! created ${outPath}`));
          }
        });
      });
    });
  }
});
