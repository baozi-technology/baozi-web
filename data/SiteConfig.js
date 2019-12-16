const config = {
  siteTitle: "Baozi\nTechnology", // Site title.
  siteTitleShort: "Baozi", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Baozi Technology", // Alternative site title for SEO.
  siteLogo: "/logos/baozi-only-logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://baozi.technology", // Domain of your website without pathPrefix.
  pathPrefix: "/baozi-technology", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Baozi Technology is the company under which Nicolas Gimenez operates as a Free Software and freelance developer", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "DD-MM-YYYY", // Date format used in the frontmatter.
  dateFormat: "fr-FR", // Date format for display.
  userName: "Nicolas Gimenez", // Username to display in the author segment.
  userEmail: "nicolas.gimenez@baozi.technology", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/baozi-technology",
      iconClassName: "fab fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nicolas-gimenez-5155aba1/",
      iconClassName: "fab fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:nicolas.gimenez@baozi.technology",
      iconClassName: "far fa-envelope"
    }
  ],
  copyright: "COPYRIGHT © 2019 BAOZI TECHNOLOGY SAS", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
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

