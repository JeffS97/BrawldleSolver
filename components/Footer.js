const Footer = () => {
    return (
      <div style={styles.footer}>
        <div style={styles.footerText}>Made By <a href="https://github.com/JeffS97" target="blank" className="underline"> Jeffvinder Singh</a></div>
        <p style={styles.footerText}>© 2024 Brawldle Solver. All Rights Reserved.</p>
      </div>
    );
  };
  
  const styles = {
    footer: {
      backgroundColor: '#34495e', // Dark background for footer
      color: '#fff',
      textAlign: 'center',
      padding: '10px 0',
      position: 'relative',
      width: '100%',
    },
    footerText: {
      margin: 0,
      fontSize: '14px',
    },
  };
  
  export default Footer;