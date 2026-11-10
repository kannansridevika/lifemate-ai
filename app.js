(function(){ const h = window.React.createElement;
function App(){ const getPage = function(){ const hash = window.location.hash.replace('#','').replace('/','').trim(); const valid=['home','guide','companion','reminder','language','emergency','about']; return valid.includes(hash)?hash:'home'; };
const s = window.React.useState(getPage()); const page=s[0], setPage=s[1];
const go = function(p){ setPage(p); window.location.hash='#/'+p; };
window.React.useEffect(function(){ const fn=function(){ setPage(getPage()); }; window.addEventListener('hashchange',fn); return function(){ window.removeEventListener('hashchange',fn); }; },[]);
let Body = window.HomePage;
if(page==='guide') Body=window.GuidePage;
if(page==='companion') Body=window.CompanionPage;
if(page==='reminder') Body=window.ReminderPage;
if(page==='language') Body=window.LanguagePage;
if(page==='emergency') Body=window.EmergencyPage;
if(page==='about') Body=window.AboutPage;
return h('div',null, h(window.Navbar,{onNavigate:go}), h(Body,{onNavigate:go}), h(window.Footer,null)); }
window.App = App;
const rootEl = document.getElementById('root');
if(rootEl && window.ReactDOM){ try{ window.ReactDOM.createRoot(rootEl).render(h(App)); }catch(e){ window.ReactDOM.render(h(App),rootEl); } }
})();
