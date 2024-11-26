export default function Rectangle({ solveBrawldle, output, loading }) {
    return (
      <div style={styles.rectangle}>
        <h1 style={styles.title}>
          <img src="/icon.png" alt="Brawldle Icon" style={styles.icon} /> {/* Custom image as icon */}
          Brawldle Solver
        </h1>
        {!output && (
          <button
            onClick={solveBrawldle}
            style={styles.button}
            disabled={loading} // Disable button during loading
          >
            {loading ? (
              <div className="spinner"></div> // Show spinner if loading
            ) : (
              'Solve Today\'s Brawldle'
            )}
          </button>
        )}
        {output && (
        <div style={styles.outputContainer}>
          <p style={styles.answerText}>Today's Answer:</p>
          <div style={styles.output}>{output}</div>
        </div>
      )}
      </div>
    );
  }
  
  const styles = {
    rectangle: {
      width: '400px',
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // Shadow for the transparent rectangle
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(10px)', // Optional: adds a blur effect behind the rectangle
      border: '1px solid rgba(255, 255, 255, 0.5)', // Light border to make the rectangle stand out
    },
    title: {
      fontSize: '30px',
      color: '#fff', // White text on transparent background
      paddingBottom:'10px',
      marginTop: 0, /* Remove or reduce top margin */
      marginBottom: '20px',
    },
    icon: {
        marginRight: '20px', // Space between the image and text
        width: '30px', // Adjust the width of the image
        height: '40px', // Adjust the height of the image
      },
    button: {
      padding: '16px',
      fontSize: '16px',
      fontWeight:'bold',
      background: 'linear-gradient(to bottom right, #1abc9c, #16a085)', // Bright, contrasting gradient
      color: 'black', // White text for contrast
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s', // Added smooth transition
      position: 'relative', // For positioning the spinner
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    buttonHover: {
      background: 'linear-gradient(to bottom right, #16a085, #1abc9c)', // Slightly reversed gradient on hover
      transform: 'scale(1.05)', // Optional: Slightly increase the size of the button when hovered
    },
    outputContainer: {
        //marginTop: '20px',
        width: '100%',
      },
      answerText: {
        fontSize: '18px',
        color: '#fff', // White color for contrast
        marginBottom: '10px', // Space between the label and the output
      },
      output: {
        padding: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fff', // White text for better contrast
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
        wordWrap: 'break-word',
      },
  };
  