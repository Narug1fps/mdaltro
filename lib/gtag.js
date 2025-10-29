export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG_ID

// Registra visualizações de página
export const pageview = (url) => {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Dispara eventos personalizados
export const event = ({ action, params }) => {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', action, params)
}
