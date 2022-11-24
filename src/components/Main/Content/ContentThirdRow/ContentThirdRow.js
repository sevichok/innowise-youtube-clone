import React from 'react'
import { Content } from '../../../../text-content/TrirdContent'

import LArrow from "../../../../img-content/LeftArrow.svg"
import RArrow from "../../../../img-content/RightArrow.svg"

function ContentThirdRow() {
    const { title, title_comment, button_title, channel_cover, content_list } = Content
    const ContentList = content_list.map((item, index) => <figure className='content-row-content-item' key={index}>
        <img src={item.cover} alt='ch' className='cphoto'></img>
        <figcaption className='content-timing'>{item.timing}</figcaption>
        <figcaption className='content-figcaption'>{item.video_title}</figcaption>
        <figcaption className='content-figcaption-stats'>
            <p>{item.video_comments.first}&nbsp;&nbsp;·&nbsp;&nbsp;{item.video_comments.second}</p>
            <p>{title}</p>
        </figcaption>
    </figure>)

    return (
        <section className='content-third-row'>
            <section className='content-row-header'>
                <figure className='content-row-desc'>
                    <img src={channel_cover} alt='ch2'></img>
                    <figcaption>{title}</figcaption>
                    <figcaption className='content-row-desc-rec'>{title_comment}</figcaption>
                </figure>
                <section className='content-sub-button'>
                    <button className='sub-button'>{button_title}</button>
                </section>
                <section className='content-header-btns'>
                    <figure className='arrow'>
                        <img src={LArrow} alt='arr1' className='arr1'></img>
                    </figure>
                    <figure className='arrow'>
                        <img src={RArrow} alt='arr2' className='arr2'></img>
                    </figure>
                </section>
            </section>
            <section className='content-row-content'>
                {ContentList}
            </section>
        </section>
    )
}

export default ContentThirdRow