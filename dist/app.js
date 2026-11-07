(()=>{
 const keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid'];
 let saved={};try{saved=JSON.parse(sessionStorage.getItem('gi_attribution')||'{}')}catch{}
 const current=new URLSearchParams(location.search);for(const k of keys){if(current.has(k))saved[k]=current.get(k)}
 saved.entry_page=saved.entry_page||location.pathname;try{sessionStorage.setItem('gi_attribution',JSON.stringify(saved))}catch{}
 const event=(name,extra={})=>{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:name,...saved,device:matchMedia('(max-width:650px)').matches?'mobile':matchMedia('(max-width:950px)').matches?'tablet':'desktop',...extra})};
 document.querySelectorAll('a[href]').forEach(a=>{
  const u=new URL(a.href,location.origin);if(!['http:','https:'].includes(u.protocol))return;
  for(const k of keys)if(saved[k]&&!u.searchParams.has(k))u.searchParams.set(k,saved[k]);
  if(a.getAttribute('href').startsWith('#'))a.href=location.pathname+u.search+u.hash;else a.href=u.href;
  if(a.dataset.platform)a.addEventListener('click',()=>event('guia_platform_click',{platform:a.dataset.platform,destination:u.origin+u.pathname}));
 });
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  document.querySelectorAll('[data-card]').forEach(x=>x.hidden=b.dataset.filter!=='all'&&x.dataset.card!==b.dataset.filter);
  event('guia_filter_selected',{platform:b.dataset.filter});
 }));
 const form=document.getElementById('finder');form?.addEventListener('submit',e=>{
  e.preventDefault();const id=new FormData(form).get('priority');const names={hub:'Hub',flambra:'Flambra',kgen:'KGeN',claru:'Claru'};if(!names[id])return;
  const result=document.getElementById('finder-result');result.replaceChildren();
  const h=document.createElement('h3');h.textContent=`Comece pela análise do ${names[id]}.`;
  const p=document.createElement('p');p.textContent='Essa é uma sugestão de leitura baseada na sua prioridade. Não confirma elegibilidade, aprovação ou ganhos.';
  const a=document.createElement('a');a.className='button';const u=new URL(`/analises/${id}/`,location.origin);for(const k of keys)if(saved[k])u.searchParams.set(k,saved[k]);a.href=u.href;a.textContent='Ver análise e próximo passo →';
  result.append(h,p,a);result.hidden=false;event('guia_finder_completed',{platform:id});
 });
})();
