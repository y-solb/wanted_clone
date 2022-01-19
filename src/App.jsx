import "./App.css";
import Navbar from "./components/navbar";
import Slider from "./components/slider";

const sliderData = [
  { img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg" },
  {
    img: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  },
  { img: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg" },

  { img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg" },
  { img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg" },
];

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Slider sliderData={sliderData} />
      </div>
    </div>
  );
}

export default App;
