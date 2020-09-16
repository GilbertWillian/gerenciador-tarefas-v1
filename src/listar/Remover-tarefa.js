import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function RemoverTarefa(props) {
  const [exibirModal, setExibirModal] = useState(false);

  const handlerAbrirModal = (event) => {
    event.preventDefault();
    setExibirModal(true);
  };

  const handlerFecharModal = () => {
    setExibirModal(false);
  };

  const handleRemoverTarefa = (event) => {
    event.preventDefault();
    const tarefasDB = localStorage["tarefas"];
    let tarefas = tarefasDB ? JSON.parse(tarefasDB) : [];
    tarefas = tarefas.filter((tarefa) => tarefa.id !== props.tarefa.id);
    localStorage["tarefas"] = JSON.stringify(tarefas);
    setExibirModal(false);
    props.recarregarTarefas(true);
  };

  return (
    <>
      <Button
        variant="danger"
        className="btn-sm"
        onClick={handlerAbrirModal}
        data-testid="btn-abrir-modal"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>

      <Modal show={exibirModal} onHide={handlerFecharModal} data-testid="modal">
        <Modal.Header closeButton>
          <Modal.Title>Remover Tarefa</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Deseja realmente remover a seguinte tarefa?
          <br />
          <strong> {props.tarefa.nome}</strong>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleRemoverTarefa}
            data-testid="btn-remover"
          >
            Sim
          </Button>
          <Button variant="light" onClick={handlerFecharModal}>
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

RemoverTarefa.propTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefas: PropTypes.func.isRequired,
};

export default RemoverTarefa;
