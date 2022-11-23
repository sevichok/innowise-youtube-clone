import React from 'react'
import HPhoto1 from "../../../img-content/photos/photo1.png"
import HPhoto2 from "../../../img-content/channel-logo.png"

function Content() {
  return (
    <div className='content'>
      <section className='content-first-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <img src={HPhoto1} alt='ch1'></img>
            <figcaption>Dollie Blair</figcaption>
          </figure>
        </section>
        <section className='content-header-btns'></section>
      </section>
      <section className='content-second-row'>
        <section className='content-row-header'>
        <figure className='content-row-desc'>
            <figcaption>Recommemded</figcaption>
          </figure>
        </section>
        <section className='content-header-btns'></section>
      </section>
      <section className='content-third-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <img src={HPhoto2} alt='ch2'></img>
            <figcaption>Food & Drink</figcaption>
          </figure>
        </section>
        <section className='content-header-btns'></section>
      </section>
    </div>
  )
}

export default Content