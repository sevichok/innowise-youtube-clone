import React from 'react'
import Subscriptions from "./Subscriptions"
import Menu from "./Menu"
import "../../styles/sidebar.css"
import SetIcon from "../../img-content/svg/icon12.svg"

function Sidebar() {
  return (
    <div className='sidebar'>
      <Menu />
      <Subscriptions />
      <section className='sidebar-settings'>
        <section className='sidebar-settings-logo'>
          <img src={SetIcon} alt='set-icon'></img>
        </section>
        <section className='sidebar-settings-text'>Settings</section>
      </section>
    </div>
  )
}

export default Sidebar