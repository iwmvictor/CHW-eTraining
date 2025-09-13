export const ProfileDrawer = () => {
  return (
    <>
      <div className="profile-options">
        <div className="user-profile">
          <div className="img">
            <img loading="lazy" src={assets.userProfile} alt="" />
          </div>
          <div className="info">
            <h3>Full Names</h3>
            <p>email@gmail.com</p>
          </div>
        </div>
        <ul>
          <li>
            <span className="icon"></span>
            <span className="txt"></span>
          </li>
        </ul>
      </div>
    </>
  );
};
