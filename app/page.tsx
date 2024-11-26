"use client"

import { useState } from 'react';
import Rectangle from '../components/Rectangle';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer'

export default function Home() {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading

  async function getBrawldleAnswer() {
    // Get legend data
    const response = await fetch("https://cms.brawlhalla.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query {
            legends(first: 500, where: {orderby: {field: DATE, order: ASC}}) {
                nodes {
                    title
                }
            }
        }`
      })
    });
    
    const data = await response.json();
    const legends = data.data.legends.nodes;

    // Get today's date string in format MMDDYYYY
    const date = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "numeric"
    }).format(new Date()).split("/").join("");

    // Calculate hash
    let hash = 0;
    for (let i = 0; i < date.length; i++) {
      hash = (hash * 31 + date.charCodeAt(i)) % (2 ** 32);
    }

    // Get legend index
    hash = (hash * 8121 + 28411) % 134456;
    const index = Math.floor(hash / 134455 * legends.length);

    return legends[index].title;
  }

  // Pre-made function to solve the Brawldle (you can replace this with your own logic)
  const solveBrawldle = async () => {
    setLoading(true); 
    // Placeholder: Call your existing function here
    const solution = await getBrawldleAnswer();
    setOutput(solution);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Rectangle solveBrawldle={solveBrawldle} output={output} loading={loading} />
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}
