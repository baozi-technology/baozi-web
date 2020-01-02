import React from "react";
import {
  // FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  // FacebookShareCount,
  LinkedinShareCount,
  RedditShareCount,
  // FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";
import styles from "./SocialLinks.module.scss"

const SocialLinks =({postNode, postPath, mobile})=>{
  const post = postNode.frontmatter;
  const renderShareCount = count => (
    <div className={styles.shareCount}>{count > 0 ? count : ""}</div>
  );
  return (
    <div className={styles.socialLinks}>
      <div>
        <RedditShareButton url={urljoin(config.siteUrl, postPath)} title={post.title}>
          <RedditIcon round size={mobile ? 36 : 48} />
          <RedditShareCount url={urljoin(config.siteUrl, postPath)}>
            {count => renderShareCount(count)}
          </RedditShareCount>
        </RedditShareButton>
      </div>
      <div>
        <TwitterShareButton url={urljoin(config.siteUrl, postPath)} title={post.title}>
          <TwitterIcon round size={mobile ? 36 : 48} />
        </TwitterShareButton>
      </div>
      {/* <FacebookShareButton url={url} quote={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {count => renderShareCount(count)}
        </FacebookShareCount>
      </FacebookShareButton> */}
      <div>
        <LinkedinShareButton
          url={urljoin(config.siteUrl, postPath)}
          title={post.title}
          description={postNode.excerpt}
        >
          <LinkedinIcon round size={mobile ? 36 : 48} />
          <LinkedinShareCount url={urljoin(config.siteUrl, postPath)}>
            {count => renderShareCount(count)}
          </LinkedinShareCount>
        </LinkedinShareButton>
      </div>
      <div>
        <TelegramShareButton url={urljoin(config.siteUrl, postPath)}>
          <TelegramIcon round size={mobile ? 36 : 48} />
        </TelegramShareButton>
      </div>
    </div>
  );
}


export default SocialLinks;
