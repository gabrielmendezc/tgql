import React, { FC } from 'react'

interface IHomeSectionTitleProps {
  title: string
  clickHandler: () => void
  isShowing: boolean
}

export const HomeSectionTitle: FC<IHomeSectionTitleProps> = ({
  title,
  clickHandler,
  isShowing
}) => {
  return (
    <h1 onClick={clickHandler} id="interesting_things">
      {title}
      <span>
        <svg className={isShowing ? '' : 'closed'} viewBox="0 0 20 20">
          <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
        </svg>
      </span>
    </h1>
  )
}
