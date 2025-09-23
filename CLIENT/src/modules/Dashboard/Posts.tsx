import dashStyles from "@/styles/dashboard.module.css";
import styles from "./post.module.css";
import { MessageSquare, MoreVertical, ThumbsUp } from "lucide-react";
import profilePic from "@/assets/userLogo.jpg";
import { useEffect, useState } from "react";
import CommentBox from "./CommentBox";
import { FetchPosts } from "@/services";
import { ApiEndPoints } from "@/API";
import { timeAgo } from "@/utils";

interface CommentType {
  username: string;
  comment: string;
  time: string;
}

function Posts() {
  const [enableCommentBox, setEnableCommentBox] = useState<boolean>(false);
  const [selectedCommentBox, setSelectedCommentBox] = useState<number | null>(
    null
  );

  const [allPosts, setAllPosts] = useState<any[] | null>(null);

  const [allComments, setAllComments] = useState<CommentType[]>([
    { username: "varun joshi", comment: "nice bro", time: "20 sec ago" },
    { username: "Abhishek Sharma", comment: "amazing bro", time: "12 min ago" },
    { username: "Naveen sharma", comment: "op bro", time: "40 sec ago" },
    {
      username: "other user",
      comment: "this is the longest comment to check everything working fine",
      time: "1 min ago",
    },
    {
      username: "other user",
      comment: "this is the longest comment to check everything working fine",
      time: "1 min ago",
    },
    {
      username: "other user",
      comment: "this is the longest comment to check everything working fine",
      time: "1 min ago",
    },
    {
      username: "other user",
      comment:
        "this is the longest comment to check everything working fine sdfdasfdsfdsfdasfsdfdsfdsafdsfdsfsdfdasfds",
      time: "1 min ago",
    },
  ]);

  const [yourComment, setYourComment] = useState<string>("");

  const [listAllComments, setListAllComments] = useState<boolean>(false);

  function AddComment() {
    if (yourComment == "") return;
    setAllComments((prev) => {
      return [
        ...prev,
        { username: "new user", comment: yourComment, time: "5 min ago" },
      ];
    });

    setYourComment("");
  }

  useEffect(() => {
    (async () => {
      console.log("fetch all posts");
      const posts = await FetchPosts();
      setAllPosts(posts);
    })();
  }, []);

  return (
    <>
      {allPosts &&
        allPosts.map((each, index) => (
          <div
            className={`${styles.postContainer} ${dashStyles.centerContainerLayout}`}
          >
            <div className={styles.SinglePostContainer}>
              <div className={styles.topBarItems}>
                <div className={styles.postInfo}>
                  <div>
                    <img
                      src={
                        `${ApiEndPoints.renderProfileApi}/${each.userId._id}` ||
                        profilePic
                      }
                      alt=""
                      width={30}
                      style={{
                        borderRadius: "50%",
                        flexShrink: 0,
                        flexGrow: 1,
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "12px",
                      gap: "3px",
                    }}
                  >
                    <span>{each.caption.toString().substring(0, 60)}...</span>
                    <span style={{ fontSize: "10px", opacity: "0.7" }}>
                      {timeAgo(each.createdAt)}
                    </span>
                  </div>
                </div>
                <MoreVertical size={15} color="gray" cursor={"pointer"} />
              </div>

              <div className={styles.userPost}>
                <div style={{ width: "90%", height: "90%" }}>
                  <img
                    src={`${ApiEndPoints.renderPostApi}/${each._id}`}
                    alt=""
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>

              <div className={styles.postActions}>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "5px",
                    color: "rgb(0, 149, 255)",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "5px",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ThumbsUp size={15} color="rgb(0, 149, 255)" />
                    <span>Like</span>
                  </span>

                  <span
                    onClick={() => {
                      setEnableCommentBox((prev) => {
                        if (selectedCommentBox == index) {
                          return !prev;
                        }
                        return true;
                      });
                      setSelectedCommentBox(index);
                      setListAllComments(false);
                    }}
                    style={{
                      display: "flex",
                      gap: "5px",
                      cursor: "pointer",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MessageSquare size={15} color="rgb(0, 149, 255)" />
                    <span>Comment</span>
                  </span>
                </div>

                <span
                  onClick={() => {
                    setListAllComments((prev) => !prev);
                  }}
                  style={{ padding: "5px", opacity: "0.6", cursor: "pointer" }}
                >
                  {each.comments} Comments
                </span>
              </div>

              {enableCommentBox &&
                selectedCommentBox != null &&
                selectedCommentBox == index && (
                  <div className={styles.CommentBox}>
                    <CommentBox
                      listAllComments={listAllComments}
                      allComments={allComments}
                    />

                    <div className={styles.addComment}>
                      <img
                        src={profilePic}
                        alt=""
                        width={30}
                        style={{
                          borderRadius: "50%",
                          objectFit: "contain",
                          flexShrink: "0",
                        }}
                      />
                      <input
                        onKeyDown={(e) => {
                          if (e.key == "Enter" && yourComment != "") {
                            AddComment();
                          }
                        }}
                        type="text"
                        value={yourComment}
                        onChange={(e) => setYourComment(e.target.value)}
                        placeholder="add a comment..."
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
        ))}
    </>
  );
}

export default Posts;
