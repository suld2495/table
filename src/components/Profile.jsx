const ProfileItem = ({ item }) => {
  return (
    <>
      <img src={item.url} />
      <p>{item.name}</p>
    </>
  )
};

const Profile = (list) => {
  return (
    <>
      <h1>내친소</h1>
      {
        list.map((item) => (
          <ProfileItem key={item.name} item={item} />
        ))
      }
    </>
  )
};

export default Profile;
