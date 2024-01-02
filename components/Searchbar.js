'use client'
import { scrapeAndStoreProduct } from '@/lib/actions'
import { useState } from 'react'
import '@/style/searchbar.css'


const Searchbar = () => {

  const [searchText, setSearchText] = useState('');

  const isValidAmazonProductURL = (url) => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;

      if (
        hostname.includes('amazon.com') ||
        hostname.includes('amazon.') ||
        hostname.endsWith('amazon')
      ) {
        // return true;
        console.log("OK")
      }
    } catch (error) {
      // return false;
      console.log("NOT OK")
    }

    // return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true);
      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder='Enter Product Link'
        className='search' />
      <button type='submit' className='search-btn'>Search</button>
    </form>
  )
}

export default Searchbar
