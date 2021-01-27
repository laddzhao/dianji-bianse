# 下载jquery https://jquery.com/download/
Production version - 用于实际的网站中，已被精简和压缩。

Development version - 用于测试和开发（未压缩，是可读的代码）
## 网页内按钮  background-color:按钮颜色-- \value:背景颜色
```cpp
<button style="background-color:White" value="White">白色</button>
```
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
