import React, { useState, useEffect } from "react";
import { A } from "hookrouter";
import { Table, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Habilita o uso de icones
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Icone que será usado
import ItensListaTarefas from "./Itens-lista-tarefas";
import Paginacao from "./Paginacao";
import Ordenacao from "./Ordenacao";

function ListarTarefas() {
  const ITENS_POR_PAGINA = 3;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordenarAsc, setOrdenarAsc] = useState(false);
  const [ordenarDesc, setOrdenarDesc] = useState(false);
  const [filtroTarefa, setFiltroTarefa] = useState('')

  useEffect(() => {
    function obterTarefa() {
      const tarefasDB = localStorage["tarefas"];
      let listaTarefas = tarefasDB ? JSON.parse(tarefasDB) : [];
      
      // Filtrar
      listaTarefas = listaTarefas.filter(
        t => t.nome.toLowerCase().indexOf(filtroTarefa.toLocaleLowerCase()) === 0
      );
      
      // Ordenar
      if (ordenarAsc) {
        listaTarefas.sort((t1, t2) =>
          t1.nome.toLowerCase() > t2.nome.toLowerCase() ? 1 : -1
        );
      } else if (ordenarDesc) {
        listaTarefas.sort((t1, t2) =>
          t1.nome.toLowerCase() < t2.nome.toLowerCase() ? 1 : -1
        );
      }

      // Paginar
      setTotalItems(listaTarefas.length);
      setTarefas(
        listaTarefas.splice(
          (paginaAtual - 1) * ITENS_POR_PAGINA,
          ITENS_POR_PAGINA
        )
      );
    }

    if (carregarTarefas) {
      obterTarefa();
      setCarregarTarefas(false);
    }
  }, [carregarTarefas, paginaAtual, ordenarAsc, ordenarDesc, filtroTarefa]);

  const handleMudarPagina = (pagina) => {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  };

  const handleOrdenar = (event) => {
    event.preventDefault();

    if (!ordenarAsc && !ordenarDesc) {
      setOrdenarAsc(true);
      setOrdenarDesc(false);
    } else if (ordenarAsc) {
      setOrdenarAsc(false);
      setOrdenarDesc(true);
    } else {
      setOrdenarAsc(false);
      setOrdenarDesc(false);
    }
    setCarregarTarefas(true);
  };

  const handleFiltrar = (event) => {
    event.preventDefault();
    setFiltroTarefa(event.target.value);
    setCarregarTarefas(true);
  }

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>

      <Table striped bordered hover responsive data-testid="tabela">
        <thead>
          <tr>
            <th width="75%">
              <a href="/" onClick={handleOrdenar}>
                Tarefa
                &nbsp;
                <Ordenacao 
                  ordenarAsc={ordenarAsc}
                  ordenarDesc={ordenarDesc} />
              </a>
            </th>
            <th>
              <A
                href="/cadastrar"
                className="btn btn-success btn-sm"
                data-testid="btn-nova-tarefa"
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; {/* Usado para dar espaços */}
                Nova Tarefa
              </A>
            </th>
          </tr>
          <tr>
            <th>
              <Form.Control
                type="text"
                value={filtroTarefa}
                onChange={handleFiltrar}
                data-testid="txt-tarefa" 
                className="filtro-tarefa"/>

            </th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <ItensListaTarefas
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas}
          />
        </tbody>
      </Table>

      <Paginacao
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAGINA}
        paginaAtual={paginaAtual}
        mudarPagina={handleMudarPagina}
      />
    </div>
  );
}

export default ListarTarefas;
