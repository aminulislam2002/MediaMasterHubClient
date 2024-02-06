const Profile = () => {
  const isAdmin = false;
  const isUser = true;
  return (
    <div>
      {isAdmin && (
        <>
          <h1>Is Admin Profile</h1>
        </>
      )}

      {isUser && (
        <>
          <h1>Is User profile</h1>
        </>
      )}
    </div>
  );
};

export default Profile;
