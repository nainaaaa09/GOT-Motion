import React from 'react'
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import s3 from "../assets/s1.png";
import s1 from "../assets/s2.png";
import s2 from "../assets/s3.png";
import s4 from "../assets/dragon2.png";
import s5 from "../assets/s5.png";
import { useSpring } from "motion/react";



const Houses = () => {


const containerRef = useRef(null);

const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start 1", "end 0.2"],

});   

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 60,
  damping: 25,
});
const overlayOpacity = useTransform(smoothProgress, [0, 1], [0, 0.9]);
const y= useTransform(smoothProgress, [0,1], [-250, 120]);
const y2= useTransform(smoothProgress, [0,1], [400, -500]); 
const yupper= useTransform(smoothProgress, [0,1], [270, -280]);
const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
const dragonrotate = useTransform(smoothProgress, [0, 1], [30, -10]);
const opacityy= useTransform(smoothProgress, [0, 1], [0,0.9]);
const textabove= useTransform(smoothProgress, [0, 1], [0,-50]);
  return (
    <div>
      <section  ref={containerRef} className='housemain' style={{height:"100vh"}}>
        <div className='house' style={{height:"100vh",backgroundColor:"black",  justifyContent:"center", alignItems:"center", gap:"0px",position:"sticky", top:"0"}} >

          <div className='sigil' >
            <motion.img  style={{ position: "absolute",top: "40%",left: "75%",x: "-50%",y: y,rotate: rotate,width: "300px",height: "300px",objectFit: "cover",opacity: 0.9,mixBlendMode: "screen",  zIndex: 2,willChange: "transform"}}src={s1}></motion.img>
          </div>

          <div className='sigil' >
            <motion.img style={{ rotate:rotate,position: "absolute",top: "40%",left: "25%",x: "-50%",y: y2,rotate: rotate,width: "320px",height: "300px",objectFit: "cover",opacity: 0.9,mixBlendMode: "screen",  zIndex: 2,willChange: "transform",objectFit: "cover"}}src={s2}></motion.img>
          </div>

          <div className='sigil'>
            <motion.img style={{ rotate:rotate,position: "absolute",top: "40%",left: "15%",x: "-50%",y: y,rotate: rotate,width: "220px",height: "200px",objectFit: "cover",opacity: 0.9,mixBlendMode: "screen",  zIndex: 2,willChange: "transform",objectFit: "cover"}}src={s3}></motion.img>
          </div>

          <div className='sigil' >
            <motion.img style={{ rotate:dragonrotate,position: "absolute",top: "20%",left: "50%",x: "-50%",width: "550px",height: "550px",objectFit: "cover",opacity: 0.9,mixBlendMode: "screen",  zIndex: 2,willChange: "transform",objectFit: "cover"}}src={s4}></motion.img>
          </div>

          <div className='sigil'>
            <motion.img style={{rotate:rotate,position: "absolute",top: "40%",left: "80%",x: "-50%",y: yupper,width: "220px",height: "200px",objectFit: "cover",opacity: 0.9,  zIndex: 30,willChange: "transform",objectFit: "cover"}}src={s5}></motion.img>
          </div>

          <motion.div
  style={{
    position: "absolute",
    inset: 0,
    background: "black",
    opacity: overlayOpacity,
    zIndex: 5,
    pointerEvents: "none"
  }}
/>
          <motion.h1 style={{zIndex: 10, fontFamily: "got", y: textabove, opacity: opacityy, color: "white", position: "absolute", top: "50%", left: "50%", x: "-50%" }} className="h1">Game of Thrones</motion.h1>
         
          
        </div>

      </section>
    </div>
  )
}

export default Houses;
