import { useState } from "react";

export default function SidebarUsuario(props) {
  const [user, setUser] = useState(props.username);
  const [userImage, setUserImage] = useState("assets/img/" + props.pagename + ".svg");
  return (
    <div class="usuario" data-test="user">
      <img src={userImage} data-test="profile-image" onClick={() => {
        let newImage = prompt("Qual o link da nova imagem de perfil?");
        setUserImage(newImage);
      }} />
      <div class="texto">
        <strong>{props.pagename}</strong>
        <span data-test="name">
          {user}
          <ion-icon
            name="pencil" data-test="edit-name"
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
