const lb=document.getElementById('lb'),li=lb.querySelector('img'),lp=lb.querySelector('p');
document.querySelectorAll('.gallery figure').forEach(f=>f.addEventListener('click',()=>{
  const i=f.querySelector('img');li.src=i.src;li.alt=i.alt;lp.textContent=f.querySelector('figcaption')?.textContent||'';lb.classList.add('on');
}));
lb.addEventListener('click',()=>lb.classList.remove('on'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
