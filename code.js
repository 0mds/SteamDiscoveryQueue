javascript:(function(){let queue=async e=>{let t,o="appid_to_clear_from_queue",n="sessionid",i={credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST",mode:"cors"};await fetch("https://store.steampowered.com/explore/generatenewdiscoveryqueue",{...i,body:n+"="+e+"&queuetype=0"}).then(e=>{if(e.ok)return e.json();alert("An error occurred.")}).then(e=>{t=e.queue});for(let d=1;d<t.length;d++)await fetch("https://store.steampowered.com/app/"+t[d],{...i,body:n+"="+e+"&"+o+"="+t[d-1]});let d={[n]:e,[o]:t[t.length-1]},r=document.createElement("form");for(key in r.style.visibility="hidden",r.method="POST",r.action="https://store.steampowered.com/explore/next/0/",d){let e=document.createElement("input");e.name=key,e.value=d[key],r.appendChild(e)}document.body.appendChild(r),r.submit()};if(/^http(s)?:\/\/store\.steampowered\.com/.test(window.location.href)){let e=document.createElement("style");document.head.appendChild(e),e.sheet.insertRule("@keyframes load{0%{padding:0)}100%{padding:30px;opacity:0}}",0),document.body.innerHTML='<div style="position:absolute;width:100%;height:100%;background-color:#1b2838"><div style="width:0;height:0;background-color:#fff;border-radius:100%;animation:load 1s infinite ease-in-out;position:relative;left:50%;top:50%;transform:translate(-50%,-50%)"></div></div>',queue(document.cookie.match("sessionid=([^;]*);")[1])}else alert("Only working in the steam store.")})();
