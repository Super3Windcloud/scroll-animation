import { gsap } from 'gsap';

export const chooseAnimation = (animationType, grid) => {
  const gridWrap = grid.querySelector('.grid-wrap');
  const gridItems = grid.querySelectorAll('.grid__item');
  const gridItemsInner = [...gridItems].map((item) => item.querySelector('.grid__item-inner'));
  const timeline = gsap.timeline({
    defaults: { ease: 'none' }, //默认的缓动函数为"none"
    scrollTrigger: {
      trigger: gridWrap, //配置ScrollTrigger触发器,指定了何时触发动画,包括滚动触发的范围.
      start: 'top bottom+=5%',
      end: 'bottom top-=5%',
      scrub: true,
    },
  });

  switch (animationType) {
    case 'grid--1':
      grid.style.setProperty('--perspective', '1000px'); //设置视差距离 1000px
      grid.style.setProperty('--grid-inner-scale', '0.5'); //设置网格内元素缩放比例 0.5
      timeline
        .set(gridWrap, {
          rotationY: 25, //设置网格的Y轴旋转角度 25
        })
        .set(gridItems, {
          z: () => gsap.utils.random(-1600, 200), //设置网格元素的Z轴位置,随机数范围为-1600到200
        })
        .fromTo(
          gridItems, // 动画对象
          {
            xPercent: () => gsap.utils.random(-1000, -500), //设置网格元素的X轴位置,随机数范围为-1000到-500
          },
          {
            xPercent: () => gsap.utils.random(500, 1000), //设置网格元素的X轴位置,随机数范围为500到1000
          },
          0,
        )
        .fromTo(
          gridItemsInner,
          {
            scale: 2,
          },
          {
            scale: 0.5,
          },
          0,
        );
      break;

    case 'grid--2':
      grid.style.setProperty('--grid-width', '160%');
      grid.style.setProperty('--perspective', '2000px');
      grid.style.setProperty('--grid-inner-scale', '0.5');
      grid.style.setProperty('--grid-item-ratio', '0.8');
      grid.style.setProperty('--grid-columns', '6');
      grid.style.setProperty('--grid-gap', '14vw');

      timeline
        .set(gridWrap, {
          rotationX: 20,
        })
        .set(gridItems, {
          z: () => gsap.utils.random(-3000, -1000),
        })
        .fromTo(
          gridItems,
          {
            yPercent: () => gsap.utils.random(100, 1000), //设置网格元素的Y轴位置,随机数范围为100到1000
            rotationY: -45,
            filter: 'brightness(200%)', //filter 属性来控制亮度
          },
          {
            ease: 'power2',
            yPercent: () => gsap.utils.random(-1000, -100),
            rotationY: 45,
            filter: 'brightness(0%)',
          },
          0, //动画的起始时间
        )
        .fromTo(
          gridWrap,
          {
            rotationZ: -5,
          },
          {
            rotationX: -20,
            rotationZ: 10,
            scale: 1.2,
          },
          0,
        )
        .fromTo(
          gridItemsInner,
          {
            scale: 2,
          },
          {
            scale: 0.5,
          },
          0,
        );

      break;
    // 根据选择的动画类型进行相应的设置
    case 'grid--3':
      // 设置网格的宽度为105%
      grid.style.setProperty('--grid-width', '105%');
      // 设置网格的列数为8
      grid.style.setProperty('--grid-columns', '8');
      // 设置透视效果的深度为1500px
      grid.style.setProperty('--perspective', '1500px');
      // 设置网格内部的缩放比例为0.5
      grid.style.setProperty('--grid-inner-scale', '0.5');

      // 对网格元素的动画设置
      timeline
        .set(gridItems, {
          transformOrigin: '50% 0%', //设置网格元素的中心点为50% 0%
          z: () => gsap.utils.random(-5000, -2000), //设置网格元素的Z轴位置,随机数范围为-5000到-2000
          rotationX: () => gsap.utils.random(-65, -25), // 随机设置X轴旋转角度,范围为-65到-25
          filter: 'brightness(0%)', // 设置亮度为0%
        })
        .to(
          gridItems,
          {
            xPercent: () => gsap.utils.random(-150, 150), // 随机设置X轴的百分比偏移量,范围为-150到150
            yPercent: () => gsap.utils.random(-300, 300), // 随机设置Y轴的百分比偏移量,范围为-300到300
            rotationX: 0, // X轴旋转角度为0,恢复平衡状态
            filter: 'brightness(200%)', // 设置亮度为200%
          },
          0,
        )
        .to(
          gridWrap, // 动画对象
          {
            z: 6500, // 设置网格包裹的Z轴位置为6500
          },
          0,
        )
        .fromTo(
          gridItemsInner,
          {
            scale: 2, // 设置内部元素的缩放比例为2
          },
          {
            scale: 0.5, // 设置内部元素的缩放比例为0.5
          },
          0,
        );

      break;
    case 'grid--4':
      // 设置网格样式变量
      grid.style.setProperty('--grid-width', '50%');
      grid.style.setProperty('--perspective', '3000px');
      grid.style.setProperty('--grid-item-ratio', '0.8');
      grid.style.setProperty('--grid-columns', '3');
      grid.style.setProperty('--grid-gap', '1vw');

      // 设置时间轴动画
      timeline
        .set(gridWrap, {
          transformOrigin: '0% 50%', // 设置变换原点和旋转
          rotationY: 30,
          xPercent: -75,
        })
        .set(gridItems, {
          transformOrigin: '50% 0%', // 设置子项变换原点
        })
        .to(
          gridItems,
          {
            duration: 0.5,
            ease: 'power2',
            z: 500, // 在 Z 轴上平移
            stagger: 0.04, // 循序渐进的间隔时间
          },
          0,
        )
        .to(
          gridItems,
          {
            duration: 0.5,
            ease: 'power2.in',
            z: 0, // 恢复 Z 轴位置
            stagger: 0.04,
          },
          0.5,
        )
        .fromTo(
          gridItems,
          {
            rotationX: -70,
            filter: 'brightness(120%)', // 设置亮度
          },
          {
            duration: 1,
            rotationX: 70,
            filter: 'brightness(0%)',
            stagger: 0.04,
          },
          0,
        );
      break;
    case 'grid--5':
      grid.style.setProperty('--grid-width', '120%');
      grid.style.setProperty('--grid-columns', '8');
      grid.style.setProperty('--grid-gap', '0');

      const gridObj = getGrid(gridItems);

      timeline
        .set(gridWrap, {
          rotationX: 50,
        })
        .to(gridWrap, {
          rotationX: 30,
        })
        .fromTo(
          gridItems,
          {
            filter: 'brightness(0%)',
          },
          {
            filter: 'brightness(100%)',
          },
          0,
        )
        .to(
          gridObj.rows('even'),
          {
            xPercent: -100,
            ease: 'power1',
          },
          0,
        )
        .to(
          gridObj.rows('odd'),
          {
            xPercent: 100,
            ease: 'power1',
          },
          0,
        )
        .addLabel('rowsEnd', '>-=0.15') //添加一个标签,标记动画结束位置
        .to(
          gridItems,
          {
            ease: 'power1',
            yPercent: () => gsap.utils.random(-100, 200),
          },
          'rowsEnd',
        );
      break;
    case 'grid--6':
      grid.style.setProperty('--perspective', '2500px');
      grid.style.setProperty('--grid-width', '100%');
      grid.style.setProperty('--grid-gap', '6');
      grid.style.setProperty('--grid-columns', '3');
      grid.style.setProperty('--grid-item-ratio', '1');

      timeline.fromTo(
        gridItems,
        {
          transformOrigin: '50% 200%',
          rotationX: 0,
          yPercent: 400,
        },
        {
          yPercent: 0,
          rotationY: 360,
          opacity: 0.2,
          scale: 0.8,
          stagger: 0.03,
        },
      );

      break;
    default:
      console.error('Unknown animation type.');
      break;
  }
};
const getGrid = (selector) => {
  let elements = gsap.utils.toArray(selector), //
    bounds,
    getSubset = (axis, dimension, alternating, merge) => {
      //获取子集 列或行
      let a = [],
        subsets = {},
        onlyEven = alternating === 'even', //是否只取偶数列或行
        p;
      bounds.forEach((b, i) => {
        //遍历每个元素的边界
        let position = Math.round(b[axis] + b[dimension] / 2), //计算元素中心位置
          subset = subsets[position]; //获取元素所在的列或行
        subset || (subsets[position] = subset = []); //创建列或行
        subset.push(elements[i]); //添加元素到列或行
      });
      for (p in subsets) {
        a.push(subsets[p]); //将列或行添加到数组
      }
      if (onlyEven || alternating === 'odd') {
        a = a.filter((el, i) => !(i % 2) === onlyEven); //只取偶数列或行
      }
      if (merge) {
        let a2 = [];
        a.forEach((subset) => a2.push(...subset)); //合并列或行 添加到数组末尾
        return a2;
      }
      return a;
    };
  elements.refresh = () => (bounds = elements.map((el) => el.getBoundingClientRect())); //更新元素边界
  elements.columns = (alternating, merge) => getSubset('left', 'width', alternating, merge); //获取列
  elements.rows = (alternating, merge) => getSubset('top', 'height', alternating, merge); //获取行
  elements.refresh(); //初始化边界
  return elements;
};
