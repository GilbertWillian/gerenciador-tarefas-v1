import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './Atualizar-tarefa';

describe('Teste do componente de atualizaçãoi de tarefas', () => {

  it('deve renderizar o componete sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefa id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})