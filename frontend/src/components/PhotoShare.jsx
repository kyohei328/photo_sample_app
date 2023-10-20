
import React from 'react'
import styled from 'styled-components/dist/styled-components.cjs'
import { Link } from 'react-router-dom'
import { TwitterIntentTweet } from "./Tweet.tsx";

const MoveList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  list-style: none;
  padding: 0;
`
const ListItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 100px;
  width: 100%;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  border: 1px solid #0077b5;
  background-color: white;
  display: block;
  text-align: center;
  padding: 30px;
`
const STwitterIntentTweet = styled(TwitterIntentTweet)`
  text-decoration: none;
  color: #000000;
  border: 1px solid #0077b5;
  background-color: white;
  display: block;
  text-align: center;
  padding: 30px;
`

const PhotoShare = () => {

    const Tweet = {
      text: "写真を投稿しました。",
      url: "http://localhost:3001/photo/index",
      hashtags: ["photo"],
      in_reply_to: "123456789",
    }

  return (
    <MoveList>
      <ListItem>
        <StyledLink to="/">
          トップへ戻る
        </StyledLink>
      </ListItem>
      <ListItem>
        <STwitterIntentTweet {...Tweet} />
      </ListItem>
    </MoveList>
  )
}

export default PhotoShare
