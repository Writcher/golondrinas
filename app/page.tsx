"use client"

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
import * as React from 'react';


export default function Home() {
  return (
    <main className="relative w-screen">
      <Nav />
      {/* Contenido Sección 1 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen w-screen text-black z-1">
          <ImageCarousel />
        </section>
      </div>
      <AnimatedBackgroundFirst />
      {/* Contenido Sección 2 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-white z-3">
          <h2 className="text-4xl font-bold">Servicios</h2>
        </section>
      </div>
      <AnimatedBackgroundSecond />
      {/* Contenido Sección 3 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-white z-3">
          <h2 className="text-4xl font-bold">Actividades</h2>
        </section>
      </div>
      <AnimatedBackgroundThird />
      {/* Contenido Sección 4 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-white z-5">
          <h2 className="text-4xl font-bold">Como llegar</h2>
        </section>
      </div>
      <AnimatedBackgroundFourth />
      {/* Contenido Sección 5 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-white z-5">
          <h2 className="text-4xl font-bold">Reviews</h2>
        </section>
      </div>
      <AnimatedBackgroundFifth />
      {/* Contenido Sección 6 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-white z-5">
          <h2 className="text-4xl font-bold">Faq</h2>
        </section>
      </div>
      <AnimatedBackgroundSixth />
      {/* Contenido Sección 7 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-white z-5">
          <h2 className="text-4xl font-bold">Contacto</h2>
        </section>
      </div>
    </main>
  );
}
