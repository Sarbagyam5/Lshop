import Image from "next/image"
import ad from"@/assets/images/ad.jpg"
import { MdNavigateNext } from "react-icons/md";
function Ad() {
  return (
    <div className="relative h-[30vh] w-full overflow-hidden md:h-[60vh]">
      <Image className="h-full w-full object-cover object-top" src={ad} alt="ad" />
      <div  className="absolute rounded-full h-8  w-8 top-1/2 right-2 -translate-y-1/2 z-10 bg-blue flex items-center justify-center cursor-pointer shadow-lg transition-transform duration-300 hover:translate-x-1 hover:shadow-xl">
      <MdNavigateNext className="text-white text-xl"/>
      </div>
      
    </div>
  )
}

export default Ad