# stock

# 主要内容

> stock项目是什么？
>
> stock项目使用
>
> stock项目使用的技术栈
>
> stock项目实现的主要功能
>
> 我的收获

# 正文

### 1、stock项目是什么？

stock项目是一个模拟股票交易的一个小项目，主要考查了初入职场人的一个技术栈的综合运用能力，主要运用的一个框架是 **vue2**。

### 2、stock项目使用

##### 2.1 安装依赖

~~~ node
npm install
~~~

##### 2.2 启动 json server

~~~node
cd ./src/data
json-server db.json
~~~

##### 2.3 启动项目

~~~ node
npm run dev
~~~

### 3、stock项目使用的技术栈

此仓库中包含了两个版本的 stock 项目，所使用的技术栈大同小异。

> 在 **main** 仓库中，使用的是 **vuex** 进行数据的统一管理
>
> 在 *xxx* 仓库中，使用的是传统的组件化开发的模式，即props与$emit的传值方式。而且还使用了 **axios** 与 **json server** 实现了本地化的数据增删改查。

### 4、stock项目实现的主要功能

本项目主要使用了 **bootstrap** 的一个栅格布局的方式，其中的组件大多也是来自 **bootstrap**。

##### 4.1 Stock Trader页面

![image-20230101093718119](https://github.com/kilnonedre/Exercitation/blob/main/public/typora-user-images/image-20230101093718119.png)

此页面主要是介绍了一下整个游戏的游玩模式，和一些基本按键的使用方式，以及玩家刚开始的可使用资金$10000。

##### 4.2 Stocks页面

![image-20230101094248747](https://github.com/kilnonedre/Exercitation/blob/main/public/typora-user-images/image-20230101094248747.png)

在此页面玩家可以在 **Funds** 可支付的条件下自由的购买股票。前提是股票为整数，不小于0，且所花费的资金小于 **Funds**。否则，无法点击 **Buy** 按钮，而且按钮会变成 **Insufficient Funds**。

![image-20230101094602841](https://github.com/kilnonedre/Exercitation/blob/main/public/typora-user-images/image-20230101094602841.png)

##### 4.3 Portfolio页面

![image-20230101094654122](https://github.com/kilnonedre/Exercitation/blob/main/public/typora-user-images/image-20230101094654122.png)

当玩家在 **Stocks** 页面购买股票之后，在本页面中会显现出玩家购买的股票及数量。玩家也能在本页面对股票进行出售操作，当然，前提是股票为整数，不小于0，且所出售的数量小于 **Quantity**。否则，无法点击 Sell 按钮，而且按钮会变成 **Not Enough**。

![image-20230101094913838](https://github.com/kilnonedre/Exercitation/blob/main/public/typora-user-images/image-20230101094913838.png)

##### 4.4 End Day 按钮、Save按钮与Load按钮

![image-20230101095112524](https://github.com/kilnonedre/Exercitation/blob/main/public/typora-user-images/image-20230101095112524.png)

为了模拟真实的股票交易环节，我们特地设计了 **End Day** 按钮来供玩家实时更改每只股票的股价。

而且玩家也可以通过 **Save** 对当前的游戏进度进行一个存档，通过 **Load** 获取到之前的一个存档。

###  5、我的收获

* 对 **Vue2** 的搭建模式大致进行了一个了解
* 懂得了 **vue2** 适配的依赖的一个版本需求，比如 **vuex** ，当时卡了很久，以为是哪里代码出bug了，结果发现是版本问题
* 对 **vue2** 的工程化的文件布局有了一定的了解
* 了解了一些前端一些辅助依赖，比如 **json server**。
* 为了快速的编写文档，对 **MarkDow** 语法有了一定的了解
