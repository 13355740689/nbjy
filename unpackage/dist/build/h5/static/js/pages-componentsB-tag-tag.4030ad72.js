(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-componentsB-tag-tag"],{"0681":function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("a9e3");var n={props:{name:{type:String,default:uni.$u.props.icon.name},color:{type:String,default:uni.$u.props.icon.color},size:{type:[String,Number],default:uni.$u.props.icon.size},bold:{type:Boolean,default:uni.$u.props.icon.bold},index:{type:[String,Number],default:uni.$u.props.icon.index},hoverClass:{type:String,default:uni.$u.props.icon.hoverClass},customPrefix:{type:String,default:uni.$u.props.icon.customPrefix},label:{type:[String,Number],default:uni.$u.props.icon.label},labelPos:{type:String,default:uni.$u.props.icon.labelPos},labelSize:{type:[String,Number],default:uni.$u.props.icon.labelSize},labelColor:{type:String,default:uni.$u.props.icon.labelColor},space:{type:[String,Number],default:uni.$u.props.icon.space},imgMode:{type:String,default:uni.$u.props.icon.imgMode},width:{type:[String,Number],default:uni.$u.props.icon.width},height:{type:[String,Number],default:uni.$u.props.icon.height},top:{type:[String,Number],default:uni.$u.props.icon.top},stop:{type:Boolean,default:uni.$u.props.icon.stop}}};t.default=n},"1af7":function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("d81d");t.default={data:function(){return{close1:!0,close2:!0,close3:!0,radios:[{checked:!0},{checked:!1},{checked:!1}],checkboxs:[{checked:!0},{checked:!1},{checked:!1}]}},methods:{radioClick:function(i){this.radios.map((function(t,e){t.checked=e===i}))},checkboxClick:function(i){this.checkboxs[i].checked=!this.checkboxs[i].checked}}}},3130:function(i,t,e){"use strict";e.r(t);var n=e("5340"),c=e("d759");for(var o in c)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return c[i]}))}(o);e("3fad");var u=e("f0c5"),a=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"59765974",null,!1,n["a"],void 0);t["default"]=a.exports},"3fad":function(i,t,e){"use strict";var n=e("e77a"),c=e.n(n);c.a},5340:function(i,t,e){"use strict";e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){}));var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+i.labelPos],on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.clickHandler.apply(void 0,arguments)}}},[i.isImg?e("v-uni-image",{staticClass:"u-icon__img",style:[i.imgStyle,i.$u.addStyle(i.customStyle)],attrs:{src:i.name,mode:i.imgMode}}):e("v-uni-text",{staticClass:"u-icon__icon",class:i.uClasses,style:[i.iconStyle,i.$u.addStyle(i.customStyle)],attrs:{"hover-class":i.hoverClass}},[i._v(i._s(i.icon))]),""!==i.label?e("v-uni-text",{staticClass:"u-icon__label",style:{color:i.labelColor,fontSize:i.$u.addUnit(i.labelSize),marginLeft:"right"==i.labelPos?i.$u.addUnit(i.space):0,marginTop:"bottom"==i.labelPos?i.$u.addUnit(i.space):0,marginRight:"left"==i.labelPos?i.$u.addUnit(i.space):0,marginBottom:"top"==i.labelPos?i.$u.addUnit(i.space):0}},[i._v(i._s(i.label))]):i._e()],1)},c=[]},5920:function(i,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={"uicon-level":"","uicon-column-line":"","uicon-checkbox-mark":"","uicon-folder":"","uicon-movie":"","uicon-star-fill":"","uicon-star":"","uicon-phone-fill":"","uicon-phone":"","uicon-apple-fill":"","uicon-chrome-circle-fill":"","uicon-backspace":"","uicon-attach":"","uicon-cut":"","uicon-empty-car":"","uicon-empty-coupon":"","uicon-empty-address":"","uicon-empty-favor":"","uicon-empty-permission":"","uicon-empty-news":"","uicon-empty-search":"","uicon-github-circle-fill":"","uicon-rmb":"","uicon-person-delete-fill":"","uicon-reload":"","uicon-order":"","uicon-server-man":"","uicon-search":"","uicon-fingerprint":"","uicon-more-dot-fill":"","uicon-scan":"","uicon-share-square":"","uicon-map":"","uicon-map-fill":"","uicon-tags":"","uicon-tags-fill":"","uicon-bookmark-fill":"","uicon-bookmark":"","uicon-eye":"","uicon-eye-fill":"","uicon-mic":"","uicon-mic-off":"","uicon-calendar":"","uicon-calendar-fill":"","uicon-trash":"","uicon-trash-fill":"","uicon-play-left":"","uicon-play-right":"","uicon-minus":"","uicon-plus":"","uicon-info":"","uicon-info-circle":"","uicon-info-circle-fill":"","uicon-question":"","uicon-error":"","uicon-close":"","uicon-checkmark":"","uicon-android-circle-fill":"","uicon-android-fill":"","uicon-ie":"","uicon-IE-circle-fill":"","uicon-google":"","uicon-google-circle-fill":"","uicon-setting-fill":"","uicon-setting":"","uicon-minus-square-fill":"","uicon-plus-square-fill":"","uicon-heart":"","uicon-heart-fill":"","uicon-camera":"","uicon-camera-fill":"","uicon-more-circle":"","uicon-more-circle-fill":"","uicon-chat":"","uicon-chat-fill":"","uicon-bag-fill":"","uicon-bag":"","uicon-error-circle-fill":"","uicon-error-circle":"","uicon-close-circle":"","uicon-close-circle-fill":"","uicon-checkmark-circle":"","uicon-checkmark-circle-fill":"","uicon-question-circle-fill":"","uicon-question-circle":"","uicon-share":"","uicon-share-fill":"","uicon-shopping-cart":"","uicon-shopping-cart-fill":"","uicon-bell":"","uicon-bell-fill":"","uicon-list":"","uicon-list-dot":"","uicon-zhihu":"","uicon-zhihu-circle-fill":"","uicon-zhifubao":"","uicon-zhifubao-circle-fill":"","uicon-weixin-circle-fill":"","uicon-weixin-fill":"","uicon-twitter-circle-fill":"","uicon-twitter":"","uicon-taobao-circle-fill":"","uicon-taobao":"","uicon-weibo-circle-fill":"","uicon-weibo":"","uicon-qq-fill":"","uicon-qq-circle-fill":"","uicon-moments-circel-fill":"","uicon-moments":"","uicon-qzone":"","uicon-qzone-circle-fill":"","uicon-baidu-circle-fill":"","uicon-baidu":"","uicon-facebook-circle-fill":"","uicon-facebook":"","uicon-car":"","uicon-car-fill":"","uicon-warning-fill":"","uicon-warning":"","uicon-clock-fill":"","uicon-clock":"","uicon-edit-pen":"","uicon-edit-pen-fill":"","uicon-email":"","uicon-email-fill":"","uicon-minus-circle":"","uicon-minus-circle-fill":"","uicon-plus-circle":"","uicon-plus-circle-fill":"","uicon-file-text":"","uicon-file-text-fill":"","uicon-pushpin":"","uicon-pushpin-fill":"","uicon-grid":"","uicon-grid-fill":"","uicon-play-circle":"","uicon-play-circle-fill":"","uicon-pause-circle-fill":"","uicon-pause":"","uicon-pause-circle":"","uicon-eye-off":"","uicon-eye-off-outline":"","uicon-gift-fill":"","uicon-gift":"","uicon-rmb-circle-fill":"","uicon-rmb-circle":"","uicon-kefu-ermai":"","uicon-server-fill":"","uicon-coupon-fill":"","uicon-coupon":"","uicon-integral":"","uicon-integral-fill":"","uicon-home-fill":"","uicon-home":"","uicon-hourglass-half-fill":"","uicon-hourglass":"","uicon-account":"","uicon-plus-people-fill":"","uicon-minus-people-fill":"","uicon-account-fill":"","uicon-thumb-down-fill":"","uicon-thumb-down":"","uicon-thumb-up":"","uicon-thumb-up-fill":"","uicon-lock-fill":"","uicon-lock-open":"","uicon-lock-opened-fill":"","uicon-lock":"","uicon-red-packet-fill":"","uicon-photo-fill":"","uicon-photo":"","uicon-volume-off-fill":"","uicon-volume-off":"","uicon-volume-fill":"","uicon-volume":"","uicon-red-packet":"","uicon-download":"","uicon-arrow-up-fill":"","uicon-arrow-down-fill":"","uicon-play-left-fill":"","uicon-play-right-fill":"","uicon-rewind-left-fill":"","uicon-rewind-right-fill":"","uicon-arrow-downward":"","uicon-arrow-leftward":"","uicon-arrow-rightward":"","uicon-arrow-upward":"","uicon-arrow-down":"","uicon-arrow-right":"","uicon-arrow-left":"","uicon-arrow-up":"","uicon-skip-back-left":"","uicon-skip-forward-right":"","uicon-rewind-right":"","uicon-rewind-left":"","uicon-arrow-right-double":"","uicon-arrow-left-double":"","uicon-wifi-off":"","uicon-wifi":"","uicon-empty-data":"","uicon-empty-history":"","uicon-empty-list":"","uicon-empty-page":"","uicon-empty-order":"","uicon-man":"","uicon-woman":"","uicon-man-add":"","uicon-man-add-fill":"","uicon-man-delete":"","uicon-man-delete-fill":"","uicon-zh":"","uicon-en":""}},"95ed":function(i,t,e){"use strict";var n=e("fd75"),c=e.n(n);c.a},"9ef0":function(i,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}));var n={uTag:e("b214").default},c=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"u-page"},[e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("基础功能")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",plain:!0,size:"mini",type:"warning"}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("自定义主题")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"success"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"error"}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("圆形标签")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",plain:!0,shape:"circle"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning",shape:"circle"}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("镂空标签")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",plain:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning",plain:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"success",plain:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"error",plain:!0}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("镂空带背景色")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",plain:!0,plainFill:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning",plain:!0,plainFill:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"success",plain:!0,plainFill:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"error",plain:!0,plainFill:!0}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("自定义尺寸")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",plain:!0,size:"mini"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"success",plain:!0,size:"large"}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("可关闭标签")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",size:"mini",closable:!0,show:i.close1},on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.close1=!1}}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning",closable:!0,show:i.close2},on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.close2=!1}}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"success",plain:!0,size:"large",closable:!0,show:i.close3},on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.close3=!1}}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("带图片和图标")]),e("v-uni-view",{staticClass:"u-demo-block__content"},[e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",size:"mini",icon:"map",plain:!0}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"warning",icon:"tags-fill"}})],1),e("v-uni-view",{staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"标签",type:"success",plain:!0,size:"large",icon:"https://cdn.uviewui.com/uview/example/tag.png"}})],1)],1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("单选标签")]),e("v-uni-view",{staticClass:"u-demo-block__content"},i._l(i.radios,(function(t,n){return e("v-uni-view",{key:n,staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"选项"+(n+1),plain:!t.checked,type:"warning",name:n},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.radioClick.apply(void 0,arguments)}}})],1)})),1)],1),e("v-uni-view",{staticClass:"u-demo-block"},[e("v-uni-text",{staticClass:"u-demo-block__title"},[i._v("多选标签")]),e("v-uni-view",{staticClass:"u-demo-block__content"},i._l(i.checkboxs,(function(t,n){return e("v-uni-view",{key:n,staticClass:"u-page__tag-item"},[e("u-tag",{attrs:{text:"选项"+(n+1),plain:!t.checked,type:"warning",name:n},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.checkboxClick.apply(void 0,arguments)}}})],1)})),1)],1)],1)},o=[]},b8f1:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-page__tag-item[data-v-399240ba]{margin-right:20px}.u-demo-block__content[data-v-399240ba]{flex-direction:row;flex-wrap:wrap;align-items:center}',""]),i.exports=t},bd3b:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */uni-view[data-v-59765974], uni-scroll-view[data-v-59765974], uni-swiper-item[data-v-59765974]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}@font-face{font-family:uicon-iconfont;src:url(https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf) format("truetype")}.u-icon[data-v-59765974]{display:flex;align-items:center}.u-icon--left[data-v-59765974]{flex-direction:row-reverse;align-items:center}.u-icon--right[data-v-59765974]{flex-direction:row;align-items:center}.u-icon--top[data-v-59765974]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-59765974]{flex-direction:column;justify-content:center}.u-icon__icon[data-v-59765974]{font-family:uicon-iconfont;position:relative;display:flex;flex-direction:row;align-items:center}.u-icon__icon--primary[data-v-59765974]{color:#3c9cff}.u-icon__icon--success[data-v-59765974]{color:#5ac725}.u-icon__icon--error[data-v-59765974]{color:#f56c6c}.u-icon__icon--warning[data-v-59765974]{color:#f9ae3d}.u-icon__icon--info[data-v-59765974]{color:#909399}.u-icon__img[data-v-59765974]{height:auto;will-change:transform}.u-icon__label[data-v-59765974]{line-height:1}',""]),i.exports=t},d759:function(i,t,e){"use strict";e.r(t);var n=e("f7f9"),c=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(o);t["default"]=c.a},dba8:function(i,t,e){"use strict";e.r(t);var n=e("1af7"),c=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(o);t["default"]=c.a},e77a:function(i,t,e){var n=e("bd3b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var c=e("4f06").default;c("744203ab",n,!0,{sourceMap:!1,shadowMode:!1})},ecc3:function(i,t,e){"use strict";e.r(t);var n=e("9ef0"),c=e("dba8");for(var o in c)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return c[i]}))}(o);e("95ed");var u=e("f0c5"),a=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,"399240ba",null,!1,n["a"],void 0);t["default"]=a.exports},f7f9:function(i,t,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("14d9"),e("caad"),e("2532"),e("c975");var c=n(e("5920")),o=n(e("0681")),u={name:"u-icon",data:function(){return{}},mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],computed:{uClasses:function(){var i=[];return i.push(this.customPrefix+"-"+this.name),this.color&&uni.$u.config.type.includes(this.color)&&i.push("u-icon__icon--"+this.color),i},iconStyle:function(){var i={};return i={fontSize:uni.$u.addUnit(this.size),lineHeight:uni.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:uni.$u.addUnit(this.top)},this.color&&!uni.$u.config.type.includes(this.color)&&(i.color=this.color),i},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var i={};return i.width=this.width?uni.$u.addUnit(this.width):uni.$u.addUnit(this.size),i.height=this.height?uni.$u.addUnit(this.height):uni.$u.addUnit(this.size),i},icon:function(){return c.default["uicon-"+this.name]||this.name}},methods:{clickHandler:function(i){this.$emit("click",this.index),this.stop&&this.preventEvent(i)}}};t.default=u},fd75:function(i,t,e){var n=e("b8f1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var c=e("4f06").default;c("6a82b83d",n,!0,{sourceMap:!1,shadowMode:!1})}}]);