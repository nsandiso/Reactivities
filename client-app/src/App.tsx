import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';



function App() {
  const [activities,setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/activities')
  .then(Response=>{
    setActivities(Response.data);
  })

}, [])
  
  return (
    <div>
      <Header as='h2' icon='users' content= 'activities'/>
        <List>
        {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
       ))}
        </List>
    </div>
  );
} 

export default App;
