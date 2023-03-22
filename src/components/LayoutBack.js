import { Outlet } from "react-router-dom";
import HeaderBack from "./HeaderBack";
export default function LayoutBack() {
  return (
    <div>
      <HeaderBack />
      <div className="absolute inset-x-0 bottom-0 top-24">
        <Outlet />
      </div>
    </div>
  );
}
