const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Manish Tripathy's Website", // <title>
  shortSiteTitle: "Manish's blog", // <title> ending for posts and pages
  siteDescription: "I'm a software developer and I love to explore and learn more.",
  siteUrl: "http://mtripathy.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Manish Tripathy",
  authorTwitterAccount: "MTripathy91",
  // info
  infoTitle: "manish tripathy",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Manish Tripathy - a software developer passionate about blogging",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "manish.tripathy@outlook.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/tripathym" },
    { name: "twitter", url: "https://twitter.com/mtripathy91" },
    { name: "facebook", url: "https://facebook.com/" }
  ]
};
