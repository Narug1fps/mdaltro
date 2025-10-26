"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import TextTestimonials from "./texttestimonial"

interface Testimonial {
  id: string
  name: string
  youtubeUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priscilla Ramos",
    youtubeUrl: "https://youtu.be/FMtOkxWcNMk?si=mFYuTX-7OqasY2H8",

  },
  {
    id: "2",
    name: "Paulo Lima",
    youtubeUrl: "https://youtu.be/6D1g1-mNwM0?si=2jhTcYrNrIddz93w",
  
  },
  {
    id: "3",
    name: "Nelcina Martins",
    youtubeUrl: "https://youtu.be/p8SCJUWKMow?si=FdrinNSYyUTksdb_",
 
  },
  {
    id: "4",
    name: "Eugênio de Carvalho",
    youtubeUrl: "https://youtu.be/Nq_Wcn6ipMk",
  },
  {
    id: "5",
    name: "Sávia Barros Diniz",
    youtubeUrl: "https://youtu.be/bfd4QyYptZI?si=jTs8iOiI94WjSReP",
  },
  {
    id: "6",
    name: "Ana Maria Veiga Jardim",
    youtubeUrl: "https://youtu.be/jM-i98OAXhk?si=JXBxscqAg0sjf3rV",
  },
  {
    id: "7",
    name: "Sérgio Calura",
    youtubeUrl: "https://youtu.be/Rj1tOSIvB78?si=39zxbiMFPiKhboqj",
  },
 
  
]

const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
  const match = url.match(regex)
  return match ? match[1] : null
}

const getYouTubeThumbnail = (url: string): string => {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "/placeholder.svg"
}

const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = getYouTubeVideoId(url)
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : ""
}

export default function VideoTestimonialGallery() {
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({})
  const [scrollPosition, setScrollPosition] = useState(0)

  const playVideo = (testimonialId: string) => {
    setPlayingVideos((prev) => ({
      ...prev,
      [testimonialId]: true,
    }))
  }

  const scrollUp = () => {
    setScrollPosition((prev) => Math.max(0, prev - 1))
  }

  const scrollDown = () => {
    setScrollPosition((prev) => Math.min(testimonials.length - getVisibleCount(), prev + 1))
  }

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) return 4 // 2xl
      if (window.innerWidth >= 1280) return 3 // xl
      if (window.innerWidth >= 768) return 2 // md
      return 1 // mobile
    }
    return 1
  }

  const visibleTestimonials = testimonials.slice(scrollPosition, scrollPosition + getVisibleCount())

  return (
    <section className="py-16 px-4 bg-black ">
      <div className="text-center mb-12">
            <h2 className="text-3xl font-mont md:text-5xl  text-primary mb-6">
              Depoimentos
            </h2>
            <p className="text-xl font-lora text-primary max-w-3xl mx-auto">
              O que os nossos pacientes falam sobre a experiencia de tratar conosco
            </p>
          </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {scrollPosition > 0 && (
            <Button
              onClick={scrollUp}
              variant="outline"
              size="icon"
              className="absolute left-10 text-primary hover:text-black top-1/2 transform -translate-y-1/2 -translate-x-12 z-10 rounded-full  backdrop-blur-sm bg-black border-border hover:bg-primary border-0 shadow-lg cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="overflow-hidden border-0 bg-black border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[9/16] relative">
                  {playingVideos[testimonial.id] ? (
                    <iframe
                      src={getYouTubeEmbedUrl(testimonial.youtubeUrl)}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Depoimento de ${testimonial.name}`}
                    />
                  ) : (
                    <>
                      <img
                        src={getYouTubeThumbnail(testimonial.youtubeUrl) || "/placeholder.svg"}
                        alt={`Depoimento de ${testimonial.name}`}
                        className="w-full h-full object-cover"
                       
                      />

                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button
                          onClick={() => playVideo(testimonial.id)}
                          size="lg"
                          className="rounded-full w-16 h-16 bg-primary hover:scale-110 cursor-pointer text-primary-foreground shadow-lg  transition-all duration-200 "
                        >
                          <Play className="w-6 h-6 ml-1 text-black" fill="black" />
                        </Button>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                       
                      </div>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {scrollPosition < testimonials.length - getVisibleCount() && (
            <Button
              onClick={scrollDown}
              variant="outline"
              size="icon"
              className="absolute border-0 right-10 top-1/2 transform -translate-y-1/2 translate-x-12 z-10 rounded-full cursor-pointer bg-black backdrop-blur-sm border-border border-primary  hover:bg-primary cursor-pointer shadow-lg text-primary hover:text-black"
            >
              <ChevronRight className="w-4 h-4 " />
            </Button>
          )}

          <div className="flex justify-center cursor-pointer mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / getVisibleCount()) }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(scrollPosition / getVisibleCount()) === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
   < TextTestimonials />
    </section>

  )
}
