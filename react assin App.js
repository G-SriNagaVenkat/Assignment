import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = { name: "Sri Naga venkat G", email: "gsnvenkat@gmail.conm" };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6 p-6">
      
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold">Using Prop Drilling</h2>
        <User1 user={user} />
      </div>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold">Using React Context</h2>
        <UserContext.Provider value={user}>
          <User1Context />
        </UserContext.Provider>
      </div>
    </div>
  );
}

function User1({ user }) {
  return <User2 user={user} />;
}

function User2({ user }) {
  return <User3 user={user} />;
}

function User3({ user }) {
  return <Profile user={user} />;
}

function Profile({ user }) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-700">{user.email}</p>
    </div>
  );
}

function User1Context() {
  return <User2Context />;
}

function User2Context() {
  return <User3Context />;
}

function User3Context() {
  return <ProfileContext />;
}

function ProfileContext() {
  const user = useContext(UserContext);
  return (
    <div className="p-4 bg-green-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-700">{user.email}</p>
    </div>
  );
}

export default App;
