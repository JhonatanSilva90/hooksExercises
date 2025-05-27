import { Cliente } from "./useState/clientes/Cliente";
import { Count } from "./useState/count/Count";
import { Text } from "./useState/text/Text";
import { ToggleColor } from "./useState/color/Color";
import { AlternarEmoji } from "./useState/alternarEmoji/AlternarEmoji";
import { ContadorDeCliques } from "./useState/contadorDeCliques/ContadorDeCliques";
import { TextoCaixaAlta } from "./useState/textoCaixaAlta/TextoCaixaAlta";
import { BoasVindas } from "./useState/boasVindas/BoasVindas";
import { AlternarMensagem } from "./useState/alternarMensagem/AlternarMensagem";

function App() {
  return (
    <>
      <AlternarEmoji />
      <ToggleColor />
      <ContadorDeCliques />
      <TextoCaixaAlta />
      <BoasVindas />
      <br />
      <AlternarMensagem />
      <Text />
      <Count />
      <Cliente />
    </>
  );
}

export default App;
