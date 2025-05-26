import { useState } from "react";
import { clientes } from "./data";

export function Cliente() {
  // Estado para armazenar o ID do cliente que está com os detalhes visíveis
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  // Função que alterna a exibição dos detalhes de um cliente
  function MostrarDetalhes(id) {
    if (clienteSelecionado === id) setClienteSelecionado(null);
    else setClienteSelecionado(id);
  }
  return (
    <>
      {clientes.map((client) => {
        return (
          <>
            <p>
              <strong>Nome: </strong>
              {client.nome}
            </p>
            <p>
              <strong>Endereço:</strong> {client.endereco}
            </p>
            <p>
              <strong>Serviço Realizado:</strong> {client.servico}
            </p>
            <button onClick={() => MostrarDetalhes(client.id)}>
              {clienteSelecionado === client.id
                ? "Menos detalhes"
                : "Mais detalhes"}
            </button>

            {clienteSelecionado === client.id && (
              <>
                <p>
                  <strong>Responsável:</strong> {client.responsavel}
                </p>
                <p>
                  <strong>Telefone:</strong> {client.telefone}
                </p>
                <p>
                  <strong>Email:</strong> {client.email}
                </p>
                <p>
                  <strong>Cidade:</strong> {client.cidade}
                </p>
                <p>
                  <strong>CNPJ:</strong> {client.cnpj}
                </p>
              </>
            )}
            <hr />
          </>
        );
      })}
    </>
  );
}
