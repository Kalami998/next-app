// [name].css 只支持在全局将应用于你的应用程序中的所有页面和组件。 由于样式表的全局特性，并且为了避免冲突，你应该 只在 pages/_app.js 文件中导入（import）样式表。
// import "./index.css";

import { useState, useRef } from "react";

//  通过 [name].module.css 文件命名约定来支持 CSS 模块 。
import styles from "./about.module.css";

// 在 export default 前处理
export async function getStaticProps(props) {
	console.log("获取方法", props);
	return {
		props: {
			title: "about",
			curValue: 12,
		},
	};
}

// functionName 要大写如这里的 AboutPage
export default function AboutPage(that) {
	let [value, setValue] = useState(12);

	// console.log("上下文", that);

	function handleValue(type = "add", e) {
		console.log("e", type, e);
		if (type === "add") {
			setValue(value + 1);
		} else {
			setValue(value - 1);
		}
	}

	return (
		<div className={styles.ab}>
			<div className={styles.ab__title}>num value: {value}</div>
			<div className={styles.ab__btn} onClick={() => handleValue("add", event)}>
				+
			</div>
			<div
				className={styles.ab__btn}
				onClick={() => handleValue("reduce", event)}
			>
				-
			</div>
		</div>
	);
}
