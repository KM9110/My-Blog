import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { useSelector } from "react-redux";
import { convert } from "html-to-text";

function UserProfile() {
  const {userId} = useParams();

  const postsData = useSelector((state) => state.posts.postsData);

  const userData = useSelector((state) => state.auth.userData);

//   const navigate = useNavigate()

  console.log(userData); 

  return postsData.map(
    (post) =>
      post.userId === userId && (
        <>
          <h1>User Profile</h1>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {userId}
          </p>

          <div className="flex flex-col gap-10 p-4 border-[1px] border-white/40  sm:flex-row bg-[#2A2E30] rounded-md">
            <div className=" ">
              <img
                src={service.getFileForPreview(post.featuredImage)}
                alt={post.title}
                className="max-w-[250px] sm:max-w-[200px] rounded-lg"
              />
            </div>
          </div>

          <div className=" text-white/90 order-1" style={{ flex: "4" }}>
            <h2 className="font-bold text-2xl mb-4">{post.title}</h2>
            <p className=" text-white/70 text-lg ">
              {convert(post.content).substring(0, 150) + "..."}
            </p>
            <div className="mt-2"></div>
          </div>
        </>
      )
  );
}

export default UserProfile;
