import Image from "next/image";
import React from "react";
import nextImage from "../assets/images/image.jpeg";

const Album = () => {
  return (
    <div>
      <h1>This is image tag</h1>
      <img
        src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
        alt="img"
      />

      <h1>This is image component</h1>
      <Image
        src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80"
        alt="img"
        width={500}
        height={500}
        layout="responsive"
      />

      <h1>This is image component and local </h1>
      <Image
        src={nextImage}
        width={500}
        height={500}
        layout="responsive"
        alt="local-img"
      />
    </div>
  );
};

export default Album;
