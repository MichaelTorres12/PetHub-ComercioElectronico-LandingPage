import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, TrophyIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
  {/* Cambia la línea de abajo para usar heroImage.jpg */}
  <div className="absolute top-0 h-full w-full bg-[url('/img/heroImage.jpg')] bg-cover bg-center" />
  <div className="absolute top-0 h-full w-full bg-black/20 bg-cover bg-center" />
  <div className="max-w-8xl container relative mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
        <Typography
          variant="h1"
          color="white"
          className="mb-6 font-black"
        >
          Descubre lo Mejor para tu Mascota en PetHub
        </Typography>
        <Typography variant="lead" color="white" className="opacity-80">
          Encuentra todo lo que tu amigo peludo necesita para ser feliz y saludable.
        </Typography>
      </div>
    </div>
  </div>
</div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <TrophyIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Comprar con PetHub es una Experiencia Única
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              No te preocupes por nada, nosotros nos encargamos de todo para que tu mascota tenga lo mejor. Desde accesorios de calidad hasta un servicio de atención al cliente excepcional.
                <br />
                <br />
                Estamos aquí para ayudarte en cada paso del camino, asegurándonos de que tanto tú como tu mascota estén felices con su compra.
              </Typography>
              <Button variant="filled">Conoce las colecciones</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/Molina.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Servicio al cliente</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Soporte Personalizado
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Nuestro equipo está disponible para ayudarte a elegir los mejores productos para tu mascota. Ya sea que necesites asesoramiento o tengas alguna pregunta, estamos aquí para ti.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-20">
        <div className="container mx-auto">
          <PageTitle section="Nuestras Colecciones" heading="Conoce lo que tendemos para ofrecer a tus mascotas">
          Explora nuestras colecciones cuidadosamente seleccionadas de accesorios para mascotas. Desde ropa y juguetes hasta camas y correas, tenemos todo lo que necesitas para mimar a tu amigo peludo con estilo y confort.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, button }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                button={button}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Calidad y precio" heading="Encuentra Todo lo que tu Mascota Necesita en un Solo Lugar">
          En PetHub, nos comprometemos a hacer que el cuidado de tu mascota sea lo más sencillo y agradable posible. Descubre nuestra variedad de productos, diseñados para ofrecer calidad, comodidad y estilo a tu amigo peludo.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="" heading="Sé el primero en recibir productos">
            Completa el formulario, suscribete, y sé el primer en saber cuando hayan nuevos productos
          </PageTitle>

          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <a href="C:\Users\digifact\Desktop\TGFher\UFG\Landing\PetHub-ComercioElectronico-LandingPage\src\index1.js"><Button variant="gradient" size="lg" className="mt-8" fullWidth>Suscribete</Button></a>
          </form>

          
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
