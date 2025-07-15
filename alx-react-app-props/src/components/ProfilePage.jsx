import {UserInfo} from './UserInfo';



function ProfilePage({ userData }) {
    return (
      <div>
        <UserInfo userData={userData} />
      </div>
    );
  }
  
  export default ProfilePage;