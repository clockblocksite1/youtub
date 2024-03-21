import React from 'react';
import iconImg from "./img/Vector (4).png";
import magImg from "./img/Vector (5).png";
import './App.css';
import Header from './components/Header';
import picImg from "./img/pic.png";
import fromImg from "./img/Vector (6).png";
import videoM from "./img/Vector (8).png";
import strImg from "./img/Vector 464.png";
import { LuDot } from "react-icons/lu";
import Nav from "./components/Nav";

function App() {
  const handleScrollToEnd = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header/>
      <div className='bg'>
        <div className='title'>
          Eternity - комфортный сервер
        </div>
        <div className='subtitle'>для тебя и твоих друзей!</div>
        <div className='og'>Ограничение в команде 4, рейты x2.5, модифицированная баррен карта для </div>
        <div className='og2'>наибольшего FPS, уникальные плагины и многое другое</div>
          <button className='rou'  onClick={handleScrollToEnd}>
            <span className='text'>Начать играть</span>
            <img src={iconImg} alt='' className='icon' />
          </button>
        <button className="wet">Игровой магазин
          <img src={magImg} alt="" className="mag"/>
        </button>
      </div>
      <div className="bog">
        <div className="sistem">СИСТЕМНЫЕ ТРЕБОВАНИЯ</div>
        <div className="min">Минимальные и рекомендуемые системные требования.</div>
        <div className="min2">Минимальные
          <img src={strImg} alt="" className="str"/>
        </div>
        <div className="hot"><LuDot />64-разрядные процессор и операционная система</div>
        <div className="hot2"><LuDot />ОС: Windows 10 64bit</div>
        <div className="hot3"><LuDot />Процессор: Intel Core i7-3770 / AMD FX-9590 or better</div>
        <div className="hot4"><LuDot />Оперативная память: 4 GB ОЗУ</div>
        <div className="hot5"><LuDot />Видеокарта: GTX 670 2GB / AMD R9 280 better</div>
        <div className="hot6"><LuDot />DirectX: версии 11</div>
        <div className="hot7"><LuDot />Сеть: Широкополосное подключение к интернету</div>
        <div className="hot8"><LuDot />Место на диске: 25 GB</div>
        <div className="hot9"><LuDot className="fat"/>Дополнительно: SSD is highly recommended or expect longer than </div>
        <div className="hot10">average load times.</div>
        <div className="ka">КАК НАЧАТЬ ИГРАТЬ?</div>
        <div className="rom">Всего два простых шага и ты готов к игре!</div>
        <div className="ew">Если он у тебя ещё не загружен</div>
        <div className="read">Скачай наш игровой клиент</div>
        <img src={picImg} alt="" className="pic"/>
        <div className="got">Вопросы или проблемы? Посмотри видеоинструкцию</div>
        <div className="rod">
          <div className="videoPlayer">
            <a href='https://www.youtube.com/watch?v=Lnbvc-M7_G8'>
            <img src={videoM} type="video/mp4" className='btn'/>
            </a>
            Your browser does not support the video tag.
          </div>
        </div>
      </div>
      <div className="rot">
        <button className="bac" >
          <span className="go">Скачать</span>
          <img src={fromImg} alt="" className="icon2"/>
        </button>
      </div>
      <Nav/>
    </div>
  );
}

export default App;