import { ApiEndPoints } from "@/API";

async function FetchPosts(token: string) {
  try {
    console.log("token", token);
    const res = await fetch(ApiEndPoints.postApi, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    if (res.ok) {
      return result.posts;
    }
    if (!res.ok) {
      console.log(result);
    }

    return null;
  } catch (error) {
    console.log(error);
    return;
  }
}

async function handleVerifyPasscode(
  token: string,
  userId: string,
  password: string
) {
  const verificationData = {
    userId,
    currentPassword: password,
  };

  try {
    const res = await fetch(`${ApiEndPoints.verifyPasscodeApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(verificationData),
    });
    if (res.ok) {
      return {
        verified: true,
        message: "allowed to access!!",
      };
    }

    if (!res.ok) {
      return {
        verified: false,
        message: "Not allowed to access!!",
      };
    }

    return {
      verified: false,
      message: "Not allowed to access!!",
    };
  } catch (error) {
    console.log("failed to verify passcode !!");

    return {
      verified: false,
      message: "Not allowed to access!!",
    };
  }
}

async function handleFetchCommments(token: string, postId: string) {
  if (!token)
    return {
      success: false,
      comments: null,
    };

  try {
    const res = await fetch(`${ApiEndPoints.commentsApi}/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();
    if (res.ok) {
      return {
        success: true,
        comments: result.comments,
      };
    }

    if (!res.ok) {
      return {
        success: false,
        comments: null,
      };
    }

    return {
      success: false,
      comments: null,
    };
  } catch (error) {
    console.log("failed to verify passcode !!");

    return {
      success: false,
      comments: null,
    };
  }
}

async function handleAddNewComment(commentData: any) {
  const { token, ...data } = commentData;

  const res = await fetch(`${ApiEndPoints.addCommentApi}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (res.ok) console.log("comment added");
  if (!res.ok) console.log("comment failed to add!!");
}

export {
  FetchPosts,
  handleVerifyPasscode,
  handleFetchCommments,
  handleAddNewComment,
};
