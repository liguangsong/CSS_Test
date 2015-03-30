本节我们需要通过写css实现以下要求：

- 圆上的文字相对于浏览器左右居中；
- 圆相对于浏览器的窗口上下左右居中；
- 圆里的文字相对于圆上下居中；
- 浏览器窗口改变不影响圆和文字的居中。
- 关于圆上的文字，高为浏览器高的10%，字体大小为浏览器宽高最小值的6%（注：可了解一下css的vmin）；
- 关于圆内的文字，字体大小为浏览器宽高最小值的6%；
- 关于圆的直径，则需要根据浏览器的大小来获得：如果浏览器的宽的40%大于高的60%，则圆的直径为高的60%，否则为宽的40%。
- 关于函数：


```
  function getCircleDiameter(windowWidth, windowHeight) {

  }
```


函数是为了获取圆的直径，windowWidth为浏览器的宽，windowHeight为浏览器的高。


- 示例图片：


<a href="http://7xi7zt.com1.z0.glb.clouddn.com/css_test_example.png" style="cursor: pointer"><img src="http://7xi7zt.com1.z0.glb.clouddn.com/css_test_example.png" style="width:300px;"></a>
