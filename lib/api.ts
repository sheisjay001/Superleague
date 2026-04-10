const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/backend";

export interface NFT {
  id: number;
  name: string;
  image: string;
  frame_background: string;
  price_sol: number;
  likes: number;
  created_at: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social_x: string;
  social_discord: string;
  social_instagram: string;
  display_order: number;
}

export interface Stats {
  id: number;
  collections_count: number;
  auctions_count: number;
  artists_count: number;
  updated_at: string;
}

export async function fetchNFTs(): Promise<NFT[]> {
  const response = await fetch(`${API_BASE_URL}/get_nfts.php`);
  if (!response.ok) {
    throw new Error("Failed to fetch NFTs");
  }
  return response.json();
}

export async function fetchStats(): Promise<Stats> {
  const response = await fetch(`${API_BASE_URL}/get_stats.php`);
  if (!response.ok) {
    throw new Error("Failed to fetch stats");
  }
  return response.json();
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const response = await fetch(`${API_BASE_URL}/get_team_members.php`);
  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }
  return response.json();
}
