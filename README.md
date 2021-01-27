# 下载jquery https://jquery.com/download/
Production version - 用于实际的网站中，已被精简和压缩。

Development version - 用于测试和开发（未压缩，是可读的代码）
## 网页内按钮  background-color:按钮颜色-- \value:背景颜色
```cpp
<button style="background-color:White" value="White">白色</button>
```
颜色代码：http://xh.5156edu.com/page/z1015m9220j18754.html
### 新建js文件
```cpp
$("button").click(
    function()
    {
        var color = this.value;
        $("body").css("background-color",color);
    }
)
```
#### 引入新建的js文件（一定要在这些代码的下面）
```cpp
<script src="a.js"></script>
```
##### 整体代码格式
```cpp
<!doctype html>
<head>
    <meta charset="utf-8">
    <title>点击改变背景颜色</title>
    <script src="jquery-3.2.1.min.js"></script><!--官网下载：https://jquery.com/download/-->

</head>

<body>
<button style="background-color:White" value="White">白色</button><!--background-color:按钮颜色--><!--value:背景颜色-->
<button style="background-color:red" value="red">红色</button>
<button style="background-color:green" value="green">绿色</button>
<button style="background-color:yellow" value="yellow">黄色</button>

<div class="github">
    <a href="https://github.com/laddzhao"><img src="img/GitHub.gif" style="position:absolute;left:500px;top:200px;"></a>
</div>

<script src="a.js"></script><!--引入自己写的js文件-->
```
