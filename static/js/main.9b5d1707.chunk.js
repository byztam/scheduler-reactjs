(this["webpackJsonpscheduler-reactjs"]=this["webpackJsonpscheduler-reactjs"]||[]).push([[0],{102:function(e,a,n){e.exports=n(131)},107:function(e,a,n){},131:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(9),c=n.n(r),o=(n(107),n(11)),i=n(12),d=n(14),s=n(13),m=n(15),p=n(53),g=n(84),u=n(192),E=n(173),f=n(174),b=n(4),h=n(93),S=n.n(h),N=n(92),v=n.n(N),O=n(59),y=n(86),k=n.n(y),j=function(){return{backgroud:{backgroundImage:"url(".concat(k.a,")"),backgroundSize:"cover",backgroundPosition:"center",width:"100%",minHeight:"100vh",justifyContent:"center",alignItems:"center",display:"flex"},formlogin:{width:"370px",boxSizing:"boder-box",background:"#fff",padding:"60px 55px 20px 55px",borderRadius:"10px",margin:"15px"},formtitle:{paddingBottom:"40px",fontWeight:"bold",display:"block",fontSize:"35px",color:"#333333",textAlign:"center"},text:{marginTop:30,paddingTop:10},labelText:{fontSize:20},btnlogin:{marginTop:20,height:50,borderRadius:30},validcolor:{color:"#e62528"},msglogin:{textAlign:"center",color:"red"}}},x={lblLoginTitle:"\u0110\u0103ng nh\u1eadp",lblUername:"T\xe0i kho\u1ea3n",lblPassword:"M\u1eadt kh\u1ea9u",btnLogin:"\u0110\u0103ng nh\u1eadp"},w={Msg_Required:"{0} b\u1eaft bu\u1ed9c nh\u1eadp"},C=function(e,a){if(a.length>0)for(var n=0;n<a.length;n++)e=e.replace("{"+n+"}",a[n]);return e},T={Login:"".concat("https://tmtam.xyz/api/","/login.php")},H=n(87),A=n.n(H),I=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null!=n){var t=new FormData;for(var l in n)t.append(l,n[l]);n=t}return A()({method:a,url:e,data:n}).catch((function(e){console.log(e)}))},U={UserName:null,FullName:null,Token:null,TokenExpired:null},W=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).login_Click=function(){var e=!0,a=t.txtUser.value,n=t.txtPassword.value;t.setState({validUser:"",validPasword:"",validLogin:""}),""===a&&(t.setState({validUser:C(w.Msg_Required,[x.lblUername])}),e=!1),""===n&&(t.setState({validPasword:C(w.Msg_Required,[x.lblPassword])}),e=!1),e&&I(T.Login,"POST",{username:a,password:n}).then((function(e){if(void 0!==e){var a=e.data;if(1===a.status)return void t.setState({validLogin:a.msg});var n=U;n.UserName=a.data.UserName,n.FullName=a.data.FullName,n.Token=a.data.Token,n.TokenExpired=a.data.TokenExpired,t.props.setUserInfo(n),r="userInfo",c=JSON.stringify(n),localStorage.setItem(r,c);var l=t.props.history;l&&l.push("/scheduler")}var r,c}))},t.state={validUser:"",validPasword:"",validLogin:""},t}return Object(i.a)(n,[{key:"render",value:function(){var e=this,a=this.props.classes;return l.a.createElement("div",{className:a.backgroud},l.a.createElement("div",{className:a.formlogin},l.a.createElement("span",{className:a.formtitle},x.lblLoginTitle),l.a.createElement(u.a,{className:a.text,inputRef:function(a){e.txtUser=a},id:"txtUsername",label:x.lblUername,helperText:this.state.validUser,fullWidth:!0,InputProps:{startAdornment:l.a.createElement(E.a,{position:"start"},l.a.createElement(v.a,{color:"primary"}))},InputLabelProps:{classes:{root:a.labelText}},FormHelperTextProps:{classes:{root:a.validcolor}}}),l.a.createElement(u.a,{className:a.text,inputRef:function(a){e.txtPassword=a},id:"txtPassword",label:x.lblPassword,type:"password",helperText:this.state.validPasword,fullWidth:!0,InputProps:{startAdornment:l.a.createElement(E.a,{position:"start"},l.a.createElement(S.a,{color:"primary"}))},InputLabelProps:{classes:{root:a.labelText}},FormHelperTextProps:{classes:{root:a.validcolor}}}),l.a.createElement(f.a,{variant:"contained",color:"primary",fullWidth:!0,className:a.btnlogin,onClick:function(){e.login_Click()}},x.btnLogin),l.a.createElement("p",{className:a.msglogin},this.state.validLogin)))}}]),n}(t.Component),P=Object(O.b)((function(e){return{todos:e.userInfo}}),(function(e,a){return{setUserInfo:function(a){e(function(e){return{type:"USER_INFO",data:e}}(a))}}}))(Object(b.a)(j)(Object(m.f)(W))),D=n(188),R=n(189),L=n(190),B=n(175),z=n(176),F=n(177),M=n(178),_=function(){return{locked:{color:"red",fontStyle:"italic"},open:{color:"#51f542",fontStyle:"italic"},nomarl:{fontWeigth:"normal",fontStyle:"italic",color:"#c7c9c7"},bgHeader:{backgroundColor:"#f5f5f5"},bgHeader1:{backgroundColor:"#e0e0e0"},bgHeader2:{backgroundColor:"#e0e0e0",width:100},clearStyleCell:{border:"none !important",backgroundColor:"transparent"}}},V=Object(b.a)(_)(function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(B.a,null,l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none",align:"center",style:{width:"130px"},className:e.clearStyleCell}),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.locked," ").concat(e.clearStyleCell)},"Locked"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.open," ").concat(e.clearStyleCell)},"Open"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.open," ").concat(e.clearStyleCell)},"Open"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.open," ").concat(e.clearStyleCell)},"Open"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.open," ").concat(e.clearStyleCell)},"Open"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.open," ").concat(e.clearStyleCell)},"Open"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:"".concat(e.open," ").concat(e.clearStyleCell)},"Open"),l.a.createElement(F.a,{padding:"none",align:"center",className:e.clearStyleCell}),l.a.createElement(F.a,{padding:"none",align:"center",className:e.clearStyleCell})),l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{padding:"none",rowSpan:"2",align:"center"},"SUMMARY"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"MON"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"TUE"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"WED"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"THU"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"FRI"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"SAT"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"SUN"),l.a.createElement(F.a,{padding:"none",align:"center",rowSpan:"2",className:e.total},"TOTAL"),l.a.createElement(F.a,{padding:"none",align:"center",rowSpan:"2",className:e.des},"DESCRIPTION")),l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Wroking day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Wroking day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Holiday"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Wroking day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Wroking day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Day-off"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"Day-off")))}}]),n}(t.Component)),q=Object(b.a)(_)(function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(M.a,null,l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{variant:"head",padding:"none",align:"left"},"Wroking hours"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",align:"center",className:e.total},"40:00"),l.a.createElement(F.a,{padding:"none",align:"center"})),l.a.createElement(z.a,{className:e.bgHeader1},l.a.createElement(F.a,{variant:"head",padding:"none",align:"left"},"Attendance hours"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8h/day"),l.a.createElement(F.a,{padding:"none",align:"center",className:e.total},"30:00"),l.a.createElement(F.a,{padding:"none",align:"left"})),l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none"}),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.nomarl},"Nomarl")),l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"}),l.a.createElement(F.a,{padding:"none",colSpan:"2"})),l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none"},"Detail to work"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",align:"center",className:e.total},"8:00"),l.a.createElement(F.a,{padding:"none",align:"left"})),l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none"},"Detail to attendance"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center"},"8:00"),l.a.createElement(F.a,{padding:"none",align:"center",className:e.total},"8:00"),l.a.createElement(F.a,{padding:"none",align:"left"})))}}]),n}(t.Component)),J=n(166),G=function(){return{nomarl:{fontWeight:"normal !important",fontStyle:"italic",color:"#c7c9c7"},timeblock:{fontWeight:"bold"},tdSaveAttendance:{padding:"15px 0px !important"},bgHeader:{backgroundColor:"#f5f5f5"},bgHeader2:{backgroundColor:"#e0e0e0",width:100},clearStyleCell:{border:"none !important",backgroundColor:"white",color:"white"},cellInput:{fontSize:14}}},K=l.a.createContext(),X=Object(b.a)(G)(function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(B.a,{className:e.theader},l.a.createElement(z.a,{style:{height:50}}),l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{padding:"none",rowSpan:"2",align:"center",style:{width:"130px"}},"ATTENDANCE"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"MON"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"TUE"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"WED"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"THU"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"FRI"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"SAT"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"SUN"),l.a.createElement(F.a,{padding:"none",className:e.clearStyleCell}),l.a.createElement(F.a,{padding:"none",className:e.clearStyleCell})),l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"from"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"till")))}}]),n}(t.Component)),Y=Object(b.a)(G)(function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).handleSaveWork=function(e,a){e("show"),setTimeout((function(){e("hide"),a("Save successfully.","success",1e3)}),2e3)},t.state={timeBlockData:[{name:"Time block",cellData:["01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00"]},{name:"Time block",cellData:["01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00"]},{name:"Time block",cellData:["01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00"]},{name:"Time block",cellData:["01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00","01:00"]}]},t}return Object(i.a)(n,[{key:"render",value:function(){var e=this,a=this.props.classes;return l.a.createElement(M.a,null,this.state.timeBlockData.map((function(e,n){return l.a.createElement(z.a,{key:n,padding:"none",align:"left"},l.a.createElement(F.a,null,e.name,l.a.createElement("span",{className:a.timeblock}," #",n+1)),e.cellData.map((function(e,n){return l.a.createElement(F.a,{key:n,padding:"none",align:"left"},l.a.createElement(J.a,{className:a.cellInput,fullWidth:!0,defaultValue:e,disableUnderline:!0}))})))})),l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none",align:"right",colSpan:"15",className:a.tdSaveAttendance},l.a.createElement(K.Consumer,null,(function(a){var n=a.Backdrop,t=a.Snackbar;return l.a.createElement("div",null,l.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){e.handleSaveWork(n,t)}},"Save Attendance"))})))))}}]),n}(t.Component)),$=n(52),Q=function(){return{table:{"& th, td":{padding:"5px 5px",border:"1px solid #e0e0e0"}},nomarl:{fontWeight:"normal !important",fontStyle:"italic",color:"#c7c9c7"},tdSaveWork:{padding:"15px 5px !important"},btnSaveWork:{marginLeft:10,marginTop:2},bgHeader:{backgroundColor:"#f5f5f5"},bgHeader2:{backgroundColor:"#e0e0e0",width:100}}},Z=Object(b.a)(Q)(function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(B.a,null,l.a.createElement(z.a,{style:{height:50}}),l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{padding:"none",rowSpan:"2",align:"center",style:{width:"130px"}},"WORK"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"MON"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"TUE"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"WED"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"THU"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"FRI"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"SAT"),l.a.createElement(F.a,{padding:"none",colSpan:"2",align:"center",className:e.bgHeader2},"SUN"),l.a.createElement(F.a,{padding:"none",align:"center",rowSpan:"2",className:e.total},"TOTAL"),l.a.createElement(F.a,{padding:"none",align:"center",rowSpan:"2",className:e.des},"DESCRIPTION")),l.a.createElement(z.a,{className:e.bgHeader},l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"h"),l.a.createElement(F.a,{padding:"none",align:"left",className:e.nomarl},"text")))}}]),n}(t.Component)),ee=Object(b.a)(Q)(function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(M.a,null,l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none",align:"left"},"001-111-2020"),l.a.createElement(F.a,{padding:"none",align:"left"},"3:00"),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"},"2:00"),l.a.createElement(F.a,{padding:"none",align:"left"},"test"),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"center"},"20:00"),l.a.createElement(F.a,{padding:"none",align:"left"})),l.a.createElement(z.a,null,l.a.createElement(F.a,{padding:"none",align:"left"},"001-111-2020"),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"left"}),l.a.createElement(F.a,{padding:"none",align:"center"}),l.a.createElement(F.a,{padding:"none",align:"left"})),l.a.createElement(z.a,null,l.a.createElement(F.a,{colSpan:"17",className:e.tdSaveWork},l.a.createElement($.a,{component:"div",align:"justify"},l.a.createElement(u.a,{id:"outlined-basic",label:"Add more work",variant:"outlined",size:"small"}),l.a.createElement(f.a,{variant:"contained",color:"primary",align:"center",className:e.btnSaveWork},"SAVE WORK")))))}}]),n}(t.Component)),ae=n(32),ne=n(3),te=n(196),le=n(179),re=n(182),ce=n(172),oe=n(183),ie=n(184),de=n(187),se=n(180),me=n(181),pe=n(185),ge=n(186),ue=n(94),Ee=function(e){return{drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(ae.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(ue.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}},fe=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e,a,n=this.props.classes;return l.a.createElement(te.a,{variant:"permanent",className:Object(ne.a)(n.drawer,(e={},Object(ae.a)(e,n.drawerOpen,this.props.isOpenSidebar),Object(ae.a)(e,n.drawerClose,!this.props.isOpenSidebar),e)),classes:{paper:Object(ne.a)((a={},Object(ae.a)(a,n.drawerOpen,this.props.isOpenSidebar),Object(ae.a)(a,n.drawerClose,!this.props.isOpenSidebar),a))}},l.a.createElement("div",{className:n.toolbar},l.a.createElement(le.a,{onClick:this.props.handleClick},this.props.isOpenSidebar?l.a.createElement(se.a,null):l.a.createElement(me.a,null))),l.a.createElement(re.a,null),l.a.createElement(ce.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,a){return l.a.createElement(oe.a,{button:!0,key:e},l.a.createElement(ie.a,null,a%2===0?l.a.createElement(pe.a,null):l.a.createElement(ge.a,null)),l.a.createElement(de.a,{primary:e}))}))),l.a.createElement(re.a,null),l.a.createElement(ce.a,null,["All mail","Trash","Spam"].map((function(e,a){return l.a.createElement(oe.a,{button:!0,key:e},l.a.createElement(ie.a,null,a%2===0?l.a.createElement(pe.a,null):l.a.createElement(ge.a,null)),l.a.createElement(de.a,{primary:e}))}))))}}]),n}(t.Component),be=Object(b.a)(Ee)(fe),he=function(e){return{root:{display:"flex"},toolbar:{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},content:{flexGrow:1,padding:e.spacing(3)}}},Se=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).toggleSidebar=function(){t.setState({isOpenSidebar:!t.state.isOpenSidebar})},t.state={isOpenSidebar:!1},t}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes,a=this.props.children;return l.a.createElement("div",{className:e.root},l.a.createElement(be,{handleClick:this.toggleSidebar,isOpenSidebar:this.state.isOpenSidebar}),l.a.createElement("main",{className:e.content},l.a.createElement("div",{className:e.toolbar}),a))}}]),n}(t.Component),Ne=Object(b.a)(he)(Se),ve=function(e){return{table:{overflow:"hidden","& th, td":{padding:"5px 5px",border:"1px solid #e0e0e0"}}}},Oe=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).handleAlert=function(){t.setState({isOpenAlert:!t.state.isOpenAlert})},t.handleBackdrop=function(){t.setState({isOpenBackdrop:!t.state.isOpenBackdrop})},t.state={isOpenAlert:!0,isOpenBackdrop:!0},t}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(Ne,null,l.a.createElement(D.a,{container:!0},l.a.createElement(D.a,{item:!0,lg:12},l.a.createElement(R.a,null,l.a.createElement(L.a,{className:e.table,size:"small","aria-label":"caption table"},l.a.createElement(V,null),l.a.createElement(q,null),l.a.createElement(X,null),l.a.createElement(Y,null),l.a.createElement(Z,null),l.a.createElement(ee,null))))))}}]),n}(t.Component),ye=Object(b.a)(ve)(Oe),ke=[{path:"/",exact:!0,content:function(){return l.a.createElement(P,null)}},{path:"/scheduler",exact:!0,content:function(){return l.a.createElement(ye,null)}}],je=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).Route=function(e){var a=null;return e.length>0&&(a=e.map((function(e,a){return l.a.createElement(m.a,{key:a,path:e.path,exact:e.exact,component:e.content})}))),a},e}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(p.a,{basename:"/scheduler-reactjs"},l.a.createElement(g.a,null,l.a.createElement(m.c,null,this.Route(ke))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(43),we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_INFO":e=a.data;break;default:return e}return e},Ce=Object(xe.b)({userInfo:we}),Te=n(197),He=n(191),Ae=function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}},Ie=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(Te.a,{className:e.backdrop,open:this.props.isOpen},l.a.createElement(He.a,{color:"inherit"}))}}]),n}(t.Component),Ue=Object(b.a)(Ae)(Ie),We=n(195),Pe=n(193),De=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.property;return l.a.createElement(We.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e.visible,autoHideDuration:e.duration,onClose:this.props.handleCloseAlert},l.a.createElement(Pe.a,{onClose:this.props.handleCloseAlert,variant:"filled",severity:e.severity},e.message))}}]),n}(t.Component),Re=function(e){Object(d.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(o.a)(this,n),(t=a.call(this,e)).Backdrop=function(e){t.setState({backdropVisible:"show"===e})},t.Snackbar=function(e,a,n){t.setState({snackbar:{visible:!0,message:e,severity:a,duration:n}})},t.CloseAlert=function(){t.setState({snackbar:{visible:!1}})},t.state={backdropVisible:!1,snackbar:{visible:!1,message:"",severity:"success",duration:1e3}},t}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(K.Provider,{value:{Backdrop:this.Backdrop,Snackbar:this.Snackbar}},this.props.children,l.a.createElement(Ue,{isOpen:this.state.backdropVisible}),l.a.createElement(De,{property:this.state.snackbar,handleCloseAlert:this.CloseAlert}))}}]),n}(t.Component),Le=Object(xe.c)(Ce);c.a.render(l.a.createElement(O.a,{store:Le},l.a.createElement(Re,null,l.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,n){e.exports=n.p+"static/media/bg-01.c92b2d76.jpg"}},[[102,1,2]]]);
//# sourceMappingURL=main.9b5d1707.chunk.js.map