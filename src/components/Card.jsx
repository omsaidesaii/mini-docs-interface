import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "motion/react"

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] px-8 py-10 text-white p-5 bg-zinc-900/90 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
    <div className='footer absolute  bottom-0  w-full  left-0 '>
        <div className='flex py-3 px-8 items-center justify-between mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close?<MdOutlineClose /> : <MdOutlineFileDownload size=".7em" color='#fff' />}
            </span>
        </div>

        {
            data.tag.isOpen &&(
                 <div className={`tag w-full py-4 ${data.tag.tagColor === "blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>
                {data.tag.tagTitle}
            </h3>
        </div>
            )}

    </div>

      </motion.div>
  )
}

export default Card