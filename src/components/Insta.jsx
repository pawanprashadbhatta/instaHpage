import { AiOutlineHome, AiOutlineMessage, AiOutlineNotification, AiOutlineSearch } from "react-icons/ai"
import { FaBookmark, FaComment, FaFilm, FaHeart, FaInstagram, FaShare } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { IoMdChatbubbles } from "react-icons/io"

import { IoCreateOutline } from "react-icons/io5"
import { MdExplore } from "react-icons/md"


const Insta = () => {
    const isSmallScreen = window.innerWidth < 768;
  return (
    <>
<div className="container flex">
<div className="left flex flex-col justify-between  border border-gray-300 shadow-sm w-1/5 ">
<div className="ltop ml-10 mt-6 font-serif text-3xl p-2">
      {isSmallScreen ? <FaInstagram /> : 'Instagram'}
    </div>

    <div className="lcenter p-1 text-2xl ml-6 ">
<div className="Home flex gap-4  m-6 ">
<AiOutlineHome className="mt-1.5"/>
<p>Home</p>
</div>
<div className="search  flex gap-4 m-6"> <AiOutlineSearch className="mt-1.5"/>
<p>Search</p></div>
<div className="explore  flex gap-4 m-6 ">
<MdExplore className="mt-1.5" />
<p>Explore</p>
</div>
<div className="reels  flex gap-4 m-6"><FaFilm className="mt-1.5"/>
<p>Reels</p></div>
<div className="message  flex gap-4 m-6"><AiOutlineMessage className="mt-1.5"/>
<p>Message</p></div>
<div className="notification  flex gap-4 m-6"><AiOutlineNotification className="mt-1.5"/>
<p>Notification</p></div>
<div className="create  flex gap-4 m-6"><IoCreateOutline className="mt-1.5"/>
<p>Create</p></div>
<div className="profile flex gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[40px] h-[40px]  rounded-full " />
  <p>Profile</p>
</div>
</div>

  <div className="lbase p-4 ml-8 flex gap-4 flex-col mt-5 font-semibold">
    <div className="thread p-2 gap-4 flex   ml-1">
       <IoMdChatbubbles className="w-6 h-6 "/>
       <p>Thread</p>
    </div>
    <div className="menu p-2 flex  gap-4 ml-1">
       <FiMenu className="w-6 h-6"/>
       <p>Menu</p>
    </div>
    </div>  
    
</div>

<div className="center flex">
    <div className="body w-[900px] ">
    
    <div className="stories m-10 flex">
    <div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full border-red-500  " />
  <p>Profile</p>
</div>
<div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p>Profile</p>
</div>

<div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p>Profile</p>
</div>
<div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p>Profile</p>
</div>
<div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p>Profile</p>
</div>
<div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p>Profile</p>
</div>
<div className="profile flex flex-col gap-4 m-6">
  <img src="https://i.pinimg.com/originals/00/f3/ba/00f3baed741806ab1cc74e094b30824b.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p>Profile</p>
</div>
      {/* profile div start here */}
    </div>
    <div className="profile flex  gap-3 mt-[-30px] ml-[180px]">
  <img src="https://wallpaperaccess.com/full/1765498.jpg " alt="Profile" className="w-[60px] h-[60px]  rounded-full " />
  <p className="mt-[15px] text-gray-900 font-bold ">Beauty Bone</p>
</div>
    {/* image start here */}
    <div className="image flex justify-center mt-1">
    <img src="https://wallpaperaccess.com/full/1765498.jpg" alt="image of girl" className="w-[550px]" />
    </div>
    <div className="cbase flex justify-between  mr-[180px]">
      <div className="leftb flex gap-3 justify-around mt-[10px] ml-[180px] mr-[180px] ">
        <FaHeart />
      <FaComment />
      <FaShare /></div>
      <div className="rightb mt-[10px]">
      <FaBookmark />
      </div>
    </div>
    <div className="flex  gap-3 ml-[180px] mr-[180px]"><p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus atque deserunt eligendi laborum ea, accusantium sed delectus eveniet voluptas! Facilis doloribus distinctio rerum vitae itaque, iusto ratione omnis, quidem eaque quos aut? Ad eligendi laboriosam voluptatem magni rem saepe facilis tenetur pariatur? Voluptatem distinctio praesentium perferendis assumenda voluptate impedit!</p></div>
    </div>



</div>
</div>

    </>
  )
}

export default Insta

