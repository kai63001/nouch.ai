export const Avatar = (metaData: any,local:any) => {
  let avatar = "/avatar/astronaut.png";
  if (metaData && metaData.avatar_url) {
    avatar = metaData.avatar_url;
  }

  if(local){
    return local;
  }

  const user = localStorage.getItem("user");
  if (user) {
    const userData = JSON.parse(user);
    if (userData.picture) {
      avatar = userData.picture;
    }
  }
  return avatar;
};

export const Username = (local: any) => {
  let username = "Anonymous";
  if (local) {
    return local;
  }
  const user = localStorage.getItem("user");
  if (user) {
    const userData = JSON.parse(user);
    if (userData.username) {
      username = userData.username;
    }
  }
  return username;
};
