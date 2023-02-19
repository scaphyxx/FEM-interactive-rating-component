import Image from "next/image";
import Link from "next/link";
import GetRating from "../../components/GetRating";

const ThankYouPage = () => {
  return (
    <div className="bg-veryDarkBlue h-screen mx-auto flex justify-center items-center text-center">
      <div className="bg-gradient-to-b from-darkBlue to-darkBlue/30 flex flex-col p-5 rounded-2xl max-w-[330px] space-y-5 items-center">
        <div className="relative w-36 h-32">
          <Image
            src="/illustration-thank-you.svg"
            alt=""
            fill
            className="p-3 object-center object-contain"
          />
        </div>
        <GetRating />
        <h1 className="text-2xl text-white">Thank You!</h1>
        <p className="text-mediumGray text-xs">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        <Link
          href="/"
          className="self-center bg-orange w-full rounded-full transition-all ease-out text-center text-white text-xs py-2 tracking-[4px] uppercase hover:text-orange hover:bg-white"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
