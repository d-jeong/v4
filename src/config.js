module.exports = {
  siteTitle: 'David Jeong | Software Engineer',
  siteDescription:
    'David is a software engineer based in New York City, specializing in iOS app development and dabbling in whatever catches his interest.',
  siteKeywords:
    'David Jeong, David, Jeong, djeong, software engineer, ios engineer, software developer, ios developer, ios, swift, harvard',
  siteUrl: 'https://djeong.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-166270011-1',
  googleVerification: 'jI81cDeY2aWYl8PpUOqrJCmcMhGG93vnQsW_Qnni65A',
  name: 'David Jeong',
  location: 'New York, NY',
  email: 'davidycjeong@gmail.com',
  github: 'https://github.com/d-jeong',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/d-jeong',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jeongdavid',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/d_ycj',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    background: '#1E2028',
    accent: '#5DD8FF',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
