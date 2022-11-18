import Sidebar from "./Sidebar";
import Esquerda from "./Esquerda";

export default function Corpo() {
  return (
    <div className="corpo">
      <Esquerda />
      <Sidebar />
    </div>
  );
}
