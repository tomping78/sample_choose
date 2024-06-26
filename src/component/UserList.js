// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function UserList() {
//   const [users, setUsers] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchUsers = async () => {
//     try {
//       setError(null);
//       setUsers(null);
//       setLoading(true);
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       setUsers(response.data);
//     } catch (e) {
//       setError(e);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   if (loading) return <div>로딩중..</div>;
//   if (error) return <div>에러가 발생했습니다</div>;
//   if (!users) return null;
//   return (
//     <>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.username} ({user.name})
//           </li>
//         ))}
//       </ul>
//       <button onClick={fetchUsers}>새로고침</button>
//     </>
//   );
// }

// export default UserList;

import React from "react";

function User({ user }) {
  return (
    <>
      <div>
        {user.username} ({user.email})
      </div>
    </>
  );
}

function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default UserList;
