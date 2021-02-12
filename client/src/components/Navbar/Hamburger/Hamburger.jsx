import React from 'react'

const Hamburger = ({ slide, setSlide }) => {
    return (
        <div className={`hamburger ${slide && 'hide-hamburger'}`} onClick={() => setSlide(true)}>
        <span className="span1"></span>
        <span className="span2"></span>
      </div>
    )
}

export default Hamburger