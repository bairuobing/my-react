import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		// 打包后的产物包路径
		return `${distPath}/${pkgName}`;
	}

	// 源码包路径
	return `${pkgPath}/${pkgName}`;
}

// 通过包名获得 pkgJson 名
export function getPackageJSON(pkgName) {
	// 包路径
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, { encoding: 'utf-8' });
	return JSON.parse(str);
}

export function getBaseRollupPlugins({ typeScript = {} } = {}) {
	return [cjs(), ts(typeScript)];
}
