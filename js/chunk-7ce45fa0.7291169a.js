(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ce45fa0"],{"1f24":function(e,t,n){"use strict";var a=n("7a23"),r={class:"hidden-wrap"},c=Object(a["h"])("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"},null,-1),o=Object(a["h"])("path",{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"},null,-1),i={class:"duration-100 transition-all ease-linear absolute bottom-9 -right-8 w-72 bg-black bg-opacity-80 p-3 text-white text-sm rounded"};function l(e,t,n,l,s,u){return Object(a["q"])(),Object(a["d"])("div",r,[(Object(a["q"])(),Object(a["d"])("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"info-circle",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",onMouseenter:t[1]||(t[1]=function(e){return s.hidden=!0}),onMouseleave:t[2]||(t[2]=function(e){return s.hidden=!1})},[c,o],32)),Object(a["E"])(Object(a["h"])("div",i," Value of total LP tokens locked + deposits that are not borrowed + ALPACA-BNB LP tokens staked + sALPACA staked ",512),[[a["B"],s.hidden]])])}var s={data:function(){return{hidden:!1}}};s.render=l;t["a"]=s},"2b56":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"container mx-auto mt-4 p-4"},c={class:"flex justify-center items-end flex-wrap md:justify-between"},o=Object(a["h"])("div",{class:"text-2xl"},"Available Lending Pools",-1),i={class:" flex flex-col items-center justify-center border border-solid border-gray-200 rounded-3xl p-4 px-8 bg-white shadow"},l={class:"flex items-center "},s={class:"relative flex items-center text-xl font-bold leading-10 mr-1 "},u=Object(a["g"])(" Total Value Locked "),d={class:"text-3xl text-green-400 leading-10"},p={class:"flex border border-solid rounded-3xl shadow bg-white p-6 px-0 mt-6"},b={class:"table-fixed w-full"},w=Object(a["f"])('<div><ul class="flex text-center"><li class="w-5/12 hidden md:block "></li><li class="w-5/12 md:w-3/12">Total Supply</li><li class="w-5/12 md:w-3/12">Your Balance</li><li class="w-2/12"></li></ul></div>',1);function h(e,t,n,h,m,f){Object(a["w"])("Tooltip");var j=Object(a["w"])("LendCareTr");return Object(a["q"])(),Object(a["d"])("div",r,[Object(a["h"])("div",c,[o,Object(a["h"])("div",i,[Object(a["h"])("div",l,[Object(a["h"])("div",s,[u,Object(a["e"])("",!0)])]),Object(a["h"])("div",d," $"+Object(a["y"])(e.formatBN(m.tvl,{decimals:0,dp:2})),1)])]),Object(a["h"])("div",p,[Object(a["h"])("div",b,[w,Object(a["h"])("div",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(m.pools,(function(e){return Object(a["q"])(),Object(a["d"])(j,{key:e.lpName,pool:e},null,8,["pool"])})),128))])])])])}var m=n("1da1"),f=(n("96cf"),n("4de4"),n("d3b7"),n("25f0"),n("1f24")),j=n("53ac"),O=n("db49"),x=n("ee10"),v=n("140c"),g=n("d910"),k=n("c030"),y=n("901e"),B=n.n(y),A={name:"Lend",components:{Tooltip:f["a"],LendCareTr:j["a"]},data:function(){return{hidden:!1,tvl:new B.a(0),pools:O["e"].filter((function(e){return e.isLend}))}},watch:{"$store.state.account":function(e){e&&this.loadData()}},mounted:function(){this.$store.state.account&&this.loadData()},methods:{getTokenPrice:function(e,t,n){return Object(m["a"])(regeneratorRuntime.mark((function a(){var r,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=new k["a"].Contract(O["c"],v,Object(x["d"])()),a.next=4,r.getAmountsOut(k["a"].utils.parseUnits("1",t),e);case 4:return c=a.sent,c=new B.a(c[c.length-1].toString()).dividedBy(new B.a(10).pow(n)),a.abrupt("return",c);case 9:return a.prev=9,a.t0=a["catch"](0),console.log("getTokenPrice",e,a.t0),a.abrupt("return","0");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},loadData:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.tvl=new B.a("0"),n=0;case 2:if(!(n<e.pools.length)){t.next=66;break}a=e.pools[n],r=Object(x["b"])(a.lendContract,g),t.t0=a.id,t.next=1===t.t0?8:2===t.t0?20:3===t.t0?39:4===t.t0?47:5===t.t0?55:63;break;case 8:return t.t1=e.tvl,t.t3=B.a,t.next=12,r.totalSupply();case 12:return t.t4=t.sent.toString(),t.t2=new t.t3(t.t4).div(new B.a(10).pow(18)),t.next=16,e.getTokenPrice([O["a"],O["h"],O["f"]],18,O["g"]);case 16:return t.t5=t.sent,t.t6=t.t2.multipliedBy.call(t.t2,t.t5),e.tvl=t.t1.plus.call(t.t1,t.t6),t.abrupt("break",63);case 20:return t.t7=e.tvl,t.t9=B.a,t.next=24,r.totalSupply();case 24:return t.t10=t.sent.toString(),t.t8=new t.t9(t.t10).div(new B.a(10).pow(a.decimals)),t.t11=e,t.next=29,r.want();case 29:return t.t12=t.sent,t.t13=O["f"],t.t14=[t.t12,t.t13],t.t15=O["g"],t.next=35,t.t11.getTokenPrice.call(t.t11,t.t14,18,t.t15);case 35:return t.t16=t.sent,t.t17=t.t8.multipliedBy.call(t.t8,t.t16),e.tvl=t.t7.plus.call(t.t7,t.t17),t.abrupt("break",63);case 39:return t.t18=e.tvl,t.t19=B.a,t.next=43,r.totalSupply();case 43:return t.t20=t.sent.toString(),t.t21=new t.t19(t.t20).div(new B.a(10).pow(a.decimals)),e.tvl=t.t18.plus.call(t.t18,t.t21),t.abrupt("break",63);case 47:return t.t22=e.tvl,t.t23=B.a,t.next=51,r.totalSupply();case 51:return t.t24=t.sent.toString(),t.t25=new t.t23(t.t24).div(new B.a(10).pow(a.decimals)),e.tvl=t.t22.plus.call(t.t22,t.t25),t.abrupt("break",63);case 55:return t.t26=e.tvl,t.t27=B.a,t.next=59,r.totalSupply();case 59:return t.t28=t.sent.toString(),t.t29=new t.t27(t.t28).div(new B.a(10).pow(a.decimals)),e.tvl=t.t26.plus.call(t.t26,t.t29),t.abrupt("break",63);case 63:n++,t.next=2;break;case 66:case"end":return t.stop()}}),t)})))()}}};A.render=h;t["default"]=A},"53ac":function(e,t,n){"use strict";var a=n("7a23"),r={class:"w-full md:w-5/12 mb-2 md:mb-0 flex justify-center"},c={class:"items-center pl-6 flex"},o={class:"w-10 md:w-14 mr-4"},i={class:"text-xl font-bold"},l={key:0,class:"bg-green-400 text-white px-3 mx-auto text-sm shadow"},s={class:"w-5/12 md:w-3/12 flex justify-center items-center"},u={class:"flex flex-col text-center"},d={class:"text-lg"},p={class:"text-lg"},b={class:"w-5/12 md:w-3/12 flex justify-center items-center"},w={class:"flex flex-col text-center"},h={class:"text-lg"},m={class:"text-lg"},f={class:"w-2/12"},j={class:"cursor-not-allowed m-auto font-normal text-gray-500 relative md:static -top-9"},O={class:"icon ion-chevron-down"},x={class:"icon ion-chevron-right"},v={colspan:"4",class:"py-4"},g={class:"flex-col mx-6 md:flex md:flex-row justify-evenly"},k={class:"w-full md:w-5/12"},y={class:"text-sm text-gray-400"},B=Object(a["g"])(" (Get the LP "),A=Object(a["g"])(") "),T={class:"w-full flex items-center border border-gray-200 bg-white"},N={class:"mt-4 flex flex-wrap justify-center md:justify-between items-center"},S={class:"text-sm"},R=Object(a["g"])(" You will receive: "),D={class:"text-green-400"},C=Object(a["g"])("Approve"),M=Object(a["g"])("Deposit"),q=Object(a["h"])("div",{class:"my-4 border"},null,-1),L={class:"w-full md:w-5/12"},P={class:"text-sm text-gray-400"},V={class:"w-full flex items-center border border-gray-200 bg-white"},W={class:"mt-4 flex flex-wrap justify-center md:justify-between items-center"},$={class:"text-sm"},U=Object(a["g"])(" You will receive: "),z={class:"text-green-400"},E=Object(a["g"])("Withdraw");function _(e,t,n,_,F,G){var Y=Object(a["w"])("sapn"),J=Object(a["w"])("Button");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("ul",{class:["flex flex-wrap md:flex-nowrap border-solid border-b border-last hover:bg-gray-50 pt-2",{"bg-gray-50":F.isShowAction}]},[Object(a["h"])("li",r,[Object(a["h"])("div",c,[Object(a["h"])("div",o,[Object(a["h"])("img",{class:"w-6 md:w-9 inline",src:n.pool.token0src},null,8,["src"]),Object(a["h"])("img",{class:"w-6 md:w-9 inline z-0 -ml-3 md:-ml-4",src:n.pool.token1src},null,8,["src"])]),Object(a["h"])("div",null,[Object(a["h"])("p",i,[Object(a["g"])(Object(a["y"])(n.pool.lpName)+" ",1),n.pool.isNew?(Object(a["q"])(),Object(a["d"])("span",l,"New")):Object(a["e"])("",!0)]),Object(a["h"])(Y,{class:"text-sm bg-gray-100 text-gray-500 rounded px-1"},{default:Object(a["D"])((function(){return[Object(a["g"])("1 "+Object(a["y"])(n.pool.lpName)+" = "+Object(a["y"])(e.formatBN(F.a1tob,{decimals:0,dp:2}))+" "+Object(a["y"])(n.pool.lpName.substring(2)),1)]})),_:1})])])]),Object(a["h"])("li",s,[Object(a["h"])("div",u,[Object(a["h"])("p",d,Object(a["y"])(e.formatBN(F.ibTotalSupply,{decimals:n.pool.decimals})),1),Object(a["h"])("p",p,Object(a["y"])(n.pool.lpName),1)])]),Object(a["h"])("li",b,[Object(a["h"])("div",w,[Object(a["h"])("p",h,Object(a["y"])(e.formatBN(F.ibBalance,{decimals:n.pool.decimals}))+" "+Object(a["y"])(n.pool.lpName),1),Object(a["h"])("p",m,Object(a["y"])(e.formatBN(F.wantBalance,{decimals:n.pool.decimals}))+" "+Object(a["y"])(n.pool.lpName.substring(2)),1)])]),Object(a["h"])("li",f,[Object(a["h"])("div",{class:"flex flex-col text-center py-6 cursor-pointer",onClick:t[1]||(t[1]=function(e){return F.isShowAction=!F.isShowAction})},[Object(a["h"])("div",j,[Object(a["E"])(Object(a["h"])("i",O,null,512),[[a["B"],F.isShowAction]]),Object(a["E"])(Object(a["h"])("i",x,null,512),[[a["B"],!F.isShowAction]])])])])],2),F.isShowAction?(Object(a["q"])(),Object(a["d"])("ul",{key:0,class:["border-b-20 border-white text-gray-400",{"bg-gray-50":F.isShowAction}]},[Object(a["h"])("li",v,[Object(a["h"])("div",g,[Object(a["h"])("div",k,[Object(a["h"])("div",y,[Object(a["g"])(" Available Balance: "+Object(a["y"])(e.formatBN(F.wantBalance,{decimals:n.pool.decimals}))+" "+Object(a["y"])(n.pool.lpName.substring(2))+" ",1),n.pool.token0addr&&n.pool.token1addr?(Object(a["q"])(),Object(a["d"])(a["a"],{key:0},[B,Object(a["h"])("a",{class:"text-green-400",href:"https://swap.spiritswap.finance/#/add/"+n.pool.token0addr+"/"+n.pool.token1addr},"here",8,["href"]),A],64)):Object(a["e"])("",!0)]),Object(a["h"])("div",T,[Object(a["E"])(Object(a["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return F.depositAmt=e}),type:"number",placeholder:"Deposit Amount",class:"outline-none w-full h-10 rounded-md mt-1 pl-4"},null,512),[[a["A"],F.depositAmt]]),Object(a["h"])("button",{onClick:t[3]||(t[3]=function(){return G.setDepositMax&&G.setDepositMax.apply(G,arguments)}),class:"focus:outline-none text-green-400 appearance-none outline-none h-4/5 border-l border-solid border-gray-200 w-20"},"MAX")]),Object(a["h"])("div",N,[Object(a["h"])("p",S,[R,Object(a["h"])("span",D,"~ "+Object(a["y"])(e.formatBN(F.depositReceive,{decimals:0,dp:18}))+" "+Object(a["y"])(n.pool.lpName),1)]),F.needApprove?(Object(a["q"])(),Object(a["d"])(J,{key:0,loading:F.approving,onClick:G.onApprove},{default:Object(a["D"])((function(){return[C]})),_:1},8,["loading","onClick"])):(Object(a["q"])(),Object(a["d"])(J,{key:1,loading:F.depositing,onClick:G.onDeposit},{default:Object(a["D"])((function(){return[M]})),_:1},8,["loading","onClick"]))])]),q,Object(a["h"])("div",L,[Object(a["h"])("div",P," Available Balance: "+Object(a["y"])(e.formatBN(F.ibBalance,{decimals:n.pool.decimals}))+" "+Object(a["y"])(n.pool.lpName),1),Object(a["h"])("div",V,[Object(a["E"])(Object(a["h"])("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return F.withdrawAmt=e}),type:"number",placeholder:"Withdraw Amount",class:"outline-none w-full h-10 rounded-md mt-1 pl-4"},null,512),[[a["A"],F.withdrawAmt]]),Object(a["h"])("button",{onClick:t[5]||(t[5]=function(){return G.setWithdrawMax&&G.setWithdrawMax.apply(G,arguments)}),class:"focus:outline-none text-green-400 appearance-none outline-none h-4/5 border-l border-solid border-gray-200 w-20"},"MAX")]),Object(a["h"])("div",W,[Object(a["h"])("p",$,[U,Object(a["h"])("span",z,"~ "+Object(a["y"])(e.formatBN(F.withdrawReceive,{decimals:0,dp:18}))+" "+Object(a["y"])(n.pool.lpName.substring(2)),1)]),Object(a["h"])(J,{loading:F.withdrawing,onClick:G.onWithdraw},{default:Object(a["D"])((function(){return[E]})),_:1},8,["loading","onClick"])])])])])],2)):Object(a["e"])("",!0)],64)}var F=n("1da1"),G=(n("d3b7"),n("25f0"),n("4c53"),n("96cf"),n("ee10")),Y=n("d910"),J=n("5be4"),X=n("b533"),H=n("c030"),I=n("901e"),K=n("2a7d"),Q={components:{Button:K["a"]},props:{pool:{type:Object,default:function(){return{}}}},data:function(){return{isShowAction:!1,needApprove:!1,depositing:!1,approving:!1,withdrawing:!1,ibTotalSupply:"0",ibBalance:"0",wantBalance:"0",depositAmt:"0",depositReceive:"0",withdrawAmt:"0",withdrawReceive:"0",ibToken:null,wantToken:null,a1tob:"1"}},watch:{"$store.state.account":function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t&&this.loadData();case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),withdrawAmt:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fbtoa(e.withdrawAmt);case 2:e.withdrawReceive=t.sent;case 3:case"end":return t.stop()}}),t)})))()},depositAmt:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fatob(e.depositAmt);case 2:e.depositReceive=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.state.account&&e.loadData();case 1:case"end":return t.stop()}}),t)})))()},methods:{fatob:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.pool.isVault){n.next=2;break}return n.abrupt("return",e);case 2:return n.t0=new I["BigNumber"](e),n.t2=I["BigNumber"],n.next=6,t.ibToken.totalTokenBalance();case 6:return n.t3=n.sent.toString(),n.t1=new n.t2(n.t3),n.next=10,t.ibToken.totalShareBalance();case 10:return n.t4=n.sent.toString(),n.t5=n.t1.dividedBy.call(n.t1,n.t4),n.abrupt("return",n.t0.multipliedBy.call(n.t0,n.t5));case 13:case"end":return n.stop()}}),n)})))()},fbtoa:function(e){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.pool.isVault){n.next=2;break}return n.abrupt("return",e);case 2:return n.t0=new I["BigNumber"](e),n.t2=I["BigNumber"],n.next=6,t.ibToken.totalShareBalance();case 6:return n.t3=n.sent.toString(),n.t1=new n.t2(n.t3),n.next=10,t.ibToken.totalTokenBalance();case 10:return n.t4=n.sent.toString(),n.t5=n.t1.dividedBy.call(n.t1,n.t4),n.abrupt("return",n.t0.multipliedBy.call(n.t0,n.t5));case 13:case"end":return n.stop()}}),n)})))()},loadData:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.ibToken=Object(G["b"])(e.pool.lendContract,e.pool.isVault?J:Y),t.t0=G["b"],t.next=4,e.ibToken[e.pool.isVault?"wantToken":"want"]();case 4:if(t.t1=t.sent,t.t2=X,e.wantToken=(0,t.t0)(t.t1,t.t2),!e.pool.isVault){t.next=11;break}return t.next=10,e.fatob(1);case 10:e.a1tob=t.sent;case 11:return t.next=13,e.ibToken.totalSupply();case 13:if(e.ibTotalSupply=t.sent,"ibFTM"!=e.pool.lpName){t.next=18;break}t.t3=!1,t.next=21;break;case 18:return t.next=20,e.wantToken.allowance(e.$store.state.account,e.pool.lendContract);case 20:t.t3=t.sent.lt(H["a"].utils.parseUnits("10000000000",e.pool.decimals));case 21:if(e.needApprove=t.t3,"ibFTM"!=e.pool.lpName){t.next=28;break}return t.next=25,Object(G["d"])().getBalance(e.$store.state.account);case 25:t.t4=t.sent,t.next=31;break;case 28:return t.next=30,e.wantToken.balanceOf(e.$store.state.account);case 30:t.t4=t.sent;case 31:return e.wantBalance=t.t4,t.next=34,e.ibToken.balanceOf(e.$store.state.account);case 34:e.ibBalance=t.sent;case 35:case"end":return t.stop()}}),t)})))()},setDepositMax:function(){this.depositAmt=this.formatBNWithoutGroup(this.wantBalance,{decimals:this.pool.decimals,dp:this.pool.decimals})},setWithdrawMax:function(){this.withdrawAmt=this.formatBNWithoutGroup(this.ibBalance,{decimals:this.pool.decimals,dp:this.pool.decimals})},onDeposit:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.depositing=!0,t.next=4,e.ibToken.deposit(H["a"].utils.parseUnits(e.depositAmt,e.pool.decimals),{value:"ibFTM"==e.pool.lpName?H["a"].utils.parseUnits(e.depositAmt,e.pool.decimals):0});case 4:return n=t.sent,t.next=7,n.wait();case 7:e.loadData(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("onDeposit",t.t0);case 13:return t.prev=13,e.depositing=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()},onWithdraw:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.withdrawing=!0,t.next=4,new I["BigNumber"](e.ibBalance).eq(H["a"].utils.parseUnits(e.withdrawAmt,e.pool.decimals))?e.ibToken.withdrawAll():e.ibToken.withdraw(H["a"].utils.parseUnits(e.withdrawAmt,e.pool.decimals));case 4:return n=t.sent,t.next=7,n.wait();case 7:e.loadData(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("onDeposit",t.t0);case 13:return t.prev=13,e.withdrawing=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()},onApprove:function(){var e=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.approving=!0,t.next=4,e.wantToken.approve(e.pool.lendContract,H["a"].BigNumber.from("2").pow("256").sub("1"));case 4:return n=t.sent,t.next=7,n.wait();case 7:e.needApprove=!1,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("onApprove",t.t0);case 13:return t.prev=13,e.approving=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))()}}};Q.render=_;t["a"]=Q}}]);
//# sourceMappingURL=chunk-7ce45fa0.7291169a.js.map