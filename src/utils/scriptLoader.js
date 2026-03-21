// /**
//  * Script loader utility for external libraries
//  * Used to load jQuery, tilt.js, slick, fancybox, etc.
//  */
export const loadExternalScript = (src, id = null) => {
  return new Promise((resolve, reject) => {
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;

    if (id) {
      script.id = id;
    }

    script.onload = () => resolve();
    script.onerror = () => reject(`Failed to load ${src}`);

    document.body.appendChild(script);
  });
};

export const initializeExternalLibraries = async () => {
  try {
    // jQuery (WAJIB pertama)
    await loadExternalScript("/assets/js/vendor/jquery-3.1.1.min.js", "jquery");

    // pastikan global
    window.$ = window.jQuery;

    // Bootstrap
    await loadExternalScript(
      "/assets/js/vendor/bootstrap.bundle.min.js",
      "bootstrap"
    );

    // Tilt effect
    await loadExternalScript(
      "/assets/js/vendor/tilt.jquery.js",
      "tilt"
    );

    // Mixitup
    await loadExternalScript(
      "/assets/js/vendor/mixitup.min.js",
      "mixitup"
    );

    // Fancybox
    await loadExternalScript(
      "/assets/js/vendor/jquery.fancybox.min.js",
      "fancybox"
    );

    // Slick slider
    await loadExternalScript(
      "/assets/js/vendor/slick.min.js",
      "slick"
    );

    // TweenMax (animasi scroll arrow)
    await loadExternalScript(
      "/assets/js/vendor/tweenmax.min.js",
      "tweenmax"
    );

    // MAIN TEMPLATE SCRIPT
    await loadExternalScript(
      "/assets/js/script.js",
      "main-script"
    );
  } catch (err) {
    console.error(err);
  }
};