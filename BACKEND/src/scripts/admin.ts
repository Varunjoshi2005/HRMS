import path from "path";

const selectedImage = "admin1.jpg";
const url = path.join(__dirname, `assets/${selectedImage}`);



const userdata = {
    username: "naveen sharma",
    email: "naveenadmin12@yopmail.com",
    password: "12",
    role: "ADMIN",
    imagePath: url,
    contentType: "image/jpg",
};


export { userdata }