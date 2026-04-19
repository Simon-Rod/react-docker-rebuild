import React, { useEffect, useState } from 'react';
import './CrewPage.css';

function CrewPage() {
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the crew list from our backend database!
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => {
        setCrew(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch crew:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="crew-page-container">
      <div className="crew-box">
        <h1>Pirate Crew Roster</h1>
        <p>These brave souls have joined the Sea of Thieves.</p>
        
        {loading ? (
          <p>Loading crew list...</p>
        ) : (
          <table className="crew-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Pirate Name</th>
                <th>Email</th>
                <th>Enlisted</th>
              </tr>
            </thead>
            <tbody>
              {crew.map((pirate) => (
                <tr key={pirate.id}>
                  <td>#{pirate.id}</td>
                  <td>{pirate.name}</td>
                  <td>{pirate.email}</td>
                  {/* Format the date nicely */}
                  <td>{new Date(pirate.enlistment_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default CrewPage;