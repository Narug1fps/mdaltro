"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Star, Users, Award } from "lucide-react";
import Image from "next/image";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import Testimonial from "@/app/components2/testimonial";
import Videosec from "./components2/videosec";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const services = [
    {
      title: "LENTES DE CONTATO DENTAIS",
      image: "/1.jpg",
      description:
        "				As lentes de contato dentais são a solução ideal para quem deseja transformar o sorriso de forma rápida, minimamente invasiva e com resultado altamente estético. Elas corrigem formato, cor e pequenas imperfeições, trazendo um sorriso harmônico, natural e personalizado para cada paciente.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "IMPLANTES DENTÁRIOS GUIADOS",
      image: "/2.jpg",
      description:
        "				Com a tecnologia do planejamento digital e da cirurgia guiada, os implantes dentários se tornam um procedimento muito mais preciso e seguro. Essa técnica garante maior previsibilidade, conforto no pós-operatório e resultados estéticos superiores, devolvendo não apenas dentes, mas também confiança e qualidade de vida.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "BRUXISMO",
      image: "/3.jpg",
      description:
        "			O bruxismo é um hábito inconsciente de apertar ou ranger os dentes, que pode causar dores, desgastes e até fraturas. Na clínica, utilizamos soluções modernas de diagnóstico e tratamento, como placas personalizadas de proteção e protocolos de reabilitação, que aliviam os sintomas e preservam a saúde bucal a longo prazo.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "REABILITAÇÃO ORAL",
      image: "/4.jpg",
      description:
        "				A reabilitação oral é um conjunto de tratamentos que devolvem função, estética e saúde ao sorriso. Indicada para casos complexos, combina técnicas modernas de prótese, implantes e estética dental, sempre com foco em resultados duradouros e naturais, que restauram tanto o sorriso quanto a autoconfiança.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "ALINHADORES INVISÍVEIS",
      image: "/5.jpg",
      description:
        "				Os alinhadores invisíveis são uma alternativa moderna e discreta ao aparelho ortodôntico convencional. Produzidos sob medida, eles proporcionam conforto, praticidade e estética durante o tratamento, permitindo alinhar os dentes de forma eficiente sem comprometer o seu dia a dia.",
      url: "https://wa.me/5562991873755",
    },
    {
      title: "FACETAS EM RESINA",
      image: "/6.jpg",
      description:
        "				As facetas em resina composta são uma alternativa acessível e versátil para transformar o sorriso. Elas permitem corrigir forma, cor e pequenas imperfeições dos dentes em apenas uma sessão, com resultado estético imediato. Além disso, o procedimento é minimamente invasivo e pode ser facilmente ajustado ou reparado quando necessário, oferecendo beleza e funcionalidade ao sorriso com praticidade.",
      url: "https://wa.me/5562991873755",
    },
  ];
  if (typeof window !== "undefined") {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative  min-h-[105vh] bg-cover  flex items-center justify-center  bg-center  bg-no-repeat bg-[url(/hero12.jpg)] ">
          <div className="container mx-auto px-4 text-center  text-white">
            <div className="relative inline-block flex items-center justify-center"></div>
          </div>
          
        </section>
        <Image
          width={1920}
          height={8}
          src="/faixa.jpg"
          alt=""
          className="h-3"
        />
        {/* Video Section */}
      
        <Videosec />
        <Image
          width={1920}
          height={8}
          src="/faixa.jpg"
          alt=""
          className="h-3"
        />
        {/* Services Section */}
        <section
          className="relative bg-black py-20 bg-cover bg-center  "
        >
          <div className="container mx-auto px-4">
            <div className="text-center text-primary mb-16">
              <h2 className="text-4xl font-mont md:text-5xl   mb-4">
                Nossos Serviços
              </h2>
              <p className="text-xl  max-w-2xl mx-auto">
               
              </p>
            </div>
            {services.map((services, index) => (
              <div key={index} className="space-y-8 pb-10 ">
                <Card className="border-2 border-primary p-4 w-full bg-black backdrop-blur-sm  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 ">
                        {services.image ? (
                          <Image
                            src={services.image}
                            alt="Imagem do Serviço"
                            className="w-full h-full object-cover rounded-lg"
                            width={813}
                            height={432}
                          />
                        ) : null}
                      </div>
                      <div className="md:w-2/3 p-8 flex flex-col justify-center">
                        <h3 className="text-[28px]  font-mont mb-4 text-primary">
                          {services.title}
                        </h3>
                        <p className="text-primary text-[18px] font-lora mb-6">
                          {services.description}
                        </p>
                        <div className="transform hover:scale-120 transition-all duration-300 cursor-pointer w-50  ">
                          <a href={services.url} target="_blank">
                            <Image
                              width={457}
                              height={111}
                              alt=""
                              src="agendar.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
        <Image
          width={1920}
          height={8}
          src="/faixa.jpg"
          alt=""
          className="h-3"
        />
        <Testimonial />
     
       

        <section className="bg-black">
          <Image
            width={1920}
            height={8}
            src="/faixa.jpg"
            alt=""
            className="h-3"
          />
          <div className="text-center mt-8">
            <h2 className="text-4xl font-mont md:text-5xl  text-primary mb-4">
              Localização
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.4279628749086!2d-49.27400592485033!3d-16.705484984070026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef11822f5990b%3A0xca8b1e646dc89a22!2sDr.%20Marcelo%20Daltro%20-%20Dentista%20-%20Goi%C3%A2nia!5e0!3m2!1sen!2sbr!4v1756940523080!5m2!1sen!2sbr"
              className="h-[600px] w-screen m-10 rounded-2xl"
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <Image
          width={1920}
          height={8}
          src="/faixa.jpg"
          alt=""
          className="h-3"
        />
        {/* Footer */}
        <footer className="relative py-12 bg-cover bg-center bg-black ">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-2xl font-fair font-bold text-primary mb-4">
                Marcelo Daltro
              </h3>
              <p className="text-primary mb-8 font-lora max-w-2xl mx-auto">
                Recuperando autoestimas & Redesenhando Sorrisos
              </p>

              <div className="flex justify-center text-primary space-x-6 mb-8">
                <a
                  href="https://www.instagram.com/marcelodaltro/"
                  target="_blank"
                  className="text-primary hover:text-white transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.facebook.com/daltroclinicaorofacial/?locale=pt_BR"
                  target="_blank"
                  className="text-primary hover:text-white transition-colors"
                >
                  <Facebook />
                </a>
                <a
                  href="https://br.linkedin.com/in/marcelo-daltro-174164187?trk=people-guest_people_search-card"
                  target="_blank"
                  className="text-primary hover:text-white transition-colors"
                >
                  <Linkedin />
                </a>
              </div>

              <div className="border-t border-primary pt-8">
                <p className="text-primary font-lora text-sm">
                  © 2025 Marcelo Daltro. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
