(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{112:function(e,t,a){e.exports=a(222)},117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),s=(a(117),a(25)),i=a.n(s),l=a(39),u=a(17),m=(a(119),a(264)),d=a(265),h=a(270),p=a(251),f=a(255),v=a(97),g=a(256);a(120);var w=function(e){var t=e.title,a=e.cases,n=e.total,o=e.active,c=e.isRed,s=Object(v.a)(e,["title","cases","total","active","isRed"]);return console.log(t,o),r.a.createElement(p.a,{onClick:s.onClick,className:"infoBox ".concat(o&&"infoBox--selected"," ").concat(c&&"infoBox--red")},r.a.createElement(f.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!c&&"infoBox__cases--green")},a),r.a.createElement(g.a,{className:"infoBox__total",color:"textSecondary"},"Total=",n)))},E=a(90),b=a(14),y=a.n(b),k={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}},O=function(e,t){var a,n=[];for(var r in e.cases){if(a){var o={x:r,y:e[t][r]-a};n.push(o)}a=e[t][r]}return n};var j=function(e){var t=e.casesType,a=Object(n.useState)({}),o=Object(u.a)(a,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=O(e,t);s(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,(null===c||void 0===c?void 0:c.length)>0&&r.a.createElement(E.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:c}]},options:k}))};a(217);var x=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,r.a.createElement("strong",null,y()(e.cases).format("0,0"))))})))},C=a(96),N=a(266),_=a(267),S={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},D=function(e){var t=Object(C.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},M=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},z=a(268),I=a(269);a(218);var W=function(e){var t=e.countries,a=e.casesType,n=e.center,o=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(z.a,{center:n,zoom:o},r.a.createElement(I.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:S[t].hex,fillColor:S[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*S[t].multiplier},r.a.createElement(_.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",y()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",y()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",y()(e.deaths).format("0,0")))))}))}(t,a)))},B=(a(219),a(93)),R=a(94),A=a(98),T=a(95),H=(a(220),a(258)),P=a(257),V=function(e){Object(A.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).state={news:[]},n}return Object(R.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cryptic-ravine-96718.herokuapp.com/").then((function(e){return e.json()})).then((function(t){e.setState({news:t.news})}))}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"App"},this.state.news.map((function(e,t,a){return r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement(P.a,null,r.a.createElement(H.a,{size:"small",color:"primary",href:e.link},"Read More")))})))}}]),a}(r.a.Component),F=a(259),G=a(260),q=a(261),L=Object(F.a)({root:{maxWidth:300}});function Y(){var e=L();return r.a.createElement(p.a,{className:e.root},r.a.createElement(G.a,null,r.a.createElement(q.a,{component:"img",alt:"Mask",height:"200",src:"https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2",title:"World Health Organization (WHO)"}),r.a.createElement(f.a,null,r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},"World Health Organization (WHO)"),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},"People and organizations who want to help fight the pandemic and support WHO and partners can donate through the COVID-Solidarity Response Fund."))),r.a.createElement(P.a,null,r.a.createElement(H.a,{size:"small",color:"primary",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"},"Donate Now")))}a(221);var J=a(263),U=a(262),X=Object(F.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),Z=[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXJ9FZYmy2LAVPpwczaCEwLP0pn1hbCP0RxA&usqp=CAU",desc:"Wear a mask when physical distancing is not possible.",tit:"Mask",url:"https://www.today.com/style/how-wear-face-mask-correctly-common-mistakes-avoid-t178177"},{img:"https://i.dailymail.co.uk/1s/2020/03/03/02/25459132-0-image-a-47_1583203921789.jpg",desc:"Clean your hands often. Use soap and water, or an alcohol-based hand rub.",tit:"Wash your hands often.",url:"https://www.dailymail.co.uk/femail/article-8067781/Guide-washing-hands-proves-thousands-people-not-practising-good-hygiene-amid-coronavirus.html"},{img:"https://images.theconversation.com/files/334931/original/file-20200514-77255-kbx2n7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",desc:"Maintain a safe distance from anyone who is coughing or sneezing.",tit:"Social Distancing",url:"https://theconversation.com/coronavirus-and-cognitive-bias-the-surprising-reasons-people-cheat-at-social-distancing-137987"},{img:"https://www.lbhf.gov.uk/sites/default/files/styles/lbhf_style_s/public/covid-19-easy-read-houses.png?itok=k2lV6VCW",desc:"as much as you can",tit:"Stay Home,Stay Safe",url:"https://www.lbhf.gov.uk/coronavirus-covid-19/coronavirus-covid-19-easy-read/stay-home"},{img:"https://www.verywellhealth.com/thmb/fYTLYPLDGFXw0c9tvCkvflxHZRE=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/hispanic-girl-sneezing-in-classroom-138710775-5aec486f0e23d90037849531.jpg",desc:"Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.",tit:"Do it into your elbow or a tissue!",url:"https://www.verywellhealth.com/why-you-should-cover-your-cough-770726"},{img:"https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",desc:"If you have a fever, cough and difficulty breathing, seek medical attention.",tit:"Seek Medical Attention",url:"https://news.cgtn.com/news/2020-04-12/How-to-seek-medical-advice-safely-during-the-COVID-19-outbreak--PCMDf9Pyog/index.html"}];function K(){var e=X();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Precautions for COVID19")),r.a.createElement(U.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(J.a,{container:!0,spacing:4},Z.map((function(t){return r.a.createElement(J.a,{item:!0,key:t,xs:12,sm:6,md:4},r.a.createElement(p.a,{className:e.card},r.a.createElement(q.a,{className:e.cardMedia,image:t.img,title:"Image title"}),r.a.createElement(f.a,{className:e.cardContent},r.a.createElement(g.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.tit),r.a.createElement(g.a,null,t.desc)),r.a.createElement(P.a,null,r.a.createElement(H.a,{size:"small",color:"primary",href:t.url},"Know More"))))}))),r.a.createElement(P.a,null,r.a.createElement(H.a,{size:"small",color:"primary",href:"https://www.who.int/"},"For more information visit www.who.int")))))}var Q=function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({}),s=Object(u.a)(c,2),v=s[0],g=s[1],E=Object(n.useState)([]),b=Object(u.a)(E,2),k=b[0],O=b[1],C=Object(n.useState)([]),N=Object(u.a)(C,2),_=N[0],S=N[1],z=Object(n.useState)([]),I=Object(u.a)(z,2),B=I[0],R=I[1],A=Object(n.useState)("cases"),T=Object(u.a)(A,2),H=T[0],P=T[1],F=Object(n.useState)({lat:34.80746,lng:-40.4796}),G=Object(u.a)(F,2),q=G[0],L=G[1],J=Object(n.useState)(3),U=Object(u.a)(J,2),X=U[0],Z=U[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=D(e);O(t),S(e),R(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(H);var Q=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){o(a),g(e),L([e.countryInfo.lat,e.countryInfo.long]),Z(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"up"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2947/2947656.svg",width:"50",height:"50"}),r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(d.a,{variant:"outlined",value:a,onChange:Q},r.a.createElement(h.a,{value:"worldwide"},"Worldwide"),k.map((function(e){return r.a.createElement(h.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(w,{onClick:function(e){return P("cases")},title:"Active Cases",isRed:!0,active:"cases"===H,cases:M(v.todayCases),total:y()(v.cases).format("0.0a")}),r.a.createElement(w,{onClick:function(e){return P("recovered")},title:"Recovered",active:"recovered"===H,cases:M(v.todayRecovered),total:y()(v.recovered).format("0.0a")}),r.a.createElement(w,{onClick:function(e){return P("deaths")},title:"Deaths",isRed:!0,active:"deaths"===H,cases:M(v.todayDeaths),total:y()(v.deaths).format("0.0a")})),r.a.createElement(W,{countries:_,casesType:H,center:q,zoom:X}),r.a.createElement(p.a,{className:"card3"},r.a.createElement(f.a,null,r.a.createElement("div",{className:"new"},r.a.createElement("h1",null,"Flash News on COVID19"),r.a.createElement(V,null))))),r.a.createElement(p.a,{className:"app__right"},r.a.createElement(f.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Top Cases by Country"),r.a.createElement(x,{countries:B}),r.a.createElement("h3",null,"Worldwide New ",H),r.a.createElement(j,{casesType:H}),r.a.createElement("div",{className:"whoi"},r.a.createElement(Y,null)))))),r.a.createElement("div",{className:"down"},r.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.547f8df9.chunk.js.map