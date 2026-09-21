import { useState } from 'react';

// Crossfading photo slideshow with prev/next arrows and dots. Fills its container.
export default function Gallery({ images, alt, className = '' }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = (d) => setI((c) => (c + d + n) % n);

  return (
    <div className={'photo gallery ' + className} aria-roledescription="carousel" aria-label={alt}>
      {images.map((src, k) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — photo ${k + 1} of ${n}`}
          loading="lazy"
          className={k === i ? 'is-active' : ''}
          aria-hidden={k !== i}
        />
      ))}
      {n > 1 && (
        <>
          <button className="gallery__arrow gallery__arrow--prev" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
          <button className="gallery__arrow gallery__arrow--next" onClick={() => go(1)} aria-label="Next photo">›</button>
          <div className="gallery__dots">
            {images.map((src, k) => (
              <button
                key={src}
                className={'gallery__dot' + (k === i ? ' is-active' : '')}
                onClick={() => setI(k)}
                aria-label={`Show photo ${k + 1}`}
                aria-current={k === i}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
