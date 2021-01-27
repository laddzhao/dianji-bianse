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
##### 引入新建的js文件（一定要在这些代码的下面）
