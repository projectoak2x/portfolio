import React, { useState } from "react";
import Image from "next/image";
import Chip from "./Chip"

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
  skills: string[];
}

const ImageCard  = ({ imageSrc, title, description, skills }:ImageCardProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="text-center">
      <Image src={imageSrc} alt={title} width={230} height={200} className="object-cover max-h-36" onClick={()=>setShowModal(true)} />
      <h2 className="italic">{title}</h2>
      <p>{description}</p>
      <div className="text-xs">
        <div className="max-w-[230px] mx-auto flex flex-row flex-wrap">
          {
            skills && skills.map((skill, index) => <Chip key={index} title={skill} /> )
          }
        </div>
      </div>
      <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${showModal ?'': 'hidden'}`} id="modal">
  <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={()=>setShowModal(false)} />
    </div>
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
    <div className="max-h-[70vh] overflow-y-auto inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <Image src={imageSrc} alt={title} width={530} height={500} className="object-cover " />
    </div>
  </div>
</div>
    </div>
  );
};

export default ImageCard;