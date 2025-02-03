import{d as N,u as X,e as U,f as Z,j as ee,t as se,g as le,h as I,i as q,k as l,l as te,w as ae,m as ie,R as T,n as ue,p as re,q as ne,D as ce,v as oe,x as ve,y as he,C as de,z as me,A as ye,B as pe,E as _,F as b,G as j,H as ge,I as fe,J as w,K as He}from"./app-Cim2Hrzd.js";const Re=["/allFiles.json.html","/404.html","/","/category/","/tag/","/Blog/","/star/","/timeline/"],ke="SLIMSEARCH_QUERY_HISTORY",p=_(ke,[]),qe=()=>{const{queryHistoryCount:a}=w;return{enabled:a>0,queryHistories:p,addQueryHistory:r=>{p.value=Array.from(new Set([r,...p.value.slice(0,a-1)]))},removeQueryHistory:r=>{p.value=[...p.value.slice(0,r),...p.value.slice(r+1)]}}},$=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),we="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:M}=w,g=_(we,[]),xe=()=>({enabled:M>0,resultHistories:g,addResultHistory:u=>{{const r={link:$(u),display:u.display};"header"in u&&(r.header=u.header),g.value=[r,...g.value.slice(0,M-1)]}},removeResultHistory:u=>{g.value=[...g.value.slice(0,u),...g.value.slice(u+1)]}}),Qe=a=>{const u=ce(),r=U(),x=oe(),n=I(0),f=q(()=>n.value>0),v=ve([]);return he(()=>{const{search:Q,terminate:d}=de(),H=ye(m=>{const{resultsFilter:S=t=>t,querySplitter:y,suggestionsFilter:A,...i}=u.value;m?(n.value+=1,Q(m,r.value,i).then(t=>S(t,m,r.value,x.value)).then(t=>{n.value-=1,v.value=t}).catch(t=>{console.warn(t),n.value-=1,n.value||(v.value=[])})):v.value=[]},w.searchDelay-w.suggestDelay,{maxWait:5e3});me([a,r],([m])=>H(m.join(" "))),pe(()=>{d()})}),{isSearching:f,results:v}};var Ce=N({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:u}){const r=X(),x=U(),n=Z(ee),{addQueryHistory:f,queryHistories:v,removeQueryHistory:Q}=qe(),{resultHistories:d,addResultHistory:H,removeResultHistory:m}=xe(),S=se(a,"queries"),{results:y,isSearching:A}=Qe(S),i=le({isQuery:!0,index:0}),t=I(0),h=I(0),E=q(()=>v.value.length>0||d.value.length>0),C=q(()=>y.value.length>0),L=q(()=>y.value[t.value]||null),B=()=>{const{isQuery:e,index:s}=i;s===0?(i.isQuery=!e,i.index=e?d.value.length-1:v.value.length-1):i.index=s-1},O=()=>{const{isQuery:e,index:s}=i;s===(e?v.value.length-1:d.value.length-1)?(i.isQuery=!e,i.index=0):i.index=s+1},P=()=>{t.value=t.value>0?t.value-1:y.value.length-1,h.value=L.value.contents.length-1},Y=()=>{t.value=t.value<y.value.length-1?t.value+1:0,h.value=0},z=()=>{h.value<L.value.contents.length-1?h.value+=1:Y()},G=()=>{h.value>0?h.value-=1:P()},D=e=>e.map(s=>He(s)?s:l(s[0],s[1])),J=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[c,k=""]=fe(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(o=>l("div",D([c,...o,k])))}return e.display.map(s=>l("div",D(s)))},R=()=>{t.value=0,h.value=0,u("updateQuery",""),u("close")},K=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},n.value.queryHistory),v.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:i.isQuery&&i.index===s}],onClick:()=>{u("updateQuery",e)}},[l(b,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:c=>{c.preventDefault(),c.stopPropagation(),Q(s)}})]))])),V=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},n.value.resultHistory),d.value.map((e,s)=>l(T,{to:e.link,class:["slimsearch-result-item",{active:!i.isQuery&&i.index===s}],onClick:()=>{R()}},()=>[l(b,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>D(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:c=>{c.preventDefault(),c.stopPropagation(),m(s)}})]))]));return te("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const s=L.value.contents[h.value];f(a.queries.join(" ")),H(s),r.push($(s)),R()}}else if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")O();else if(e.key==="Enter"){const{index:s}=i;i.isQuery?(u("updateQuery",v.value[s]),e.preventDefault()):(r.push(d.value[s].link),R())}}}),ae([t,h],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:a.queries.length?!C.value:!E.value}],id:"slimsearch-results"},a.queries.length?A.value?l(ie,{hint:n.value.searching}):C.value?l("ul",{class:"slimsearch-result-list"},y.value.map(({title:e,contents:s},c)=>{const k=t.value===c;return l("li",{class:["slimsearch-result-list-item",{active:k}]},[l("div",{class:"slimsearch-result-title"},e||n.value.defaultTitle),s.map((o,W)=>{const F=k&&h.value===W;return l(T,{to:$(o),class:["slimsearch-result-item",{active:F,"aria-selected":F}],onClick:()=>{f(a.queries.join(" ")),H(o),R()}},()=>[o.type==="text"?null:l(o.type==="title"?ue:o.type==="heading"?re:ne,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[o.type==="text"&&o.header?l("div",{class:"content-header"},o.header):null,l("div",J(o))])])})])})):n.value.emptyResult:E.value?[K(),V()]:n.value.emptyHistory)}});export{Ce as default};
