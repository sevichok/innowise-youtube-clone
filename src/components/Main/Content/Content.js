import React from 'react'
import HPhoto1 from "../../../img-content/photos/photo1.png"
import HPhoto2 from "../../../img-content/channel-logo.png"

import CPhoto1 from "../../../img-content/covers-first-row/cover1.png"
import CPhoto2 from "../../../img-content/covers-first-row/cover2.png"
import CPhoto3 from "../../../img-content/covers-first-row/cover3.png"
import CPhoto4 from "../../../img-content/covers-first-row/cover4.png"
import CPhoto5 from "../../../img-content/covers-first-row/cover5.png"
import CPhoto6 from "../../../img-content/covers-first-row/cover6.png"

import CPhoto7 from "../../../img-content/covers-second-row/cover1.png"
import CPhoto8 from "../../../img-content/covers-second-row/cover2.png"
import CPhoto9 from "../../../img-content/covers-second-row/cover3.png"

import CPhoto10 from "../../../img-content/covers-third-row/cover1.png"
import CPhoto11 from "../../../img-content/covers-third-row/cover2.png"
import CPhoto12 from "../../../img-content/covers-third-row/cover3.png"
import CPhoto13 from "../../../img-content/covers-third-row/cover4.png"
import CPhoto14 from "../../../img-content/covers-third-row/cover5.png"
import CPhoto15 from "../../../img-content/covers-third-row/cover6.png"

import LArrow from "../../../img-content/LeftArrow.svg"
import RArrow from "../../../img-content/RightArrow.svg"

function Content() {
  return (
    <div className='content'>
      <section className='content-first-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <img src={HPhoto1} alt='ch1'></img>
            <figcaption>Dollie Blair</figcaption>
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
          <figure className='content-row-content-item'>
            <img src={CPhoto7} alt='ch1' className='cphoto7'></img>
            <figcaption className='content-timing'>3:40</figcaption>
            <figcaption className='content-figcaption '>Dude You Re Getting A Telescope</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>34k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;5 months ago</p>
              <p>Gussie French</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto8} alt='ch1' className='cphoto8'></img>
            <figcaption className='content-timing'>2:12</figcaption>
            <figcaption className='content-figcaption '>Moon Gazing</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>54k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;11 months ago</p>
              <p>Dollie Blair</p>Edward Osborne
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto9} alt='ch1' className='cphoto9'></img>
            <figcaption className='content-timing'>2:12</figcaption>
            <figcaption className='content-figcaption '>Moon Gazing</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>125k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;4 months ago</p>
              <p>Dollie Blair</p>
            </figcaption>
          </figure></section>

      </section>
      <section className='content-third-row'>
        <section className='content-row-header'>
          <figure className='content-row-desc'>
            <img src={HPhoto2} alt='ch2'></img>
            <figcaption>Food & Drink</figcaption>
            <figcaption className='content-row-desc-rec'>
              Recommended channel for you
            </figcaption>
          </figure>
          <section className='content-sub-button'>
            <button className='sub-button'>Subscribe 2.3m</button>
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
          <figure className='content-row-content-item'>
            <img src={CPhoto10} alt='ch10' className='cphoto10'></img>
            <figcaption className='content-timing'>7:36</figcaption>
            <figcaption className='content-figcaption '>Astronomy Or Astrology</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>240k views &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;4 months ago</p>
              <p>Food & Drink</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto11} alt='ch11' className='cphoto1'></img>
            <figcaption className='content-timing'>2:19</figcaption>
            <figcaption className='content-figcaption '>Advertising Outdoors</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>13k views &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;15 days ago</p>
              <p>Food & Drink</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto12} alt='ch12' className='cphoto12'></img>
            <figcaption className='content-timing'>9:05</figcaption>
            <figcaption className='content-figcaption '>Radio Astronomy</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>1k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;11 months ago</p>
              <p>Food & Drink</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto13} alt='ch13' className='cphoto43'></img>
            <figcaption className='content-timing'>3:40</figcaption>
            <figcaption className='content-figcaption '>A Good Autoresponder</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>45k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;2 months ago</p>
              <p>Food & Drink</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto14} alt='ch14' className='cphoto14'></img>
            <figcaption className='content-timing'>1:56</figcaption>
            <figcaption className='content-figcaption '>Baby Monitor Technology</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>86k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;7 days ago</p>
              <p>Food & Drink</p>
            </figcaption>
          </figure>
          <figure className='content-row-content-item'>
            <img src={CPhoto15} alt='ch15' className='cphoto15'></img>
            <figcaption className='content-timing'>4:15</figcaption>
            <figcaption className='content-figcaption '>Asteroids</figcaption>
            <figcaption className='content-figcaption-stats'>
              <p>123k views&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;4 months ago</p>
              <p>Food & Drink</p>
            </figcaption>
          </figure>
        </section>
      </section>
    </div>
  )
}

export default Content