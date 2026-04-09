<?php
require_once 'db.php';

try {
    $stmt = $pdo->query("SELECT * FROM team_members ORDER BY display_order ASC");
    $members = $stmt->fetchAll();
    echo json_encode($members);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
