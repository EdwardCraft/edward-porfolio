import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <h1>Layout</h1>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default UserLayout;
