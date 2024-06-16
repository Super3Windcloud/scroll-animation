// 引入react库中的useLayoutEffect和useState方法
import { useLayoutEffect, useState } from 'react';
// 引入utils.js文件中的initSmoothScrolling、useImagePreloader、supportsCssVars和chooseAnimation方法
import { initSmoothScrolling, useImagePreloader, supportsCssVars, chooseAnimation } from './utils';
// 引入const.js文件中的gridAnimationConfig常量
import gridAnimationConfig from './const';
// 引入样式文件index.less
import './style/index.less';

// GridAnimation组件定义
function GridAnimation() {
  // 使用useState创建loading状态及其更新函数
  const [loading, setLoading] = useState(true); // 加载状态
  // 调用useImagePreloader方法返回图片预加载状态
  const images = useImagePreloader(); // 图片预加载

  // 使用useLayoutEffect创建副作用，当依赖项发生变化时执行
  useLayoutEffect(() => {
    // 页面加载后检查是否支持CSS变量，不支持则弹出警告
    supportsCssVars() ?? alert('请在支持CSS变量的现代浏览器中查看此演示');
    // 初始化平滑滚动
    initSmoothScrolling();
    // 获取所有类名为'grid'的元素
    const grids = document.querySelectorAll('.grid');
    // 遍历每个网格元素，为其选择动画
    Array.from(grids).map((grid, i) => chooseAnimation(`grid--${i + 1}`, grid)); // 选择动画
    // 设置loading状态为false
    setLoading(false);
  }, [images]);

  // 如果加载状态为true或者images长度为0，则返回loading组件
  if (loading || !images.length) return <div className='loading'></div>;

  // 返回GridAnimation组件的JSX结构
  return (
    <div>
      <main>
        {/* intro部分 */}
        <div className='intro'>
          <h1 className='intro__title'>
            <span className='intro__title-pre'>On-Scroll</span>
            <span className='intro__title-sub'>Perspective Grid Animations</span>
          </h1>
          <span className='intro__info'>Scroll moderately to fully experience the animations</span>
        </div>

        {/* 遍历gridAnimationConfig数组，生成每个section */}
        {gridAnimationConfig.map(({ sectionClassName, h3ClassName, children }, index) => (
          <section
            key={index}
            className={'content ' + sectionClassName}>
            <div className={'grid'}>
              <div className='grid-wrap'>
                {/* 遍历images数组，为每个图片生成grid__item */}
                {images.map((item, index) => (
                  <div
                    className='grid__item'
                    key={index}>
                    <img
                      className='grid__item-inner'
                      src={item.src}
                    />
                  </div>
                ))}
              </div>
            </div>
            <h3 className={'content__title ' + h3ClassName}>{children}</h3>
          </section>
        ))}
      </main>
    </div>
  );
}

// 导出GridAnimation组件
export default GridAnimation;
