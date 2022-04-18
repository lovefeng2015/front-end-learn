## 性能优化
- 优化加载速度
- 优化渲染速度
- 优化操作体验（如节流、防抖）
- Chrome Performance API 性能监控
- Chrome lightHouse 检测工具

### 优化加载速度
#### 避免不必要的下载
 [Eliminating Unnecessary Downloads](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads)
- 清点您的网页上的自有资产和第三方资产。
- 评估每个资产的表现: 其价值及其技术性能。
- 确定这些资源是否提供了足够的价值

最快速并且优化最充分的资源是不需要发送的资源。您应当从您的应用中消除不必要的资源
- 如果该资源不可用，是否会影响网页的性能和用户体验？
- 该资源是否需要或具有 SLA？该资源是否遵循性能最佳做法: 压缩、缓存等？

#### 优化基于文本的资源的编码和传输大
##### 通过优化和压缩剩余资源来最小化整体下载大小
[Optimizing Encoding and Transfer Size of Text-Based Assets](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer)
根据资源类型（文本、图像、字体等），有许多不同的技术可供选择：可在服务器上启用的通用工具、特定内容类型的预处理优化以及需要开发人员输入的特定于资源的优化

##### 缩小：预处理和特定于上下文的优化
- 特定于内容的优化可以显著减小交付资源的大小。
- 特定于内容的优化最好作为构建/发布周期的一部分应用。

HTML页面及其包含的三种不同的内容类型：HTML 标记、CSS 样式和 JavaScript。这些内容类型中的每一种都有不同的有效内容构成规则，指示注释的规则不同，等等。我们如何减小此页面的大小？
- `代码注释`是开发人员最好的朋友，但浏览器不需要看到它们！简单地剥离CSS（），HTML（）和JavaScript（）注释可以显着减少页面的总大小。/* … */<!-- … -->// …
- "智能"CSS压缩器可能会注意到，我们正在使用一种`低效的方式`为".awesome-container"定义规则，并将两个声明折叠成一个而不影响任何其他样式，从而节省更多字节。
- `空格`（空格和制表符）是 HTML、CSS 和 JavaScript 中开发人员的便利。额外的压缩机可以剥离所有选项卡和空间。

##### 使用 GZIP 进行文本压缩

### 图像优化

