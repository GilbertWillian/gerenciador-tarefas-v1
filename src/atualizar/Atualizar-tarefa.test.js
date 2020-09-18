import React from "react";
import ReactDOM from "react-dom";
import AtualizarTarefa from "./Atualizar-tarefa";
import Tarefa from "../models/tarefa.model";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Teste do componente de atualizaçãoi de tarefas", () => {
  const tarefaId = 1;
  const tarefa = new Tarefa(tarefaId, "Nova Tarefa", false);

  beforeEach(() => {
    localStorage["tarefas"] = JSON.stringify([tarefa]);
  });

  it("deve renderizar o componete sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AtualizarTarefa id={tarefaId} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("deve exibir a modal de sucesso ao atualizar uma tarefa", () => {
    const { getByTestId } = render(<AtualizarTarefa id={tarefaId} />);
    fireEvent.click(getByTestId("btn-atualizar"));
    expect(getByTestId("modal")).toHaveTextContent("Sucesso");
  });

  it("deve atualizar uma tarefa", () => {
    const nomeTarefaAtualizada = "Tarefa atualizada";
    const { getByTestId } = render(<AtualizarTarefa id={tarefaId} />);
    fireEvent.change(getByTestId("txt-tarefa"), {
      target: { value: nomeTarefaAtualizada },
    });
    fireEvent.click(getByTestId("btn-atualizar"));
    const tarefasDB = JSON.parse(localStorage["tarefas"]);
    expect(tarefasDB[0].nome).toBe(nomeTarefaAtualizada);
  });
});
