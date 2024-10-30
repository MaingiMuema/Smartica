"use client";
import { useEffect, useRef } from "react";
import Herosection from "./Herosection";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import CoreServices from "./CoreServices";
import CurrentProject from "./CurrentProject";
import WhyPartnerWithUs from "./WhyPartnerWithUs";
import ContactSection from "./ContactSection";
import WhyChooseSmatica from "./WhyChooseSmatica";
import Footer from "./Footer";

const Landingpage = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = Math.random() < 0.5 ? "#20b6d9" : "#f1d755";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let particles = [];

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }

      // Create new particles
      if (particles.length < 100) {
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          particles.push(new Particle(x, y));
        }
      }

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 50) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(32, 182, 217, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      // Create particles on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push(
          new Particle(mousePosition.current.x, mousePosition.current.y)
        );
      }
    };

    const handleClick = (event) => {
      const clickX = event.clientX;
      const clickY = event.clientY;

      // Create a burst of particles on click
      for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        const particle = new Particle(clickX, clickY);
        particle.speedX = Math.cos(angle) * speed;
        particle.speedY = Math.sin(angle) * speed;
        particle.size = Math.random() * 10 + 5;
        particles.push(particle);
      }
    };

    init();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="background-animation"></canvas>
      <Navbar />
      <Herosection />
      <CoreServices />
      <CurrentProject />
      <WhyPartnerWithUs />
      <WhyChooseSmatica />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landingpage;
