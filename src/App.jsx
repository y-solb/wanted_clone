import "./App.css";
import Navbar from "./components/navbar";
import Slider from "./components/slider";

const sliderData = [
  {
    id: 0,
    title: "프론트 주니어를 찾습니다",
    sub: "기업 과제 풀고 취업까지 한번에",
    img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  },
  {
    id: 1,
    title: "성장하는 개발자가 되려면?",
    sub: "OOO 검색하지 말 것!",
    img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  },
  {
    id: 2,
    title: "개발자 성장 비결 공개",
    sub: "Velog, 글 쓰는 개발자들의 이야기",
    img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  },
  {
    id: 3,
    title: "포트폴리오를 부탁해!",
    sub: "디자이너의 포폴 살펴보기",
    img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  },
  {
    id: 4,
    title: "마케팅 주니어를 찾습니다",
    sub: "기업 과제 풀고 취업까지 한번에",
    img: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  },
  {
    id: 5,
    title: "UX 디자이너의 커리어 설계",
    sub: "브랜드 가치를 더하는 디자인",
    img: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
  },
  {
    id: 6,
    title: "성과를 내는 마케팅",
    sub: "실제 사례를 공개합니다!",
    img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
  },
  {
    id: 7,
    title: "해, 커리어 EP 02 공개",
    sub: "마지막 관문 2라운드의 승자는?",
    img: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  },
  {
    id: 8,
    title: "2022년 달라지는 노동법령",
    sub: "노무관리 쟁점 한 눈에 파악하기",
    img: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
  },
  {
    id: 9,
    title: "프론트 주니어를 찾습니다",
    sub: "기업 과제 풀고 취업까지 한번에",
    img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  },
  {
    id: 10,
    title: "성장하는 개발자가 되려면?",
    sub: "OOO 검색하지 말 것!",
    img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  },
  {
    id: 11,
    title: "개발자 성장 비결 공개",
    sub: "Velog, 글 쓰는 개발자들의 이야기",
    img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  },
  {
    id: 12,
    title: "포트폴리오를 부탁해!",
    sub: "디자이너의 포폴 살펴보기",
    img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  },
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
