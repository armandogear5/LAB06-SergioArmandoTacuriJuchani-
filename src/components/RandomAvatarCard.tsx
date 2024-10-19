import React, { useEffect, useState } from 'react';

const RandomAvatarCard: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const styles = ['avataaars', 'bottts', 'initials', 'gridy'];

  useEffect(() => {
    const randomSeed = Math.random().toString(36).substring(2, 15);
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    const avatarApiUrl = `https://api.dicebear.com/9.x/${randomStyle}/svg?seed=${randomSeed}`;

    fetch(avatarApiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching avatar');
        }
        return response.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setAvatarUrl(url);
      })
      .catch(error => {
        console.error('Error fetching avatar:', error);
      });
  }, []);

  return (
    <div style={{ 
      width: '350px', 
      height: '400px', 
      border: '1px solid black', 
      borderRadius: '5px', 
      padding: '10px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between' 
    }}>
        <h1 style={{ 
        color: '#333',
        fontSize: '30px',
        margin: '10px 0' 
      }}>Ramdon Image</h1>
      {avatarUrl && (
        <img src={avatarUrl} alt="Random Avatar" style={{ 
          width: '50%', 
          height: 'auto',
          borderRadius: '5px',
          marginBottom: '10px' 
        }} />
      )}
      <hr style={{ width: '100%' }} />
      <h2 style={{ 
        color: '#333',
        fontSize: '20px',
        margin: '10px 0' 
      }}>Descripción</h2>
      <p style={{ 
        color: '#333',
        fontSize: '16px',
        textAlign: 'center' 
      }}>Avatar Ramdon siuuuuu</p>
    </div>
  );
};

export default RandomAvatarCard;
