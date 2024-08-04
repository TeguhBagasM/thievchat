const UserAvatar = ({ user, online = null, profile = false }) => {
    let onlineClass =
        online === true ? "online" : online === false ? "offline" : "";

    const sizeClass = profile ? "w-40 h-40" : "w-8 h-8";

    // Function to get initials
    const getInitials = (name) => {
        const nameArray = name.split(" ");
        const initials =
            nameArray.length > 1
                ? `${nameArray[0][0]}${nameArray[1][0]}`
                : `${nameArray[0][0]}`;
        return initials.toUpperCase();
    };

    return (
        <>
            {user.avatar_url && (
                <div className={`chat-image avatar ${onlineClass}`}>
                    <div className={`rounded-full ${sizeClass}`}>
                        <img src={user.avatar_url} alt="Avatar" />
                    </div>
                </div>
            )}

            {!user.avatar_url && (
                <div className={`chat-image avatar placeholder ${onlineClass}`}>
                    <div
                        className={`bg-gray-400 text-gray-800 rounded-full flex items-center justify-center ${sizeClass}`}
                    >
                        <span className="text-md">
                            {getInitials(user.name)}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserAvatar;
