// Small hexagon mark from the Tamp logo.
export default function Hex({ color, size = 9 }) {
  return <span className="hex" style={{ background: color, width: size, height: size * 1.11 }} aria-hidden="true" />;
}
