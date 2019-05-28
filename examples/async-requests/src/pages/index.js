import React, { useEffect, useState } from "react"
import axios from 'axios'

import Layout from "../components/layout"
import SEO from "../components/seo"

const API_URL = 'https://api.coingecko.com/api/v3/coins/list'

const IndexPage = () => {
  const [currencies, setCurrencies] = useState([])
  useEffect(() => {
    axios.get(API_URL)
      .then(res => res.data)
      .then(data => setCurrencies(data))
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to Crypto Central!</h1>
      <em>Looking for more to do? How about dynamically generating pages based on the types of cryptocurrency?</em>
      <p><span role="img" aria-label="See below">👇</span> Coins below.</p>
      {currencies.length > 0 && (
        <ul>
          {currencies.map(currency => (
            <li key={currency.id}>{currency.name} - {currency.symbol}</li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export default IndexPage
