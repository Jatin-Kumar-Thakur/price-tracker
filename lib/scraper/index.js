import axios from "axios";
import * as cheerio from 'cheerio';

export async function scrapeAmazonProduct(url) {
    if (url) {

        // curl--proxy brd.superproxy.io: 22225 --proxy - user brd - customer - hl_daabd0c3 - zone - unblocker: 8xd9h8ee6ebj - k https://lumtest.com/myip.json
        //Bright data congi
        const username = string(process.env.BRIGHT_DATA_USERNAME);
        const password = string(process.env.BRIGHT_DATA_PASSWORD);
        const port = 22225
        const session_id=(1000000*Math.random()) | 0;

        const option={
            auth:{
                username:`${username}-session-${session_id}`,
                password,
            },
            host:'brd.superproxy.io:22225',
            port,
            rejectUnauthorized:false,
        }

        try {
            //Amazon scrapping
            const response=await axios.get(url,option);
            console.log(response.data)
        } catch (error) {
            throw new Error(`Failed to scrape : ${error.message}`)
        }
    }
}