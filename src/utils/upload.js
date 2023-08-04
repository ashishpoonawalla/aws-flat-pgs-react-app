import axios from "axios"


const upload = async (file) => {
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "flate-mate-pgs");
    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: data,
            }
        )
        const res = await response.json();
        const { url } = res.public_id;
        return url;
    } catch (error) {
        console.log(error)
    }
}

export default upload