import { useNavigate } from 'react-router-dom';


export default function MemoryWall() {
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/page3");
  };
  const photos = [
    {
      src: "/Pic1.png",
     
    },
    {
      src: "/Pic2.png",
      
    },
    {
      src: "/Pic3.png",
      
    },
    {
      src: "/Pic4.png",
  
    },
    {
      src: "/Pic5.png",
     
    },
    {
      src: "/Pic6.png",
      
    }
  ];

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'row',
      
      minHeight: '100vh',
      fontFamily: `'Dancing Script', cursive`
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '20vh',
      padding: '60px',
      flex: 1,
      justifyItems: 'center'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '14px',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      width: '230px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      border: '1px solid #eee'
    },
    image: {
      width: '100%',
      borderRadius: '10px'
    },
    caption: {
      marginTop: '10px',
      fontSize: '1rem',
      color: '#444'
    },
    message: {
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      color: '#fff',
      fontSize: '28px',
      fontWeight: 'bold',
      padding: '30px 20px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      fontFamily: `'Dancing Script', cursive`,
      textShadow: '2px 2px 8px rgba(0,0,0,0.4)'
    },
    emoji: {
      fontSize: '40px',
      marginTop: '20px',
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      textAlign: 'center'
    },
   
  };
  

  return (
    <>
      
      <div style={styles.page}>
        <div style={styles.container}>
          {photos.map((photo, index) => (
            <div key={index} style={styles.card}>
              <img src={photo.src} alt="memory" style={styles.image} />
              <p style={styles.caption}>{photo.caption}</p>
            </div>
          ))}
        </div>
        <div>
          <div style={{isplay: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
  fontSize: '9vh',
  fontFamily: `'Dancing Script', cursive`,
  color: '#fff',
  textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
  gap: '90px'}}>
            My <br/>
            Beautifulll<br/> 
            Human <br/>
            Being 💫<br/>
          </div>
          <div style={{ fontSize: '3vh' }}>🌸✨💛🌈🥹</div>

          <button 
            
            onClick={goToNextPage}
        style={{
          position: "absolute",
          bottom: "30px",
          fontSize: "2rem",
          cursor: "pointer",
          animation: "bounce 1.5s infinite",
        }}
            
          >
             ➡️
          </button>
        </div>
      </div>
    </>
  );
}
