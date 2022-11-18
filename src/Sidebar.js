import SidebarSugestoes from "./SidebarSugestoes";
import SidebarUsuario from "./SidebarUsuario";

export default function Sidebar() {
  const user = {name: "Catana", page: "catanacomics"}
  return (
    <div class="sidebar">
      <SidebarUsuario username={user.name} pagename={user.page} />
      <SidebarSugestoes />
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas
        mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
