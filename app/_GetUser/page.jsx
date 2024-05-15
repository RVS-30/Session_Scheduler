import React, { useState, useEffect } from 'react';

export default function getUser() {
  const [user, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/users/login');
        
        if (response.ok) {
          const data = await response.json();
          setUserData(data.user);
        } else {
          console.error('Failed to fetch user data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  // Return user data
  return user;
}
