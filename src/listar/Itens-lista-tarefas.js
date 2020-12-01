import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Habilita o uso de icones
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // Icone que será usado
import { A } from "hookrouter";
import ConcluirTarefa from "./Concluir-tarefa";
import RemoverTarefa from "./Remover-tarefa";

function ItensListaTarefas(props) {
  
  function marcarConcluida(tarefa) {
    return tarefa.concluida ? "line-through" : "none";
  }

  return props.tarefas.map((tarefa) => (
    <tr key={ tarefa.id } data-testid="tarefa">
      <td
        width="75%"
        data-testid="nome-tarefa"
        style={{ textDecoration: marcarConcluida(tarefa) }}
      >
        { tarefa.nome }
      </td>

      <td className="text-center">
        
        <ConcluirTarefa
          tarefa={ tarefa }
          recarregarTarefas={ props.recarregarTarefas }
          className={ tarefa.concluida ? 'hidden' : null }
        />
        &nbsp;
        
        <A
          href={ "/atualizar/" + tarefa.id }
          className={ tarefa.concluida ? "hidden" : "btn btn-warning btn-sm" }
        > 
          <FontAwesomeIcon icon={ faEdit } />
        </A>
        &nbsp;

        <RemoverTarefa
          tarefa={ tarefa }
          recarregarTarefas={ props.recarregarTarefas } />

      </td>
    </tr>
  ));
}

// Usamos PropTypes para definir o tipo da entrada de dados do componente via props
ItensListaTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default ItensListaTarefas;
