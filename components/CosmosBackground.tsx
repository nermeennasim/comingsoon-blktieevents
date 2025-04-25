"use client";
import { useEffect, useRef } from "react";

const CosmosBackground = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d") as CanvasRenderingContext2D | null;
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const particles: Particle[] = [];
		const numParticles = 100;

		class Particle {
			x: number;
			y: number;
			radius: number;
			speed: number;
			angle: number;

			constructor(x: number, y: number, radius: number, speed: number) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.speed = speed;
				this.angle = Math.random() * Math.PI * 2;
			}

			update() {
				this.x += Math.cos(this.angle) * this.speed;
				this.y += Math.sin(this.angle) * this.speed;

				if (canvas) {
					if (this.y < 0 || this.y > canvas.height) {
						this.angle = -this.angle;
					}
					if (this.x < 0 || this.x > canvas.width)
						this.angle = Math.PI - this.angle;
				}
			}

			draw() {
				if (!ctx) return; // If ctx is null, don't proceed

				ctx.beginPath();
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
				ctx.fill();
			}
		}

		for (let i = 0; i < numParticles; i++) {
			particles.push(
				new Particle(
					Math.random() * canvas.width,
					Math.random() * canvas.height,
					Math.random() * 4 + 1,
					Math.random() * 0.5 + 0.2
				)
			);
		}

		const connectParticles = () => {
			for (let a = 0; a < particles.length; a++) {
				for (let b = a + 1; b < particles.length; b++) {
					const dist = Math.hypot(
						particles[a].x - particles[b].x,
						particles[a].y - particles[b].y
					);
					if (dist < 120) {
						ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
						ctx.lineWidth = 0.7;
						ctx.beginPath();
						ctx.moveTo(particles[a].x, particles[a].y);
						ctx.lineTo(particles[b].x, particles[b].y);
						ctx.stroke();
					}
				}
			}
		};

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			particles.forEach((p) => {
				p.update();
				p.draw();
			});
			connectParticles();
			requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full z-[-1]"
			style={{
				background: "radial-gradient(circle, #1b2735, #090a0f)",
				border: "2px solid red",
			}}
		/>
	);
};

export default CosmosBackground;
