import classNames from 'classnames';
import dynamic from 'next/dynamic';

import p5Types from 'p5';
import { useState } from 'react';

/* SSG */
// import Sketch from 'react-p5';

/* SSR */
const Sketch = dynamic(() => import('react-p5'), {
  ssr: false,
});

interface Box {
  x: number;
  y: number;
  angle: number;
  angleSpeed: number;
  size: number;
}

export const FloatBoxSketch = () => {
  const [drawing, SetDrawing] = useState(false);

  let boxes: Box[] = [];
  let timestamp = 0;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    if (boxes.length === 0) {
      for (let i = 0; i < 10; i++) {
        boxes.push({
          x: p5.random(0, p5.width),
          y: (p5.height / 10) * i,
          angle: p5.random(0, p5.TWO_PI),
          angleSpeed: p5.random(-0.0005, 0.0005),
          size: p5.random(20, 100),
        });
      }
    }

    SetDrawing(true);
  };

  const draw = (p5: p5Types) => {
    const millis = p5.millis();

    p5.background(16);

    if (millis >= timestamp + 700) {
      timestamp = millis;

      const size = p5.random(20, 100);

      boxes.push({
        x: p5.random(0, p5.width),
        y: -100,
        angle: p5.random(0, p5.TWO_PI),
        angleSpeed: p5.random(-0.0005, 0.0005),
        size: size,
      });

      boxes = boxes.filter((box) => box.y <= p5.height * 2);
    }

    boxes.forEach((box) => {
      box.y += (3 / box.size) * p5.deltaTime;
      box.angle += box.angleSpeed * p5.deltaTime;

      p5.push();
      p5.translate(box.x, box.y);
      p5.rotate(box.angle);
      p5.noStroke();
      p5.fill('#4e54c880');
      p5.rectMode(p5.CENTER);
      p5.rect(0, 0, box.size, box.size, box.size / 5);
      p5.pop();
    });
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className='fixed inset-0 -z-10 bg-[#101010]'>
      <div
        className={classNames('transition-opacity duration-1000', {
          'opacity-0': !drawing,
          'opacity-100': drawing,
        })}
      >
        <Sketch setup={setup} draw={draw} windowResized={windowResized} />
      </div>
    </div>
  );
};
