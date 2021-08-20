import SidePanel from "../components/SidePanel";

const Home = ({ userBookList }) => {
  return (
    <div className="home-grid">
      <SidePanel userBookList={userBookList} />
      <div className="home-grid-container">
        <h1>This is the Home page!</h1>
      </div>
    </div>
  );
};

export default Home;
