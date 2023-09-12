import React, { useState, useEffect } from 'react'
import './Friends.css'
import Friend from './friend';
export default function friends() {


    const [friends, setFriends] = useState([]);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then (data => setFriends(data))
  }, [])

     

  return (
    <div className= 'box'> 
        <h3>Friends: {friends.length}</h3> 
        {
            friends.map(friend => <Friend friend={friend}></Friend>)
        }
        </div>
  )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. USE fetch to load data
 * 4. set losded data to state
 */