<?php
$id = $_POST["id"];

$host = "localhost";
$username = "root";
$password = "";
$database = "db_conce";

// Cria uma conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verifica se ocorreu algum erro na conexão
if ($conn->connect_error) {
    die("Erro ao conectar ao banco de dados: " . $conn->connect_error);
}

$sql = "UPDATE alocacao SET quantidade = quantidade - 1 WHERE id = " . $id;
$conn->query($sql);

echo '<script>alert("Venda Feita com Sucesso");
window.location.href = "../index.html";</script>';

?>