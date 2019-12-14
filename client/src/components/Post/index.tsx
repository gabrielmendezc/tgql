import React, { FC } from 'react'
import { ProfilePictureWrapper } from '../Navbar/styles'
import * as SC from './styles'
import { formatDistanceToNow } from 'date-fns'

interface IPostProps {
  author: {
    username: string
    profilePicture: string
  }
  body: string
  postedAt: Date
}

export const Post: FC<IPostProps> = ({ author, body, postedAt }) => {
  return (
    <SC.PostWrapper>
      <div>
        <ProfilePictureWrapper width="40px">
          <img src={author.profilePicture} alt={author.username} />
        </ProfilePictureWrapper>
        <h1>@{author.username}</h1>
        <span>·</span>
        <time dateTime={postedAt.toString()}>
          {formatDistanceToNow(postedAt)}
        </time>
      </div>
      <p>{body}</p>
    </SC.PostWrapper>
  )
}
