import service from "../appwrite/config";
import { Link } from "react-router-dom";
import { convert } from "html-to-text";
import { useSelector } from "react-redux";

function PostCard({ $id, title, featuredImage, content, $createdAt, userId }) {

  const userData = useSelector((state) => state.auth.userData);

  const convertTime = (timestamp) => {
    const time = new Date(timestamp);

    const formattedDate = time.toLocaleString();

    return formattedDate;
  };

  return (
    <Link to={`/post/${$id}`}>
      <div className="flex items-center flex-col gap-10 p-4 border-[1px] border-white/40  sm:flex-row bg-[#2A2E30] rounded-md">
        <div className=" ">
          <img
            src={service.getFileForPreview(featuredImage)}
            alt={title}
            className="max-w-[250px] sm:max-w-[200px] rounded-lg"
          />
        </div>

        <div className=" text-white/90 order-1" style={{ flex: "4" }}>
          <h2 className="font-bold text-2xl mb-4">{title}</h2>
          <p className=" text-white/70 text-lg ">
            {convert(content).substring(0, 150) + "..."}
          </p>
          <div className="mt-2">
            <Link 
            to={`/userData/${userId}`}
            >
              <h3>
                <span className="text-white/70 font-semibold">
                  Author : {userData.name}
                </span>{" "}
                <br />
              </h3>
            </Link>

            <h4 className="text-white/70">
              Created At : {convertTime($createdAt)}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
