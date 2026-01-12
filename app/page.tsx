"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import Testimonial from "@/app/components2/testimonial";
import Videosec from "./components2/videosec";
import { Instagram, Linkedin, Facebook, Phone, MapPin, Mail } from "lucide-react"




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
        <section className="relative  min-h-[90vh] bg-[auto_700px] md:bg-cover md:min-h-[105vh]  flex items-center justify-center  bg-center  bg-no-repeat bg-[url(/hero12.jpg)] ">
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
        {/* Footer */}<footer className="bg-black text-primary">
          <div className="container mx-auto px-6 py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo and Tagline Section */}

              <div className="lg:col-span-2 flex flex-col items-center lg:hidden flex ">
                <div className="mb-6">

                  <Image
                    width={3543}
                    height={1181}
                    src="/logo3.png"
                    alt=""
                    className="w-80 py-5"
                  />
                </div>
                <div className="space-y-2  text-center ">
                  <p className="text-base font-mont italic">Recuperando Autoestimas</p>
                  <p className="text-base font-mont italic">Redesenhando Sorrisos</p>
                </div>
              </div>
              {/* Contact Information */}
              <div className="flex flex-col items-center lg:text-start justify-center">
                <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+556299187-3755"
                    className="flex items-center gap-3 hover:text-amber-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-amber-300  transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">(62) 99187-3755</span>
                  </a>
                  <a
                    href="mailto:contato@marcelodaltro.com.br"
                    className="flex items-center gap-3 text-primary hover:text-amber-300 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-amber-300  transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">daltroodonto@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2 flex flex-col lg:flex hidden  items-center ">
                <div className="mb-6">

                  <Image
                    width={3543}
                    height={1181}
                    src="/logo3.png"
                    alt=""
                    className="w-80 py-5"
                  />
                </div>
                <div className="space-y-2  text-center ">
                  <p className="text-base font-mont italic">Recuperando Autoestimas</p>
                  <p className="text-base font-mont italic">Redesenhando Sorrisos</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex flex-col items-center justify-center   pr-10">
                <h3 className="text-lg font-semibold mb-4 text-primary">Localização</h3>
                <div className="flex items-start gap-3 group hover:text-amber-300 ">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-amber-300 transition-all">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm leading-relaxed  text-start ">
                    <p>Ed. Walk Bueno Business</p>
                    <p>R. T-55, 930 </p>
                    <p>Sala 1608</p>
                    <p>St. Bueno, Goiânia-GO,</p>
                    <p>CEP:74215-170</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex justify-center items-center gap-6 text-primary py-6 border-t border-primary/60">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-amber-300   transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-amber-300   transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center hover:border-amber-300   transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 border-t border-primary/60">
              <p className="text-sm text-primary">
                © {new Date().getFullYear()} Marcelo Daltro. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
