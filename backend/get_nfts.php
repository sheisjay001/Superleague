<?php
require_once 'db.php';

try {
    $stmt = $pdo->query("SELECT * FROM nfts ORDER BY created_at DESC");
    $nfts = $stmt->fetchAll();
    echo json_encode($nfts);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
