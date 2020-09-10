import React from "react";
import { A } from "hookrouter";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Habilita o uso de icones
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // Icone que será usado

function ListarTarefas() {
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
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; {/* Usado para dar espaços */}
                Nova Tarefa
              </A>
            </th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </div>
  );
}

export default ListarTarefas;
