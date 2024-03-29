const config = {
  siteTitle: "Baozi\nTechnology", // Site title.
  siteTitleShort: "Baozi", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Baozi Technology", // Alternative site title for SEO.
  siteLogo: "logos/baozi-technology-full-logo-square-gray.png", // Logo used for SEO and manifest.
  siteUrl: "https://baozi.technology", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Nicolas's blog, featuring articles about floss ethics/business, and various technologies. Watch him eating baozi! Hire him as a developer!", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "DD-MM-YYYY", // Date format used in the frontmatter.
  dateFormat: "fr-FR", // Date format for display.
  userName: "Nicolas Gimenez", // Username to display in the author segment.
  userEmail: "", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userGitHub: "https://github.com/nicobao",
  userLinkedIn: "https://www.linkedin.com/in/nicolas-gimenez-5155aba1/",
  userStackExchange:
    "https://stackexchange.com/users/10722664/n-gimenez?tab=accounts",
  copyright: "COPYRIGHT © 2019 NICOLAS GIMENEZ", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#fefefe", // Used for setting manifest and progress theme colors.
  backgroundColor: "#555", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
