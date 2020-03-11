# AdminLTEClearButton

清除表单输入框的内容的小按钮，仅在 AdminLTE 中使用。


## 快速开始

1\.  引入 js 和 css 文件

```html
<!-- AdminLTE 其它需要的文件 -->
<link  href="path/to/adminlte-clear-button.css" rel="stylesheet">
<script src="path/to/adminlte-clear-button.js')}}"></script>
```


2\.  创建输入框  
由于输入框在上层使用了 `form-control` 样式，所以输入框不需要添加任何样式。  


```html
<div class="form-control" data-toggle="clearbutton">
    <input type="text" name="name" placeholder="姓名" value=""/>
</div>
```


3\. 查看效果  
![效果](https://github.com/everalan/adminlet-clean-button/raw/master/screenshot.png)

## DOM 属性参考
### data-toggle="clearbutton"
添加了该属性后，将自动获得清除内容的功能  

### data-do-not-focus
添加该属性后，清除内容后，输入框不聚焦。
```html
<div class="form-control" data-toggle="clearbutton" data-do-not-focus>
    <input type="text" name="name" placeholder="姓名" value=""/>
</div>
```
## 手动调用

````js
$('input').clearbutton(options);
````

### 可选参数
| 参数          | 类型    | 必填   | 说明                           |
| ------------ | ------- | ----- | ----------------------------- |
| focusOnClear | Boolean | 否     | 清空内容后是否聚焦，默认为聚焦    |


### 兼容 select2
`select2` 自带的 `allowClear` 参数生成的关闭按钮太丑了。`clearbutton` 对此做了一个替代。
只要在 `select2` 调用后手动对生成的 `span` 元素调用 `clearbutton` 即可
````js
$('#name').select2();
$('#name + .select2-container').clearbutton();
````
## License

MIT  
