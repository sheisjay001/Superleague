<?php
require_once 'db.php';

try {
    $stmt = $pdo->query("SELECT * FROM stats LIMIT 1");
    $stats = $stmt->fetch();
    echo json_encode($stats);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
