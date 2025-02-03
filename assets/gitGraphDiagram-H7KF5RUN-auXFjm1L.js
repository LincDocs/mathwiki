import{s as Q}from"./chunk-VSLJSFIP-CNFu371U.js";import{c as X}from"./chunk-4KE642ED-yjDZzwLk.js";import{p as Z}from"./gitGraph-YCYPL57B-MEVJTYR7-DEFvNXSn.js";import{m as h,B as ee,w as te,S as re,v as ae,k as ne,T as ie,t as w,W as se,r as ce,I as oe,o as de,e as he,a as C,p as le,x as me,y as $e,z as ge}from"./mermaid.esm.min-C8CMVwH4.js";import"./chunk-5ZJXQJOJ-CCXzWyE8.js";import"./app-Cim2Hrzd.js";var f={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},ye=$e.gitGraph,G=h(()=>le({...ye,...me().gitGraph}),"getConfig"),o=new Q(()=>{let t=G(),e=t.mainBranchName,a=t.mainBranchOrder;return{mainBranchName:e,commits:new Map,head:null,branchConfig:new Map([[e,{name:e,order:a}]]),branches:new Map([[e,null]]),currBranch:e,direction:"LR",seq:0,options:{}}});function S(){return ge({length:7})}h(S,"getID");function K(t,e){let a=Object.create(null);return t.reduce((i,r)=>{let n=e(r);return a[n]||(a[n]=!0,i.push(r)),i},[])}h(K,"uniqBy");var fe=h(function(t){o.records.direction=t},"setDirection"),pe=h(function(t){w.debug("options str",t),t=t==null?void 0:t.trim(),t=t||"{}";try{o.records.options=JSON.parse(t)}catch(e){w.error("error while parsing gitGraph options",e.message)}},"setOptions"),xe=h(function(){return o.records.options},"getOptions"),ue=h(function(t){let e=t.msg,a=t.id,i=t.type,r=t.tags;w.info("commit",e,a,i,r),w.debug("Entering commit:",e,a,i,r);let n=G();a=C.sanitizeText(a,n),e=C.sanitizeText(e,n),r=r==null?void 0:r.map(s=>C.sanitizeText(s,n));let c={id:a||o.records.seq+"-"+S(),message:e,seq:o.records.seq++,type:i??f.NORMAL,tags:r??[],parents:o.records.head==null?[]:[o.records.head.id],branch:o.records.currBranch};o.records.head=c,w.info("main branch",n.mainBranchName),o.records.commits.set(c.id,c),o.records.branches.set(o.records.currBranch,c.id),w.debug("in pushCommit "+c.id)},"commit"),be=h(function(t){let e=t.name,a=t.order;if(e=C.sanitizeText(e,G()),o.records.branches.has(e))throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);o.records.branches.set(e,o.records.head!=null?o.records.head.id:null),o.records.branchConfig.set(e,{name:e,order:a}),_(e),w.debug("in createBranch")},"branch"),we=h(t=>{let e=t.branch,a=t.id,i=t.type,r=t.tags,n=G();e=C.sanitizeText(e,n),a&&(a=C.sanitizeText(a,n));let c=o.records.branches.get(o.records.currBranch),s=o.records.branches.get(e),l=c?o.records.commits.get(c):void 0,$=s?o.records.commits.get(s):void 0;if(l&&$&&l.branch===e)throw new Error(`Cannot merge branch '${e}' into itself.`);if(o.records.currBranch===e){let d=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},d}if(l===void 0||!l){let d=new Error(`Incorrect usage of "merge". Current branch (${o.records.currBranch})has no commits`);throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["commit"]},d}if(!o.records.branches.has(e)){let d=new Error('Incorrect usage of "merge". Branch to be merged ('+e+") does not exist");throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:[`branch ${e}`]},d}if($===void 0||!$){let d=new Error('Incorrect usage of "merge". Branch to be merged ('+e+") has no commits");throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:['"commit"']},d}if(l===$){let d=new Error('Incorrect usage of "merge". Both branches have same head');throw d.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},d}if(a&&o.records.commits.has(a)){let d=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw d.hash={text:`merge ${e} ${a} ${i} ${r==null?void 0:r.join(" ")}`,token:`merge ${e} ${a} ${i} ${r==null?void 0:r.join(" ")}`,expected:[`merge ${e} ${a}_UNIQUE ${i} ${r==null?void 0:r.join(" ")}`]},d}let m=s||"",g={id:a||`${o.records.seq}-${S()}`,message:`merged branch ${e} into ${o.records.currBranch}`,seq:o.records.seq++,parents:o.records.head==null?[]:[o.records.head.id,m],branch:o.records.currBranch,type:f.MERGE,customType:i,customId:!!a,tags:r??[]};o.records.head=g,o.records.commits.set(g.id,g),o.records.branches.set(o.records.currBranch,g.id),w.debug(o.records.branches),w.debug("in mergeBranch")},"merge"),Be=h(function(t){let e=t.id,a=t.targetId,i=t.tags,r=t.parent;w.debug("Entering cherryPick:",e,a,i);let n=G();if(e=C.sanitizeText(e,n),a=C.sanitizeText(a,n),i=i==null?void 0:i.map(l=>C.sanitizeText(l,n)),r=C.sanitizeText(r,n),!e||!o.records.commits.has(e)){let l=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw l.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},l}let c=o.records.commits.get(e);if(c===void 0||!c)throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(r&&!(Array.isArray(c.parents)&&c.parents.includes(r)))throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");let s=c.branch;if(c.type===f.MERGE&&!r)throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!a||!o.records.commits.has(a)){if(s===o.records.currBranch){let g=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw g.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},g}let l=o.records.branches.get(o.records.currBranch);if(l===void 0||!l){let g=new Error(`Incorrect usage of "cherry-pick". Current branch (${o.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},g}let $=o.records.commits.get(l);if($===void 0||!$){let g=new Error(`Incorrect usage of "cherry-pick". Current branch (${o.records.currBranch})has no commits`);throw g.hash={text:`cherryPick ${e} ${a}`,token:`cherryPick ${e} ${a}`,expected:["cherry-pick abc"]},g}let m={id:o.records.seq+"-"+S(),message:`cherry-picked ${c==null?void 0:c.message} into ${o.records.currBranch}`,seq:o.records.seq++,parents:o.records.head==null?[]:[o.records.head.id,c.id],branch:o.records.currBranch,type:f.CHERRY_PICK,tags:i?i.filter(Boolean):[`cherry-pick:${c.id}${c.type===f.MERGE?`|parent:${r}`:""}`]};o.records.head=m,o.records.commits.set(m.id,m),o.records.branches.set(o.records.currBranch,m.id),w.debug(o.records.branches),w.debug("in cherryPick")}},"cherryPick"),_=h(function(t){if(t=C.sanitizeText(t,G()),o.records.branches.has(t)){o.records.currBranch=t;let e=o.records.branches.get(o.records.currBranch);e===void 0||!e?o.records.head=null:o.records.head=o.records.commits.get(e)??null}else{let e=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw e.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},e}},"checkout");function W(t,e,a){let i=t.indexOf(e);i===-1?t.push(a):t.splice(i,1,a)}h(W,"upsert");function N(t){let e=t.reduce((r,n)=>r.seq>n.seq?r:n,t[0]),a="";t.forEach(function(r){r===e?a+="	*":a+="	|"});let i=[a,e.id,e.seq];for(let r in o.records.branches)o.records.branches.get(r)===e.id&&i.push(r);if(w.debug(i.join(" ")),e.parents&&e.parents.length==2&&e.parents[0]&&e.parents[1]){let r=o.records.commits.get(e.parents[0]);W(t,e,r),e.parents[1]&&t.push(o.records.commits.get(e.parents[1]))}else{if(e.parents.length==0)return;if(e.parents[0]){let r=o.records.commits.get(e.parents[0]);W(t,e,r)}}t=K(t,r=>r.id),N(t)}h(N,"prettyPrintCommitHistory");var Ee=h(function(){w.debug(o.records.commits);let t=Y()[0];N([t])},"prettyPrint"),ke=h(function(){o.reset(),he()},"clear"),Ce=h(function(){return[...o.records.branchConfig.values()].map((t,e)=>t.order!==null&&t.order!==void 0?t:{...t,order:parseFloat(`0.${e}`)}).sort((t,e)=>(t.order??0)-(e.order??0)).map(({name:t})=>({name:t}))},"getBranchesAsObjArray"),Le=h(function(){return o.records.branches},"getBranches"),Te=h(function(){return o.records.commits},"getCommits"),Y=h(function(){let t=[...o.records.commits.values()];return t.forEach(function(e){w.debug(e.id)}),t.sort((e,a)=>e.seq-a.seq),t},"getCommitsArray"),Me=h(function(){return o.records.currBranch},"getCurrentBranch"),Pe=h(function(){return o.records.direction},"getDirection"),Re=h(function(){return o.records.head},"getHead"),U={commitType:f,getConfig:G,setDirection:fe,setOptions:pe,getOptions:xe,commit:ue,branch:be,merge:we,cherryPick:Be,checkout:_,prettyPrint:Ee,clear:ke,getBranchesAsObjArray:Ce,getBranches:Le,getCommits:Te,getCommitsArray:Y,getCurrentBranch:Me,getDirection:Pe,getHead:Re,setAccTitle:ie,getAccTitle:ne,getAccDescription:ae,setAccDescription:re,setDiagramTitle:te,getDiagramTitle:ee},Ie=h((t,e)=>{X(t,e),t.dir&&e.setDirection(t.dir);for(let a of t.statements)ve(a,e)},"populate"),ve=h((t,e)=>{let a={Commit:h(i=>e.commit(Ae(i)),"Commit"),Branch:h(i=>e.branch(Ge(i)),"Branch"),Merge:h(i=>e.merge(Oe(i)),"Merge"),Checkout:h(i=>e.checkout(qe(i)),"Checkout"),CherryPicking:h(i=>e.cherryPick(ze(i)),"CherryPicking")}[t.$type];a?a(t):w.error(`Unknown statement type: ${t.$type}`)},"parseStatement"),Ae=h(t=>({id:t.id,msg:t.message??"",type:t.type!==void 0?f[t.type]:f.NORMAL,tags:t.tags??void 0}),"parseCommit"),Ge=h(t=>({name:t.name,order:t.order??0}),"parseBranch"),Oe=h(t=>({branch:t.branch,id:t.id??"",type:t.type!==void 0?f[t.type]:void 0,tags:t.tags??void 0}),"parseMerge"),qe=h(t=>t.branch,"parseCheckout"),ze=h(t=>{var e;return{id:t.id,targetId:"",tags:((e=t.tags)==null?void 0:e.length)===0?void 0:t.tags,parent:t.parent}},"parseCherryPicking"),He={parse:h(async t=>{let e=await Z("gitGraph",t);w.debug(e),Ie(e,U)},"parse")},D=se(),x=D==null?void 0:D.gitGraph,R=10,I=40,L=4,T=2,A=8,E=new Map,k=new Map,z=30,O=new Map,H=[],P=0,y="LR",Se=h(()=>{E.clear(),k.clear(),O.clear(),P=0,H=[],y="LR"},"clear"),V=h(t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");return(typeof t=="string"?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(a=>{let i=document.createElementNS("http://www.w3.org/2000/svg","tspan");i.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),i.setAttribute("dy","1em"),i.setAttribute("x","0"),i.setAttribute("class","row"),i.textContent=a.trim(),e.appendChild(i)}),e},"drawText"),J=h(t=>{let e,a,i;return y==="BT"?(a=h((r,n)=>r<=n,"comparisonFunc"),i=1/0):(a=h((r,n)=>r>=n,"comparisonFunc"),i=0),t.forEach(r=>{var c,s;let n=y==="TB"||y=="BT"?(c=k.get(r))==null?void 0:c.y:(s=k.get(r))==null?void 0:s.x;n!==void 0&&a(n,i)&&(e=r,i=n)}),e},"findClosestParent"),De=h(t=>{let e="",a=1/0;return t.forEach(i=>{let r=k.get(i).y;r<=a&&(e=i,a=r)}),e||void 0},"findClosestParentBT"),We=h((t,e,a)=>{let i=a,r=a,n=[];t.forEach(c=>{let s=e.get(c);if(!s)throw new Error(`Commit not found for key ${c}`);s.parents.length?(i=je(s),r=Math.max(i,r)):n.push(s),Fe(s,i)}),i=r,n.forEach(c=>{Ke(c,i,a)}),t.forEach(c=>{let s=e.get(c);if(s!=null&&s.parents.length){let l=De(s.parents);i=k.get(l).y-I,i<=r&&(r=i);let $=E.get(s.branch).pos,m=i-R;k.set(s.id,{x:$,y:m})}})},"setParallelBTPos"),Ne=h(t=>{var i;let e=J(t.parents.filter(r=>r!==null));if(!e)throw new Error(`Closest parent not found for commit ${t.id}`);let a=(i=k.get(e))==null?void 0:i.y;if(a===void 0)throw new Error(`Closest parent position not found for commit ${t.id}`);return a},"findClosestParentPos"),je=h(t=>Ne(t)+I,"calculateCommitPosition"),Fe=h((t,e)=>{let a=E.get(t.branch);if(!a)throw new Error(`Branch not found for commit ${t.id}`);let i=a.pos,r=e+R;return k.set(t.id,{x:i,y:r}),{x:i,y:r}},"setCommitPosition"),Ke=h((t,e,a)=>{let i=E.get(t.branch);if(!i)throw new Error(`Branch not found for commit ${t.id}`);let r=e+a,n=i.pos;k.set(t.id,{x:n,y:r})},"setRootPosition"),_e=h((t,e,a,i,r,n)=>{if(n===f.HIGHLIGHT)t.append("rect").attr("x",a.x-10).attr("y",a.y-10).attr("width",20).attr("height",20).attr("class",`commit ${e.id} commit-highlight${r%A} ${i}-outer`),t.append("rect").attr("x",a.x-6).attr("y",a.y-6).attr("width",12).attr("height",12).attr("class",`commit ${e.id} commit${r%A} ${i}-inner`);else if(n===f.CHERRY_PICK)t.append("circle").attr("cx",a.x).attr("cy",a.y).attr("r",10).attr("class",`commit ${e.id} ${i}`),t.append("circle").attr("cx",a.x-3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${i}`),t.append("circle").attr("cx",a.x+3).attr("cy",a.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${i}`),t.append("line").attr("x1",a.x+3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${i}`),t.append("line").attr("x1",a.x-3).attr("y1",a.y+1).attr("x2",a.x).attr("y2",a.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${i}`);else{let c=t.append("circle");if(c.attr("cx",a.x),c.attr("cy",a.y),c.attr("r",e.type===f.MERGE?9:10),c.attr("class",`commit ${e.id} commit${r%A}`),n===f.MERGE){let s=t.append("circle");s.attr("cx",a.x),s.attr("cy",a.y),s.attr("r",6),s.attr("class",`commit ${i} ${e.id} commit${r%A}`)}n===f.REVERSE&&t.append("path").attr("d",`M ${a.x-5},${a.y-5}L${a.x+5},${a.y+5}M${a.x-5},${a.y+5}L${a.x+5},${a.y-5}`).attr("class",`commit ${i} ${e.id} commit${r%A}`)}},"drawCommitBullet"),Ye=h((t,e,a,i)=>{var r;if(e.type!==f.CHERRY_PICK&&(e.customId&&e.type===f.MERGE||e.type!==f.MERGE)&&(x!=null&&x.showCommitLabel)){let n=t.append("g"),c=n.insert("rect").attr("class","commit-label-bkg"),s=n.append("text").attr("x",i).attr("y",a.y+25).attr("class","commit-label").text(e.id),l=(r=s.node())==null?void 0:r.getBBox();if(l&&(c.attr("x",a.posWithOffset-l.width/2-T).attr("y",a.y+13.5).attr("width",l.width+2*T).attr("height",l.height+2*T),y==="TB"||y==="BT"?(c.attr("x",a.x-(l.width+4*L+5)).attr("y",a.y-12),s.attr("x",a.x-(l.width+4*L)).attr("y",a.y+l.height-12)):s.attr("x",a.posWithOffset-l.width/2),x.rotateCommitLabel))if(y==="TB"||y==="BT")s.attr("transform","rotate(-45, "+a.x+", "+a.y+")"),c.attr("transform","rotate(-45, "+a.x+", "+a.y+")");else{let $=-7.5-(l.width+10)/25*9.5,m=10+l.width/25*8.5;n.attr("transform","translate("+$+", "+m+") rotate(-45, "+i+", "+a.y+")")}}},"drawCommitLabel"),Ue=h((t,e,a,i)=>{var r;if(e.tags.length>0){let n=0,c=0,s=0,l=[];for(let $ of e.tags.reverse()){let m=t.insert("polygon"),g=t.append("circle"),d=t.append("text").attr("y",a.y-16-n).attr("class","tag-label").text($),p=(r=d.node())==null?void 0:r.getBBox();if(!p)throw new Error("Tag bbox not found");c=Math.max(c,p.width),s=Math.max(s,p.height),d.attr("x",a.posWithOffset-p.width/2),l.push({tag:d,hole:g,rect:m,yOffset:n}),n+=20}for(let{tag:$,hole:m,rect:g,yOffset:d}of l){let p=s/2,u=a.y-19.2-d;if(g.attr("class","tag-label-bkg").attr("points",`
      ${i-c/2-L/2},${u+T}  
      ${i-c/2-L/2},${u-T}
      ${a.posWithOffset-c/2-L},${u-p-T}
      ${a.posWithOffset+c/2+L},${u-p-T}
      ${a.posWithOffset+c/2+L},${u+p+T}
      ${a.posWithOffset-c/2-L},${u+p+T}`),m.attr("cy",u).attr("cx",i-c/2+L/2).attr("r",1.5).attr("class","tag-hole"),y==="TB"||y==="BT"){let b=i+d;g.attr("class","tag-label-bkg").attr("points",`
        ${a.x},${b+2}
        ${a.x},${b-2}
        ${a.x+R},${b-p-2}
        ${a.x+R+c+4},${b-p-2}
        ${a.x+R+c+4},${b+p+2}
        ${a.x+R},${b+p+2}`).attr("transform","translate(12,12) rotate(45, "+a.x+","+i+")"),m.attr("cx",a.x+L/2).attr("cy",b).attr("transform","translate(12,12) rotate(45, "+a.x+","+i+")"),$.attr("x",a.x+5).attr("y",b+3).attr("transform","translate(14,14) rotate(45, "+a.x+","+i+")")}}}},"drawCommitTags"),Ve=h(t=>{switch(t.customType??t.type){case f.NORMAL:return"commit-normal";case f.REVERSE:return"commit-reverse";case f.HIGHLIGHT:return"commit-highlight";case f.MERGE:return"commit-merge";case f.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),Je=h((t,e,a,i)=>{let r={x:0,y:0};if(t.parents.length>0){let n=J(t.parents);if(n){let c=i.get(n)??r;return e==="TB"?c.y+I:e==="BT"?(i.get(t.id)??r).y-I:c.x+I}}else return e==="TB"?z:e==="BT"?(i.get(t.id)??r).y-I:0;return 0},"calculatePosition"),Qe=h((t,e,a)=>{var c,s;let i=y==="BT"&&a?e:e+R,r=y==="TB"||y==="BT"?i:(c=E.get(t.branch))==null?void 0:c.pos,n=y==="TB"||y==="BT"?(s=E.get(t.branch))==null?void 0:s.pos:i;if(n===void 0||r===void 0)throw new Error(`Position were undefined for commit ${t.id}`);return{x:n,y:r,posWithOffset:i}},"getCommitPosition"),F=h((t,e,a)=>{if(!x)throw new Error("GitGraph config not found");let i=t.append("g").attr("class","commit-bullets"),r=t.append("g").attr("class","commit-labels"),n=y==="TB"||y==="BT"?z:0,c=[...e.keys()],s=(x==null?void 0:x.parallelCommits)??!1,l=h((m,g)=>{var u,b;let d=(u=e.get(m))==null?void 0:u.seq,p=(b=e.get(g))==null?void 0:b.seq;return d!==void 0&&p!==void 0?d-p:0},"sortKeys"),$=c.sort(l);y==="BT"&&(s&&We($,e,n),$=$.reverse()),$.forEach(m=>{var p;let g=e.get(m);if(!g)throw new Error(`Commit not found for key ${m}`);s&&(n=Je(g,y,n,k));let d=Qe(g,n,s);if(a){let u=Ve(g),b=g.customType??g.type,v=((p=E.get(g.branch))==null?void 0:p.index)??0;_e(i,g,d,u,v,b),Ye(r,g,d,n),Ue(r,g,d,n)}y==="TB"||y==="BT"?k.set(g.id,{x:d.x,y:d.posWithOffset}):k.set(g.id,{x:d.posWithOffset,y:d.y}),n=y==="BT"&&s?n+I:n+I+R,n>P&&(P=n)})},"drawCommits"),Xe=h((t,e,a,i,r)=>{let n=(y==="TB"||y==="BT"?a.x<i.x:a.y<i.y)?e.branch:t.branch,c=h(l=>l.branch===n,"isOnBranchToGetCurve"),s=h(l=>l.seq>t.seq&&l.seq<e.seq,"isBetweenCommits");return[...r.values()].some(l=>s(l)&&c(l))},"shouldRerouteArrow"),q=h((t,e,a=0)=>{let i=t+Math.abs(t-e)/2;if(a>5)return i;if(H.every(n=>Math.abs(n-i)>=10))return H.push(i),i;let r=Math.abs(t-e);return q(t,e-r/5,a+1)},"findLane"),Ze=h((t,e,a,i)=>{var p,u,b,v,j;let r=k.get(e.id),n=k.get(a.id);if(r===void 0||n===void 0)throw new Error(`Commit positions not found for commits ${e.id} and ${a.id}`);let c=Xe(e,a,r,n,i),s="",l="",$=0,m=0,g=(p=E.get(a.branch))==null?void 0:p.index;a.type===f.MERGE&&e.id!==a.parents[0]&&(g=(u=E.get(e.branch))==null?void 0:u.index);let d;if(c){s="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",$=10,m=10;let M=r.y<n.y?q(r.y,n.y):q(n.y,r.y),B=r.x<n.x?q(r.x,n.x):q(n.x,r.x);y==="TB"?r.x<n.x?d=`M ${r.x} ${r.y} L ${B-$} ${r.y} ${l} ${B} ${r.y+m} L ${B} ${n.y-$} ${s} ${B+m} ${n.y} L ${n.x} ${n.y}`:(g=(b=E.get(e.branch))==null?void 0:b.index,d=`M ${r.x} ${r.y} L ${B+$} ${r.y} ${s} ${B} ${r.y+m} L ${B} ${n.y-$} ${l} ${B-m} ${n.y} L ${n.x} ${n.y}`):y==="BT"?r.x<n.x?d=`M ${r.x} ${r.y} L ${B-$} ${r.y} ${s} ${B} ${r.y-m} L ${B} ${n.y+$} ${l} ${B+m} ${n.y} L ${n.x} ${n.y}`:(g=(v=E.get(e.branch))==null?void 0:v.index,d=`M ${r.x} ${r.y} L ${B+$} ${r.y} ${l} ${B} ${r.y-m} L ${B} ${n.y+$} ${s} ${B-m} ${n.y} L ${n.x} ${n.y}`):r.y<n.y?d=`M ${r.x} ${r.y} L ${r.x} ${M-$} ${s} ${r.x+m} ${M} L ${n.x-$} ${M} ${l} ${n.x} ${M+m} L ${n.x} ${n.y}`:(g=(j=E.get(e.branch))==null?void 0:j.index,d=`M ${r.x} ${r.y} L ${r.x} ${M+$} ${l} ${r.x+m} ${M} L ${n.x-$} ${M} ${s} ${n.x} ${M-m} L ${n.x} ${n.y}`)}else s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",$=20,m=20,y==="TB"?(r.x<n.x&&(a.type===f.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y-$} ${s} ${r.x+m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${l} ${n.x} ${r.y+m} L ${n.x} ${n.y}`),r.x>n.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",$=20,m=20,a.type===f.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y-$} ${l} ${r.x-m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x+$} ${r.y} ${s} ${n.x} ${r.y+m} L ${n.x} ${n.y}`),r.x===n.x&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`)):y==="BT"?(r.x<n.x&&(a.type===f.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y+$} ${l} ${r.x+m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${s} ${n.x} ${r.y-m} L ${n.x} ${n.y}`),r.x>n.x&&(s="A 20 20, 0, 0, 0,",l="A 20 20, 0, 0, 1,",$=20,m=20,a.type===f.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${r.x} ${n.y+$} ${s} ${r.x-m} ${n.y} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${s} ${n.x} ${r.y-m} L ${n.x} ${n.y}`),r.x===n.x&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`)):(r.y<n.y&&(a.type===f.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${l} ${n.x} ${r.y+m} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${r.x} ${n.y-$} ${s} ${r.x+m} ${n.y} L ${n.x} ${n.y}`),r.y>n.y&&(a.type===f.MERGE&&e.id!==a.parents[0]?d=`M ${r.x} ${r.y} L ${n.x-$} ${r.y} ${s} ${n.x} ${r.y-m} L ${n.x} ${n.y}`:d=`M ${r.x} ${r.y} L ${r.x} ${n.y+$} ${l} ${r.x+m} ${n.y} L ${n.x} ${n.y}`),r.y===n.y&&(d=`M ${r.x} ${r.y} L ${n.x} ${n.y}`));if(d===void 0)throw new Error("Line definition not found");t.append("path").attr("d",d).attr("class","arrow arrow"+g%A)},"drawArrow"),et=h((t,e)=>{let a=t.append("g").attr("class","commit-arrows");[...e.keys()].forEach(i=>{let r=e.get(i);r.parents&&r.parents.length>0&&r.parents.forEach(n=>{Ze(a,e.get(n),r,e)})})},"drawArrows"),tt=h((t,e)=>{let a=t.append("g");e.forEach((i,r)=>{var p;let n=r%A,c=(p=E.get(i.name))==null?void 0:p.pos;if(c===void 0)throw new Error(`Position not found for branch ${i.name}`);let s=a.append("line");s.attr("x1",0),s.attr("y1",c),s.attr("x2",P),s.attr("y2",c),s.attr("class","branch branch"+n),y==="TB"?(s.attr("y1",z),s.attr("x1",c),s.attr("y2",P),s.attr("x2",c)):y==="BT"&&(s.attr("y1",P),s.attr("x1",c),s.attr("y2",z),s.attr("x2",c)),H.push(c);let l=i.name,$=V(l),m=a.insert("rect"),g=a.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+n);g.node().appendChild($);let d=$.getBBox();m.attr("class","branchLabelBkg label"+n).attr("rx",4).attr("ry",4).attr("x",-d.width-4-((x==null?void 0:x.rotateCommitLabel)===!0?30:0)).attr("y",-d.height/2+8).attr("width",d.width+18).attr("height",d.height+4),g.attr("transform","translate("+(-d.width-14-((x==null?void 0:x.rotateCommitLabel)===!0?30:0))+", "+(c-d.height/2-1)+")"),y==="TB"?(m.attr("x",c-d.width/2-10).attr("y",0),g.attr("transform","translate("+(c-d.width/2-5)+", 0)")):y==="BT"?(m.attr("x",c-d.width/2-10).attr("y",P),g.attr("transform","translate("+(c-d.width/2-5)+", "+P+")")):m.attr("transform","translate(-19, "+(c-d.height/2)+")")})},"drawBranches"),rt=h(function(t,e,a,i,r){return E.set(t,{pos:e,index:a}),e+=50+(r?40:0)+(y==="TB"||y==="BT"?i.width/2:0),e},"setBranchPosition"),at=h(function(t,e,a,i){if(Se(),w.debug("in gitgraph renderer",t+`
`,"id:",e,a),!x)throw new Error("GitGraph config not found");let r=x.rotateCommitLabel??!1,n=i.db;O=n.getCommits();let c=n.getBranchesAsObjArray();y=n.getDirection();let s=ce(`[id="${e}"]`),l=0;c.forEach(($,m)=>{var v;let g=V($.name),d=s.append("g"),p=d.insert("g").attr("class","branchLabel"),u=p.insert("g").attr("class","label branch-label");(v=u.node())==null||v.appendChild(g);let b=g.getBBox();l=rt($.name,l,m,b,r),u.remove(),p.remove(),d.remove()}),F(s,O,!1),x.showBranches&&tt(s,c),et(s,O),F(s,O,!0),oe.insertTitle(s,"gitTitleText",x.titleTopMargin??0,n.getDiagramTitle()),de(void 0,s,x.diagramPadding,x.useMaxWidth)},"draw"),nt={draw:at},it=h(t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles"),st=it,$t={parser:He,db:U,renderer:nt,styles:st};export{$t as diagram};
