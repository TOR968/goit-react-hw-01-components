// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import paintings from './paintings.json';
import UserProfile from './components/UserList'
import user from './components/social-profile/user.json'

export default function App() {
  return (
    <div>
       {<UserProfile {...user}/>}
    </div>
  );
}