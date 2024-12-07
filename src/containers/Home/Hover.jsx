import React from 'react';
import Pagestyles from './Page.module.scss';
// import gsap from 'gsap';

function Hover() {
  // const [isHovered, setIsHovered] = useState(false);
  // useEffect(() => {
  //   const maskElement = document.querySelector('.mask');
  //   const sizes = { 
  //     initial: 40, 
  //     expanded: 400, 
  //   };

  //   const handleMouseMove = (events) => {
  //     const size = isHovered ? sizes.expanded : sizes.initial;
  //     gsap.to(maskElement, {
  //       maskSize: `${size}px`,
  //       duration: 0.5,
  //       onUpdate: () => {
  //         maskElement.style.maskPosition = `${events.clientX - size / 2}px $ {events.clientY - size/2}px`
  //       }
  //     });
  //   };
    
  //   document.addEventListener('mousemove', handleMouseMove)
  // onMouseEnter={() => setIsHovered(true)} 
  //     onMouseLeave={() => setIsHovered(false)}
  // })
  return (
    <div className={Pagestyles['main']}>
      <div className={Pagestyles['normal']} >
        <h6 className={Pagestyles['text']} data-screen-offset="0.8">Umang Garg</h6>
        <h1 className={Pagestyles['sub-text']} data-screen-offset="0.6"> making<br /><strong>good</strong><br /><strong>shit</strong><br />since<br />2023</h1>
      </div>
      <div className={Pagestyles['mask']}>
        <span className={Pagestyles['dark-text']}>Umang Garg</span>
        <h1 className={Pagestyles['dark-sub-text']} data-screen-offset="0.6"> Hiding<br />bad<br />shit<br />since<br />2023 </h1>
      </div> 
      </div>
  )
}
 export default Hover