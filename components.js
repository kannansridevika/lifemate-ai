const h = React.createElement;
window.Navbar = function(p){ return h('nav',{style:{padding:'16px',background:'#6d28d9',color:'white',fontWeight:'bold'}}, 'LifeMate AI - Home | Tools | About'); };
window.Footer = function(p){ return h('footer',{style:{padding:'16px',textAlign:'center',background:'#eee'}}, 'LifeMate AI - Made with Love'); };
window.HomePage = function(p){ return h('div',{style:{padding:'40px',textAlign:'center'}}, h('h1',null,'Welcome to LifeMate AI'), h('p',null,'Your AI Companion for Life'), h('button',{style:{padding:'12px 24px',background:'#6d28d9',color:'white',border:'none',borderRadius:'8px',cursor:'pointer'},onClick:function(){ if(p && p.setPage){ p.setPage('chat'); } else if(p && p.navigate){ p.navigate('chat'); } else { window.location.hash='#/chat'; } }},'Get Started')); };
window.VoiceAssistantModal = function(p){ return null; };
window.ChatPage = function(p){ return h('div',{style:{padding:'40px',textAlign:'center'}}, 'Chat Page Coming Soon'); };
window.ToolsPage = function(p){ return h('div',{style:{padding:'40px',textAlign:'center'}}, 'Tools Page'); };
