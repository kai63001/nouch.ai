const Avatar = (metaData:any) => {
    let avatar = '/avatar/astronaut.png'
    if (metaData && metaData.avatar_url) {
        avatar = metaData.avatar_url
    }

    const user = localStorage.getItem('user')
    if (user) {
        const userData = JSON.parse(user)
        if (userData.picture) {
            avatar = userData.picture
        }
    }
    return avatar
}

export default Avatar