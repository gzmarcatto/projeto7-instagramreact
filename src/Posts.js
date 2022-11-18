import { useState } from "react";

export default function Posts(props) {
  const [saved, setSaved] = useState("bookmark-outline");
  const [liked, setLiked] = useState("heart-outline");
  const [likes, setLikes] = useState(props.likes);
  return (
    <>
      <div class="posts">
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={"assets/img/" + props.user + ".svg"} />
              {props.user}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img
              src={props.content}
              onDoubleClick={() => {
                setLiked("heart");
                setLikes(props.likes + 1);
              }}
            />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon
                  name={liked}
                  onClick={() => {
                    if (liked == "heart-outline") {
                      setLiked("heart");
                      setLikes(props.likes + 1);
                    } else {
                      setLiked("heart-outline");
                      setLikes(props.likes);
                    }
                  }}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon
                  name={saved}
                  onClick={() =>
                    saved == "bookmark-outline"
                      ? setSaved("bookmark")
                      : setSaved("bookmark-outline")
                  }
                ></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e{" "}
                <strong>outras {likes.toLocaleString("pt-BR")} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
