<?php

require_once "koneksi.php";

$data = stripslashes(file_get_contents("php://input"));
$idpelanggan = json_decode($data, true);

$idpelanggan = $idpelanggan['idpelanggan'];



if (!empty($idpelanggan)) {



    $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = $idpelanggan";

    if ($result = mysqli_query($con, $sql)) {
        echo "data sudah dihapus";
    } else {
        echo "data gagal dihapus !";
    }
} else {
    echo "Data belum dipilih";
}
