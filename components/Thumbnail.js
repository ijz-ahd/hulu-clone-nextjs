import { forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white  transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.orignal_title || result.orignal_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          <ThumbUpIcon className="h-5 m-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
