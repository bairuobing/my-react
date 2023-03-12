import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElement,
	ElementType
} from 'shared/ReactTypes';
// ReactElement
const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'brb'
	};
	return element;
};

// react 17 之前，jsx 转换用的 React.createElement 方法，17 之后用的 _jsx 方法
export const jsx = (type: ElementType, config: any, key: Key = null) => {
	let ref: Ref = null;
	const props: Props = null;

	for (const prop in config) {
		const val = config[prop];
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}

		// 和 kasong 实现的不太一样
		if (prop === 'children') {
			const childrenLength = val.length;
			if (childrenLength) {
				if (childrenLength === 1) {
					props.children = val[0];
				} else {
					props.children = val;
				}
			}
		}

		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}

	return ReactElement(type, key, ref, props);
};

// 开发环境 jsx
export const jsxDEV = jsx;
