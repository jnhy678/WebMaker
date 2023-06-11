import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function temp() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/contact">문의</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>홈 페이지</h1>;
}

function About() {
  return <h1>소개 페이지</h1>;
}

function Contact() {
  return <h1>문의 페이지</h1>;
}

export default temp;
