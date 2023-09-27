import React from 'react';

export default function Universities() {
    const outerBoxStyle: React.CSSProperties = {
        width: '712px',
        backgroundColor: 'white',
        border: 'none', // Remove the border
        borderColor: 'transparent', // Set border color to transparent
        borderRadius: '70px',
        display: 'flex',
        flexDirection: 'column', // Stack elements vertically
        justifyContent: 'center',
        alignItems: 'left',
        margin: '0 auto',
        marginTop: '100px',
        position: 'relative',
        
      };
      

  const innerBoxStyle: React.CSSProperties = {
    width: '100%',
    height: '10rem',
    background: 'linear-gradient(to bottom right, orange, red, brown)', // Gradient background
    display: 'flex',
    // flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Align text to the left
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for texture
    // marginBottom:'10px',
    
  };

  const imageStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    zIndex: '1',
    transform: 'translateY(-50%)',
    borderRadius: '50%', // Make the border circular
    
  };

  const firstHeadingStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0', // Remove default margin
    textAlign:'left',
  };

  const secondHeadingStyle: React.CSSProperties = {
    fontSize: '18px',
    margin: '0', // Remove default margin
  };

  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Universities</h1>
          
      <div style={outerBoxStyle}>
        <div style={innerBoxStyle}></div>
        <img
          src="universitylogo.jpg"
          alt="Mar Baselios College of Engineering and Technology"
          style={imageStyle}
        />
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            transform: 'translateY(-50px)',
            paddingLeft: '2rem'
        }}>
            <h2 style={firstHeadingStyle}>Mar Baselios College of Engineering</h2>
            <h3 style={secondHeadingStyle}>Nalanchira, Trivandrum</h3>
            <p style={{ marginBottom: '20px' }}>Hi guys,</p>
            <p style={{marginBottom:'30px'}}>Lorem ipsum dolor sit amet. Quo porro magnam et magni autem est minus consequatur est ipsam alias et dolor voluptatem. Non quaerat animi et voluptas error ut similique rerum ut fugit galisum ad accusamus itaque ut blanditiis aliquam. Qui harum asperiores sed vitae molestiae aut magnam corporis et velit velit ex officia ipsam. </p>
            <p style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold', fontSize: '24px', color: 'purple' }}>650K</span> followers{'       '}
            <span style={{ fontWeight: 'bold', fontSize: '24px', color: 'purple',marginLeft:'30px' }}>50</span> rank
            </p>
            <div style={{ display: 'flex' }}>
                <button style={{
                    backgroundColor: '#ab3fff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px', // Adjust padding as needed
                    cursor: 'pointer',
                    width: '150px',
                    marginRight: '10px',
                }}>
                    <i className="fa fa-heart" style={{ marginRight: '8px' }}>Like </i> 
                    Follow
                </button>

                <button style={{
                    backgroundColor: '#ab3fff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px', // Adjust padding as needed
                    cursor: 'pointer',
                    width: '150px',
                }}>
                    ...More
                </button>
                </div>
        </div>
      </div>
    </div>
  );
}
