import { Link } from "react-router-dom";
import CarouselReviews from "../components/CarouselReview";

export const ReviewsPage = () => {
  return (
    <main className="flex flex-col size-full sm:px-2 lg:gap-16 gap-10  bg-slate-100 justify-center items-center">
      <h1 className="font-bold text-2xl">Reviews</h1>
      <CarouselReviews />
      <p className="font-bold text-lg">Siguenos en</p>
      <div className="flex gap-5 md:gap-10 ">
        <Link to="">
          <img
            className="w-[22px] h-[22px]"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
            alt=""
          />
        </Link>
        <Link to="">
          <img
            className="w-[22px] h-[22px]"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
            alt=""
          />
        </Link>
        <Link to="">
          <img
            className="w-[22px] h-[22px]"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg"
            alt=""
          />
        </Link>
      </div>
    </main>
  );
};
