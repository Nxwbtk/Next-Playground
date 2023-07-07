// 'use client'
import { block } from 'million/react';
const test = () => {
	return (
		<>
		this is from block
		</>
	);
}

export default function Page () {
	const	Test = block(test);
	return (
		<>
		<Test />
		</>
	);
}