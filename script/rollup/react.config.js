import { getPackageJSON, resolvePkgPath, getBaseRollupPlugins } from './utils';
const { name, module } = getPackageJSON('react');
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);
console.log(`${pkgPath}/${module}`);
console.log(`${pkgDistPath}/index.js`);
export default [
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: getBaseRollupPlugins()
	}
];
