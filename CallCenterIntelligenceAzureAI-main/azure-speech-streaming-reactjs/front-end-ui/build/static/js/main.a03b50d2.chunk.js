(this.webpackJsonpspeechreactfrontend=this.webpackJsonpspeechreactfrontend||[]).push([[0],{101:function(e,t){},201:function(e,t){},203:function(e,t){},205:function(e,t){},206:function(e,t){},207:function(e,t){},208:function(e,t){},275:function(e,t,n){"use strict";n.r(t);n(224);var r=n(4),c=n.n(r),a=n(70),i=n.n(a),s=n(2),o=n.n(s),d=n(57),u=n(0),l=n(1),h=n(47),b=n(7),j=n(8),p=n(117),x=window.navigator.userAgent,g=x.indexOf("MSIE "),O=x.indexOf("Trident/"),f=g>0||O>0,k=x.indexOf("Edge/")>0,m=x.indexOf("Firefox")>0,y={auth:{clientId:"276f60f6-4d80-4c78-95c4-15defb2e6861",authority:"https://login.microsoftonline.com/".concat("6e8d4ac4-6168-4505-ae45-4206d841b472"),redirectUri:"http://localhost:3000/",postLogoutRedirectUri:"http://localhost:3000/"},cache:{cacheLocation:"localStorage",storeAuthStateInCookie:f||k||m},system:{loggerOptions:{loggerCallback:function(e,t,n){if(!n)switch(e){case p.a.Error:return void console.error(t);case p.a.Info:return void console.info(t);case p.a.Verbose:return void console.debug(t);case p.a.Warning:return void console.warn(t);default:return}}}}},S={scopes:["User.Read"]},v=n(49),w=n(160),A=n(118),C=n(91),T=n(13),R=function(){var e=Object(v.e)().instance;return Object(T.jsx)(A.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:Object(T.jsx)(C.a.Item,{as:"button",onClick:function(){var t;"popup"===(t="redirect")?e.loginPopup(S).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(S).catch((function(e){console.log(e)}))},children:"Sign in using Redirect"})})},E=function(){var e=Object(v.e)().instance;return Object(T.jsx)(A.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign Out",children:Object(T.jsx)(C.a.Item,{as:"button",onClick:function(){var t;"popup"===(t="redirect")?e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"}):"redirect"===t&&e.logoutRedirect({postLogoutRedirectUri:"/"})},children:"Sign out using Redirect"})})},M=n(293),P=function(e){var t=Object(v.d)(),n=!0;function r(){return Object(T.jsx)(T.Fragment,{children:e.children})}function c(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(M.a,{fluid:!0,children:[n?Object(T.jsxs)(w.a,{bg:"dark",variant:"dark",children:[Object(T.jsx)(w.a.Brand,{children:"AI-Powered Call Center"}),t?Object(T.jsx)(E,{}):Object(T.jsx)(R,{})]}):Object(T.jsx)("p",{}),Object(T.jsx)("br",{})]}),t?Object(T.jsx)(T.Fragment,{children:e.children}):Object(T.jsx)("p",{})]})}function a(){return n?Object(T.jsx)(c,{}):Object(T.jsx)(r,{})}return Object(T.jsx)(a,{})},I=n(41),N=n(200),L=n(136),D=n(100),F=function(e){return Object(T.jsxs)(N.a,{fluid:!0,children:[Object(T.jsxs)(L.a,{children:[Object(T.jsx)(D.a,{children:Object(T.jsx)(I.a,{bg:"secondary",border:"primary",style:{height:"275px"},children:Object(T.jsxs)(I.a.Body,{children:[Object(T.jsx)(I.a.Header,{children:"Profile:"}),Object(T.jsx)(I.a.Text,{children:e.profile})]})})}),Object(T.jsx)(D.a,{children:Object(T.jsx)(I.a,{bg:"secondary",border:"primary",style:{height:"275px"},children:Object(T.jsxs)(I.a.Body,{children:[Object(T.jsx)(I.a.Header,{children:"Dashboard"}),Object(T.jsx)(I.a.Text,{children:e.dashboard})]})})})]}),Object(T.jsx)("br",{}),Object(T.jsxs)(L.a,{children:[Object(T.jsx)(D.a,{children:Object(T.jsx)(I.a,{text:"success",bg:"dark",border:"primary",style:{height:"600px"},children:Object(T.jsxs)(I.a.Body,{children:[Object(T.jsx)(I.a.Header,{children:"Transcription Output Window:"}),Object(T.jsx)(I.a.Text,{children:e.text})]})})}),Object(T.jsx)(D.a,{children:Object(T.jsx)(I.a,{text:"success",bg:"dark",border:"primary",style:{height:"600px"},children:Object(T.jsxs)(I.a.Body,{children:[Object(T.jsx)(I.a.Header,{children:"NLP Output Window:"}),Object(T.jsx)(I.a.Text,{children:e.nlpOutput})]})})})]}),Object(T.jsx)(L.a,{children:Object(T.jsx)(D.a,{children:Object(T.jsx)(I.a,{text:"success",bg:"dark",border:"danger",style:{height:"200px"},children:Object(T.jsxs)(I.a.Body,{children:[Object(T.jsx)(I.a.Header,{children:"Debug Console Window:"}),Object(T.jsx)(I.a.Text,{children:e.debugData})]})})})})]})},U=n(137),z=n.n(U),B=n(213),W="https://aipoweredcallcenter.azurewebsites.net";function q(e){return H.apply(this,arguments)}function H(){return(H=Object(d.a)(o.a.mark((function e(t){var n,r,c,a,i,s,d,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new B.a,void 0!==(r=n.get("speech-token"))){e.next=24;break}return e.prev=3,console.log("Try getting token from the express backend"),c={"Content-Type":"application/json",Authorization:"Bearer ".concat(t),"Access-Control-Allow-Origin":"*"},console.log(c),e.next=9,z.a.get(W+"/api/get-speech-token",{headers:c});case 9:return a=e.sent,i=a.data.token,s=a.data.region,d=a.data.endpoint_id,n.set("speech-token",s+":"+i,{maxAge:540,path:"/"}),console.log("Token fetched from back-end: "+i),e.abrupt("return",{authToken:i,region:s,endpoint_id:d});case 18:return e.prev=18,e.t0=e.catch(3),console.log(e.t0.response.data),e.abrupt("return",{authToken:null,error:e.t0.response.data});case 22:e.next=27;break;case 24:return console.log("Token fetched from cookie: "+r),u=r.indexOf(":"),e.abrupt("return",{authToken:r.slice(u+1),region:r.slice(0,u)});case 27:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}function _(e,t){return J.apply(this,arguments)}function J(){return(J=Object(d.a)(o.a.mark((function e(t,n){var r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={transcript:t},c={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},e.next=5,z.a.post(W+"/api/ta-key-phrases",r,{headers:c});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{keyPhrasesExtracted:"NoKP",entityExtracted:"NoEnt"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var G=n(33),K=n(94),Q=n(45),V=n(79),X=function(e){var t="enabled.",n="enable",c=Object(v.e)(),a=c.instance,i=c.accounts,s=Object(r.useState)(null),o=Object(Q.a)(s,2),d=o[0],u=o[1];e.AudioEnabled?(t="enabled.",n="disable"):(t="disabled.",n="enable");var l="Click here to "+n+".",h="Start Mic Streaming",b="primary";return e.isStreaming?(h="Stop Mic Streaming",b="danger"):(h="Start Mic Streaming",b="primary"),Object(r.useEffect)((function(){d&&e.onMicRecordClick(d)}),[d]),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("table",{children:[Object(T.jsxs)("tr",{height:"100",children:[Object(T.jsx)("td",{children:Object(T.jsxs)("strong",{children:["Audio Recording is ",t]})}),Object(T.jsx)("td",{children:Object(T.jsx)(V.a,{onClick:e.onToggleClick,children:l})})]}),Object(T.jsxs)("tr",{height:"100",children:[Object(T.jsx)("td",{children:Object(T.jsx)("strong",{children:"Start Or Stop Streaming"})}),Object(T.jsx)("td",{children:Object(T.jsx)(V.a,{variant:b,onClick:function(){(function(){var e=Object(K.a)(Object(K.a)({},S),{},{account:i[0],scopes:["api://6798e375-a31f-48b0-abcb-87f06d70d0b6/user_impersonation"]});a.acquireTokenSilent(e).then((function(e){u(e.accessToken)})).catch((function(t){a.acquireTokenPopup(e).then((function(e){u(e.accessToken)}))}))})()},children:h})})]})]})})},Y=function(e){var t=Object(v.e)(),n=t.instance,c=t.accounts,a=Object(r.useState)(null),i=Object(Q.a)(a,2),s=i[0],o=i[1];return!0?Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("table",{children:[Object(T.jsxs)("h5",{className:"card-title",children:["Welcome ",c[0].name]}),s?Object(T.jsx)("p",{children:"Access Token Acquired!"}):Object(T.jsx)(V.a,{variant:"secondary",onClick:function(){var e=Object(K.a)(Object(K.a)({},S),{},{account:c[0]});n.acquireTokenSilent(e).then((function(e){o(e.accessToken)})).catch((function(t){n.acquireTokenPopup(e).then((function(e){o(e.accessToken)}))}))},children:"Request Access Token"})]})}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("table",{children:Object(T.jsx)("h5",{className:"card-title",children:"Welcome, Demo User!"})})})},Z=n(197),$=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handleAudioRecordingSwitch=function(){r.state.AudioRecordingEnabled?r.setState({AudioRecordingEnabled:!1}):r.setState({AudioRecordingEnabled:!0})},r.handleMicRecorderClick=r.handleMicRecorderClick.bind(Object(h.a)(r)),r.handleAudioRecordingSwitch=r.handleAudioRecordingSwitch.bind(Object(h.a)(r)),r.state={accessToken:null,AudioRecordingEnabled:!0,isStreaming:!1,isHosted:!1,color:"white",value:"",displayText:"Transcribed text will show here when streaming.",displayNLPOutput:"This windows will display detected entities.",debugConsole:"Debug logs will be displayed here."},r}return Object(l.a)(n,[{key:"handleMicRecorderClick",value:function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.isStreaming){e.next=7;break}return this.setState({debugConsole:"Stop Mic Event Received"}),e.next=4,this.setState({isStreaming:!1});case 4:return e.abrupt("return",null);case 7:return e.next=9,this.setState({isStreaming:!0});case 9:return n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},e.next=12,this.InitializeStream(t);case 12:return r=e.sent,e.next=15,this.sttFromMic(r,t);case 15:return e.next=17,n(2e3);case 17:return this.setState({debugConsole:"Mic is listening for audio."}),this.setState({debugConsole:"Will check every 2 seconds for stop event"}),e.next=21,n(2e3);case 21:if(this.state.isStreaming){e.next=17;break}case 22:return e.next=24,this.stopMicStream(r);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"InitializeStream",value:function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,c,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:return n=e.sent,r=n.endpoint_id,c=Z.SpeechConfig.fromAuthorizationToken(n.authToken,n.region),this.state.AudioRecordingEnabled&&(c.endpointId=r,c.setServiceProperty("clientConnectionId",this.state.value,Z.ServicePropertyChannel.UriQueryParameter)),c.speechRecognitionLanguage="en-US",a=Z.AudioConfig.fromDefaultMicrophoneInput(),i=new Z.SpeechRecognizer(c,a),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stopMicStream",value:function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.stopContinuousRecognitionAsync();case 2:return e.next=4,this.setState({isStreaming:!1});case 4:this.setState({debugConsole:"Mic stopped listening"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sttFromMic",value:function(){var e=Object(d.a)(o.a.mark((function e(t,n){var r,c,a=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",c=" ",t.sessionStarted=function(e,t){r="Session ID: "+t.sessionId,a.setState({displayText:r})},t.recognized=function(){var e=Object(d.a)(o.a.mark((function e(t,i){var s,d,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.result.reason!==G.a.RecognizedSpeech){e.next=12;break}return r+="\n".concat(i.result.text),a.setState({displayText:r}),e.next=5,_(i.result.text,n);case 5:s=e.sent,(d=JSON.stringify(s.keyPhrasesExtracted)).length>15&&(c+="\n"+d,a.setState({displayNLPOutput:c})),(u=JSON.stringify(s.entityExtracted)).length>12&&(c+="\n"+u,a.setState({displayNLPOutput:c.replace("<br/>","\n")})),e.next=13;break;case 12:i.result.reason===G.a.NoMatch&&(r+="\n");case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e.next=6,t.startContinuousRecognitionAsync();case 6:return e.next=8,this.setState({isStreaming:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(P,{children:[Object(T.jsx)(v.a,{children:Object(T.jsx)(F,{profile:Object(T.jsx)(Y,{processAccessToken:this.processAccessToken}),debugData:this.state.debugConsole,nlpOutput:this.state.displayNLPOutput,text:this.state.displayText,dashboard:Object(T.jsx)(X,{isStreaming:this.state.isStreaming,AudioEnabled:this.state.AudioRecordingEnabled,onToggleClick:this.handleAudioRecordingSwitch,onMicRecordClick:this.handleMicRecorderClick})})}),Object(T.jsx)(v.c,{children:Object(T.jsx)(F,{profile:Object(T.jsx)(Y,{}),debugData:this.state.debugConsole,nlpOutput:this.state.displayNLPOutput,text:this.state.displayText,dashboard:Object(T.jsx)(X,{isStreaming:this.state.isStreaming,AudioEnabled:this.state.AudioRecordingEnabled,onToggleClick:this.handleAudioRecordingSwitch,onMicRecordClick:this.handleMicRecorderClick})})})]})})}}]),n}(r.Component),ee=n(212),te=n(292),ne=n(291),re=n(210),ce=n.n(re),ae=Object(ne.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ce.a.A400},background:{default:"#fff"}}}),ie=n(290),se=n(20),oe=new ie.a(y);!oe.getActiveAccount()&&oe.getAllAccounts().length>0&&oe.setActiveAccount(oe.getAllAccounts()[0]),oe.enableAccountStorageEvents(),oe.addEventCallback((function(e){if(e.eventType===se.a.LOGIN_SUCCESS&&e.payload.account){var t=e.payload.account;oe.setActiveAccount(t)}})),i.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsx)(ee.a,{children:Object(T.jsx)(te.a,{theme:ae,children:Object(T.jsx)(v.b,{instance:oe,children:Object(T.jsx)($,{})})})})}),document.getElementById("root"))},85:function(e,t){}},[[275,1,2]]]);
//# sourceMappingURL=main.a03b50d2.chunk.js.map