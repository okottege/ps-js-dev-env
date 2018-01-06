/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';
console.log(chalk.blue('Generating minified bundle for production.  This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    // So a fatal error occured, stop here.
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(e => console.log(chalk.red(e)));
  }

  if(jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings:'));
    jsonStats.warnings.map(w => console.log(chalk.yellow(w)));
  }

  console.log(`Webpack stats: ${stats}`);

  // If we get this far, the build is successful.
  console.log(chalk.green('Your app has been built for production and written to /dist folder.'));

  return 0;
});
