import styles from "./post.module.css";
import profilePic from "@/assets/userLogo.jpg";

interface CommentBoxProps {
  listAllComments: boolean;
  allComments: any[];
}

function CommentBox({ listAllComments, allComments }: CommentBoxProps) {
  return (
    <>
      {listAllComments && allComments && (
        <div className={styles.listAllComments}>
          {allComments.map((each, index) => (
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
                    {each.username}
                  </span>

                  <span style={{ fontSize: "10px", color: "gray" }}>
                    {each.time}
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
      )}
    </>
  );
}

export default CommentBox;
