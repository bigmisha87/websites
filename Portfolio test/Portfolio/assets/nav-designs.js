/* Shared design switcher list — used by the in-nav dropdown */
window.DESIGNS=[
  {href:'design-1-gallery.html', name:'גלריה מינימליסטית'},
  {href:'design-2-poster.html', name:'קיר פוסטרים'},
  {href:'design-3-brutalist.html', name:'סטודיו ברוטליסטי'},
  {href:'design-4-lab.html', name:'זכוכית'},
  {href:'design-5-particles.html', name:'חלקיקים'},
  {href:'design-6-luxe.html', name:'יוקרה מודרנית'},
  {href:'design-7-kinetic.html', name:'קינטי'},
  {href:'design-8-riso.html', name:'ריזוגרף'},
  {href:'design-9-cinema.html', name:'קולנועי'}
];
window.buildDesignMenu=function(menuId, cur){
  const el=document.getElementById(menuId); if(!el) return;
  let h='<span class="ds-head">העיצובים</span>';
  window.DESIGNS.forEach(d=>{ h+=`<a href="${d.href}"${d.href===cur?' class="cur"':''}>${d.name}</a>`; });
  h+='<div class="ds-divider"></div><a href="index.html" class="home">↩ עמוד הבחירה</a>';
  el.innerHTML=h;
};
