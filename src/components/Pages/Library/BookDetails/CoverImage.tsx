"use client";

import assets from "@/assets";
import IROModal from "@/components/UI/Modal/IROModal";
import Image from "next/image";
import { useState } from "react";
import LookInside from "./LookInside";

const CoverImage = ({
  image,
  pdfUrl,
  edition,
}: {
  image: string;
  pdfUrl: string;
  edition?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="border border-gray-400 py-4 px-8 cursor-pointer ">
        <Image
          className="ml-auto"
          src={assets.images.readNow}
          alt="Book"
          width={150}
          height={26}
        />
        <div className="relative">
          <div className="absolute w-full h-full bg-zinc-600 top-0 left-0"></div>
          <Image
            className="lookInside"
            src={image}
            alt="Book"
            width={300}
            height={400}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
        <p className="text-end pt-2">{edition} Edition</p>
      </div>

      <IROModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Read a little"
      >
        <LookInside pdf={pdfUrl} />
        {/* <div>coming soon</div> */}
      </IROModal>
    </div>
  );
};

export default CoverImage;