[lazy-loading-images 延迟加载图像](https://web.dev/lazy-loading-images/)

[browser-level-image-lazy-loading Web 的浏览器级图像延迟加载](https://web.dev/browser-level-image-lazy-loading/)
##### 浏览器兼容性#
<img loading=lazy>由最流行的Chromium驱动的浏览器（Chrome，Edge，Opera）和Firefox支持。WebKit（Safari）的实现正在进行中。caniuse.com提供了有关跨浏览器支持的详细信息。不支持该属性的浏览器只是忽略它而不会产生副作用
目前，有两种方法可以延迟屏幕外图像的加载：

- Using the Intersection Observer API
- Using scroll, resize, or orientationchange event handlers

任何一个选项都可以让开发人员包含延迟加载功能，许多开发人员已经构建了第三方库来提供更易于使用的抽象。但是，由于浏览器直接支持延迟加载，因此不需要外部库

##### 属性loading

在 Chrome 76+ 中，您可以使用该属性完全推迟加载可通过滚动到达的屏幕外图片：loading

```Js
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```
以下是该属性支持的值：loading

- auto：浏览器的默认延迟加载行为，这与不包括属性相同。
- lazy：推迟资源的加载，直到它到达与视口的计算距离。
- eager：立即加载资源，无论它位于页面上的什么位置。

图片应包含维度属性#
当浏览器加载图像时，它不会立即知道图像的尺寸，除非明确指定了这些尺寸。要使浏览器能够在页面上为图像保留足够的空间，建议所有标记都包含 和 属性。如果未指定尺寸，则可能会发生布局偏移，这在需要一些时间加载的页面上更为明显。<img>widthheight

```JS
<img src="image.png" loading="lazy" alt="…" width="200" height="200">
```
或者，直接在内联样式中指定其值：

```JS
<img src="image.png" loading="lazy" alt="…" style="height:200px; width:200px;">
```

##### 如何处理尚不支持延迟加载的浏览器？#
创建多边形填充或使用第三方库在您的网站上延迟加载图像。该属性可用于检测浏览器是否支持该功能：loading

```JS
if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
} else {
  // fetch polyfill/third-party library
}
```
例如，lazysizes是一个流行的JavaScript惰性加载库。您可以检测对属性的支持，以便仅在不支持时才将惰性大小作为回退库加载。其工作原理如下：loadingloading

替换为以避免在不受支持的浏览器中出现预先加载。如果该属性受支持，请换取 。<img src><img data-src>loadingdata-srcsrc
如果 不支持，请加载回退 （lazysizes） 并启动它。根据 lazysize 文档，您可以使用该类来指示要延迟加载哪些图像的懒惰大小。loadinglazyload
```JS
<!-- Let's load this in-viewport image normally -->
<img src="hero.jpg" alt="…">

<!-- Let's lazy-load the rest of these images -->
<img data-src="unicorn.jpg" alt="…" loading="lazy" class="lazyload">
<img data-src="cats.jpg" alt="…" loading="lazy" class="lazyload">
<img data-src="dogs.jpg" alt="…" loading="lazy" class="lazyload">

<script>
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
</script>
```
#####  Intersection Observer
假设懒惰加载的元素采用以下基本标记模式
```HTML
<img class="lazy" src="placeholder-image.jpg" data-src="image-to-lazy-load-1x.jpg" data-srcset="image-to-lazy-load-2x.jpg 2x, image-to-lazy-load-1x.jpg 1x" alt="I'm an image!">
```
here are three relevant pieces of this markup that you should focus on:

- The class attribute, which is what you'll select the element with in JavaScript.
- The src attribute, which references a placeholder image that will appear when the page first loads.
- The data-src and data-srcset attributes, which are placeholder attributes containing the URL for the image you'll load once the element is in the viewport.

Now let's see how to use Intersection Observer in JavaScript to lazy-load images using this markup pattern:
```JS
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
```
##### 加载图像的完整指南
[The Complete Guide to Lazy Loading Images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/#method-1-trigger-the-image-load-using-javascript-events)

polyfill[IntersectionObserver](https://github.com/w3c/IntersectionObserver/tree/main/polyfill)
js
```js
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});

```
### CSS 中的图像
虽然标记是在网页上使用图像的最常见方式，但也可以通过 CSS背景图像属性（和其他属性）调用图像。浏览器级延迟加载不适用于 CSS 背景图像，因此，如果要延迟加载背景图像，则需要考虑其他方法。
[延迟加载图像](https://web.dev/lazy-loading-images/#images-inline-event-handlersy)

延迟加载库#
以下库可用于延迟加载图像。

- [lazysizes](https://github.com/aFarkas/lazysizes)是一个功能齐全的惰性加载库，可以延迟加载图像和iframe。它使用的模式与此处显示的代码示例非常相似，因为它会自动绑定到元素上的类，并要求您在 和/或属性中指定图像 URL，其内容分别交换为和/或属性。它使用 Intersection Observer（您可以对其进行 polyfill），并且可以使用许多[插件](https://github.com/aFarkas/lazysizes#available-plugins-in-this-repo)进行扩展，以执行诸如延迟加载视频之类的操作。了解有关使用[懒惰大小的更多](https://web.dev/use-lazysizes-to-lazyload-images/)信息。lazyload<img>data-srcdata-srcsetsrcsrcset
- [vanilla](https://github.com/verlok/vanilla-lazyload)-lazyload是用于延迟加载图像、背景图像、视频、iframe 和脚本的轻量级选项。它利用Intersection Observer，支持响应式图像，并启用浏览器级延迟加载。
- [lozad.js](https://github.com/ApoorvSaxena/lozad.js)是另一个仅使用 Intersection Observer 的轻量级选项。因此，它具有高性能，但需要先进行多边填充，然后才能在较旧的浏览器上使用它。
- [yall.js](https://github.com/malchata/yall.js)是一个使用 Intersection Observer 并回退到事件处理程序的库。它与IE11和主流浏览器兼容。
- 如果你需要一个特定于 React 的延迟加载库，请考虑[react-lazyload](https://github.com/twobin/react-lazyload)。虽然它不使用 Intersection Observer，但它确实为那些习惯于使用 React 开发应用程序的人提供了一种熟悉的延迟加载图像的方法。

### JavaScript 启动优化


您可以通过以下方式降低JavaScript 的网络传输成本：

- 仅发送用户需要的代码。
  - 使用代码拆分将 JavaScript 分解为关键和不重要的部分。像webpack这样的模块捆绑器支持代码拆分。
  - 懒洋洋地加载非关键代码。
- 缩小
  - 使用UglifyJS 来缩小ES5 代码。
  - 使用babel-minify或uglify-es来缩小 ES2015+。
- 压缩
  - 至少，使用gzip压缩基于文本的资源。
  - 考虑使用Brotli ~q11。Brotli在压缩比上优于gzip。它帮助 CertSimple 节省了17% 的压缩 JS 字节大小，LinkedIn节省了4% 的加载时间。
- 删除未使用的代码。
  - 确定可以通过DevTools代码覆盖率删除或懒惰加载的代码机会。
  - 使用babel-preset-env和 browserlist 来避免转译现代浏览器中已有的功能。高级开发人员可能会发现，仔细分析他们的 webpack 捆绑包有助于发现修剪不需要的依赖关系的机会。
  - 有关剥离代码，请参阅树摇动，Closure Compiler的高级优化和库修剪插件，如lodash-babel插件或webpack的ContextReplacementPlugin，用于Moment.js等库。
- 缓存代码以最大程度地减少网络行程。
  - 使用HTTP 缓存来确保浏览器有效地缓存响应。确定脚本的最佳生存期（最长期限）并提供验证令牌 （ETag），以避免传输未更改的字节。
  - Service Worker 缓存可以使您的应用程序网络具有弹性，并让您能够快速访问V8 的代码缓存等功能。
  - 使用长期缓存，以避免重新获取未更改的资源。如果使用 Webpack，请参 阅文件名哈希。

  