(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),s=(a(12),a(3)),l=a(4),c=a(6),u=a(5);a(13);function h(e,t){var a=[];if(e.length<=1)return e;var n=e.slice();switch(t){case 0:return function e(t,a,n,r,o){if(a===n)return;var i=Math.floor((a+n)/2);e(r,a,i,t,o),e(r,i+1,n,t,o),function(e,t,a,n,r,o){var i=t,s=t,l=a+1;for(;s<=a&&l<=n;)o.push([s,l]),r[s]<=r[l]?(o.push([i,r[s]]),e[i++]=r[s++]):(o.push([i,r[l]]),e[i++]=r[l++]);for(;s<=a;)o.push([s,s]),o.push([i,r[s]]),e[i++]=r[s++];for(;l<=n;)o.push([l,l]),o.push([i,r[l]]),e[i++]=r[l++]}(t,a,i,n,r,o)}(e,0,e.length-1,n,a),a;case 1:return function e(t,a,n,r){if(a<n){var o=function(e,t,a,n){for(var r=e[a],o=t-1,i=t;i<a;i++)if(e[i]<r){o++,n.push([o,e[o],i,e[i]]);var s=e[o];e[o]=e[i],e[i]=s}n.push([o+1,e[o+1],a,e[a]]);var l=e[o+1];return e[o+1]=e[a],e[a]=l,o+1}(t,a,n,r);e(t,a,o-1,r),e(t,o+1,n,r)}}(e,0,e.length-1,a),a;case 2:return function(e,t){for(var a=e.length,n=a/2-1;n>=0;n--)m(e,a,n,t);for(var r=a-1;r>0;r--){t.push([0,e[0],r,e[r]]);var o=e[0];e[0]=e[r],e[r]=o,m(e,r,0,t)}}(e,a),a;case 3:return function(e,t){for(var a=0;a<e.length;a++)for(var n=0;n<e.length-a-1;n++)if(e[n]>e[n+1]){var r=e[n];e[n]=e[n+1],e[n+1]=r,t.push([n,n+1]),t.push([n,e[n],n+1,e[n+1]])}else t.push([n,n]),t.push([n,e[n],n,e[n]])}(e,a),a}}function m(e,t,a,n){var r=a,o=2*a+1,i=2*a+2;if(e[o]>e[r]&&o<t&&(r=o),e[i]>e[r]&&i<t&&(r=i),r!==a){n.push([a,e[a],r,e[r]]);var s=e[a];e[a]=e[r],e[r]=s,m(e,t,r,n)}}var d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={array:[],numTotalBars:100,sortAnimationSpeed:1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.randomArray()}},{key:"randomArray",value:function(){for(var e,t,a=[],n=this.state.numTotalBars,r=document.getElementsByClassName("array-bar"),o=0;o<n;o++)a.push((e=1,t=500,Math.floor(Math.random()*t+e)));setTimeout((function(){for(var e=0;e<a.length;e++)r[e].style.backgroundColor="blue"}),1),this.setState({array:a})}},{key:"testSortingAlgorithm",value:function(){var e=this.state.array,t=document.getElementsByClassName("array-bar"),a=e.slice().sort((function(e,t){return e-t}));this.setState({array:a}),setTimeout((function(){for(var a=0;a<e.length;a++)t[a].style.backgroundColor="green"}),1)}},{key:"mergeAnimationDecoder",value:function(e){console.log(this.state.array);var t=h(this.state.array.slice(),e);console.log(this.state.array);for(var a=this.state.sortAnimationSpeed,n=function(e){var n=document.getElementsByClassName("array-bar");if(e%2!==1){var r=t[e][0],o=t[e][1],i=n[r].style,s=n[o].style;setTimeout((function(){i.backgroundColor="blue",s.backgroundColor="orange"}),e*a),setTimeout((function(){i.backgroundColor="orange",s.backgroundColor="blue"}),e*a)}else setTimeout((function(){var a=t[e][0],r=t[e][1];n[a].style.height="".concat(r,"px")}),e*a)},r=0;r<t.length;r++)n(r)}},{key:"bubbleAnimationDecoder",value:function(e){for(var t=h(this.state.array.slice(),e),a=this.state.sortAnimationSpeed,n=function(e){var n=document.getElementsByClassName("array-bar");if(e%2!==1){var r=t[e][0],o=t[e][1],i=n[r].style,s=n[o].style;setTimeout((function(){i.backgroundColor="blue",s.backgroundColor="orange"}),e*a)}else setTimeout((function(){var a=t[e][0],r=t[e][1],o=t[e][2],i=t[e][3];n[a].style.height="".concat(r,"px"),n[o].style.height="".concat(i,"px")}),e*a)},r=0;r<t.length;r++)n(r)}},{key:"heapAnimationDecoder",value:function(e){for(var t=h(this.state.array.slice(),e),a=this.state.sortAnimationSpeed,n=function(e){var n=document.getElementsByClassName("array-bar");setTimeout((function(){var a=t[e][0],r=t[e][1],o=t[e][2],i=t[e][3],s=n[a].style;s.height="".concat(i,"px"),s.backgroundColor="blue";var l=n[o].style;l.height="".concat(r,"px"),l.backgroundColor="orange"}),e*a)},r=0;r<t.length;r++)n(r)}},{key:"quickAnimationDecoder",value:function(e){for(var t=h(this.state.array.slice(),e),a=this.state.sortAnimationSpeed,n=function(e){var n=document.getElementsByClassName("array-bar");setTimeout((function(){var a=t[e][0],r=t[e][1],o=t[e][2],i=t[e][3],s=n[a].style;s.height="".concat(i,"px"),s.backgroundColor="blue";var l=n[o].style;l.height="".concat(r,"px"),l.backgroundColor="orange"}),e*a)},r=0;r<t.length;r++)n(r)}},{key:"render",value:function(){var e=this,t=this.state.array.slice();return r.a.createElement("div",{className:"array-container"},r.a.createElement("div",null,r.a.createElement("h1",null,"Sorting Algorithm Visualizer"),r.a.createElement("h1",null,"Name: William Del Barrio"),r.a.createElement("p1",null,"This web application was made using mostly React(React Native) as well as React JS, Javascript, HTML, and CSS. The component below represents a random array in which each bar has a value and an index. The value of each bar is represented by the height of the bar (bars that are taller have larger values compared to shorter bars) and the index (position in the array) is represented by location. A bar with an index of 0 would be found at the left most region of the array/component and the index will increase as you move to the right.")),t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:"blue",height:"".concat(e,"px")}})})),r.a.createElement("div",null,r.a.createElement("button",{id:"randArrayButton",onClick:function(){e.randomArray()}},"Generate New Array"),r.a.createElement("button",{onClick:function(){e.mergeAnimationDecoder(0)}},"Merge Sort"),r.a.createElement("button",{onClick:function(){e.quickAnimationDecoder(1)}},"Quick Sort"),r.a.createElement("button",{onClick:function(){e.heapAnimationDecoder(2)}},"Heap Sort"),r.a.createElement("button",{onClick:function(){e.bubbleAnimationDecoder(3)}},"Bubble Sort"),r.a.createElement("button",{onClick:function(){e.testSortingAlgorithm()}},"Check Algorithm")),r.a.createElement("div",null,r.a.createElement("label",{for:"barNumInput"},"Size of Array:"),r.a.createElement("input",{type:"number",id:"barNumInput",min:1,max:300,step:1,value:this.state.numTotalBars,onChange:function(){var t=document.getElementById("barNumInput").value;e.randomArray(),e.setState({numTotalBars:t})}})),r.a.createElement("div",null,r.a.createElement("label",{for:"sortAnimationSlider"},"Speed of Sorting (number of milliseconds between animations):"),r.a.createElement("input",{type:"number",className:"sortSlider",id:"sortAnimationSlider",min:1,max:1e3,step:100,value:this.state.sortAnimationSpeed,onChange:function(){var t=document.getElementById("sortAnimationSlider").value;e.setState({sortAnimationSpeed:t})}})),r.a.createElement("br",null),r.a.createElement("p1",null,'To sort the area, click one of the sorting style buttons ("Merge Sort", "Quick Sort", "Heap Sort", or "Bubble Sort") and watch as the array is sorted by value in increasing order (Do not press any other buttons while the array is currently sorting). After waiting for the array to sort, you can click "Check Algorithm" to see if the array is sorted. If sorted, the array bars will turn green. While the array is being sorted/animations are occuring, do not press any other buttons. If you want to increase or decrease the size of the array, change the value in the "Size of Array" box and press "Generate New Array". To change the speed of the array, change the value in the "Speed of Sorting" box.'),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p1",null,"**Note: Due to the current program and the way the application was built, if you press any sorting button while the array is still sorting, the sort animation will run again meaning the same steps will be taken as the first animation although the end result is the same. I believe this issue has mostly to do with how react's framework handles rendering the page. I have tried to implement logic to the sorting buttons to be disabled while rendering and have also created a sorting state to give feedback on if the application is currently sorting or not but I was not able to find a method to disable the button while the animations are occuring and then enable them when the animation ends. I am currently working on other projects but will come back to fix this issue when I have more time.**"))}}]),a}(r.a.Component);a(14);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6e86f0b5.chunk.js.map