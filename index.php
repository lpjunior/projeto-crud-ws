<?php
  require('./funcoes.php');
  require('./upload.php');

  if($_SERVER['REQUEST_METHOD'] === 'POST') {
    #uploadImg($_FILES['upload']);
    $viagem = json_decode(file_get_contents('php://input'), true);
    if(setViagem($viagem['pais'], $viagem['local'], $viagem['imagem'], $viagem['descricao'])) {
      echo '{"status":200}';
    } else {
      echo '{"status":500}';
    }

  } else if($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id'])) {
      echo json_encode(getViagemById($_GET['id']));
    } else {
      echo json_encode(getViagens());
    }

  } else if($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $viagem = json_decode(file_get_contents('php://input'), true);
    if(updateViagem($viagem['id'], $viagem['pais'], $viagem['local'], $viagem['imagem'], $viagem['descricao'])) {
      echo '{"status":200}';
    } else {
      echo '{"status":500}';
    }
  } else if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = json_decode(file_get_contents('php://input'), true);
    if(deleteViagem($id['id'])) {
      echo '{"status":200}';
    } else {
      echo '{"status":500}';
    }
  }
