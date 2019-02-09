const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Krystian Kowal portfolio', // Navigation and Site Title
  siteTitleAlt: 'Kris', // Alternative Site title for SEO
  siteTitleShort: 'Kris', // short_name for manifest
  siteHeadline: 'Web developer and Arch Linux maniac', // Headline for schema.org JSONLD
  siteUrl: 'https://kowal.pro', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'This is my contact site and place for my portfolio.',
  author: 'KrystianKowal', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@Kyczan', // Twitter Username
  ogSiteName: 'krisu.kowal', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
