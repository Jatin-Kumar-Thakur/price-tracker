'use server'

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl) {
    
    if (productUrl) {
        try {
            const scrapedProduct=await scrapeAmazonProduct(productUrl);
        } catch (error) {
            throw new Error(`failed ${error.message}`);
            // console.log(error.message);
        }
    }
}