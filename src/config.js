// EDIT THESE VALUES before launch.
export const SITE = {
  name: 'Otarel Solutions',
  url: 'https://otarelsolutions.co.za',
  // International format, digits only, no "+" or spaces. Example for South Africa: 27821234567
  whatsapp: '27XXXXXXXXX',
  email: 'your-email@example.com',
}

export const waLink = (text = '') =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
