import React from "react";
import Tweet from "./Tweet";

const feed = [
  {
    user: "Lorem ipsum",
    body: "id velit ut tortor pretium viverra suspendisse potenti nullam ac"
  },
  {
    user: "Lorem ipsum",
    body: "id velit ut tortor pretium viverra suspendisse potenti nullam ac",
    issue: "Lorem ipsum"
  },
  {
    user: "Lorem ipsum",
    body: "id velit ut tortor pretium viverra suspendisse potenti nullam ac"
  },
  {
    user: "Lorem ipsum",
    body: "id velit ut tortor pretium viverra suspendisse potenti nullam ac"
  },
  {
    user: "Lorem ipsum",
    body: "id velit ut tortor pretium viverra suspendisse potenti nullam ac"
  }
]

function Feed() {
  return (
    <div class="feed">
      <div class="topOfFeed">
        <input class="happeningInput" placeholder="What's happening?"></input>
      </div>
        {feed.map((tweet, index) =>
          <Tweet user={tweet.user}
            body={tweet.body}
            issue={tweet.issue}y
            key={index}/>
        )}
    </div>
  )
}

export default Feed;