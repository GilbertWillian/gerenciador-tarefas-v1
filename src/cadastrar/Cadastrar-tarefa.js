import React, { useState } from "react";
import { Button, Form, Jumbotron, Modal } from "react-bootstrap";
import { navigate, A } from "hookrouter";

function CadastrarTarefa() {
  return (
    <div>
      <h3>Cadastrar Tarefas</h3>
      <Jumbotron>
        <Form>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>

            <Form.Control
              type="text"
              placeholder="Digite a Tarefa"
              minLength="5"
              maxLength="100"
              required
            />

            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="text-center">
            <Button variant="success" type="submit">
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">Voltar</A>
          </Form.Group>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default CadastrarTarefa;
