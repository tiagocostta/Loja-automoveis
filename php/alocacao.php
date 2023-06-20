<?php
// Configuração do banco de dados
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

// Consulta SQL para obter os dados do banco de dados
$sql = "SELECT * FROM alocacao";
$result = $conn->query($sql);

// Verifica se a consulta retornou resultados
if ($result->num_rows > 0) {
    // Array para armazenar os resultados da consulta
    $data = array();

    // Itera sobre os resultados e adiciona-os ao array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Codifica os dados como JSON e envia para JavaScript
    echo json_encode($data);
} else {
    echo "Nenhum resultado encontrado.";
}

// Fecha a conexão com o banco de dados
$conn->close();
?>