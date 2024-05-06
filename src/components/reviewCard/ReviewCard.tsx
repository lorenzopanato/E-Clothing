import { MdStar } from "react-icons/md";
import UserImage from "../../assets/user.png";

function ReviewCard() {
  return (
    <div className="py-4 border-b border-primary border-opacity-15">
      <div className="flex gap-3 items-center mb-2">
        <img
          className="w-8 h-8 rounded-full"
          src={UserImage}
          alt="imagem do usuario"
        />
        <div>
          <p className="text-sm sm:text-base">Mark Williams</p>
          <span className="flex items-center gap-1 text-sm mt-1">
            <MdStar size={16} /> 
            <MdStar size={16} />
            <MdStar size={16} />
            <MdStar size={16} />
            <MdStar size={16} />
            5.0
          </span>
        </div>
      </div>
      <p className="font-semibold text-sm sm:text-base py-1">Excellent product!!</p>
      <p className="mb-2 text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi odio
        nesciunt perspiciatis facilis? Suscipit rerum, odit dolor provident
        nesciunt atque!
      </p>
      <small>Posted on April 5, 2024</small>
    </div>
  );
}

export default ReviewCard;
