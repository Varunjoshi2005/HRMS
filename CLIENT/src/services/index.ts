import { ApiEndPoints } from "@/API";

async function FetchPosts() {
  try {
    const res = await fetch(ApiEndPoints.postApi);
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

export { FetchPosts };

const string = "value";

string.toString().substring(0, 10);
