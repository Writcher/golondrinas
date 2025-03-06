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
import Nav from "@/components/nav/nav";
import Gallery from "@/components/gallery/gallery";
import Location from '@/components/location/location';
import Reviews from "@/components/reviews/reviews";
import Contacts from '@/components/contact';


export default function Home() {

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);
  const ref6 = useRef<HTMLDivElement | null>(null);
  const ref7 = useRef<HTMLDivElement | null>(null);

  const refs = {
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7
  };

  return (
    <main className='overflow-x-auto'>
      <Nav {...refs} />
      {/* Gallery */}
      <section ref={ref1} className="relative flex flex-col items-center justify-center h-screen">
        <Gallery />
      </section>
      <AnimatedBackgroundFirst />
      {/* Cabins */}
      <section ref={ref2} className="relative flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-4xl font-bold">Servicios</h2>
        <h3>Aca van las cosas que incluye la estadia en la cabaña (pileta, wifi, tele, etc)</h3>
      </section>
      <AnimatedBackgroundSecond />
      {/* Activities */}
      <section ref={ref3} className="relative flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-4xl font-bold">Actividades</h2>
        <h3>Aca van actividades que hacer en potrerillos (rafting, bodegas, cosas que ustedes recomienden)</h3>
      </section>
      <AnimatedBackgroundThird />
      {/* Location */}
      <section ref={ref4} className="relative flex flex-col items-center justify-center h-screen text-white">
        <Location />
      </section>
      <AnimatedBackgroundFourth />
      {/* Reviews */}
      <section ref={ref5} className="relative flex flex-col items-center justify-center h-screen text-white">
        <Reviews />
      </section>
      <AnimatedBackgroundFifth />
      {/* faq */}
      <section ref={ref6} className="relative flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-4xl font-bold">Faq</h2>
        <h3>Aca van preguntas que les hagan frecuentemente los clientes y las respuestas correspondientes</h3>
      </section>
      <AnimatedBackgroundSixth />
      {/* Contact */}
      <section ref={ref7} className="relative flex flex-col items-center justify-center h-screen text-white">
        <Contacts />
      </section>
    </main>
  );
}
