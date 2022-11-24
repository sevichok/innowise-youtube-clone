import React from 'react'
import "../../../styles/content.css"
import ContentFirstRow from './ContentFirstRow/ContentFirstRow'
import ContentSecondRow from './ContentSecondRow/ContentSecondRow'
import ContentThirdRow from './ContentThirdRow/ContentThirdRow'

function Content() {
  return (
    <div className='content'>
      <ContentFirstRow />
      <ContentSecondRow />
      <ContentThirdRow />
    </div>
  )
}

export default Content