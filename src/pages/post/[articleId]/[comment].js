import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log("router", router);
  const { pid, comment } = router.query;

  return (
    <>
      <p>Post: {pid}</p>
      <p>Comment: {comment}</p>
    </>
  );
};

export default Post;
