// lib/fpixel.js
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// Envia evento de pageview
export const pageview = () => {
  if (!window.fbq) return;
  window.fbq("track", "PageView");
};

// Envia eventos personalizados
export const event = (name, options = {}) => {
  if (!window.fbq) return;
  window.fbq("trackCustom", name, options);
};
