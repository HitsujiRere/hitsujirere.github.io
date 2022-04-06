import dynamic from 'next/dynamic'

/* SSG */
// import Sketch from 'react-p5';
/* SSR */
const Sketch = dynamic(() => import('react-p5'), {
   ssr: false,
});

import p5Types from "p5";

interface Box {
  x: number,
  y: number,
  angle: number,
  angleSpeed: number,
  size: number;
}

const FloatBoxSketch = () => {
  const boxes: Box[] = [];

  let timestamp = 0;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    if (boxes.length === 0) {
      for (let i = 0; i < 10; i++) {
        boxes.push({
          x: p5.random(0, p5.width),
          y: p5.height / 10 * i,
          angle: p5.random(0, p5.TWO_PI),
          angleSpeed: p5.random(-0.0005, 0.0005),
          size: p5.random(20, 100),
        });
      }
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(16);

    if (p5.millis() >= timestamp + 700) {
      timestamp = p5.millis();

      const size = p5.random(20, 100);

      boxes.push({
        x: p5.random(0, p5.width),
        y: -100,
        angle: p5.random(0, p5.TWO_PI),
        angleSpeed: p5.random(-0.0005, 0.0005),
        size: size,
      });
    }

    boxes.forEach((box) => {
      box.y += 3 / box.size * p5.deltaTime;
      box.angle += box.angleSpeed * p5.deltaTime;

      p5.push();
      p5.translate(box.x, box.y);
      p5.rotate(box.angle)
      p5.noStroke();
      p5.fill("#4e54c880");
      p5.rectMode(p5.CENTER);
      p5.rect(0, 0, box.size, box.size, box.size / 5);
      p5.pop();
    });
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      className="fixed inset-0 -z-10 bg-gray-900"
    />
  );
};

export default FloatBoxSketch;
