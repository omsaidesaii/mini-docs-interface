
import { useRef } from 'react';
import Card from './Card';


const Foreground = () => {

    const ref=useRef(null)

    const data=[
        {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos!",
        filesize:".9mb",close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
        {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos!",
        filesize:".9mb",close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"},
        },
        {desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos!",
        filesize:".9mb",close:true,tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
    ]

  return (
    <div ref={ref} className="fixed top-0 left-0 flex gap-10 p-5 z-[3] flex-wrap w-full h-full">
      {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
