import { Link } from "react-router-dom";
export const Page404 = () => {
  return (
    <div>
      <h1>Page404</h1>
      <p>not found a page</p>
      <Link to="/">to home</Link>
    </div>
  );
};
