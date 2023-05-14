import React from 'react'
import { motion } from 'framer-motion'
const imageVariant = {
  initial:{
    y:0
  },
  animate:{
    y:-10,
    transition:{
      ease:"easeInOut",
    }
  }
}
const Templates = () => {
  return (
    <div id='templatesSeciton'>
      <h2 className='text-center font-bold tracking-widest text-xl pb-20'>TEMPLATE DEMOS</h2>
      <div className='grid grid-cols-2 mx-auto justify-content-center gap-5 w-1/2'>
        <div className='text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX </p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX TWO </p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX THREE </p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX FOUR </p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX FIVE </p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className=' font-semibold '> INDEX SIX</p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX SEVEN</p>
        </div>
        <div className='rounded-md text-center'>
          <motion.img variants = {imageVariant} initial="initial" whileHover="animate" src="https://shreethemes.in/upwind_react/assets/images/demo/1.png" className='rounded-md' alt=""/>
          <p className='font-semibold '> INDEX EIGHT</p>
        </div>
      </div>
    </div>
  )
}

export default Templates
