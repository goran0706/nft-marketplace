import NFTMarketplaceABI from "../abis/NFTMarketplace.json";

export const marketplaceABI = NFTMarketplaceABI;
export const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;
export const pinataDomain = process.env.NEXT_PUBLIC_PINATA_DOMAIN;
export const pinataApiUrl = process.env.NEXT_PUBLIC_PINATA_API_URL;
export const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
export const pinataApiSecret = process.env.NEXT_PUBLIC_PINATA_API_SECRET;
export const pinataJwt = process.env.NEXT_PUBLIC_PINATA_JWT;
