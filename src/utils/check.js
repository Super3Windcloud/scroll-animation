// //检测浏览器是否支持 CSS 变量
// export const supportsCssVars = function () {
// 	document.documentElement.className = 'js'
// 	let temp = document.createElement('style')
// 	temp.innerHTML = 'root: { --tmp-var: bold; }'
// 	document.head.appendChild(temp)
// 	const isSupport = !!(
// 		window.CSS &&
// 		window.CSS.supports &&
// 		window.CSS.supports('font-weight', 'var(--tmp-var)')
// 	)
// 	temp.parentNode.removeChild(temp)
// 	return isSupport
// }
export const supportsCssVars = () => {
  document.documentElement.className = 'js';
  let temp = document.createElement('style');
  temp.innerHTML = 'root: { --tmp-var: bold; }';
  document.head.appendChild(temp);
  const isSupport = window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)');
  temp.parentNode.removeChild(temp);
  return isSupport;
};
// 检测浏览器是否支持 CSS 变量
