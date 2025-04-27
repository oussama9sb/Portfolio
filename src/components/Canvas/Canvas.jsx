import { useEffect, useRef, useState } from "react";
import classes from "./Canvas.module.css";
import random from "canvas-sketch-util/random";

const Canvas = ({ children }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);

  // console.log(context.canvas.width);
  // console.log(context.canvas.height);

  // context.canvas.width = 1540;
  // context.canvas.height = 600;

  const width = context?.canvas.width;
  const height = context?.canvas.height;

  const agents = [];
  const num = 33;

  for (let i = 0; i < num; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);
    agents.push(new Agent(x, y));
  }

  const draws = (agents) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];
      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];

        const dist = agent.pos.getDistance(other.pos);

        if (dist > 200) continue;

        // context.lineWidth = math.mapRange(dist, 0, 200, 12, 1);

        context.lineWidth = 1;

        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.strokeStyle = "white";
        context.stroke();
      }
    }

    agents.forEach((agent) => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.canvas.width = 1519;
      ctx.canvas.height = 750;
      setContext(ctx);
    }
  }, []);

  useEffect(() => {
    // let frameCount = 0;
    let animationFrameId;

    // Check if null context has been replaced on component mount
    if (context) {
      //Our draw came here
      const render = () => {
        // frameCount++;
        draws(agents);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draws, context, agents]);

  return (
    <canvas className={classes.canvas} ref={canvasRef}>
      {children}
    </canvas>
  );
};

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-0.5, 1), random.range(-0.5, 1));
    this.radius = random.range(4, 12);
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.fillStyle = "white";
    context.lineWidth = 3;

    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.strokeStyle = "white";
    context.stroke();

    context.restore();
  }
}

export default Canvas;
