import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import GerenciadorTarefas from './Gerenciador-tarefas';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GerenciadorTarefas />);
  ReactDOM.unmountComponentAtNode(div);
});
