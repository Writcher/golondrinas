"use client"

import {
  AnimatedBackgroundFirst,
  AnimatedBackgroundSecond,
  AnimatedBackgroundThird,
  AnimatedBackgroundFourth,
  AnimatedBackgroundFifth,
  AnimatedBackgroundSixth,
} from "@/components/background";
import GoogleMap from "@/components/map";
import Nav from "@/components/nav";
import ImageCarousel from "@/components/photodisplay";
import { Button } from "@mui/material";
import * as React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Reviews from "@/components/reviews";
import { useRef } from "react";


export default function Home() {

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);
  const ref6 = useRef<HTMLDivElement | null>(null);
  const ref7 = useRef<HTMLDivElement | null>(null);

  return (
    <main className="relative w-screen">
      <Nav ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} ref7={ref7}/>
      {/* Contenido Sección 1 */}
      <div className="relative">
        <section ref={ref1} className="flex flex-col items-center justify-center h-screen w-screen text-black z-0">
          <ImageCarousel />
        </section>
      </div>
      <AnimatedBackgroundFirst />
      {/* Contenido Sección 2 */}
      <div className="relative w-screen">
        <section ref={ref2} className="flex flex-col items-center justify-center h-screen text-white z-2">
          <h2 className="text-4xl font-bold">Servicios</h2>
        </section>
      </div>
      <AnimatedBackgroundSecond />
      {/* Contenido Sección 3 */}
      <div className="relative w-screen">
        <section ref={ref3} className="flex flex-col items-center justify-center h-screen text-white z-4">
          <h2 className="text-4xl font-bold">Actividades</h2>
        </section>
      </div>
      <AnimatedBackgroundThird />
      {/* Contenido Sección 4 */}
      <div className="relative w-screen">
        <section ref={ref4} className="flex flex-col md:flex-row items-center justify-center h-screen text-white z-6">
          <div className="hidden md:flex w-[40%] mb-10 h-[90%] items-center justify-center clip-path-custom bg-yellow-400">
            <GoogleMap />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-[50%] md:h-screen items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold">¿Dónde Estamos?</h2>
            <h3 className="text-md ">bla bla</h3>
            <h2 className="text-2xl md:text-3xl font-semibold">¿Cómo Llegar?</h2>
            <h3 className="text-md">bla bla</h3>
            <Button
              variant="contained"
              disableElevation
              endIcon={<FmdGoodIcon className="!text-black" />}
              className="!text-black !bg-yellow-400 hover:!bg-yellow-500"
              component="a"
              href="https://maps.app.goo.gl/rVyQTFkB5ejYAsAt9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </Button>
          </div>
        </section>
      </div>
      <AnimatedBackgroundFourth />
      {/* Contenido Sección 5 */}
      <div className="relative w-screen">
        <section ref={ref5} className="flex flex-col items-center justify-center h-screen text-white z-8">
          <Reviews />
        </section>
      </div>
      <AnimatedBackgroundFifth />
      {/* Contenido Sección 6 */}
      <div className="relative w-screen">
        <section ref={ref6} className="flex flex-col items-center justify-center h-screen text-white z-10">
          <h2 className="text-4xl font-bold">Faq</h2>
        </section>
      </div>
      <AnimatedBackgroundSixth />
      {/* Contenido Sección 7 */}
      <div className="relative w-screen">
        <section ref={ref7} className="flex flex-col items-center justify-center h-screen text-white z-12">
          <h2 className="text-4xl font-bold">Contacto</h2>
        </section>
      </div>
    </main>
  );
}
