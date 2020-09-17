import React, { useState, useEffect } from "react";
import { A } from "hookrouter";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Habilita o uso de icones
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Icone que será usado
import ItensListaTarefas from "./Itens-lista-tarefas";
import Paginacao from './Paginacao';

function ListarTarefas() {

  const ITENS_POR_PAGINA = 3;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {
    function obterTarefa() {
      const tarefasDB = localStorage["tarefas"];
      let listarTarefas = tarefasDB ? JSON.parse(tarefasDB) : [];
      setTotalItems(listarTarefas.length);
      setTarefas(listarTarefas.splice((paginaAtual - 1) * ITENS_POR_PAGINA, ITENS_POR_PAGINA));
      
    }

    if (carregarTarefas) {
      obterTarefa();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual]);

  const handleMudarPagina = (pagina) => {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  };

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>

      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <A
                href="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa"
              >
                <FontAwesomeIcon icon= { faPlus } />
                &nbsp; {/* Usado para dar espaços */}
                Nova Tarefa
              </A>
            </th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={ tarefas }
            recarregarTarefas={ setCarregarTarefas }
          />
        </tbody>
      </Table>

      <Paginacao
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAGINA}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina} />

    </div>
  );
}

export default ListarTarefas;
