import { hex2rgba } from '@utils';

const ACCENT = '#5DD8FF';
const BG = '#1E2028';

const theme = {
  colors: {
    splashBackground: BG,
    background: BG,
    highlightedBackground: hex2rgba('#fbfbfb', 0.9),
    lightestNavy: '#303C55',
    primaryText: '#252525',
    secondaryText: '#969696',
    tertiaryText: '#7c7c7c',
    white: '#e6f1ff',
    accent: ACCENT,
    transAccent: hex2rgba(ACCENT, 0.07),
    shadowBackground: hex2rgba('#444444', 0.7),
    xcodeKeywords: '#B21889',
    xcodeDeclarations: '#41A1C0',
    xcodePlain: '#FFFFFF',
    xcodeStrings: '#DB2C38',
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
