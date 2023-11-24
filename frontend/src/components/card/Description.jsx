import Button from "../button";

const Description = () => {
  return (
    <div data-aos="fade-left" className=" w-full max-w-sm p-4 sm:p-0">
      <p className=" text-secondary">About</p>
      <h1 className=" text-3xl  font-bold my-2">Evangadi Networks Q&A</h1>
      <p className="">
        No matter what stage of life you are in, whether you’re just starting
        elementary school or being promoted to CEO of a Fortune 500 company, you
        have much to offer to those who are trying to follow in your footsteps.{" "}
        <br />
        <br />
        Wheather you are willing to share your knowledge or you are just looking
        to meet mentors of your own, please start by joining the network here.
      </p>
      <div className=" mt-8 w-56 ">
        <Button label={"Check how it works"} secondary />
      </div>
    </div>
  );
};

export default Description;
