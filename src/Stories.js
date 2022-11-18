import Story from "./Story";

export default function Stories() {
  const storyValue = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];
  return (
    <>
      <div class="stories">
        {storyValue.map((value) => (
          <Story user={value} />
        ))}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </>
  );
}
