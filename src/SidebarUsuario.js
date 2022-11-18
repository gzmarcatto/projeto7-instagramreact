import { useState } from "react";

export default function SidebarUsuario(props) {
  const [user, setUser] = useState(props.username);
  const [userImage, setUserImage] = useState("assets/img/" + props.pagename + ".svg");
  return (
    <div class="usuario">
      <img src={userImage} onClick={() => {
        let newImage = prompt("Qual o link da nova imagem de perfil?");
        setUserImage(newImage);
      }} />
      <div class="texto">
        <strong>{props.pagename}</strong>
        <span>
          {user}
          <ion-icon
            name="pencil"
            onClick={() => {
              let newUser = prompt("Digite um novo usuário");
              setUser(newUser);
            }}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
