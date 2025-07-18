import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <div>
      <div>Layouts</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
