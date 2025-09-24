import dashStyles from "@/styles/dashboard.module.css";
import styles from "./post.module.css";
import { MessageSquare, MoreVertical, ThumbsUp } from "lucide-react";
import profilePic from "@/assets/userLogo.jpg";
import { useEffect, useState } from "react";
import CommentBox from "./CommentBox";
import {
  FetchPosts,
  handleAddNewComment,
  handleFetchCommments,
} from "@/services";
import { ApiEndPoints } from "@/API";
import { timeAgo } from "@/utils";

import like from "../../assets/images/like.png";
import heart from "../../assets/images/heart.png";
import laugh from "../../assets/images/laughing.png";
import clap from "../../assets/images/clapping.png";
import idea from "../../assets/images/idea.png";
import cloud from "../../assets/images/cloud.png";
import { useUserContext } from "@/context/UserContext";
import SmallLoader from "../SmallLoader";

const likeOptions = [
  { name: "Like", icon: like },
  { name: "Love", icon: heart },
  { name: "Haha", icon: laugh },
  { name: "Clapping", icon: clap },
  { name: "Insightful", icon: idea },
  { name: "Curious", icon: cloud },
];

function Posts() {
  const [enableCommentBox, setEnableCommentBox] = useState<boolean>(false);
  const [selectedCommentBox, setSelectedCommentBox] = useState<number | null>(
    null
  );

  const [allPosts, setAllPosts] = useState<any[] | null>(null);
  const [viewItem, setViewItem] = useState<number>(-1);
  const [viewLikeOption, setViewLikeOption] = useState<boolean>(false);
  const [likeBarOption, setLikeBarOption] = useState<number | null>(null);

  const { user } = useUserContext();

  const [yourComment, setYourComment] = useState<string>("");

  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [currentPostCommentViewIndex, setCurrentPostViewIndex] = useState<
    number | null
  >(null);
  const [postLoading, setPostLoading] = useState<boolean>(false);

  const [toogleCommentBox, setToogleCommentBox] = useState<boolean>(false);
  const [commentsLoading, setCommentsLoading] = useState<boolean>(false);

  const [allComments, setAllComments] = useState<any[] | null>(null);

  useEffect(() => {
    (async () => {
      if (!user.token || !currentPostId) return;
      setCommentsLoading(true);
      const data = await handleFetchCommments(user.token, currentPostId);
      setCommentsLoading(false);
      console.log(data);
      if (!data.success) {
        setAllComments(data.comments);
      }
      setAllComments(data.comments);

    })();
  }, [currentPostId]);

  async function AddComment(postId: string) {
    if (yourComment.length == 0 || !user.token) {
      return;
    }
    let currentComment = yourComment;
    const commentData = {
      token: user.token,
      comment: currentComment,
      userId: user.id,
      postId: postId,
    };

    setAllComments((prev: any) => {
      if (prev == null) {
        return [
          {
            id: user.id,
            name: user.name,
            comment: yourComment,
            createdAt: Date.now() - 2000,
          },
        ];
      }
      return [
        ...prev,
        {
          user: { id: user.id, name: user.name },
          comment: yourComment,
          createdAt: Date.now() - 2000,
        },
      ];
    });

    setYourComment("");
    await handleAddNewComment(commentData);
  }

  function CommentBoxToogle(currentPostIndex: number, postId: string) {
    if (currentPostCommentViewIndex == null) {
      setCurrentPostViewIndex(currentPostIndex);
      setToogleCommentBox(true);
      setCurrentPostId(postId);
      return;
    }

    if (currentPostIndex != currentPostCommentViewIndex) {
      setAllComments([]);
    }
    if (currentPostIndex == currentPostCommentViewIndex) {
      setToogleCommentBox((prev) => !prev);
    }

    setCurrentPostViewIndex(currentPostIndex);
    setCurrentPostId(postId);
  }

  useEffect(() => {
    (async () => {
      setPostLoading(true);

      const posts = await FetchPosts(user.token);

      const postsWithLikeStatus = posts.map((post: any) => ({
        ...post,
        likeStatus: ""
      }));

      setPostLoading(false);
      console.log("fetched posts with like status", postsWithLikeStatus);
      setAllPosts(postsWithLikeStatus);
    })();
  }, [user]);



  function updatedLikeStatus(postId: string, statusName: string) {
    setAllPosts((prev: any) =>
      prev.map((post: any) =>
        post.id === postId ? { ...post, likeStatus: statusName } : post
      )
    );
  }



  if (postLoading) {
    return (
      <div style={{ width: "600px", display: "flex", justifyContent: "center" }}>
        <SmallLoader />
      </div>
    )
  }

  return (
    <>
      {allPosts && allPosts.length > 0 ? (
        allPosts.map((eachPost, postIndex) => (
          <div
            className={`${styles.postContainer} ${dashStyles.centerContainerLayout}`}
          >
            <div className={styles.SinglePostContainer}>
              <div className={styles.topBarItems}>
                <div className={styles.postInfo}>
                  <div>
                    <img
                      src={
                        `${ApiEndPoints.renderProfileApi}/${eachPost.userId}` ||
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
                    <span>
                      {eachPost.caption.toString().substring(0, 60)}...
                    </span>
                    <span style={{ fontSize: "10px", opacity: "0.7" }}>
                      {timeAgo(eachPost.createdAt)}
                    </span>
                  </div>
                </div>
                <MoreVertical size={15} color="gray" cursor={"pointer"} />
              </div>

              <div className={styles.userPost}>
                <div style={{ width: "90%", height: "90%" }}>
                  <img
                    src={`${ApiEndPoints.renderPostApi}/${eachPost.id}`}
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
                  <div
                    onMouseEnter={() => {
                      setViewLikeOption(true);
                      setLikeBarOption(postIndex);
                    }}
                    onMouseLeave={() => {
                      setViewLikeOption(false);
                      setLikeBarOption(null);
                    }}
                    style={{
                      display: "flex",
                      height: "30px",
                      gap: "5px",
                      cursor: "pointer",
                      position: "relative",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {
                       eachPost.likeStatus != "" 

                       ? 
                         <>
                          {eachPost.likeStatus == "Like" && <img src={like} width={20}></img>}
                          {eachPost.likeStatus == "Love" && <img src={heart} width={20}></img>}
                          {eachPost.likeStatus == "Haha" && <img src={laugh} width={20}></img>}
                          {eachPost.likeStatus == "Clapping" && <img src={clap} width={20}></img>}
                          {eachPost.likeStatus == "Insightful" && <img src={idea} width={20}></img>}
                          {eachPost.likeStatus == "Curious" && <img src={cloud} width={20}></img>}

                          

                         </>
                       : 
                       <>
                       <ThumbsUp size={15} color="rgb(0, 149, 255)" />
                        <span>Like</span>
                       </>

                    }


                    {viewLikeOption && likeBarOption == postIndex && (
                      <div
                        style={{ position: "absolute" }}

                        onMouseEnter={() => setViewLikeOption(true)}
                        onMouseLeave={() => setViewLikeOption(false)}
                      >
                        <div className={styles.likeOptions}>
                          {likeOptions.map((each, index) => (
                            <div onClick={() => updatedLikeStatus(eachPost.id, each.name)}>
                              {index == viewItem && <span >{each.name}</span>}
                              <img
                                onMouseEnter={() => {
                                  setViewItem(index);
                                }}
                                onMouseLeave={() => {
                                  setViewItem(-1);
                                }}
                                src={each.icon}
                                alt=""
                                width={25}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <span
                    onClick={() => {
                      setEnableCommentBox((prev) => {
                        if (selectedCommentBox == postIndex) {
                          return !prev;
                        }
                        return true;
                      });
                      setSelectedCommentBox(postIndex);
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
                  onClick={() => CommentBoxToogle(postIndex, eachPost.id)}
                  style={{ padding: "5px", opacity: "0.6", cursor: "pointer" }}
                >
                  {eachPost.comments} Comments
                </span>
              </div>

              {enableCommentBox &&
                selectedCommentBox != null &&
                selectedCommentBox == postIndex && (
                  <div className={styles.CommentBox}>
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
                            AddComment(eachPost.id);
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
              {toogleCommentBox &&
                currentPostCommentViewIndex == postIndex &&
                currentPostId && (
                  <CommentBox
                    allComments={allComments}
                    commentsLoading={commentsLoading}
                  />
                )}
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "600px",
          }}
        >
          {
            postLoading

              ? <SmallLoader /> :
              <span style={{ fontSize: "13px", color: "gray" }}>no post available!</span>

          }
        </div>
      )}
    </>
  );
}

export default Posts;
