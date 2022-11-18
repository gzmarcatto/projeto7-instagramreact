import Logo from "./Logo";
import LogoMobile from "./LogoMobile";
import InstagramMobile from "./InstagramMobile";
import Pesquisa from "./Pesquisa";
import Icones from "./Icones";
import IconesMobile from "./IconesMobile";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Logo></Logo>
        <LogoMobile></LogoMobile>
        <InstagramMobile></InstagramMobile>
        <Pesquisa></Pesquisa>
        <Icones></Icones>
        <IconesMobile></IconesMobile>
      </div>
    </div>
  );
}
