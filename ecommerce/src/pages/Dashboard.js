// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { store } from 'store/store';
// import Home from './Home';

// function Dashboard() {

//   const navigate = useNavigate()
//   const { users } = useSelector(state => state.userData)
//   console.log("users ", users)
//   console.log("store_datas", store.getState())
//   const [loggedIn, setLoggedIn] = useState(false)

//   useEffect(() => {
//     if ( localStorage.getItem("username") && localStorage.getItem('password')) {
//       setLoggedIn(true)
//     } else {
//       navigate("/signin")
//     }
//   }, [])


//   return (
//     <div>
//       <Home user = {users.username} />
//     </div>
//   );


// };
// export default Dashboard;