const ProfileItem = ({ item }) => {
  return (
    <div className="profile-item" data-profile={item.name}>
      <div className="profile-item__img"><img src={`/images/${item.url}.png`} /></div>
      <p>{item.name}</p>
    </div>
  )
};

const Profile = ({ list }) => {
  return (
    <div className="profile">
      <h1 className="profile-title">내친소</h1>
      <div className="profile-list">
        {
          list.map((item) => (
            <ProfileItem key={item.name} item={item} />
          ))
        }
      </div>
    </div>
  )
};

export default Profile;
