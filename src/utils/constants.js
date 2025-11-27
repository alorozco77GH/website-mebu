// Constantes globales de la aplicación

export const SITE_NAME = 'MeBu';
export const SITE_DESCRIPTION = 'Soluciones digitales profesionales para tu negocio';

export const CONTACT_INFO = {
  email: 'info@mebu.com',
  phone: '+1 234 567 890',
  location: 'Tu Ciudad, País',
  workingHours: 'Lun - Vie: 9:00 - 18:00'
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/mebu',
  twitter: 'https://twitter.com/mebu',
  linkedin: 'https://linkedin.com/company/mebu',
  instagram: 'https://instagram.com/mebu'
};

export const NAVIGATION_LINKS = [
  { path: '/', label: 'Inicio' },
  { path: '/about', label: 'Nosotros' },
  { path: '/services', label: 'Servicios' },
  { path: '/contact', label: 'Contacto' }
];

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  // Agregar más endpoints según sea necesario
};

// Radix Colors 12-step scale system
export const COLORS = {
  // Green Scale (Primary - replacing gray with #0CCE6B)
  green1: '#F0FDF4',   // Step 1: App background
  green2: '#DCFCE7',   // Step 2: Subtle background  
  green3: '#BBF7D0',   // Step 3: UI element background
  green4: '#86EFAC',   // Step 4: Hovered UI element background
  green5: '#4ADE80',   // Step 5: Active/Selected UI element background
  green6: '#22C55E',   // Step 6: Subtle borders and separators
  green7: '#16A34A',   // Step 7: UI element border and focus rings
  green8: '#15803D',   // Step 8: Hovered UI element border
  green9: '#0CCE6B',   // Step 9: Solid backgrounds (main brand color)
  green10: '#0AAA58',  // Step 10: Hovered solid backgrounds
  green11: '#166534',  // Step 11: Low-contrast text
  green12: '#14532D',  // Step 12: High-contrast text

  // Red Scale (Accent - #EF2D56)
  red1: '#FFF1F2',     // Step 1: App background
  red2: '#FFE4E6',     // Step 2: Subtle background
  red3: '#FECDD3',     // Step 3: UI element background
  red4: '#FDA4AF',     // Step 4: Hovered UI element background
  red5: '#FB7185',     // Step 5: Active/Selected UI element background
  red6: '#F43F5E',     // Step 6: Subtle borders and separators
  red7: '#E11D48',     // Step 7: UI element border and focus rings
  red8: '#BE123C',     // Step 8: Hovered UI element border
  red9: '#EF2D56',     // Step 9: Solid backgrounds (accent color)
  red10: '#D91E42',    // Step 10: Hovered solid backgrounds
  red11: '#9F1239',    // Step 11: Low-contrast text
  red12: '#881337',    // Step 12: High-contrast text

  // Yellow Scale (Background - #DDED31)  
  yellow1: '#FEFCE8',  // Step 1: App background
  yellow2: '#FEF9C3',  // Step 2: Subtle background
  yellow3: '#FEF08A',  // Step 3: UI element background
  yellow4: '#FDE047',  // Step 4: Hovered UI element background
  yellow5: '#FACC15',  // Step 5: Active/Selected UI element background
  yellow6: '#EAB308',  // Step 6: Subtle borders and separators
  yellow7: '#CA8A04',  // Step 7: UI element border and focus rings
  yellow8: '#A16207',  // Step 8: Hovered UI element border
  yellow9: '#DDED31',  // Step 9: Solid backgrounds (main background)
  yellow10: '#C5E326', // Step 10: Hovered solid backgrounds
  yellow11: '#713F12', // Step 11: Low-contrast text
  yellow12: '#422006', // Step 12: High-contrast text

  // Neutral Gray Scale
  gray1: '#FAFAFA',    // Step 1: App background
  gray2: '#F5F5F5',    // Step 2: Subtle background
  gray3: '#E5E5E5',    // Step 3: UI element background
  gray4: '#D4D4D4',    // Step 4: Hovered UI element background
  gray5: '#A3A3A3',    // Step 5: Active/Selected UI element background
  gray6: '#737373',    // Step 6: Subtle borders and separators
  gray7: '#525252',    // Step 7: UI element border and focus rings
  gray8: '#404040',    // Step 8: Hovered UI element border
  gray9: '#262626',    // Step 9: Solid backgrounds
  gray10: '#171717',   // Step 10: Hovered solid backgrounds
  gray11: '#525252',   // Step 11: Low-contrast text
  gray12: '#0A0A0A',   // Step 12: High-contrast text

  // Legacy aliases for compatibility
  primary: '#0CCE6B',
  secondary: '#262626',
  accent: '#DDED31',
  highlight: '#EF2D56',
  dark: '#0A0A0A',
  light: '#FEFCE8',
  success: '#0CCE6B',
  error: '#EF2D56',
  warning: '#DDED31'
};
