import React from 'react'
import reacticon from '../images/reacticon.png'
import {motion} from 'framer-motion'
const hoverVariants = {
    addShadow:{
        boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        scale:1.05,
        transition:{
            duration:0.3,
            ease:'easeInOut'
        }
    }
}

const TemplateFeatures = () => {
  return (
    <section className='py-[100px] relative' id='featuresSection'>
        <div className='text-center px-3 h-14'>
            <h5 className='text-center font-semibold text-xl mb-2 tracking-wider'>TEMPLATE FEATURES</h5>
        </div>
        <div className='grid grid-cols-3 gap-x-6 items-center w-2/3 mx-auto'>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 w-full rounded-md border'>
                <div className='flex items-center w-full p-3 rounded-lg
                '>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src="https://shreethemes.in/upwind_react/assets/images/react2.png" alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Reactjs</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-lg border'>
                <div className='flex items-center w-full p-3 rounded-lg'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src="https://shreethemes.in/upwind_react/assets/images/tailwind2.png" alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Tailwind CSS</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-lg border'>
                <div className='flex items-center w-full p-3 rounded-lg'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Build with SAAS</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-lg border'>
                <div className='flex items-center w-full p-3 rounded-lg'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Dark Theme Available</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-lg border'>
                <div className='flex items-center w-full p-3 rounded-lg'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt=""  className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>RTL Theme Available</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-lg border'>
                <div className='flex items-center w-full p-3 rounded-lg'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Fully Responsive</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-lg border'>
                <div className='flex items-center w-full p-3 rounded-lg'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Browser Compatibility</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-md border'>
                <div className='flex items-center w-full p-3 rounded-md'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Retina Ready</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-md border'>
                <div className='flex items-center w-full p-3 rounded-md'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Material Desing Icon</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-md border'>
                <div className='flex items-center w-full p-3 rounded-md'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Easy to customise</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-md border'>
                <div className='flex items-center w-full p-3 rounded-md'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                    <span className='font-semibold tracking-wider'>Working contact form</span>
                </div>
            </motion.div>

            <motion.div variants = {hoverVariants} whileHover="addShadow" className='flex mt-6 pt-2 w-full rounded-md border'>
                <div className='flex items-center w-full p-3 rounded-md'>
                    <div className='text-center w-10 h-10 mr-3'>
                        <img src={reacticon} alt="" className="rounded-full bg-gradient-to-l from-red-100"/>
                    </div>
                        <span className='font-semibold tracking-wider'>Free Illustrator Image</span>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default TemplateFeatures
