function timeAgo(timestamp) {
    const now = Number(new Date());
    const past = Number(new Date(timestamp));
    const diff = (now - past) / 1000;

    if (diff < 60) {
        return `${Math.floor(diff)} seconds ago`;
    } else if (diff < 3600) {
        return `${Math.floor(diff / 60)} minutes ago`;
    } else if (diff < 86400) {
        return `${Math.floor(diff / 3600)} hours ago`;
    } else if (diff < 2592000) {
        return `${Math.floor(diff / 86400)} days ago`;
    } else if (diff < 31536000) {
        return `${Math.floor(diff / 2592000)} months ago`;
    } else {
        return `${Math.floor(diff / 31536000)} years ago`;
    }
}


const string = "varun";

console.log(string.toString().charAt(0));



console.log(timeAgo("2025-09-23T08:27:34.677Z"));