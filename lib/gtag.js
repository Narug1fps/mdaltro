// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID

// Registra visualizações de página
export const pageview = (url) => {
  if (!window.gtag) return
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// Dispara eventos de conversão
export const event = ({ action, params }) => {
  if (!window.gtag) return
  window.gtag("event", action, params)
}
