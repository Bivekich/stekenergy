export default function Header() {
  return (
    <div className="w-full min-h-24 bg-[#222222] text-white">
      <div className="w-11/12 min-h-24 flex justify-between items-center m-auto">
        <div className="">Image</div>

        <div className="ml-24">
          <ul className="flex gap-7">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>NEWS</li>
            <li>Contact Us</li>
            <li>Video List</li>
          </ul>
        </div>

        <div className="flex gap-5">
          <div>searchBar</div>
          <div>Change Lan</div>
        </div>
      </div>
    </div>
  );
}
