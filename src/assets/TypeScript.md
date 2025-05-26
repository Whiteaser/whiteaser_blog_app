相关博客：
	https://blog.csdn.net/qq1195566313/article/details/122170624
	https://blog.csdn.net/qq_33650655/article/details/141372645
	
---
## 相关依赖
### 安装ts
`npm install -g typescript`

### 监视ts文件
`tsc -w`

### nodemon
- 文件变动时自动重启应用
`npm install -g nodemon`


`npm init -y` 
- 是一个快速初始化 Node.js 项目的方式，
- 它直接创建 `package.json` 并使用默认值，适用于快速搭建项目结构

`npm install @types/node -D` 主要用于：
- **在 TypeScript 中为 Node.js 提供类型支持**
- **避免编译错误**
- **提高 IDE 的代码提示**
- **作为开发依赖（`devDependencies`）安装**

`ts-node 文件.ts`
可直接执行文件ts文件

---
## 基本类型
- 数值 number
- 布尔值 boolean
- 字符串 string
- 空值 void
- symbol
- bigint
- null 是所有类型的子类型
- undefine 是所有类型的子类型

语法
```jsx
let 变量:类型 = 值
```

```jsx
function fn():void{
}
```
tsconfig.json 配置严格模式
- 严格模式下`undefined`与 `null`不能相互赋值
```jsx
{
    "compilerOptions":{
        "strict": true
    }
}
```

 null 不能 赋予 void 类型
 ![](https://i-blog.csdnimg.cn/blog_migrate/f7cf57dbb71a0b033ced33e97bbf08d4.png)

--- 
## 任意类型
- any
- unknown

> 1. 顶级类型 any unkown (包含以下所有类型)
> 2. Object
> 3. Number String Boolean
> 4. number string boolean
> 5. 1 "str" true
> 6. never


1.没有强制限定哪种类型，随时切换类型都可以 我们可以对 any 进行任何操作，不需要检查类型

```jsx
let anys:any = 123
anys = '123'
anys = true
```

2.声明变量的时候没有指定任意类型默认为any

```jsx
let anys;
anys = '123'
anys = true
```

### `any` 与 `unkown` 区别
- `unknow` 类型不能作为 子类型 只能作为 父类型( 只能由 `any` `unknown`赋值)
- `any` 可以作为 父类型 和子类型
```jsx
let a:unknown = 6
let b:number = 3

a = b (X)
```

- any类型在对象没有这个属性的时候还在获取是不会报错的
- unknow 是不能调用属性和方法
```jsx

let obj:any = {b:1}
obj.a (J)
 
let obj:unknown = {b:1,ccc:():number=>213}
obj.b (X)
obj.ccc() (X)
```

---
## `Object` 与 `object`
### Object
- 位于 [原型链] 顶端，包含所有类型
```jsx
let a:Object = 'string'
let a:Object = 123
let a:Object = []
let a:Object = {}
let a:Object = () =>{}
```
### object
- 支持所有引用类型 数组 对象 函数
```jsx
let a:object = 'string' (X) 原始类型
let a:object = 123 (X) 原始类型
let a:object = true (X) 原始类型
let a:object = [] (J) 引用类型
let a:object = {} (J)
let a:object = () =>{} (J) 
```
### 字面量模式
- 与 Object 类似，但创建的 对象 无法添加 属性
```jsx
let a:{} = 'string'
let a:{} = 123
let a:{} = []
let a:{} = {}
let a:{} = () =>{}
```

---
## 接口
### interface
- 在 typescript 中定义对象，使用 `interface` (接口) 关键字，作用上来看是一种 约束,让 对象、函数 格式满足特定格式

#### 特性
- 接口约束的时候不能多一个属性也不能少一个属性，必须与接口保持一致
```jsx
interface Person {
    b:string,
    a:string
}
 
const person:Person  = {
    a:"213"
    //b:'123'b:'123'
}
```

- 重名 `interface` 可以合并
```jsx
interface A{name:string}
interface A{age:number}

var x:A={name:'xx',age:20}
```

- 继承
```jsx
interface A{
    name:string
}
interface B extends A{
    age:number
}
 
let obj:B = {
    age:18,
    name:"string"
}
```

- 可选属性
```jsx
//可选属性的含义是该属性可以不存在
//所以说这样写也是没问题的
interface Person {
    b?:string,
    a:string
}
 
const person:Person  = {
    a:"213"
}
```

- 任意属性 `propName: string`
```jsx
//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
interface Person {
    b?:string,
    a:string,
    [propName: string]: any;
}
 
const person:Person  = {
    a:"213",
    c:"123"
}
```

- 只读属性 `readonly
```jsx
//这样写是会报错的
//应为a是只读的不允许重新赋值
interface Person {
    b?: string,
    readonly a: string,
    [propName: string]: any;
}
 
const person: Person = {
    a: "213",
    c: "123"
}
 
person.a = 123 (X)
```

- 添加函数
```jsx
interface Person {
    b?: string,
    readonly a: string,
    [propName: string]: any;
    cb:()=>void
}
 
const person: Person = {
    a: "213",
    c: "123",
    cb:()=>{
        console.log(123)
    }
}
```

- 定义 函数约束
```jsx
interface fn{
	():
}
```


---
## 数组
### 类型
```jsx
//类型加中括号
let arr:number[] = [123]
//这样会报错定义了数字类型出现字符串是不允许的
let arr:number[] = [1,2,3,'1']
//操作方法添加也是不允许的
let arr:number[] = [1,2,3,]
arr.unshift('1')
 
 
var arr: number[] = [1, 2, 3]; //数字类型的数组
var arr2: string[] = ["1", "2"]; //字符串类型的数组
var arr3: any[] = [1, "2", true]; //任意类型的数组
```

### 数组泛型
- 语法 Array<类型>
```jsx
let arr:Array<number> = [1,2,3,4,5]
```

### 接口表示数组
- 一般用来描述类数组
```jsx
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
//表示：只要索引的类型是数字时，那么值的类型必须是数字。
```

### 多维数组
```jsx
let data:number[][] = [[1,2], [3,4]];
```

### arguments类数组
```ts
function Arr(...args:any): void {
    console.log(arguments)
    //错误的arguments 是类数组不能这样定义
    let arr:number[] = arguments (X)
}
Arr(111, 222, 333)
 
 
 
function Arr(...args:any): void {
    console.log(arguments) 
    //ts内置对象IArguments 定义
    let arr:IArguments = arguments
}
Arr(111, 222, 333)
 
//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
interface IArguments {
[index: number]: any;
length: number;
callee: Function;
}
```

### any 在数组中的应用
```jsx
//数组中可以存在任意类型
let list: any[] = ['test', 1, [],{a:1}]
```

---
## 函数扩展
### 函数的类型
```ts
function add(a:number,b:number):number{
	return a + b
}

const add = (a:number,b:number):number => a + b
```

### 可选参数
```ts
//通过?表示该参数为可选参数
const fn = (name: string, age?:number): string => {
    return name + age
}
fn('张三')
```

### 参数的默认值
```ts
const fn = (name: string = "我是默认值"): string => {
    return name
}
fn()
```

### 接口定义函数
```ts
//定义参数 num 和 num2  ：后面定义返回值的类型
interface Add {
    (num:  number, num2: number): number
}
 
const fn: Add = (num: number, num2: number): number => {
    return num + num2
}
fn(5, 5)
 
 
interface User{
    name: string;
    age: number;
}
function getUserInfo(user: User): User {
  return user
}
```

### 定义剩余参数
```ts
const fn = (array:number[],...items:any[]):any[] => {
       console.log(array,items)
       return items
}
 
let a:number[] = [1,2,3]
 
fn(a,'4','5','6')
```

### 函数重载
- 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
- 如果参数类型不同，则参数类型应设置为 **any**。
- 参数数量不同你可以将不同的参数设置为可选。
```ts
function fn(params: number): void
 
function fn(params: string, params2: number): void
 
function fn(params: any, params2?: any): void {
 
    console.log(params)
 
    console.log(params2)
 
}
 
 
 
fn(123)
 
fn('123',456)
```

--- 
## 类型用法
### 联合类型
```ts
//例如我们的手机号通常是13XXXXXXX 为数字类型 这时候产品说需要支持座机
//所以我们就可以使用联合类型支持座机字符串
let myPhone: number | string  = '010-820'
 
//这样写是会报错的应为我们的联合类型只有数字和字符串并没有布尔值
let myPhone: number | string  = true (X)
```

- 函数使用联合类型
```ts
const fn = (something:number | boolean):boolean => {
     return !!something
}
```

### 交叉类型
- 多种类型的集合，联合对象将具有所联合类型的所有成员
```ts
interface People {
  age: number,
  height： number
}
interface Man{
  sex: string
}
const xiaoman = (man: People & Man) => {
  console.log(man.age)
  console.log(man.height)
  console.log(man.sex)
}
xiaoman({age: 18,height: 180,sex: 'male'});
```

```ts

```

### 类型断言

语法
- 值 as 类型 value as string
- <类型>值 <>value
```ts
interface A {
       run: string
}
 
interface B {
       build: string
}
 
const fn = (type: A | B): string => {
       return type.run (X)
}
//这样写是有警告的应为B的接口上面是没有定义run这个属性的
```

```ts
interface A {
       run: string
}
 
interface B {
       build: string
}
 
const fn = (type: A | B): string => {
       return (type as A).run
       return (<A>type).run
}
//可以使用类型断言来推断他传入的是A接口的值
```
- 类型断言只能够「欺骗」TypeScript 编译器
- 无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误

### any 临时断言
```ts
window.abc = 123
//这样写会报错因为window没有abc这个东西
```

```ts
(window as any).abc = 123
//可以使用any临时断言在 any 类型的变量上，访问任何属性都是允许的。
```

### const 断言
- 是对字面值的断言，与const直接定义常量是有区别的
- 如果是普通类型跟直接const 声明是一样的
```ts
const names = '小满'
names = 'aa' //无法修改
 
let names2 = '小满' as const
names2 = 'aa' //无法修改
```

```ts
// 数组
let a1 = [10, 20] as const;
const a2 = [10, 20];
 
a1.unshift(30); // 错误，此时已经断言字面量为[10, 20],数据无法做任何修改
a2.unshift(30); // 通过，没有修改指针
```

### 类型断言是不具影响力的
- 在下面的例子中，将 something虽然可以 断言为 boolean 通过编译，但是并没有什么用 并不会影响结果, 因为编译过程中会删除类型断言
```ts
function toBoolean(something: any): boolean {
    return something as boolean;
}
 
toBoolean(1);
// 返回值为 1
```

 ---
## 内置对象
### ECMAScript 的内置对象
```ts
let b: Boolean = new Boolean(1)
console.log(b)
let n: Number = new Number(true)
console.log(n)
let s: String = new String('哔哩哔哩关注小满zs')
console.log(s)
let d: Date = new Date()
console.log(d)
let r: RegExp = /^1/
console.log(r)
let e: Error = new Error("error!")
console.log(e)
```

### DOM 和 BOM 的内置对象 
```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
//读取div 这种需要类型断言 或者加个判断应为读不到返回null
let div:HTMLElement = document.querySelector('div') as HTMLDivElement
document.addEventListener('click', function (e: MouseEvent) {
    
});
//dom元素的映射表
interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "main": HTMLElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableDataCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableHeaderCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}
```
### 定义Promise

如果我们不指定返回的类型TS是推断不出来返回的是什么类型

![](https://i-blog.csdnimg.cn/blog_migrate/c31cc4f464f9966351ba2edebfb6f381.png)

指定返回的类型

![](https://i-blog.csdnimg.cn/blog_migrate/23ac319d52c4eb232661ba4843ce75ce.png) 函数定义返回promise 语法规则:Promise<> 类型 

```ts
function promise():Promise<number>{
   return new Promise<number>((resolve,reject)=>{
       resolve(1)
   })
}
 
promise().then(res=>{
    console.log(res)
})
```

---
## Class 类
[详细笔记](https://blog.csdn.net/qq1195566313/article/details/122342425)

---
## 元组类型
[详细笔记](https://blog.csdn.net/qq1195566313/article/details/122342425)


---

### 枚举类型


---
### 类型推论 | 类型别名


---
### never 类型




---
## Symbol 类型




---
### 迭代器 | 生成器
面试




---
### 泛型

### 泛型约束



## tsconfig.json配置文件


---
## namespace命名空间
---
## 模块解析


---
## 声明文件


---
## Mixins混入


---
## 装饰器Decorator


---
## webpack构建ts+vue3


---
## 发布订阅模式


---
## set,map,weakSet,weakMap


---
## proxy Reflect


---
## 类型守卫


---
## 协变 逆变 双向协变


---
## 泛型工具-上


---
## 泛型工具-下


---
## infer关键字


---
## infer 提取元素的妙用


---
## TS 用法infer 递归


---
## 实战插件编写
