import React from "react";
import { Follow } from "react-twitter-widgets";

/**
no need for full blow class. The component will become readable and easy to understand as it only
has one job
 */
const UserInfo=({userTwitter,expanded})=>(
  <Follow
    username={userTwitter}
    options={{ count: expanded ? true : "none" }}
  />
)


export default UserInfo;
