import "./Header.css";
import { WaterSurface } from "./home/WaterSurface";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-card">
        <div className="header-warmth" aria-hidden="true" />
        <div className="header-water" aria-hidden="true">
          <WaterSurface className="header-water__canvas" />
        </div>
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
}
