"use client"

import * as React from 'react';
import { useRef } from "react";
import {
  AnimatedBackgroundFirst,
  AnimatedBackgroundSecond,
  AnimatedBackgroundThird,
  AnimatedBackgroundFourth,
  AnimatedBackgroundFifth,
  AnimatedBackgroundSixth,
} from "@/components/background";

import Nav from "@/components/nav";
import ImageCarousel from "@/components/photodisplay";
import Location from '@/components/map';
import Reviews from "@/components/reviews";
import Contacts from '@/components/contact';


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
          <h3>Aca van las cosas que incluye la estadia en la cabaña (pileta, wifi, tele, etc)</h3>
        </section>
      </div>
      <AnimatedBackgroundSecond />
      {/* Contenido Sección 3 */}
      <div className="relative w-screen">
        <section ref={ref3} className="flex flex-col items-center justify-center h-screen text-white z-4">
          <h2 className="text-4xl font-bold">Actividades</h2>
          <h3>Aca van actividades que hacer en potrerillos (rafting, bodegas, cosas que ustedes recomienden)</h3>
        </section>
      </div>
      <AnimatedBackgroundThird />
      {/* Contenido Sección 4 */}
      <div className="relative w-screen">
        <section ref={ref4} className="flex flex-col md:flex-row items-center justify-center h-screen text-white z-6">
          <Location />
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
          <h3>Aca van preguntas que les hagan frecuentemente los clientes y las respuestas correspondientes</h3>
        </section>
      </div>
      <AnimatedBackgroundSixth />
      {/* Contenido Sección 7 */}
      <div className="relative w-screen">
        <section ref={ref7} className="flex flex-col items-center justify-center h-screen text-white z-12">
          <Contacts/>
        </section>
      </div>
    </main>
  );
}
