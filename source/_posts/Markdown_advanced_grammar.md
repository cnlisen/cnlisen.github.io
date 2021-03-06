---
title: Markdown语法（进阶版）
date: 2019-11-15 14:22:50
categories: 技术
tags: Markdown
---

前几天写了一份基础的Markdown语法介绍，Markdown语法十分简单，非程序员基本上看一遍都可以轻松上手，今天再写一份稍微深入一点（但平时可能用得不多，程序猿/媛应该会经常用），比如表格怎么画或者流程图怎么画这一类的深入语法讲解。
## 链接
- ### 间接链接（只显示名称）  
`[链接名称](http://链接网址)`在中括号[ ]中填上网址要显示的名称，在小括号（）中填上要链接的网址即可。  
例如：`[李森的个人博客](https://www.lisen.plus)`  
效果：[李森的个人博客](https://www.lisen.plus)  

- ### 直接链接（只显示网址）
`<https://链接网址部分>`直接在`链接网址部分`添加网址即可  
例如：`<https://www.lisen.plus>`  
效果：<https://www.lisen.plus>

## 图片
`![图片名称](https://图片网址部分)`
例如：`![惊喜](https:/***.***.***)`  
效果：![suprice](http://q1tyod6cd.bkt.clouddn.com/blog/20191201/F5bqbKCLkQk3.jpg?imageslim)
   
## 表格  
语法如下：在Markdown的表格语法中，第二行主要是定义表格的`居左`或`居中`或`居右`的属性的。  
- 当`:`在`-`左边时，居左；
- 当`:`在`-`右边时，居右；
- 当`:`在`-`两边时，居中；
- 当只有`-`左边时，默认居左；

```
|表头|表头|表头|表头|  
|-|:-|:-:|-:|   
|-|内容|内容|内容|  
|-|内容|内容|内容|
```
例子:  
```
| 姓名 | 年龄 | 是否沙雕 | 关系 |  
| :--: | --: | :-- | --- |  
| 李森 | 22 | 否 | 父亲 |  
| 雷某 | 21 | 是 | 儿子 |   
```
效果:  

| 姓名 | 年龄 | 是否沙雕 | 关系 |  
| :------: | ------: | :------ | ------ |  
| 李森 | 22 | 否 | 父亲 |  
| 雷某 | 21 | 是 | 儿子 |  

# 流程图
待更！！！
待更！！！
待更！！！
重要的事情说三遍！！！
