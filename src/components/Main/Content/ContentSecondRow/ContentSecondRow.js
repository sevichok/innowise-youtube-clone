import React from 'react'
import { Content } from '../../../../text-content/SecondContent'

import LArrow from "../../../../img-content/LeftArrow.svg"
import RArrow from "../../../../img-content/RightArrow.svg"

function ContentSecondRow() {
    const { title, content_list } = Content
    const ContentList = content_list.map((item, index) => <figure className='content-row-content-item' key={index}>
        <img src={item.cover} alt='ch' className='cphoto'></img>
        <figcaption className='content-timing'>{item.timing}</figcaption>
        <figcaption className='content-figcaption'>{item.video_title}</figcaption>
        <figcaption className='content-figcaption-stats'>
            <p>{item.video_comments.first}&nbsp;&nbsp;·&nbsp;&nbsp;{item.video_comments.second}</p>
            <p>{item.video_comments.third}</p>
        </figcaption>
    </figure>)

    return (
        <section className='content-second-row'>
            <section className='content-row-header'>
                <figure className='content-row-desc'>
                    <figcaption>{title}</figcaption>
                </figure>
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

export default ContentSecondRow