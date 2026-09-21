// Image frame that fills its container. Without a `src` it shows a labelled
// placeholder so pages still read well before photography is supplied.
export default function Photo({ src, alt, position, className = '' }) {
  return (
    <div className={'photo ' + className}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" style={position ? { objectPosition: position } : undefined} />
      ) : (
        <span className="photo__placeholder">{alt}</span>
      )}
    </div>
  );
}
