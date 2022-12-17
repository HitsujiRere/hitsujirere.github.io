import classNames from 'classnames';
import dynamic from 'next/dynamic';

import p5Types from 'p5';
import { useRef, useState } from 'react';

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

  let boxes = useRef<Box[]>([]);
  let timestamp = 0;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);

    for (let i = 0; i < 10; i++) {
      boxes.current.push({
        x: p5.random(),
        y: p5.random(-1, 1),
        angle: p5.random(0, p5.TWO_PI),
        angleSpeed: p5.random(-0.0005, 0.0005),
        size: p5.random(0.01, 0.1),
      });
    }

    SetDrawing(true);
  };

  const draw = (p5: p5Types) => {
    console.log(boxes);

    const millis = p5.millis();

    p5.background('#f4f4f5');

    if (millis >= timestamp + 500) {
      timestamp = millis;

      boxes.current.push({
        x: p5.random(),
        y: -0.2,
        angle: p5.random(0, p5.TWO_PI),
        angleSpeed: p5.random(-0.0005, 0.0005),
        size: p5.random(0.01, 0.1),
      });

      boxes.current = boxes.current.filter((box) => box.y < 1.2);
    }

    boxes.current.forEach((box) => {
      box.y += (0.00001 / box.size) * p5.deltaTime;
      box.angle += box.angleSpeed * p5.deltaTime;

      p5.push();
      p5.translate(box.x * p5.width, box.y * p5.height);
      p5.rotate(box.angle);
      p5.noStroke();
      p5.fill('#4ade8080');
      p5.rectMode(p5.CENTER);
      p5.rect(
        0,
        0,
        box.size * Math.min(p5.width, p5.height),
        box.size * Math.min(p5.width, p5.height),
        (box.size * Math.min(p5.width, p5.height)) / 4,
      );
      p5.pop();
    });
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <div className='fixed inset-0 -z-10 bg-zinc-100'>
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
