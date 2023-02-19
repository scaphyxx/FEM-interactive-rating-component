import Image from "next/image";
import Link from "next/link";
import RatingField from "../components/RatingField";

const HomePage = () => {
  return (
    <div className="bg-veryDarkBlue h-screen mx-auto flex justify-center items-center">
      <div className="bg-gradient-to-b from-darkBlue to-darkBlue/30 flex flex-col p-5 rounded-2xl max-w-xs space-y-5">
        <div className="relative h-10 w-10 bg-lighGray/10 rounded-full">
          <Image src="/icon-star.svg" alt="" fill className="p-3" />
        </div>
        <h1 className="text-2xl text-white">How did we do?</h1>
        <p className="text-mediumGray text-xs">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offerings!
        </p>
        <RatingField />
        <Link href="/thank-you" className="self-center bg-orange w-full rounded-full text-center text-white text-xs py-3 tracking-[4px] uppercase transition-all ease-out hover:text-orange hover:bg-white">Submit</Link>
      </div>
    </div>
  );
};

export default HomePage;
