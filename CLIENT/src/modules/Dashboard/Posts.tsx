import dashStyles from "@/styles/dashboard.module.css";
import styles from "./post.module.css";
import { MessageSquare, MoreVertical, ThumbsUp } from "lucide-react";
import profilePic from "@/assets/userLogo.jpg";
import dummyPost from "@/assets/post.png";
function Posts() {
    return (
        <div className={`${styles.postContainer} ${dashStyles.centerContainerLayout}`}  >

            <div className={styles.SinglePostContainer} >

                <div className={styles.topBarItems} >
                    <div className={styles.postInfo}>
                        <div>
                            <img src={profilePic} alt="" width={30} style={{
                                borderRadius: "50%", flexShrink: 0, flexGrow: 1,
                                objectFit: "contain"
                            }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", fontSize: "12px", gap: "3px" }} >
                            <span>Hell Boy praised Viplav G</span>
                            <span style={{ fontSize: "10px", opacity: "0.7" }} >29 minutes ago</span>
                        </div>
                    </div>
                    <MoreVertical size={15} color="gray" cursor={"pointer"} />
                </div>

                <div className={styles.userPost} >
                    <div style={{ width: "90%", height: "90%" }} >
                        <img src={dummyPost} alt=""
                            style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                    </div>
                </div>


                <div className={styles.postActions} >
                    <div style={{
                        display: "flex", gap: "20px", padding: "5px", color: "rgb(0, 149, 255)",
                        justifyContent: "center", alignItems: "center"
                    }}>
                        <span style={{
                            display: "flex", gap: "5px", cursor: "pointer",
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <ThumbsUp size={15} color="rgb(0, 149, 255)" />
                            <span >Like</span>
                        </span>

                        <span style={{
                            display: "flex", gap: "5px", cursor: "pointer",
                            justifyContent: "center", alignItems: "center"
                        }}>
                            <MessageSquare size={15} color="rgb(0, 149, 255)" />
                            <span>Comment</span>
                        </span>
                    </div>

                    <span style={{ padding: "5px", opacity: "0.6" }}>0 Comments</span>
                </div>

            </div>

        </div>
    )
}

export default Posts
