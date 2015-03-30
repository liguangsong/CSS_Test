本节我们需要通过写css实现以下要求：

- 圆上的文字相对于浏览器左右居中；
- 圆相对于浏览器的窗口上下左右居中，圆的颜色为黑色；
- 圆里的文字相对于圆上下居中；
- 浏览器窗口改变不影响圆和文字的居中。
- 关于圆上的文字，高为浏览器高的10%，字体大小为浏览器宽高最小值的6%，（注：可了解一下css的vmin），字体颜色为黑色；
- 关于圆内的文字，字体大小为浏览器宽高最小值的6%，字体的颜色为白色；
- 关于圆的直径，则需要根据浏览器的大小来获得：如果浏览器的宽的40%大于高的60%，则圆的直径为高的60%，否则为宽的40%。
- 关于函数：


```
  getCircleDiameter(windowWidth, windowHeight) 
  // 获取圆的直径
  setCirclePlace(circleDiameter, windowHeight, windowWidth)
  // 设置圆的位置
  setTextPlace(windowHeight)
  // 设置圆上面文字的位置
  setCircleTextPlace(circleDiameter)
  // 设置圆内文字的位置
  
  // circleDiameter为圆的直径， windowHeight为浏览器的高，windowWidth为浏览器的宽
```


- 示例图片：


<a href="http://7xi7zt.com1.z0.glb.clouddn.com/css_test_example.png" style="cursor: pointer"><img src="http://7xi7zt.com1.z0.glb.clouddn.com/css_test_example.png" style="width:300px;"></a>
