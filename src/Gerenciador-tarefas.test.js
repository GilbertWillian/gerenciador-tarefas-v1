import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import GerenciadorTarefas from './Gerenciador-tarefas';

it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GerenciadorTarefas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
