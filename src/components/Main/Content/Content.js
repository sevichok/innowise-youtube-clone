import React from 'react'
import HPhoto1 from "../../../img-content/photos/photo1.png"
import HPhoto2 from "../../../img-content/channel-logo.png"

import CPhoto1 from "../../../img-content/covers-first-row/cover1.png"
import CPhoto2 from "../../../img-content/covers-first-row/cover2.png"
import CPhoto3 from "../../../img-content/covers-first-row/cover3.png"
import CPhoto4 from "../../../img-content/covers-first-row/cover4.png"
import CPhoto5 from "../../../img-content/covers-first-row/cover5.png"
import CPhoto6 from "../../../img-content/covers-first-row/cover6.png"

function Content() {
  return (
    <div className='content'>
      <section className='content-first-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <img src={HPhoto1} alt='ch1'></img>
            <figcaption>Dollie Blair</figcaption>
          </figure>
          <section className='content-header-btns'></section>
        </section>

        <section className='content-row-content'>
          <figure className='content-row-content-item'>
            <img src={CPhoto1} alt='ch1' className='cphoto1'></img>
            <figcaption className='content-timing'>4:15</figcaption>
            <figcaption className='content-figcaption '>A Brief History Of Creation</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>80k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;3 days ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto2} alt='ch1' className='cphoto2'></img>
            <figcaption className='content-timing'>8:00</figcaption>
            <figcaption className='content-figcaption '>Selecting The Right Hotel</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>123k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;1 months ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto3} alt='ch1' className='cphoto3'></img>
            <figcaption className='content-timing'>5:32</figcaption>
            <figcaption className='content-figcaption '>Asteroids</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>43k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;12 days ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto4} alt='ch1' className='cphoto4'></img>
            <figcaption className='content-timing'>6:40</figcaption>
            <figcaption className='content-figcaption '>Telescopes 101</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>11k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;6 months ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto5} alt='ch1' className='cphoto5'></img>
            <figcaption className='content-timing'>1:45</figcaption>
            <figcaption className='content-figcaption '>Medical Care Is Just</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>18k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;2 days ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto6} alt='ch1' className='cphoto6'></img>
            <figcaption className='content-timing'>2:12</figcaption>
            <figcaption className='content-figcaption '>Moon Gazing</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>67k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;4 months ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure>
        </section>
      </section>
      <section className='content-second-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <figcaption>Recommended</figcaption>
          </figure>
          <section className='content-header-btns'></section>
        </section>
        <section className='content-row-content'></section>

      </section>
      <section className='content-third-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <img src={HPhoto2} alt='ch2'></img>
            <figcaption>Food & Drink</figcaption>
          </figure>
          <section className='content-header-btns'></section>
        </section>
        <section className='content-row-content'></section>
      </section>
    </div>
  )
}

export default Content