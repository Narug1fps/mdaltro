"use client";
import Image from "next/image";

export default function Videosec() {
  return (
    <>
      <section id="video" className="py-20 bg-center  bg-no-repeat bg-cover bg-black ">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="justify-center text-center max-w-4xl mx-auto  ">
        
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-primary">
              
             
               
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nBbzq2729xg?si=NR5BVomrUxbpeBa9" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="b"  ></iframe>
                
             
            </div>
          </div>
        </div><div className="flex justify-center">
          
          <div className="transform hover:scale-120 transition-all pt-10 flex    duration-300 cursor-pointer w-50  ">
              <a href="https://wa.me/5562991873755" target="_blank">
                <Image width={457} height={111} alt="" src="agendar.png" />
              </a>
            </div>
        </div>
      </section>
    </>
  );
}
