!function(t,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define("LotusCalendar",[],a):"object"==typeof exports?exports.LotusCalendar=a():t.LotusCalendar=a()}(this,function(){return function(t){function a(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="",a(a.s=2)}([function(t,a,e){e(3);var r=e(4)(e(1),e(5),null,null);t.exports=r.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"lotus-calendar",props:["calendarData"],data:function(){return{isShow:!0,weekText:["一","二","三","四","五","六","日"],aMonth:[31,28,31,30,31,30,31,31,30,31,30,31],curMonthDays:0,preMonthDays:0,nextMonthDays:0,totalDaysArr:[],curYear:0,curMonth:0,curDate:0,showCurMonth:0,choseIndex:0,choseCurTime:null,showFlag:!0,prevYear:"",time:null}},components:{},methods:{clickPrevMonth:function(){this.totalDaysArr=[],this.curMonth<=0?(this.curMonth=11,this.curYear--):this.curMonth--,this.createCalendarData(this.curYear,this.curMonth,this.curDate)},clickNextMonth:function(){this.totalDaysArr=[],this.curMonth++,this.curMonth>=12&&(this.curMonth=0,this.curYear++),this.createCalendarData(this.curYear,this.curMonth,this.curDate)},clickPrevYear:function(){this.prevYear="",this.totalDaysArr=[],this.curYear--,this.createCalendarData(this.curYear,this.curMonth,this.curDate)},clickNextYear:function(){this.prevYear="",this.totalDaysArr=[],this.curYear++,this.createCalendarData(this.curYear,this.curMonth,this.curDate)},clickTargetTime:function(t){var a=t;this.totalDaysArr.map(function(t){t.day===a.day&&t.month===a.month?t.flag=!0:t.flag=!1});var e={};for(var r in a)"day"===r&&(e.day=a[r],e.day=e.day<10?"0"+e.day:e.day),"month"===r&&(e.month=a[r],a[r]<0?e.month=12:e.month=e.month+1<10?"0"+(e.month+1):e.month+1),"year"===r&&(e.year=a[r]);this.choseCurTime=e,this.showFlag=!1,this.choseCurTime.month>12&&(this.choseCurTime.month=this.choseCurTime.month-12<10?"0"+(this.choseCurTime.month-12):this.choseCurTime.month-12),this._props.calendarData.isShow=!1,this.$emit("returnDate",this.choseCurTime.year+"-"+this.choseCurTime.month+"-"+this.choseCurTime.day,this._props.calendarData.type)},clickShowCalendar:function(){this._props.calendarData.isShow=!1},show:function(){this.returnType=this._props.calendarData.type,this.showFlag=!0,this.totalDaysArr=[];var t=new Date;this.curYear=t.getFullYear(),this.curMonth=t.getMonth(),this.curDate=t.getDate(),this.createCalendarData(this.curYear,this.curMonth,this.curDate)},lotusCalendar:function(){this.show()},isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},getCurMonthDays:function(t,a){return this.isLeapYear(t)&&1===this.curMonth?this.aMonth[1]=29:this.aMonth[a]},autoPatchZero:function(t){return t<10?"0"+t:t},createCalendarData:function(t,a,e){this.showCurMonth=a,this.showCurMonth=this.autoPatchZero(this.showCurMonth+1);var r="",s=new Date(t,a,1).getDay();if(0===s&&(s=7),0===a){r=t,r-=1,this.prevYear=r,this.preMonthDays=this.getCurMonthDays(r,11)}else this.preMonthDays=this.getCurMonthDays(t,a-1);this.curMonthDays=this.getCurMonthDays(t,a),this.nextMonthDays=this.getCurMonthDays(t,a+1);for(var n=s-2;n>=0;n--){var o={day:this.preMonthDays-n,className:"gray",type:0,flag:!1,month:a-1,year:r||t};this.totalDaysArr.push(o)}for(var c=1;c<=this.curMonthDays;c++){var i={day:c,type:1,flag:!1,className:"",month:a,year:t};c===e&&(i.flag=!0,i.className="act",i.type=2),this.totalDaysArr.push(i)}for(var u=42-this.totalDaysArr.length,h=1;h<=u;h++){var l={day:h,className:"gray",type:0,flag:!1,month:a+1,year:t};l.month>=12&&(l.year+=1),this.totalDaysArr.push(l)}}},computed:{},mounted:function(){this.lotusCalendar()},created:function(){}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e(0),s=e.n(r),n={install:function(t){"undefined"!=typeof window&&window.Vue&&(t=window.Vue),t.component("lotus-calendar",s.a)}};a.default=n},function(t,a){},function(t,a){t.exports=function(t,a,e,r){var s,n=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,n=t.default);var c="function"==typeof n?n.options:n;if(a&&(c.render=a.render,c.staticRenderFns=a.staticRenderFns),e&&(c._scopeId=e),r){var i=Object.create(c.computed||null);Object.keys(r).forEach(function(t){var a=r[t];i[t]=function(){return a}}),c.computed=i}return{esModule:s,exports:n,options:c}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.calendarData.isShow?e("div",{staticClass:"lotus-calendar-wrap"},[e("div",{staticClass:"lotus-calendar"},[e("div",{staticClass:"lotus-calendar-cur-date"},[e("div",{staticClass:"lotus-calendar-center"},[e("div",{staticClass:"lotus-calendar-month"},[e("p",{staticClass:"lotus-calendar-prev",on:{click:t.clickPrevMonth}},[t._v("←")]),t._v(" "),e("p",{staticClass:"lotus-calendar-cur-text"},[t._v(t._s(t.showCurMonth)+"月")]),t._v(" "),e("p",{staticClass:"lotus-calendar-next",on:{click:t.clickNextMonth}},[t._v("→")])]),t._v(" "),e("div",{staticClass:"lotus-calendar-year"},[e("p",{staticClass:"lotus-calendar-prev",on:{click:t.clickPrevYear}},[t._v("←")]),t._v(" "),e("p",{staticClass:"lotus-calendar-cur-text"},[t._v(t._s(t.curYear))]),t._v(" "),e("p",{staticClass:"lotus-calendar-next",on:{click:t.clickNextYear}},[t._v("→")])])])]),t._v(" "),e("div",{staticClass:"lotus-calendar-week"},t._l(t.weekText,function(a,r){return e("div",{key:r,staticClass:"lotus-calendar-week-text lotus-calendar-week-range"},[t._v("\n                "+t._s(a)+"\n            ")])})),t._v(" "),e("div",{staticClass:"lotus-calendar-days"},t._l(t.totalDaysArr,function(a,r){return e("div",{key:r,staticClass:"lotus-calendar-days-text",on:{click:function(e){t.clickTargetTime(a,r)}}},[0==a.type?e("p",{class:a.flag?"lotus-calendar-days-act":"lotus-calendar-days-gray"},[t._v("\n                    "+t._s(a.day))]):1==a.type?e("p",{class:a.flag?"lotus-calendar-days-act":""},[t._v("\n                    "+t._s(a.day))]):e("p",{class:a.flag?"lotus-calendar-days-act":""},[t._v(t._s(a.day))])])}))]),t._v(" "),t.calendarData.isShow?e("div",{staticClass:"lotus-calendar-mask",on:{click:t.clickShowCalendar}}):t._e()]):t._e()},staticRenderFns:[]}}])});