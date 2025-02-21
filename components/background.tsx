"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackgroundFirst() {
    const { scrollYProgress } = useScroll();
    const clipPath = useTransform(scrollYProgress, [0, 0.1666666667], [
        // Inicio: Zig-zag en la parte inferior (invertido)
        "polygon(0% 100%, 0% 85%, 10% 95%, 30% 82%, 40% 90%, 50% 80%, 60% 90%, 70% 80%, 90% 85%, 100% 85%, 100% 100%)",
        // Final del scroll: Pantalla completamente cubierta
        "polygon(0% 100%, 0% 0%, 10% 0%, 30% 0%, 40% 0%, 50% 0%, 60% 0%, 70% 0%, 90% 0%, 100% 0%, 100% 100%)",
    ]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gray-500 z-1"
            style={{ clipPath }}
        />
    );
}

export function AnimatedBackgroundSecond() {
    const { scrollYProgress } = useScroll();
    const clipPath = useTransform(scrollYProgress, [0.1666666667, 0.3333333333], [
        // Inicio: Zig-zag en la parte inferior (invertido)
        "polygon(0% 100%, 0% 90%, 10% 85%, 30% 90%, 40% 80%, 60% 90%, 80% 85%, 90% 80%, 100% 85%, 100% 100%)",
        // Final del scroll: Pantalla completamente cubierta
        "polygon(0% 100%, 0% 0%, 10% 0%, 30% 0%, 40% 0%, 60% 0%, 80% 0%, 90% 0%, 100% 0%, 100% 100%)",
    ]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gray-400 z-3"
            style={{ clipPath }}
        />
    );
}

export function AnimatedBackgroundThird() {
    const { scrollYProgress } = useScroll();
    const clipPath = useTransform(scrollYProgress, [0.3333333333, 0.5], [
        // Inicio: Zig-zag en la parte inferior (invertido)
        "polygon(0% 100%, 0% 95%, 20% 85%, 40% 95%, 60% 80%, 80% 95%, 100% 85%, 100% 100%)",
        // Final del scroll: Pantalla completamente cubierta
        "polygon(0% 100%, 0% 0%, 20% 0%, 40% 0%, 60% 0%, 80% 0%, 100% 0%, 100% 100%)",
    ]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gray-600 z-5"
            style={{ clipPath }}
        />
    );
}

export function AnimatedBackgroundFourth() {
    const { scrollYProgress } = useScroll();
    const clipPath = useTransform(scrollYProgress, [0.5, 0.6666666666], [
        // Inicio: Zig-zag en la parte inferior
        "polygon(0% 100%, 0% 88%, 20% 93%, 40% 85%, 60% 90%, 80% 85%, 100% 90%, 100% 100%)",
        // Final del scroll: Pantalla completamente cubierta
        "polygon(0% 100%, 0% 0%, 20% 0%, 40% 0%, 60% 0%, 80% 0%, 100% 0%, 100% 100%)",
    ]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-lime-700 z-7"
            style={{ clipPath }}
        />
    );
}

export function AnimatedBackgroundFifth() {
    const { scrollYProgress } = useScroll();
    const clipPath = useTransform(scrollYProgress, [0.6666666666, 0.8333333333], [
        // Inicio: Onda con muchos puntos para simular curvas
        "polygon(0% 100%, 0% 90%, 10% 95%, 20% 90%, 30% 95%, 35% 96%, 40% 91%, 45% 90%, 55% 95%, 65% 85%, 80% 90%, 85% 85%, 95% 90%, 100% 95%, 100% 100%)",
        // Final del scroll: Onda más acentuada
        "polygon(0% 100%, 0% 0%, 10% 0%, 20% 0%, 30% 0%, 35% 0%, 40% 0%, 45% 0%, 55% 0%, 65% 0%, 80% 0%, 85% 0%, 95% 0%, 100% 0%, 100% 100%)"
    ]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-yellow-500 z-9"
            style={{ clipPath }}
        />
    );
}

export function AnimatedBackgroundSixth() {
    const { scrollYProgress } = useScroll();
    const clipPath = useTransform(scrollYProgress, [0.8333333333, 1], [
        // Inicio: Onda con muchos puntos para simular curvas
        "polygon(0% 100%, 0% 95%, 5% 96%, 10% 95%, 15% 96%, 20% 95%, 25% 96%, 30% 95%, 35% 96%, 40% 95%, 45% 96%, 50% 95%, 55% 96%, 60% 95%, 65% 96%, 70% 95%, 75% 96%, 80% 95%, 85% 96%, 90% 95%, 95% 96%, 100% 95%, 100% 100%)",
        // Final del scroll: Onda más acentuada
        "polygon(0% 100%, 0% 0%, 5% 0%, 10% 0%, 15% 0%, 20% 0%, 25% 0%, 30% 0%, 35% 0%, 40% 0%, 45% 0%, 50% 0%, 55% 0%, 60% 0%, 65% 0%, 70% 0%, 75% 0%, 80% 0%, 85% 0%, 90% 0%, 95% 0%, 100% 0%, 100% 100%)"
    ]);
    
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-green-800 z-11"
            style={{ clipPath }}
        />
    );
}