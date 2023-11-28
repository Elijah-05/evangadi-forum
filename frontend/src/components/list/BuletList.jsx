const BuletList = ({ text }) => {
  return (
    <li className="flex gap-2">
      <div className=" shrink-0 w-3 h-3 bg-[#f6a54e] mt-[6px] rounded-full" />
      <span className=" text-darkBlue">{text}</span>
    </li>
  );
};

export default BuletList;
