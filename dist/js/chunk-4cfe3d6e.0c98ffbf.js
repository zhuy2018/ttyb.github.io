(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cfe3d6e"],{"0f6e":function(t,e,i){},"9e1f":function(t,e,i){"use strict";var s=i("0f6e"),a=i.n(s);a.a},cdfd:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("div",{staticClass:"home_top"},[t._v("\n    "+t._s(t.title)+"\n  ")]),i("div",{staticClass:"content"},[i("p",[t._v("2016年，全省盘活存量建设用地12.8万亩，完成城镇低效用地再开发10.1万亩，分别完成省政府下达年度目标任务的159.6%、167.7%。其中，杭州市、舟山市城镇低效用地再开发完成率分别达到了234.9%、239.3%。")]),i("p",[t._v("2016年，全省消化利用2006-2015年批而未供土地14.4万亩，到2016年末，全省批而未供土地总面积与2010年底相比下降了34.4万亩。全省近五年平均供地率（包括单独选址项目和城市分批次）为78%，2011年、2012年、2013年、2014年、2015年平均供地率分别为90.6%、83.7%、74.7%、54.0%、80.2%。")]),i("div",{staticClass:"echartsWrap"},[i("div",{staticClass:"echartsItem"},[i("div",{staticClass:"eTitle"},[i("span",[t._v(t._s(t.echartsTitle[0]))])]),i("div",{attrs:{id:"zz1"}})]),i("div",{staticClass:"echartsItem"},[i("div",{staticClass:"eTitle"},[i("span",[t._v(t._s(t.echartsTitle[1]))])]),i("div",{attrs:{id:"zz2"}})]),i("div",{staticClass:"echartsItem"},[i("div",{staticClass:"eTitle"},[i("span",[t._v(t._s(t.echartsTitle[2]))])]),i("div",{attrs:{id:"zz3"}})])])])])},a=[],o=(i("986a"),i("1e53"),i("24ce")),n={name:"jump",data:function(){return{title:this.$route.params.title,echartsTitle:["城镇低效用地再开发（万亩）","存量土地盘活利用（万亩）","批而未用土地消化（万亩）"]}},props:{index:String},methods:{detail:function(t){console.log(t)},back:function(){if(window.history.length<=1)return this.$router.push({path:"/"}),!1;this.$router.go(-1)},draw:function(t,e,i,s,a){var n=o.init(document.getElementById(t));n.setOption({title:{show:!1,padding:20,x:"center",textStyle:{fontSize:15,fontWeight:"bolder",color:"#000"},text:""},backgroundColor:"#f7f7f7",grid:{x:20,y:100,x2:40,y2:20,containLabel:!0},legend:{top:"14%",data:[{name:"实际完成",icon:"rect"},{name:"年度目标任务",icon:"rect"}]},yAxis:[{type:"category",show:!0,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#363e83"}},splitLine:{show:!1,lineStyle:{color:"#363e83 "}},axisLabel:{textStyle:{color:"#000",fontWeight:"normal",fontSize:"12"}},data:["丽水","台州","舟山","衢州","金华","绍兴","嘉兴","湖州","温州","宁波","杭州"]},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!0},splitLine:{show:!1}}],xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#363e83"}},splitLine:{show:!1,lineStyle:{color:"#363e83 "}},axisLabel:{inside:!1,interval:0,textStyle:{color:"#000",fontWeight:"normal",fontSize:"12"}}},series:[{name:"年度目标任务",type:"bar",label:{normal:{show:!0,position:"right"}},itemStyle:{normal:{show:!0,color:i}},data:a},{name:"实际完成",yAxisIndex:1,type:"bar",label:{normal:{show:!0,position:"insideRight"}},itemStyle:{normal:{show:!0,color:e}},data:s}]})}},mounted:function(){var t=[7,9,7,3,8,5,10,8,16,14,11],e=[19,18,12,8,13,8,13,9,22,18,16];this.draw("zz1","#00E4FF","#0888ed",t,e),this.draw("zz2","#21C392","#09638E",t,e),this.draw("zz3","#0BE2A2","#1B7E61",t,e)},created:function(){},directives:{},components:{}},l=n,r=(i("9e1f"),i("6691")),c=Object(r["a"])(l,s,a,!1,null,"345df5f4",null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4cfe3d6e.0c98ffbf.js.map