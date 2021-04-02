(this.webpackJsonpstateherdimmunity=this.webpackJsonpstateherdimmunity||[]).push([[0],{103:function(t,e,n){},104:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){},115:function(t,e,n){},116:function(t,e,n){},121:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(0),c=n.n(i),o=n(33),r=n.n(o),s=(n(83),n(16)),d=n.n(s),l=n(19),u=n(63),j=n(18),h=n(64),b=n.n(h),p=(n(103),n(104),n(149)),m=n(150),O=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"dummy-header"}),Object(a.jsxs)(p.a,{id:"navbar",variant:"dark",expand:"lg",className:"fixed-top navbar-expand",children:[Object(a.jsx)(p.a.Brand,{id:"title",children:"COVID-19 Herd Immunity Projections"}),Object(a.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(m.a,{className:"ml-auto",id:"tabs",children:[Object(a.jsx)(m.a.Link,{href:"#map-container",children:"Map"}),Object(a.jsx)(m.a.Link,{href:"#methods",children:"Methods"})]})})]})]})},f=(n(110),n(52)),x=function(){return Object(a.jsx)(f.a,{fluid:"true",id:"methods-container",children:Object(a.jsx)(f.a,{id:"text-container",children:Object(a.jsxs)("div",{id:"text",children:[Object(a.jsx)("h1",{children:"Methods"}),Object(a.jsxs)("p",{children:["We assume herd immunity is reached at 70% of the population (",Object(a.jsx)("a",{href:"https://www.who.int/news-room/q-a-detail/herd-immunity-lockdowns-and-covid-19",target:"_blank",rel:"noopener noreferrer",style:{color:"black",fontWeight:"bold"},children:"the real percentage is unknown"}),")."]}),Object(a.jsx)("p",{children:"Our herd immunity population size is the total population * .7. We subtract from this number the amount of people who have already been vaccinated. Then we see how many people have been vaccinated in the last week. We calculate how many weeks it would take to reach the herd immunity population size if we continued at the same rate as last week. The 95% success rate of the vaccine is accounted for by assuming that 5% of the recorded vaccines will not have any effect upon the date."}),Object(a.jsx)("h3",{children:"Potential Problems With Method"}),Object(a.jsx)("p",{children:"According to the CDC, reinfections are possible but rare. Given that it is still relatively early into the pandemic I don't feel comfortable assuming that anybody who has contracted COVID-19 will gain immunity to the disease. Therefore I have chosen to assume that the only way to gain immunity against the disease is to get the vaccine. This could be a problem because it could be true that reinfections help gain progress towards herd immunity, but as of right now there's simply no way to know how much progress that is."})]})})})},v=(n(111),function(){return Object(a.jsx)(p.a,{id:"footer",variant:"dark",expand:"lg",className:"navbar-expand",children:Object(a.jsx)("div",{children:"\xa9 2021 Alperen Yildiz"})})}),g=n(143),y=n(48),w=(n(112),function(t){return Object(a.jsxs)("div",{id:"map-container",children:[Object(a.jsx)("div",{id:"message",children:t.showMap?"Hover over a state to see projected herd immunity date.":"Click on header titles to sort by attributes."}),Object(a.jsx)("div",{id:"toggle-table",children:Object(a.jsx)(g.a,{id:"btn",style:{backgroundColor:"#2c3e50",color:"white"},onClick:t.buttonClick,children:t.showMap?"View Table":"View Map"})}),t.showMap&&Object(a.jsx)(y.ComposableMap,{id:"map","data-tip":"",projection:"geoAlbersUsa",children:Object(a.jsx)(y.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",children:function(e){return e.geographies.map((function(e){return Object(a.jsx)(y.Geography,{geography:e,onMouseEnter:function(){t.setTooltipContent(e.properties.name)},onMouseLeave:function(){t.setTooltipContent("")},style:{default:{fill:"#c46210",outline:"none",stroke:"black",strokeWidth:.5},hover:{fill:"#660000",outline:"none"},pressed:{fill:"#800020",outline:"none"}}},e.rsmKey)}))}})})]})}),k=n(72),C=n(144),D=n(151),M=n(147),N=n(152),T=n(148),W=["Texas","Florida","Ohio","North Carolina","Indiana","Tennessee","Missouri","Alabama","South Carolina","Kentucky","Louisiana","Oklahoma","Mississippi","Iowa","Arkansas","Kansas","Utah","West Virginia","Idaho","Nebraska","Alaska","Montana","North Dakota","South Dakota","Wyoming","Maine"],A=function(t){var e=Math.round(.95*t.doses),n=t.population,a=Math.round(.95*t["v-diff-7"]);if(0===Number(a)){var i=new Date("December 21, 2020");a=e/function(t,e){var n=(t.getTime()-e.getTime())/1e3;return n/=604800,Math.abs(Math.round(n))}(new Date,i)}var c=(.7*Number(n.replace(/,/g,""))-e)/a,o=new Date;o.setDate(o.getDate()+7*c);var r=["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()],s=o.getDay()+1,d=o.getFullYear();return d<2021?{date:o,stringDate:"Not enough data."}:{date:o,stringDate:r+" "+s+", "+d}},S=Object(C.a)({root:{minWidth:275,maxWidth:300,backgroundColor:"white",color:"black"},title:{fontSize:28,textAlign:"center",fontWeight:"bold",color:"white"},pos:{marginBottom:12},info:{fontSize:16,textAlign:"center"},statsContainer:{marginTop:12},stat:{textAlign:"center",display:"flex",flexDirection:"column"}});function z(t){var e,n=S(),i=function(t){return null===t||void 0===t?t:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return Object(a.jsx)(D.a,{className:n.root,variant:"outlined",children:Object(a.jsxs)(M.a,{children:[Object(a.jsx)(N.a,{className:n.title,gutterBottom:!0,style:{backgroundColor:(e=t.content,W.includes(e)?"#AA0000":"#00308F")},children:t.content}),Object(a.jsxs)(N.a,{className:n.info,variant:"h5",component:"h2",children:[t.content," is expected to achieve herd immunity around ",A(t.immunizationData).stringDate]}),Object(a.jsxs)(T.a,{container:!0,spacing:3,className:n.statsContainer,children:[Object(a.jsx)(T.a,{item:!0,xs:6,className:n.stat,children:Object(a.jsxs)(N.a,{component:"h3",style:{fontWeight:"bold"},children:["Vaccinated ",i(t.immunizationData.doses)]})}),Object(a.jsx)(T.a,{item:!0,xs:6,className:n.stat,children:Object(a.jsxs)(N.a,{component:"h3",style:{maxWidth:100,fontWeight:"bold"},children:["Population ",i(t.immunizationData.population)]})}),Object(a.jsxs)(T.a,{item:!0,xs:12,className:n.stat,children:[Object(a.jsx)(N.a,{component:"h3",style:{fontWeight:"bold"},children:"Percent Vaccinated"}),Object(a.jsx)(N.a,{component:"h3",style:{fontWeight:"bold"},children:t.immunizationData["pct-vaccinated"]})]})]})]})})}n(115);var I=function(t){return Object(a.jsx)("div",{id:"parent",children:function(e,n){if(e)return Object(a.jsx)("div",{className:"customTooltip",children:Object(a.jsx)(k.a,{className:"tooltip",children:Object(a.jsx)(z,{content:t.content,immunizationData:n})})})}(t.content,function(e){if(e)return t.data.filter((function(t){return t.state===e}))[0]}(t.content))})},P=n(8),V=(n(116),function(t){return Number(t.replace(/,/g,""))}),B=function(t){var e=Object(i.useState)([]),n=Object(j.a)(e,2),c=n[0],o=n[1],r=Object(i.useState)({states:!0,vaccinations:!1,population:!1,percent:!1,date:!1}),s=Object(j.a)(r,2),d=s[0],u=s[1],h=["State","Vaccinations","Population","Pct. Vaccinated","Projected Date"];Object(i.useEffect)((function(){o(t.data)}),[t.data]);var b=function(t,e){o(e?Object(l.a)(c).sort((function(e,n){return V(n[t])-V(e[t])})):Object(l.a)(c).sort((function(e,n){return-1*(V(n[t])-V(e[t]))})))},p=function(t){var e=t.doses/V(t.population);return(100*parseFloat(e)).toFixed(2)+"%"};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{id:"table-container",children:Object(a.jsxs)("table",{id:"data-table",children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:h.map((function(t,e){return Object(a.jsx)("th",{onClick:function(){!function(t){switch(t){case h[1]:b("doses",!d.vaccinations),u(Object(P.a)(Object(P.a)({},d),{},{vaccinations:!d.vaccinations}));break;case h[2]:b("population",!d.population),u(Object(P.a)(Object(P.a)({},d),{},{population:!d.population}));break;case h[3]:b("vaccinated",!d.percent),u(Object(P.a)(Object(P.a)({},d),{},{percent:!d.percent}));break;case h[4]:d.date?(o(Object(l.a)(c).sort((function(t,e){return-1*(A(e).date-A(t).date)}))),u(Object(P.a)(Object(P.a)({},d),{},{date:!1}))):(o(Object(l.a)(c).sort((function(t,e){return A(e).date-A(t).date}))),u(Object(P.a)(Object(P.a)({},d),{},{date:!0})));break;default:d.states?(o(Object(l.a)(c).sort((function(t,e){var n=t.state.toUpperCase(),a=e.state.toUpperCase();return n>a?-1:n<a?1:0}))),u(Object(P.a)(Object(P.a)({},d),{},{states:!1}))):(o(Object(l.a)(c).sort((function(t,e){var n=t.state.toUpperCase(),a=e.state.toUpperCase();return n<a?-1:n>a?1:0}))),u(Object(P.a)(Object(P.a)({},d),{},{states:!0})))}}(t)},children:Object(a.jsx)("div",{className:"header-item",children:t})},e)}))})}),Object(a.jsx)("tbody",{children:Object.keys(c).map((function(t,e){var n,i=c[t];return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:i.state}),Object(a.jsx)("td",{children:(n=i.doses,n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}),Object(a.jsx)("td",{children:i.population}),Object(a.jsx)("td",{children:p(i)}),Object(a.jsx)("td",{children:A(i).stringDate})]},e)}))})]})})})},F=function(t){var e=Object(i.useState)(!1),n=Object(j.a)(e,2),c=n[0],o=n[1];return Object(a.jsxs)("div",{id:"vis-container",children:[t.loading?"":Object(a.jsxs)("div",{children:[Object(a.jsx)(w,{setTooltipContent:t.setContent,buttonClick:function(){o(!c)},showMap:!c}),Object(a.jsx)(I,{data:t.data,content:t.content})]}),c?Object(a.jsx)(B,{data:t.data}):""]})},E=n(71),U=n.n(E);window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?document.getElementById("navbar").style.padding="5px 10px":document.getElementById("navbar").style.padding="30px 10px"};var J=function(){var t=Object(i.useState)(""),e=Object(j.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)([]),r=Object(j.a)(o,2),s=r[0],h=r[1],p=Object(i.useState)(!0),m=Object(j.a)(p,2),f=m[0],g=m[1];return Object(i.useEffect)((function(){g(!0),function(){var t=Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(U.a.immunizationDataAPI);case 2:e=t.sent,h(Object(l.a)(e.data)),g(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)(O,{}),Object(a.jsx)(F,{setContent:c,loading:f,data:s,content:n}),Object(a.jsx)("div",{id:"methods",children:Object(a.jsx)(x,{})}),Object(a.jsx)(v,{})]})};n(117);r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root"))},71:function(t,e){t.exports={immunizationDataAPI:"https://dataviz.nbcnews.com/projects/covid-data-files/plan-your-shot.json"}},83:function(t,e,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.c89b2be0.chunk.js.map