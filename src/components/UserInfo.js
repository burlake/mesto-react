class UserInfo {
    constructor(configInfo) {
        this._userName = document.querySelector(configInfo.userNameSelector);
        this._userJob = document.querySelector(configInfo.userJobSelector);
        this._userAvatar = document.querySelector(configInfo.userAvatarSelector);
    }

    getUserInfo() {
        return {name: this._userName.textContent, about: this._userJob.textContent};
    }

    getUserAvatar() {
        return {avatar: this._link.src};
    }

    
    setUserInfo( { name, about, avatar, _id } ) {
        this._userName.textContent = name;
        this._userJob.textContent = about;
        this._userAvatar.src = avatar;
        //this._userId = _id;
    }

    setUserId(_id) {
        this._id = _id;
    }

    getUserId(){
        return this._id 
    } 
}

export default UserInfo;