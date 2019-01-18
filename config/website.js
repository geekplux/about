const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'GeekPlux - About', // Navigation and Site Title
  siteTitleAlt: 'GeekPlux', // Alternative Site title for SEO
  siteTitleShort: 'GeekPlux', // short_name for manifest
  siteUrl: 'https://about.geekplux.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.jpg', // Used for SEO and manifest
  siteDescription: 'About page of GeekPlux. About | Projects | Contact',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@geekplux', // Twitter Username
  ogSiteName: 'geekplux', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
