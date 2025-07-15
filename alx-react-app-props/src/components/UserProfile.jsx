import UserContext from "./UserContext";
import {useContext} from "react";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue', fontWeight: 'bold' }}>{user.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
    </div>
  );
}


  export default UserProfile;