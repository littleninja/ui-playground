export default (config, env, helpers) => {

  // make sure .ts and .tsx file extensions are included
  const extensions = config.resolve.extensions;
  if (!extensions.includes('.ts')) extensions.push('.ts');
  if (!extensions.includes('.tsx')) extensions.push('.tsx');

  // remove babel loader(s)
  let babelLoaders = helpers.getLoadersByName(config, 'babel-loader');
  for (let loader of babelLoaders) {
    config.module.rules.slice(loader.index, loader.index + 1);
  }
  // replace with typescript loader
  config.module.rules.unshift({ test: /\.tsx?$/, loader: "ts-loader" });
};