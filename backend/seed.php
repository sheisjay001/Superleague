<?php
require_once 'db.php';

try {
    // Clear existing data
    $pdo->exec("SET FOREIGN_KEY_CHECKS = 0");
    $pdo->exec("TRUNCATE TABLE nfts");
    $pdo->exec("TRUNCATE TABLE team_members");
    $pdo->exec("TRUNCATE TABLE stats");
    $pdo->exec("SET FOREIGN_KEY_CHECKS = 1");

    // Seed NFTs - matching the hardcoded data in desktop2.tsx
    $nfts = [
        ['Swagoon #1761', '/image-8@2x.png', "url('/Frame-1@3x.png')", 30.24, 100],
        ['Swagoon #1762', '/image-9@2x.png', "url('/Frame-2@3x.png')", 25.50, 85],
        ['Swagoon #1763', '/image-82@2x.png', "url('/Frame-3@3x.png')", 42.00, 150],
        ['Swagoon #1764', '/image-82@2x.png', "url('/Frame-4@3x.png')", 38.75, 120],
        ['Swagoon #1765', '/image-84@2x.png', "url('/Frame-5@3x.png')", 55.20, 200],
        ['Swagoon #1766', '/image-85@2x.png', "url('/Frame-6@3x.png')", 28.90, 95],
    ];

    $stmt = $pdo->prepare("INSERT INTO nfts (name, image, frame_background, price_sol, likes) VALUES (?, ?, ?, ?, ?)");
    foreach ($nfts as $nft) {
        $stmt->execute($nft);
    }

    // Seed Team Members - matching the data in desktop1.tsx (4 members)
    $members = [
        ['Alexander Yuu', 'CEO & Founder', '/image-10@2x.png', 'https://x.com/alexanderyuu', 'https://discord.gg/alex', 'https://instagram.com/alexanderyuu', 1],
        ['Muyiwa Dagrin', 'CTO', '/image-11@2x.png', 'https://x.com/muyiwadagrin', 'https://discord.gg/muyiwa', 'https://instagram.com/muyiwadagrin', 2],
        ['Victory Kim', 'Head of Art', '/image-12@2x.png', 'https://x.com/victorykim', 'https://discord.gg/victory', 'https://instagram.com/victorykim', 3],
        ['Bilikisu wonder', 'Chief Marketing Officer', '/image-13@2x.png', 'https://x.com/bilikisu', 'https://discord.gg/bilikisu', 'https://instagram.com/bilikisu', 4],
    ];

    $stmt = $pdo->prepare("INSERT INTO team_members (name, role, image, social_x, social_discord, social_instagram, display_order) VALUES (?, ?, ?, ?, ?, ?, ?)");
    foreach ($members as $member) {
        $stmt->execute($member);
    }

    // Seed Stats - matching the data in layout.tsx (24k+, 18k+, 10k+)
    $stmt = $pdo->prepare("INSERT INTO stats (collections_count, auctions_count, artists_count) VALUES (?, ?, ?)");
    $stmt->execute([24000, 18000, 10000]);

    echo "Database seeded successfully!";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
