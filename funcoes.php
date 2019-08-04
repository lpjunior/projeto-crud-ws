<?php
  require('./crud.php');

  function setViagem($pais, $local, $imagem, $descricao) {
    if(fnCreateViagem($pais, $local, $imagem, $descricao)) {
      return true;
    }
    return false;
  }

  function updateViagem($id, $pais, $local, $imagem, $descricao) {
    if(fnUpdateViagem($id, $pais, $local, $imagem, $descricao)) {
      return true;
    }
    return false;
  }

  function getViagens() {
    if($viagens = fnListViagens()) {
      return $viagens;
    }
    return array();
  }

  function getViagemById($id) {
    if($viagem = fnFindViagemById($id)) {
      return $viagem;
    }
    return array();
  }

  function getViagensByPais($name) {
    if($viagens = fnListViagensByPais($name)) {
      return $viagens;
    }
    return array();
  }

  function deleteViagem($id) {
    if(fnDeleteViagem($id)) {
      return true;
    }
    return false;
  }
