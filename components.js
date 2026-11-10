const h = React.createElement;
window.Navbar = function(p){ return h('nav',{style:{padding:'16px',background:'#6d28d9',color:'white',fontWeight:'bold'}}, 'LifeMate AI - Home | Tools | About'); };
window.Footer = function(p){ return h('footer',{style:{padding:'16px',textAlign:'center',background:'#eee'}}, 'LifeMate AI - Made with Love'); };
window.HomePage = function(p){ return h('div',{style:{padding:'40px',textAlign:'center'}}, h('h1',null,'Welcome to LifeMate AI'), h('p',null,'Your AI Companion for Life'), h('button',{style:{padding:'12px 24px',fontSize:'18px',cursor:'pointer'},onClick:function(){ if(p && p.onNavigate) p.onNavigate('companion'); else window.location.hash='#/companion'; }}, 'Get Started')); };
window.VoiceAssistantModal = function(p){ return null; };
window.ChatPage = function(p){ return h('div',{style:{padding:'40px',textAlign:'center'}}, h('h2',null,'Chat with LifeMate'), h('p',null,'Hi! Naan un LifeMate. En kitta ethavathu kelu da.'), h('input',{placeholder:'Type here...',style:{padding:'10px',width:'300px'}}), h('button',{style:{padding:'10px 20px',marginLeft:'10px'}},'Send')); };
window.CompanionPage = window.ChatPage;
window.ToolsPage = function(p){ return h('div',{style:{padding:'40px',textAlign:'center'}}, 'Tools Page'); };
