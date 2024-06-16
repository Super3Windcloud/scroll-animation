import { useEffect, useState } from 'react';

export const useImagePreloader = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function preloadImages() {
      const imageModules = import.meta.globEager('../img/*.jpg');
      const imagePromises = Object.values(imageModules).map((module) => {
        //使用了Object.values来获取存储在imageModules对象中的所有值（
        const image = new Image(); // 创建一个图片对象
        image.src = module.default;
        return image;
      });
      const loadedImages = await Promise.all(imagePromises); // 等待所有图片加载完成
      console.log(loadedImages);
      setImages(loadedImages);
    }

    // 调用预加载图片函数
    preloadImages();
  }, []); //用useEffect来监听组件的渲染，只在组件第一次渲染时执行预加载图片函数
  return images;
  console.log(images);
};
