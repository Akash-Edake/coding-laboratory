setInterval(() => {
date= new Date();
hrtime=date.getHours();
mntime=date.getMiniutes();
sctime=date.getSeconds();
 hrotation=(30*hrtime)+ (mntime/2);
 mrotation=(6*mntime);
 srotation=(6*sctime);

hour.style.transform ='rotate(${hrotation}deg)';
minute.style.transform ='rotate(${mrotation}deg)';
second.style.transform ='rotate(${srotation}deg)';


},1000);