(this.webpackJsonpstateherdimmunity=this.webpackJsonpstateherdimmunity||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),o=n.n(i),s=n(29),c=n.n(s),r=(n(80),n(33)),l=(n(81),n(45)),d=(n(85),function(e){var t=e.setTooltipContent;return Object(a.jsxs)("div",{id:"map-container",children:[Object(a.jsx)("div",{id:"message",children:"Hover over a state to see projected herd immunity date."}),Object(a.jsx)(l.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa",children:Object(a.jsx)(l.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",children:function(e){return e.geographies.map((function(e){return Object(a.jsx)(l.Geography,{geography:e,onMouseEnter:function(){t(e.properties.name)},onMouseLeave:function(){t("")},style:{default:{fill:"#D6D6DA",outline:"none",stroke:"black",strokeWidth:.5},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)}))}})})]})}),h=n(15),u=n.n(h),m=n(67),b=n(59),j=n(60),p=n.n(j),f=n(68),x=n(139),O=n(146),v=n(142),g=n(147),y=n(143),w=["Texas","Florida","Ohio","North Carolina","Indiana","Tennessee","Missouri","Alabama","South Carolina","Kentucky","Louisiana","Oklahoma","Mississippi","Iowa","Arkansas","Kansas","Utah","West Virginia","Idaho","Nebraska","Alaska","Montana","North Dakota","South Dakota","Wyoming","Maine"],k=Object(x.a)({root:{minWidth:275,maxWidth:300,backgroundColor:"white",color:"black"},title:{fontSize:28,textAlign:"center",fontWeight:"bold",color:"white"},pos:{marginBottom:12},info:{fontSize:16,textAlign:"center"},statsContainer:{marginTop:12},stat:{textAlign:"center",display:"flex",flexDirection:"column"}});function D(e){var t,n=k();return Object(a.jsx)(O.a,{className:n.root,variant:"outlined",children:Object(a.jsxs)(v.a,{children:[Object(a.jsx)(g.a,{className:n.title,gutterBottom:!0,style:{backgroundColor:(t=e.content,w.includes(t)?"#AA0000":"#00308F")},children:e.content}),Object(a.jsxs)(g.a,{className:n.info,variant:"h5",component:"h2",children:[e.content," is expected to achieve herd immunity around ",function(){var t=Math.round(.95*e.immunizationData["doses-number"]),n=e.immunizationData.population,a=Math.round(.95*e.immunizationData["v-diff-7"]);if(0===Number(a)){var i=new Date("December 21, 2020");a=t/function(e,t){var n=(e.getTime()-t.getTime())/1e3;return n/=604800,Math.abs(Math.round(n))}(new Date,i)}var o=(.7*Number(n.replace(/,/g,""))-t)/a,s=new Date;return s.setDate(s.getDate()+7*o),["January","February","March","April","May","June","July","August","September","October","November","December"][s.getMonth()]+" "+(s.getDay()+1)+", "+s.getFullYear()+"."}()]}),Object(a.jsxs)(y.a,{container:!0,spacing:3,className:n.statsContainer,children:[Object(a.jsx)(y.a,{item:!0,xs:6,className:n.stat,children:Object(a.jsxs)(g.a,{component:"h3",style:{fontWeight:"bold"},children:["Vaccinated ",e.immunizationData["doses-number"]]})}),Object(a.jsx)(y.a,{item:!0,xs:6,className:n.stat,children:Object(a.jsxs)(g.a,{component:"h3",style:{maxWidth:100,fontWeight:"bold"},children:["Population ",e.immunizationData.population]})}),Object(a.jsxs)(y.a,{item:!0,xs:12,className:n.stat,children:[Object(a.jsx)(g.a,{component:"h3",style:{fontWeight:"bold"},children:"Percent Vaccinated"}),Object(a.jsx)(g.a,{component:"h3",style:{fontWeight:"bold"},children:e.immunizationData["pct-vaccinated"]})]})]})]})})}n(106);var M=function(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],s=n[1],c=Object(i.useState)(!0),l=Object(r.a)(c,2),d=l[0],h=l[1];Object(i.useEffect)((function(){h(!0),function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://dataviz.nbcnews.com/projects/20201221-plan-your-shot-map/data/plan-your-shot.json");case 2:t=e.sent,s(Object(m.a)(t.data)),h(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);return Object(a.jsx)("div",{id:"parent",children:d?"":function(t,n,i){if(t)return Object(a.jsx)("div",{className:"customTooltip",children:Object(a.jsx)(f.a,{className:"tooltip",children:Object(a.jsx)(D,{content:e.content,immunizationData:n})})})}(e.content,function(e){if(e)return o.filter((function(t){return t.state===e}))[0]}(e.content))})},N=(n(107),n(144)),T=n(145),W=function(){return Object(a.jsxs)(N.a,{id:"navbar",variant:"dark",expand:"lg",className:"fixed-top navbar-expand",children:[Object(a.jsx)(N.a.Brand,{id:"title",children:"COVID-19 Herd Immunity Projections"}),Object(a.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(T.a,{className:"ml-auto",id:"tabs",children:[Object(a.jsx)(T.a.Link,{href:"#map-container",children:"Map"}),Object(a.jsx)(T.a.Link,{href:"#methods",children:"Methods"})]})})]})},A=(n(111),n(50)),C=function(){return Object(a.jsx)(A.a,{fluid:"true",id:"methods-container",children:Object(a.jsx)(A.a,{id:"text-container",children:Object(a.jsxs)("div",{id:"text",children:[Object(a.jsx)("h1",{children:"Methods"}),Object(a.jsxs)("p",{children:["The point of this project was to showcase my skills using React and various libraries. As such, the math behind the projections is not too complicated and should not be used as a point of reference to see when herd immunity will actually be achieved. We assume herd immunity is reached at 70% of the population (",Object(a.jsx)("a",{href:"https://www.who.int/news-room/q-a-detail/herd-immunity-lockdowns-and-covid-19",target:"_blank",rel:"noopener noreferrer",style:{color:"black",fontWeight:"bold"},children:"the real percentage is unknown"}),")."]}),Object(a.jsx)("p",{children:"Our herd immunity population size is the total population * .7. We subtract from this number the amount of people who have already been vaccinated. Then we see how many people have been vaccinated in the last week. We calculate how many weeks it would take to reach the herd immunity population size if we continued at the same rate as last week. The 95% success rate of the vaccine is accounted for by assuming that 5% of the recorded vaccines will not have any effect upon the date."}),Object(a.jsx)("h3",{children:"Potential Problems With Method"}),Object(a.jsx)("p",{children:"According to the CDC, reinfections are possible but rare. Given that it is still relatively early into the pandemic I don't feel comfortable assuming that anybody who has contracted COVID-19 will gain immunity to the disease. Therefore I have chosen to assume that the only way to gain immunity against the disease is to get the vaccine. This could be a problem because it could be true that reinfections help gain progress towards herd immunity, but as of right now there's simply no way to know how much progress that is."})]})})})},z=(n(112),function(){return Object(a.jsx)(N.a,{id:"footer",variant:"dark",expand:"lg",className:"navbar-expand",children:Object(a.jsx)("div",{children:"\xa9 2021 Alperen Yildiz"})})});window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?document.getElementById("navbar").style.padding="5px 10px":document.getElementById("navbar").style.padding="30px 10px"};var I=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(a.jsxs)("div",{id:"app",children:[Object(a.jsx)(W,{}),Object(a.jsxs)("div",{id:"map",name:"map",children:[Object(a.jsx)(d,{setTooltipContent:o}),Object(a.jsx)(M,{content:n})]}),Object(a.jsx)("div",{id:"methods",children:Object(a.jsx)(C,{})}),Object(a.jsx)(z,{})]})};n(113);c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))},80:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.cee0d693.chunk.js.map