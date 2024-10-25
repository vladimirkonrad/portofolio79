const siteMetadata = {
  title: 'Vladimir Konrad',
  author: 'Vladimir Konrad',
  headerTitle: 'Vladimir Konrad',
  description: 'Software Developer at Konrad & Sohn doo',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://konrad.rs',
  siteRepo: 'https://github.com/vladimirkonrad',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'info@konrad.rs',
  github: 'https://github.com/vladimirkonrad',
  twitter: 'https://twitter.com/vladimirkonrad',
  facebook: 'https://facebook.com/vladimirkonrad      ',
  linkedin: 'https://www.linkedin.com/in/vladimirkonrad/',
  spotify: 'https://open.spotify.com/',
  steam: 'https://steamcommunity.com/id/vladimirkonrad/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
