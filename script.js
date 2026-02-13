document.addEventListener("DOMContentLoaded", () => {

  /* ===== CONFIG ===== */

  const videoFondoLocal = "media/videos/fondo.mp4";
  const audioFondo = "media/audio/fondo.mp3";

  const libreria = {
    oso: [
      { tipo: "video", src: "media/videos/oso1.mp4" },
      { tipo: "video", src: "media/videos/oso2.mp4" },
      { tipo: "video", src: "media/videos/oso3.mp4" },
      { tipo: "video", src: "media/videos/oso4.mp4" },
      { tipo: "video", src: "media/videos/oso5.mp4" },
      { tipo: "video", src: "media/videos/oso6.mp4" },
      { tipo: "video", src: "media/videos/oso7.mp4" },
      { tipo: "video", src: "media/videos/oso8.mp4" },
      { tipo: "video", src: "media/videos/oso9.mp4" },
      { tipo: "video", src: "media/videos/oso10.mp4"},
      { tipo: "video", src: "media/videos/oso11.mp4"},      
      { tipo: "video", src: "media/videos/oso12.mp4"},
      { tipo: "video", src: "media/videos/oso13.mp4"},      
      { tipo: "video", src: "media/videos/oso14.mp4"},
      { tipo: "video", src: "media/videos/oso15.mp4"},
      { tipo: "video", src: "media/videos/6222a033f94d513977c8e55e8f5db169.mp4"},
      { tipo: "video", src: "media/videos/4f216fdcbb24451a6e1817e8ba92a5ed.mp4"},
      { tipo: "video", src: "media/videos/939bfe7828c6476532cc54a1d4cb4605.mp4"},
      { tipo: "video", src: "media/videos/90f0fefa9139c3741575d79e73ba1186.mp4"},
      { tipo: "video", src: "media/videos/560044c2d88ea8eaecfa772eb019d695.mp4"},
      { tipo: "video", src: "media/videos/6711d3c62e170e4b0add948f5115f6f9.mp4"},
      { tipo: "video", src: "media/videos/b7d715c2cb0287128d72bf7a995abd7b.mp4" },
      { tipo: "video", src: "media/videos/1c3da1907fc213c526d286bc98c2287e.mp4" },
      { tipo: "video", src: "media/videos/960e37421dedb6339a2e6d746a4a85e7.mp4" },
      { tipo: "video", src: "media/videos/c065ab93b8a5f225ca3fcb25d8662569.mp4" },
      { tipo: "video", src: "media/videos/921c76bb1e7f9e8f8e6918f2c4e25a2e.mp4" },
      { tipo: "video", src: "media/videos/6113832afcebcd5a0980215c87c9efb1.mp4" },
      { tipo: "video", src: "media/videos/ba023795024c27543e9e3fd2790a6857.mp4" },
      { tipo: "video", src: "media/videos/98e4f7419301a90ccf63b794a30df14e.mp4" },
      { tipo: "video", src: "media/videos/72f9cfa22ea4573281ac8b647aad6aaf.mp4" },
      { tipo: "video", src: "media/videos/c05ef0d3248990e7878903b6d2818083.mp4"},
      { tipo: "video", src: "media/videos/98d818ec99248dcd1841d1171be41ab6.mp4"},      
      { tipo: "video", src: "media/videos/77e6502d68f3da3bc7762f43dfcb0b4c.mp4"},
      { tipo: "video", src: "media/videos/7f381746ace4fbd61aba0ac302555b14.mp4"},      
      { tipo: "video", src: "media/videos/720e0e28535460b2eb7d6641157d8753.mp4"},
      { tipo: "video", src: "media/videos/0a860c218d541aec985fd7f3c9fb5077.mp4"},
      { tipo: "video", src: "media/videos/94c952d14f1cda3cfd39763fea2355b3.mp4"},
      { tipo: "video", src: "media/videos/a72181cd657049719d0fb4d2516920f8.mp4"},
      { tipo: "video", src: "media/videos/d4034073e15b74dacca8deca8d95c3b7.mp4"},
      { tipo: "video", src: "media/videos/68e5ffab2e9da8f482c7fda4cb8437dc.mp4"},
      { tipo: "video", src: "media/videos/3a494757c2510534ab2d9c0d1a02b2db.mp4"},
      { tipo: "video", src: "media/videos/oso1.mp4" },
      { tipo: "video", src: "media/videos/oso2.mp4" },
      { tipo: "video", src: "media/videos/oso3.mp4" },
      { tipo: "video", src: "media/videos/oso4.mp4" },
      { tipo: "video", src: "media/videos/oso5.mp4" },
      { tipo: "video", src: "media/videos/oso6.mp4" },
      { tipo: "video", src: "media/videos/oso7.mp4" },
      { tipo: "video", src: "media/videos/oso8.mp4" },
      { tipo: "video", src: "media/videos/oso9.mp4" },
      { tipo: "video", src: "media/videos/oso10.mp4"},



d7a422ec597b7a52e1a9927a2eca0e21.mp4
3990ba9ac77c601d5cee3b5761e86ced.mp4
6d9e932b9ca0858f16a7bbc9665bb9a0.mp4
98f7ebccd41546d4684cea15e6d7d307.mp4
01e4502ca98f25707a4124be794af236.mp4
a704fe288deff1854a8c3347cb54a2af.mp4
4aade6be9e839d68364ed6de6aac29d4.mp4
ea447bdd20c7aa51a3957240bceefa1f.mp4
  
6dea321f8f390afb2d2601cf0c630b67.mp4
0359104c12dc69c2ac05daf5338e9af5.mp4
  
 ] };

  /* ===== ESTADO ===== */
let categoriaActual = null;
let primeraVez = true;
let zIndex = 10;
let popupsActivos = []; 

  /* ===== ELEMENTOS ===== */
  const selector = document.getElementById("selector");
  const main = document.getElementById("main");
  const btn = document.getElementById("openBtn");
  const popupZone = document.getElementById("popupZone");
  const bgVideo = document.getElementById("bgVideo");
  const bgWrap = document.getElementById("videoBackground");
  const bgAudio = document.getElementById("bgAudio");

  /* ===== SELECCIÓN ===== */
document.querySelectorAll(".selector-btn").forEach(b => {
  b.addEventListener("click", () => {

    categoriaActual = b.dataset.cat;

    /* 🔓 DESBLOQUEO GLOBAL DE MEDIA (MÓVIL) */
    bgVideo.src = "media/videos/fondo.mp4"; // LOCAL
    bgVideo.muted = true;
    bgVideo.play().catch(()=>{});

    bgAudio.src = "media/audio/fondo.mp3";
    bgAudio.muted = true;
    bgAudio.play().catch(()=>{});

    /* UI */
    selector.style.display = "none";
    main.style.display = "flex";
  });
});


  /* ===== POPUPS ===== */
btn.addEventListener("click", () => {

    if (!categoriaActual || !libreria[categoriaActual]) return;

    if (primeraVez) {
        bgWrap.style.opacity = "1";
        bgVideo.muted = false;
        bgAudio.muted = false;
        // En móviles, play() debe llamarse inmediatamente en el click
        bgVideo.play().catch(e => console.log("Error video:", e));
        bgAudio.play().catch(e => console.log("Error audio:", e));
        btn.style.opacity = "0.5"; 
        primeraVez = false;
    }
  if (popupsActivos.length >= 4) {
        const viejo = popupsActivos.shift(); // Saca el primero de la lista (el más antiguo)
        if (viejo) viejo.remove(); // Lo elimina del DOM
    }
    const lista = libreria[categoriaActual];
    const elegido = lista[Math.floor(Math.random() * lista.length)];

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.zIndex = ++zIndex;

    // --- CÁLCULO DE POSICIÓN RESPONSIVO ---
const isMobile = window.innerWidth < 600;

const popupWidth = isMobile
  ? window.innerWidth * 0.51
  : 380;

const popupHeight = isMobile
  ? window.innerHeight * 0.39
  : 560;

/* Aplicar tamaño REAL al popup */
popup.style.width = popupWidth + "px";
popup.style.height = popupHeight + "px";


    let x = Math.random() * (window.innerWidth - popupWidth);
    let y = Math.random() * (window.innerHeight - popupHeight);

    // Evitar que aparezca fuera de los bordes
    x = Math.max(10, Math.min(x, window.innerWidth - popupWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - popupHeight - 10));

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    popup.innerHTML = `<span class="close">&times;</span>`;

    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // Los popups suelen requerir estar muteados para autoplay infinito
    video.playsInline = true; // OBLIGATORIO PARA IOS
    video.setAttribute("webkit-playsinline", "true"); // Extra para versiones viejas de Safari

    video.src = elegido.src; 
    
    popup.appendChild(video);

    popup.querySelector(".close").onclick = e => {
        e.stopPropagation();
popupsActivos = popupsActivos.filter(p => p !== popup);
        popup.remove();
    };

    popupZone.appendChild(popup);
popupsActivos.push(popup);
});





});







