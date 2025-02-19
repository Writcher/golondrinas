"use client"

import {
  AnimatedBackgroundFirst,
  AnimatedBackgroundSecond,
  AnimatedBackgroundThird,
  AnimatedBackgroundFourth,
  AnimatedBackgroundFifth,
  AnimatedBackgroundSixth,
} from "@/components/background";
import { motion, useScroll, useTransform } from "framer-motion";
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const setScrollPosition = (value: number) => {
    window.scrollTo({ top: window.innerHeight * value, behavior: 'smooth' });
  };
  return (
    <main className="relative flex flex-col w-screen min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 h-[10%] flex flex-row gap-4 justify-center bg-amber-500 overflow-x-auto">
        <Button
          onClick={() => setScrollPosition(0)} className="!text-gray-800"
        >
          Inicio
        </Button>
        <Button
          onClick={() => setScrollPosition(1)} className="!text-gray-800"
        >
          Complejo
        </Button>
        <Button
          onClick={() => setScrollPosition(2)} className="!text-gray-800"
        >
          Actividades
        </Button>
        <Button
          onClick={() => setScrollPosition(3)} className="!text-gray-800"
        >
          Ubicación
        </Button>
        <Button
          onClick={() => setScrollPosition(4)} className="!text-gray-800"
        >
          Reseñas
        </Button>
        <Button
          onClick={() => setScrollPosition(5)} className="!text-gray-800"
        >
          FAQ
        </Button>
        <Button
          onClick={() => setScrollPosition(6)} className="!text-gray-800"
        >
          Contacto
        </Button>
      </div>

      {/* Contenido Sección 1 */}
      <div className="relative">
        <section className="flex flex-col items-center justify-center h-screen text-black z-1">
          <h1 className="text-5xl font-bold">Fotos</h1>
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
