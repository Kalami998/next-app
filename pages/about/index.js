// [name].css 只支持在全局将应用于你的应用程序中的所有页面和组件。 由于样式表的全局特性，并且为了避免冲突，你应该 只在 pages/_app.js 文件中导入（import）样式表。
// import "./index.css";

//  通过 [name].module.css 文件命名约定来支持 CSS 模块 。
import styles from "./about.module.css";
// 在 export default 前处理
export async function getStaticProps(props) {
  console.log("获取方法", props);
  return {
    props: {
      title: "about",
    },
  };
}
export default function aboutPage(context) {
  console.log("上下文", context);
  return (
    <div class={styles.ab}>
      <div class={styles.ab__title}>Hello Word!</div>
    </div>
  );
}
