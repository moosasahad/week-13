// import { click } from '@testing-library/user-event/dist/click'
// import React, { useEffect, useState } from 'react'

// function Page() {
//     const [state,setState] = useState([1,2,3,4,5,6,7,8])
//     const [page,setPAge] = useState(1)
//     let data = [1,2,3,4,5]

//     console.log(data)
//     const click =(id)=>{
//         console.log("pagenumber",id);
//         setPAge(id)

//         let page = data.slice(1,10)
//     }
//   return (
    //     <div>
    //     {page.map((value)=>(
        //         <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
        //         <div style={{width:'300px',backgroundColor:"blue"}}>
        //           <div style={{width:"100%",height:"200px",backgroundColor:"lightgreen"}}>
//               <img src="" alt="product image" />
//           </div>
//           <div>
//               <p>{value}</p>
//               <h3>name</h3>
//               <h2>$ 199</h2>
//               <p>Rating:9</p>
  
//           </div>
//         </div>
//         <div>
//       </div>
//       </div>
//     ))}
//     <div>
//         {state.map((value)=>(
    //             <button onClick={()=>click(value)}>{value}</button>
    //         ))}
    
    //         </div>
    //     </div>
    //   )
// }

// export default Page


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Page = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(3); // Number of users per page

//   // Fetch data from API on component mount
//   useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
    //         setUsers(response.data);
//       })
//       .catch(error => {
//         setError(error);
//       });
//   }, []);

//   // Handle error state
//   if (error) return <div>Error: {error.message}</div>;

//   // Pagination logic
//   const indexOfLastUser = currentPage * itemsPerPage;
//   const indexOfFirstUser = indexOfLastUser - itemsPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(users.length / itemsPerPage);


//   return (
    //     <div>
    //       <h1>User List</h1>
    //       <ol type='number'>
//         {currentUsers.map(user => (
//           <li key={user.id}>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//           </li>
//         ))}
//       </ol>

//       {/* Pagination buttons */}
//       <div>
//         <button 
//           onClick={() => setCurrentPage(currentPage - 1)} 
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>

//       {currentPage}

//         <button 
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages} 

//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page;


import React, { useState } from "react";

const Page = () => {
  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6","Item 7","Item 8","Item 9","Item 10"];
  const [page, setPage] = useState(0);
  const itemsPerPage = 9; 
  const paginatedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  
  return (
      <div style={{ textAlign: "center" }}>
      <h3>Simple Pagination</h3>
      {paginatedData.map((item, index) => (
        
        <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
                 <div style={{width:'300px',backgroundColor:"blue"}}>
                 <p key={index}>{item}</p>
                   <div style={{width:"100%",height:"200px",backgroundColor:"lightgreen"}}>
               <img src="" alt="product image" />
           </div>
           <div>
               <p>value</p>
               <h3>name</h3>
               <h2>{item}</h2>
               <p>Rating:9</p>
  
           </div>
         </div>
         <div>
       </div>
       </div>
      ))}
      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button
          disabled={(page + 1) * itemsPerPage >= data.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
