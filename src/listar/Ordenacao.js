import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

function Ordenacao(props) {
  const handleAscDesc = () => {
    return props.ordenarAsc || props.ordenarDesc ? "hidden" : "";
  };

  const handleAsc = () => {
    return props.ordenarAsc ? '' : 'hidden';
  }

  const handleDesc =()=>{
    return props.ordenarDesc ? '' : 'hidden';
  }

  return (
    <spam>
      <FontAwesomeIcon
        icon={faSort}
        className={handleAscDesc()}
        data-testid="faSort"
      />

      <FontAwesomeIcon
        icon={faSortUp}
        className={handleAsc()}
        data-testid="faSortUp"
      />

      <FontAwesomeIcon
        icon={faSortDown}
        className={handleDesc()}
        data-testid="faSortDown"
      />
    </spam>
  );
}

Ordenacao.propTypes = {
  ordenarAsc: PropTypes.bool.isRequired,
  ordenarDesc: PropTypes.bool.isRequired,
};

export default Ordenacao;
