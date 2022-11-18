import SidebarSugestao from "./SidebarSugestao";

export default function SidebarSugestoes() {
  const sugestoes = [
    { nome: "bad.vibes.memes", razao: "Segue você" },
    { nome: "chibirdart", razao: "Segue você" },
    { nome: "razoesparaacreditar", razao: "Novo no Instagram" },
    { nome: "adorable_animals", razao: "Segue você" },
    { nome: "smallcutecats", razao: "Segue você" },
  ];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((value) => (
        <SidebarSugestao nome={value.nome} razao={value.razao} />
      ))}
    </div>
  );
}
