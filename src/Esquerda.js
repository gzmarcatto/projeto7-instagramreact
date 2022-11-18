import Stories from "./Stories";
import Posts from "./Posts";

export default function Esquerda() {
  const postValue = [
    { postUser: "meowed", postContent: "assets/img/gato-telefone.svg", likes: 101523 },
    { postUser: "barked", postContent: "assets/img/dog.svg", likes: 99159 },
  ];

  return (
    <div className="esquerda">
      <Stories />
      {postValue.map((value) => (
        <Posts user={value.postUser} content={value.postContent} likes={value.likes} />
      ))}
    </div>
  );
}
