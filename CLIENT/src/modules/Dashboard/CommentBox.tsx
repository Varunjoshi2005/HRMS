import styles from "./post.module.css";
import profilePic from "@/assets/userLogo.jpg";
import { useGlobalContext } from "@/context/GlobalContext";
import { timeAgo } from "@/utils";
import SmallLoader from "../SmallLoader";

function CommentBox({ allComments, commentsLoading }: any) {
  const { selectedBgColor } = useGlobalContext();

  return (
    <>
      {allComments && allComments.length > 0 ? (
        <div className={styles.listAllComments}>
          {allComments.map((each: any, index: number) => (
            <div className={styles.eachComment}>
              <img
                src={profilePic}
                alt=""
                width={30}
                style={{ borderRadius: "50%", objectFit: "contain" }}
              />
              <div className={styles.commentDetails}>
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "bolder",
                      minWidth: "100px",
                    }}
                  >
                    {each.user.name}
                  </span>

                  <span style={{ fontSize: "10px", color: "gray" }}>
                    {timeAgo(each.createdAt)}
                  </span>
                </span>

                <span
                  style={{
                    fontSize: "12px",
                    color: "rgb(0, 149, 255)",
                  }}
                >
                  {each.comment}
                </span>
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "12px", cursor: "pointer", color: "gray" }}
            >
              View more comments
            </span>
          </div>
        </div>
      ) : (
        <span
          style={{ fontSize: "13px", padding: "5px", color: selectedBgColor }}
        >
          {commentsLoading ? (
            <SmallLoader />
          ) : (
            <span>Be the first person to comment</span>
          )}
        </span>
      )}
    </>
  );
}

export default CommentBox;
