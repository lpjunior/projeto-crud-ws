<?php

  require_once('./connection.php');

  function fnCreateViagem($pais, $local, $imagem, $descricao) {
    $link = getConnection();

    $query = "insert into tb_viagens values(null, '{$pais}', '{$local}', '{$imagem}', '{$descricao}')";

    if(!mysqli_query($link, $query)) {
      throw new \Exception("Error ao gravar", 1);
      return false;
    }
    return true;
  }

  function fnListViagens() {
    $link = getConnection();

    $query = "select * from tb_viagens";

    $rs = mysqli_query($link, $query);

    $viagens = array();
    while($row = mysqli_fetch_assoc($rs)) {
      array_push($viagens, $row);
    }
    return $viagens;
  }

  function fnFindViagemById($id){
    $link = getConnection();

    $query = "select * from tb_viagens where id = {$id}";

    $rs = mysqli_query($link, $query);

    return mysqli_fetch_assoc($rs);
  }

  function fnListViagensByPais($pais) {
    $link = getConnection();

    $query = "select * from tb_viagens where nome like '%{$pais}%'";

    $rs = mysqli_query($link, $query);

    $viagens = array();
    while($row = mysqli_fetch_assoc($rs)) {
      array_push($viagens, $row);
    }

    return $viagens;
  }

  function fnDeleteViagem($id){
    $link = getConnection();

    $query = "delete from tb_viagens where id = {$id}";

    mysqli_query($link, $query);

    if(!mysqli_query($link, $query)) {
      throw new \Exception("Error ao excluir", 1);
      return false;
    }
    return true;
  }

  function fnUpdateViagem($id, $pais, $local, $imagem, $descricao) {
    $link = getConnection();

    $query = "update tb_viagens set pais = '{$pais}', local = '{$local}', imagem = '{$imagem}', descricao = '{$descricao}' where id = {$id}";

    mysqli_query($link, $query);

    if(!mysqli_query($link, $query)) {
      throw new \Exception("Error ao atualizar", 1);
      return false;
    }
    return true;
  }
