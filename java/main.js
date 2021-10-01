$(window).on("load", function(){
   $("header").vide("./vidio/vidio.mp4",{
      playbackRate: 1
   });
})
$("header").vide("./vidio/vidio.mp4");

let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

setInterval(tik, 10);
function tik (){
   let d = new Date();
   let th = 23-d.getHours();
   if (th < 10) {
      th="0"+th;
   }
   let tm = 59-d.getMinutes();
   if (tm < 10) {
      tm="0"+tm;
   }   
   let ts = 59-d.getSeconds();
   if (ts < 10) {
      ts="0"+ts;
   }

   h.innerHTML=(th+":");
   m.innerHTML=(tm+":");
   s.innerHTML=(ts);
}