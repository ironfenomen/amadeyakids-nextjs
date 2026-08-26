/* ==========================================================================
   AMADEYA WEB CORE — world.js v1.0.0 (ex Script#v36-world layout.tsx детокса)
   Canonical source: репо amadeya-web-core/js/world.js. В сайте — sync-копия.
   Мир-слой (знак/свечение/lerp), шапка .on, hero-слайдер «граница света»,
   цифры countup, reveal, меню v2.1 (аккордеон/футер/a11y/свайп).
   Site-данные: window.__V36_SITE__ (см. site.config сайта) — до вызова этого файла.
   ========================================================================== */
(function(){
            var b=document.body;
            b.classList.add('v36-anim');
            requestAnimationFrame(function(){requestAnimationFrame(function(){b.classList.add('v36-loaded');});});
            var mark=document.getElementById('v36Mark');
            var glow=document.getElementById('v36Glow');
            /* мир-фон: свечение и знак плавно следуют за секциями (макет v36-16: data-gx/gy/ms/mo + lerp) */
            var cur={gx:70,gy:26,ms:1,mo:.055}, tgt={gx:70,gy:26,ms:1,mo:.055};
            var io2=new IntersectionObserver(function(es){
              es.forEach(function(e){
                if(e.isIntersecting){
                  tgt.gx=parseFloat(e.target.dataset.gx)||50;
                  tgt.gy=parseFloat(e.target.dataset.gy)||50;
                  tgt.ms=parseFloat(e.target.dataset.ms)||1;
                  tgt.mo=parseFloat(e.target.dataset.mo)||.05;
                }});
            },{threshold:.05}); /* .05, не .3: на мобильном секции высокие, 30% не набиралось — мир не двигался */
            function initGx(){document.querySelectorAll('[data-gx]').forEach(function(el){io2.observe(el)});}
            /* тёмные внутренние страницы (итерация 12): паттерн — только там,
               где нет hero главной (у неё своя расстановка, её не трогаем) */
            if(document.querySelector('.v36-dark')&&!document.querySelector('.v36-hero')){
              var PAT=[['72%','24%','1.15','.06'],['16%','70%','1.35','.05'],['50%','50%','1.6','.045'],['80%','74%','1.2','.055'],['14%','26%','1.3','.05']];
              document.querySelectorAll('.v36-dark .page section, .v36-dark .page-banner, .v36-dark .people-block, .v36-dark .reviews-block, .v36-dark .contact-block-2, .v36-dark .posts-block, .v36-dark .v36-doc').forEach(function(sec,i){
                if(sec.hasAttribute('data-gx'))return;
                var p=PAT[i%PAT.length];
                sec.setAttribute('data-gx',p[0]);sec.setAttribute('data-gy',p[1]);
                sec.setAttribute('data-ms',p[2]);sec.setAttribute('data-mo',p[3]);
              });
            }
            initGx();
            function onScroll(){
              var on=(window.scrollY||0)>60;
              var hd=document.querySelector('.header'); /* в теме шапка — div.header, не тег header */
              if(hd)hd.classList.toggle('on',on);
              var nv=document.querySelector('.nav'); /* полоса меню делит стекло с шапкой (соседний селектор ненадёжен) */
              if(nv)nv.classList.toggle('on',on);
            }
            window.addEventListener('scroll',onScroll,{passive:true});
            onScroll();
            /* высота шапки → --hdr-h для фиксированной полосы меню на тёмной главной.
               init-замер ненадёжен: до применения CSS/шрифтов/картинок шапка выше боевой
               (a26 ловил 110px вместо 92 → светлая полоса под шапкой; детокс 267px → меню уплывало).
               Пересчитываем на load, после шрифтов и через ResizeObserver на самой шапке. */
            function setHdrH(){var hd=document.querySelector('.header');if(hd)document.documentElement.style.setProperty('--hdr-h',hd.offsetHeight+'px');}
            setHdrH();window.addEventListener('resize',setHdrH);
            window.addEventListener('load',setHdrH);
            if(document.fonts&&document.fonts.ready)document.fonts.ready.then(setHdrH);
            if(window.ResizeObserver){var hdEl=document.querySelector('.header');if(hdEl)new ResizeObserver(setHdrH).observe(hdEl);}
            (function loop(){
              cur.gx+=(tgt.gx-cur.gx)*.045; cur.gy+=(tgt.gy-cur.gy)*.045;
              cur.ms+=(tgt.ms-cur.ms)*.045; cur.mo+=(tgt.mo-cur.mo)*.045;
              if(glow){var dx=(cur.gx-50)/100*window.innerWidth,dy=(cur.gy-50)/100*window.innerHeight;glow.style.transform='translate(-50%,-50%) translate3d('+dx.toFixed(1)+'px,'+dy.toFixed(1)+'px,0)';}
              if(mark){mark.style.setProperty('--ms',cur.ms.toFixed(3));mark.style.setProperty('--mo',cur.mo.toFixed(3));}
              requestAnimationFrame(loop);
            })();
            /* граница света: единый state pos (0..1); tap в любую точку фото → бегунок приезжает и drag продолжается;
               вертикальный жест = скролл страницы (touch-action: pan-y в CSS), горизонтальный = слайдер;
               клавиатура: стрелки/Home/End; фрагмент главной внедряется асинхронно — ждём появления */
            var inited=[];
            var reduceMotion=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
            function initStages(){
              document.querySelectorAll('.h36-stage').forEach(function(st){
                if(inited.indexOf(st)>-1)return;
                var warm=st.querySelector('.h36-warm'), div=st.querySelector('.h36-div');
                if(!warm||!div)return;
                inited.push(st);
                var x=.62,tx=.62,t0=performance.now();
                var dragging=false,moved=false,downX=0,ariaLast=-1;
                /* на таче — резче следим за пальцем; вне вьюпорта — спим (Android-лаг) */
                var coarse=window.matchMedia&&matchMedia('(pointer: coarse)').matches;
                var ease=coarse?.22:.07;
                var vis=true;
                new IntersectionObserver(function(es){es.forEach(function(e){vis=e.isIntersecting;});},{threshold:0}).observe(st);
                function pct(ev){var r=st.getBoundingClientRect();return Math.min(1,Math.max(0,(ev.clientX-r.left)/r.width));}
                function render(pc){
                  var s=(pc*100).toFixed(2)+'%';
                  warm.style.setProperty('--x',s);
                  div.style.setProperty('--x',s);
                  var n=Math.round(pc*100);
                  if(n!==ariaLast){ariaLast=n;st.setAttribute('aria-valuenow',String(n));}
                }
                st.addEventListener('pointerdown',function(e){
                  /* клик по кнопкам/ссылкам hero — не трогаем бегунок */
                  if(e.target.closest&&e.target.closest('a,button'))return;
                  dragging=true;moved=false;downX=e.clientX;tx=pct(e);
                  t0=performance.now();
                  try{st.setPointerCapture(e.pointerId);}catch(_){}
                  st.classList.add('h36-grabbing');
                });
                st.addEventListener('pointermove',function(e){
                  t0=performance.now();
                  if(dragging){
                    tx=pct(e);
                    /* tap→drag как одна модель: после порога 6px — прямое следование за пальцем */
                    if(moved||Math.abs(e.clientX-downX)>6){moved=true;x=tx;render(x);}
                  }else if(e.pointerType==='mouse'){
                    tx=pct(e); /* hover-следование (десктоп) */
                  }
                },{passive:true});
                function endDrag(){dragging=false;moved=false;st.classList.remove('h36-grabbing');}
                st.addEventListener('pointerup',endDrag);
                st.addEventListener('pointercancel',endDrag);
                st.addEventListener('lostpointercapture',endDrag);
                st.addEventListener('dragstart',function(e){e.preventDefault();});
                st.addEventListener('keydown',function(e){
                  var k=e.key;
                  if(k==='ArrowLeft'||k==='ArrowDown')tx=Math.max(0,tx-.04);
                  else if(k==='ArrowRight'||k==='ArrowUp')tx=Math.min(1,tx+.04);
                  else if(k==='Home')tx=0;
                  else if(k==='End')tx=1;
                  else return;
                  e.preventDefault();
                  x=tx;render(x);
                  t0=performance.now();
                });
                (function loopS(){
                  if(vis&&!dragging){
                    /* автопокачивание — только декор: выключается при reduced-motion и не мешает drag */
                    if(!reduceMotion&&performance.now()-t0>4000)tx=.62+.16*Math.sin(performance.now()/2600);
                    x+=(tx-x)*ease; /* короткая интерполяция при click-relocation и hover */
                    render(x);
                  }
                  requestAnimationFrame(loopS);
                })();
              });
            }
            initStages();
            /* цифры: reveal + countup (макет v36-16) */
            function countUp(el){
              if(el.dataset.done)return; el.dataset.done=1;
              var to=+el.dataset.to, suf=el.dataset.suf||'', t0=null, dur=1600;
              function step(t){ if(!t0)t0=t; var p=Math.min((t-t0)/dur,1);
                var e=1-Math.pow(1-p,3);
                el.textContent=Math.round(to*e)+(p===1?suf:'');
                if(p<1)requestAnimationFrame(step); }
              requestAnimationFrame(step);
            }
            var ioRv=new IntersectionObserver(function(es){
              es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); ioRv.unobserve(e.target);
                var bb=e.target.querySelector('b[data-to]'); if(bb)countUp(bb); }});
            },{rootMargin:'0px 0px -8% 0px',threshold:.1});
            function initReveal(){
              if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
              document.querySelectorAll('.v36-num,.v36-moment blockquote,.v36-moment-src').forEach(function(el,i){
                if(!el.classList.contains('v36-rv')){
                  el.classList.add('v36-rv');
                  el.style.setProperty('--i',Math.min(i,8));
                  ioRv.observe(el);
                }
              });
            }
            initReveal();
            /* контактный низ мобильного меню-оверлея */
            /* Меню v2: мир-подложка, аккордеон, липкий непрозрачный футер, Esc/фокус, свайп-закрытие */
            function initMenu(){
              var oc=document.querySelector('.over-container.is_show .over-content');
              if(!oc||!oc.querySelector('.header-menu'))return;
              /* мир-подложка: знак дышит + свечение, двигаются за скроллом (--mm-shift) */
              if(!oc.querySelector('.v36-mmenu-world')){
                var w=document.createElement('div');
                w.className='v36-mmenu-world';
                w.setAttribute('aria-hidden','true');
                w.innerHTML='<div class="w-glow"></div><div class="w-mark"></div>';
                oc.insertBefore(w,oc.firstChild);
              }
              /* аккордеон подменю: первый тап раскрывает, переход — ссылкой «Перейти в раздел» */
              if(!oc.dataset.acc){
                oc.dataset.acc=1;
                oc.querySelectorAll('.menu-items.level-1 > li').forEach(function(li){
                  var sub=li.querySelector(':scope > ul.level-2');
                  var a=li.querySelector(':scope > a');
                  if(!sub||!a)return;
                  li.classList.add('v36-has-sub');
                  a.setAttribute('aria-expanded','false');
                  var go=document.createElement('li');
                  go.className='v36-goto';
                  go.innerHTML='<a href="'+a.getAttribute('href')+'">Перейти в раздел</a>';
                  sub.insertBefore(go,sub.firstChild);
                  if(li.classList.contains('active')||li.querySelector('.current')){
                    li.classList.add('open');
                    a.setAttribute('aria-expanded','true');
                  }
                  a.addEventListener('click',function(e){
                    /* аккордеон — только внутри мобильного оверлея; на десктопе ссылка работает как обычно */
                    if(!a.closest('.over-content'))return;
                    e.preventDefault();
                    var open=li.classList.toggle('open');
                    a.setAttribute('aria-expanded',open?'true':'false');
                  });
                });
              }
              /* футер: телефон + действия всегда на экране; контент не уходит под него.
                 Вешаем на .over-container (fixed, без transform): fixed-футер внутри
                 трансформированного .over-content якорился бы не к вьюпорту */
              var box=oc.closest('.over-container')||oc.parentElement;
              if(box&&!box.querySelector('.v36-mmenu-foot')){
                var foot=document.createElement('div');
                foot.className='v36-mmenu-foot';
                /* site-данные из window.__V36_SITE__ (site.config сайта); детокс-вывод байт-идентичен прежнему */
                var __S=window.__V36_SITE__||{};
                foot.innerHTML='<a class="v36-mmenu-tel" href="tel:'+__S.telHref+'">'+__S.tel+'</a>'
                  +'<div class="v36-mmenu-acts">'
                  +'<a class="v36-btn v36-btn-g" href="javascript:;"'+__S.popupAttr+'>'+__S.ctaCall+'</a>'
                  +'<a class="v36-btn v36-btn-w" href="https://wa.me/'+__S.waHref+'">'+__S.ctaWa+'</a>'
                  +'</div>'
                  +'<div class="v36-mmenu-addr">'+__S.addrHtml+'</div>';
                box.appendChild(foot);
              }
              /* футер вне потока: добавляем скролл-контейнеру нижний паддинг в его высоту,
                 иначе последний пункт («Контакты») прячется под панелью */
              var footEl=box?box.querySelector('.v36-mmenu-foot'):null;
              if(footEl&&!oc.dataset.mmfit){
                oc.dataset.mmfit=1;
                var fitFoot=function(){oc.style.paddingBottom=footEl.offsetHeight+'px';};
                requestAnimationFrame(fitFoot);
                window.addEventListener('resize',fitFoot);
              }
              /* параллакс мира: скроллит .over-content, не .header-menu-content */
              if(!oc.dataset.mmscroll){
                oc.dataset.mmscroll=1;
                oc.addEventListener('scroll',function(){
                  oc.style.setProperty('--mm-shift',(oc.scrollTop*.25).toFixed(1)+'px');
                },{passive:true});
              }
              /* Esc + фокус + свайп вправо = закрытие */
              if(!oc.dataset.a11y){
                oc.dataset.a11y=1;
                oc.setAttribute('role','dialog');
                oc.setAttribute('aria-modal','true');
                oc.setAttribute('aria-label','Меню сайта');
                var firstA=oc.querySelector('.menu-items.level-1 > li > a');
                if(firstA){firstA.setAttribute('tabindex','-1');firstA.focus({preventScroll:true});}
                var sx=0,sy=0;
                oc.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY;},{passive:true});
                oc.addEventListener('pointerup',function(e){
                  var dx=e.clientX-sx, dy=e.clientY-sy;
                  /* edge-guard: жест, начавшийся у левого края (<=24px) — системный
                     back-жест iOS, меню им не закрываем (P-08) */
                  if(dx>70&&Math.abs(dy)<60&&sx>24){
                    /* крестик живёт в #over-container, не в .over-content */
                    var c=document.querySelector('.over-container.is_show .overheight_close_button');
                    if(c){c.click();var mb=document.getElementById('menu-button');if(mb)mb.focus({preventScroll:true});}
                  }
                },{passive:true});
              }
              /* клавиатура — ОДИН глобальный слушатель (раньше вешался на document
                 при каждом открытии — накапливался, P-02): Esc = закрыть+фокус,
                 Tab = focus trap внутри меню (aria-modal обещает это) */
              if(!window.__v36menuKeys){
                window.__v36menuKeys=1;
                document.addEventListener('keydown',function(e){
                  var cont=document.querySelector('.over-container.is_show');
                  if(!cont)return;
                  if(e.key==='Escape'){
                    var c=cont.querySelector('.overheight_close_button');
                    if(c){c.click();var mb=document.getElementById('menu-button');if(mb)mb.focus({preventScroll:true});}
                    return;
                  }
                  if(e.key==='Tab'){
                    var f=cont.querySelectorAll('a[href],button,[tabindex]:not([tabindex="-1"])');
                    var list=[];
                    for(var i=0;i<f.length;i++){ if(f[i].getClientRects().length) list.push(f[i]); }
                    if(!list.length)return;
                    var first=list[0], last=list[list.length-1];
                    if(e.shiftKey&&document.activeElement===first){ e.preventDefault(); last.focus(); }
                    else if(!e.shiftKey&&document.activeElement===last){ e.preventDefault(); first.focus(); }
                  }
                });
              }
            }
            var mo2=new MutationObserver(function(){initStages();initReveal();initMenu();initGx();});
            mo2.observe(document.body,{childList:true,subtree:true});
            document.addEventListener('click',function(e){
              if(e.target&&e.target.closest&&e.target.closest('#menu-button'))setTimeout(initMenu,380);
            });
          })();