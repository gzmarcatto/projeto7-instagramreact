import Stories from "./Stories";
import Posts from "./Posts";

export default function Esquerda() {
  const postValue = [
    { postUser: "meowed", postContent: "assets/img/gato-telefone.svg", likedby: "respondeai", likes: 101523 },
    { postUser: "barked", postContent: "assets/img/dog.svg", likedby: "adorable_animals", likes: 99159 },
  ];

  return (
    <div className="esquerda">
      <Stories />
      <div class="posts">
        {postValue.map((value) => (
          <Posts user={value.postUser} content={value.postContent} likedby={value.likedby} likes={value.likes} />
        ))}
      </div>
    </div>
  );
}
