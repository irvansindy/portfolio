/**
 * Script loader utility for external libraries
 * Used to load jQuery, tilt.js, slick, fancybox, etc.
 */

export const loadExternalScript = (src, id = null) => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    if (id) {
      script.id = id;
    }

    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    document.body.appendChild(script);
  });
};

export const loadExternalStyles = (href, id = null) => {
  return new Promise((resolve, reject) => {
    // Check if style already exists
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    if (id) {
      link.id = id;
    }

    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load style: ${href}`));

    document.head.appendChild(link);
  });
};

/**
 * Initialize external libraries
 */
export const initializeExternalLibraries = async () => {
  try {
    // Load jQuery (if needed)
    // await loadExternalScript('assets/js/vendor/jquery-3.1.1.min.js', 'jquery-script');

    // Load tilt.js for 3D card effect
    // await loadExternalScript('assets/js/vendor/tilt.jquery.js', 'tilt-script');

    // Load slick carousel
    // await loadExternalScript('assets/js/vendor/slick.min.js', 'slick-script');

    // Load fancybox for image lightbox
    // await loadExternalScript('assets/js/vendor/jquery.fancybox.min.js', 'fancybox-script');

    // Load mixitup for portfolio filtering
    // await loadExternalScript('assets/js/vendor/mixitup.min.js', 'mixitup-script');

    // Load tweenmax for animations
    // await loadExternalScript('assets/js/vendor/tweenmax.min.js', 'tweenmax-script');

    console.log("External libraries initialized");
  } catch (error) {
    console.error("Error initializing external libraries:", error);
  }
};
