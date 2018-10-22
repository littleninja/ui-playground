export default (config, env, helpers) => {
  // make sure .ts and .tsx file extensions are included
  const extensions = config.resolve.extensions;
  if (!extensions.includes('.ts')) extensions.push('.ts');
  if (!extensions.includes('.tsx')) extensions.push('.tsx');

  // dirty hack to replace babel-loader with ts-loader
  config.module.rules[0] = { test: /\.tsx?$/, loader: "ts-loader" };
};