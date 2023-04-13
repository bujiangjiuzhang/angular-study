### Angular的学习

## 命令

1. 创建项目： `ng new xxx`；
2. 创建组件： `ng generate component xxx`
3. 创建服务： `ng generate service xxx`
4. 创建路由模块： `ng generate module xxx --flat --module=app`

### 基础语法

1. Angular 插值语法：{{ }}；
2. 循环： 指令 *ngFor

   ```
   <div *ngFor="let product of products">
   ```

   使用模板字符串使用内部值的属性需要用`[]`括起来

   ```
   <div *ngFor="let product of products">
       <span [title]="product.name + ' details'">{{product.name}}</span>
     </div>
   ```
3. 判断：*ngIf

   ```**
    <p *ngIf="product.description">
       Description: {{ product.description }}
     </p>
   ```
4. click事件：需要使用`()`包起来

   ```**
   <button type="button" (click)="share()">
       Share
     </button>
   ```
5. 类绑定： `[class.some-css-class]="some-condition"`: 给元素添加css类。
6. 属性绑定： `[hero]="selectedHero"`（这是一种单向数据绑定）。
7. 依赖注入：@Injectable() 服务(通过给 @Injectable() 装饰器添加 providedIn: 'root' 元数据的形式，用`根注入器`将你的服务注册成为提供者)

```
@Injectable({
  providedIn: 'root',
})
```

### 父子组件传值

### 装饰器

1. @[Component](https://angular.cn/api/core/Component)():声明一个组件时，在组件类上要用@Component装饰器来告知Angular这是一个组件。
2. @[Input](https://angular.cn/api/core/Input)() 装饰器: 装饰器定义一个属性，并指出此属性值要从本组件的父组件中传入。

   ```
   export class ProductAlertsComponent {

     @Input() product!: Product;

   }
   ```
3. @[Output](https://angular.cn/api/core/Output)()装饰器：实现子组件将信息，通过事件的形式通知到父级组件。

   1）使用`EventEmitter()` 的实例定义一个名为 `notify` 的属性

   ```**export**** ****class**** ****ProductAlertsComponent**** ****{****
   export class ProductAlertsComponent {
     @Input() product: Product | undefined;
     @Output() notify = new EventEmitter();
   }
   ```

   2）增加事件绑定，并调用 `notify.emit()` 方法。

   ```
   <p *ngIf="product && product.price > 700">
     <button type="button" (click)="notify.emit()">Notify Me</button>
   </p>
   ```

   <p *ngIf="product && product.price > 700">
     <button type="button" (click)="notify.emit()">Notify Me</button>
   </p>
4.

### 路由配置

1. 在 `app.module.ts` 中，添加路由

   ```javascript
   imports: [
   BrowserModule,
   ReactiveFormsModule,
   RouterModule.forRoot([
   { path: '', component: ProductListComponent },
   { path: 'products/:productId', component: ProductDetailsComponent },
   ])
   ]
   ```

### 生命周期钩子

1. `ngOnInit()`:放置初始逻辑，组件创建完就会调用。

### 管道

1. 转为大写：内置管道`UppercasePipe`，绑定表达式中的 uppercase 位于管道操作符 | 后面，用来调用内置管道 UppercasePipe。

```
{{hero.name | uppercase}} Details
```

### 数据绑定

1. 数据双向绑定： `[(ngModel)]`: ngModel属于一个可选模块 FormsModule，你必须自行添加此模块才能使用该指令（把 FormsModule 添加到 @NgModule 的 imports 数组）。

   ```
   <div>
     <label for="name">Hero name: </label>
     <input id="name" [(ngModel)]="hero.name" placeholder="name">
   </div>
   ```

### 路由

1.  `RouterOutlet`

```
<router-outlet></router-outlet>
```
<router-outlet> 会告诉路由器要在哪里显示路由的视图。


### 注意点

1. 生成的最外层style.css用来放公共样式。
2. 直接绑定模板时，属性必须为公共属性。
   ```
   constructor(public messageService: MessageService) {}
   ```
