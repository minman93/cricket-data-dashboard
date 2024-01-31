import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:space-y-2 md:gap-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
