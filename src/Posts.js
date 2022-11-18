import { useState } from "react";

export default function Posts(props) {
  const [saved, setSaved] = useState("bookmark-outline");
  const [liked, setLiked] = useState("heart-outline");
  const [likes, setLikes] = useState(props.likes);
  const [iconColor, setIconColor] = useState("black");
  const [likeAnimation, setLikeAnimation] = useState("");
  const [finishAnimation, setFinishAnimation] = useState(true);

  /*   useEffect(() => {
    function handleLikeAnimation() {
      console.log(finishAnimation, "use effect", likeAnimation)
      setTimeout(() => {
        setFinishAnimation(true);
        setLikeAnimation("");
        console.log(finishAnimation, "timeout", likeAnimation)
      }, 500);
    }
    handleLikeAnimation();
  }, [(likeAnimation)]); */

  return (
    <>
      <div class="post" data-test="post">
        <div class="topo">
          <div class="usuario">
            <img src={`assets/img/${props.user}.svg`} data-test="post-image"/>
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
              if (finishAnimation === true) {
                setLiked("heart");
                setLikes(props.likes + 1);
                setIconColor("red");
                setLikeAnimation("double-click-animation");
                setFinishAnimation(false);
                setTimeout(() => {
                  setFinishAnimation(true);
                  setLikeAnimation("");
                }, 500);
              }
            }}
          />
          <ion-icon name="heart" class={likeAnimation} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon
                name={liked}
                style={{ color: iconColor }}
                data-test="like-post"
                onClick={() => {
                  if (liked == "heart-outline") {
                    setLiked("heart");
                    setLikes(props.likes + 1);
                    setIconColor("red");
                  } else {
                    setLiked("heart-outline");
                    setLikes(props.likes);
                    setIconColor("black");
                  }
                }}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                name={saved}
                data-test="save-post"
                onClick={() =>
                  saved == "bookmark-outline" ? setSaved("bookmark") : setSaved("bookmark-outline")
                }
              ></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong data-test="likes-number">outras {likes.toLocaleString("pt-BR")} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
