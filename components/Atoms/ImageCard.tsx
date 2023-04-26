import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageCard  = ({ imageSrc, title, description }:ImageCardProps) => {
  return (
    <div className="text-center">
      <Image src={imageSrc} alt={title} width={230} height={200} className="object-cover max-h-36" />
      <h2 className="italic">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ImageCard;