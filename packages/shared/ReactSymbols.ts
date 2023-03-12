// 用来唯一标记 ReactElement 类型，防止滥用 ReactElement 类型
const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7; // 为什么用 16 进制的值
