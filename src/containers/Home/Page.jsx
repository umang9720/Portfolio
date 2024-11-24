import React from 'react'
import Pagestyles from './Page.module.scss'

function page() {
  return (
    <div className={Pagestyles["hero-content"]}>
      <div className={Pagestyles["container"]}>
        <h6 className={Pagestyles['text']}  data-screen-offset="0.8">Umang Garg</h6>
        <h1   data-screen-offset="0.6"> making<br /><strong>good</strong><br /><strong>shit</strong><br />since<br />2022</h1>
      </div>
    </div>
  )
}

export default page
