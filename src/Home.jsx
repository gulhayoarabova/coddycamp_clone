import React, { useState } from 'react';
import './App.css'
import { useForm } from 'react-hook-form'
import ReactDOM from "react-dom";
import pic from './assets/h.png'
import cod from './assets/Coding.png'
import mon from './assets/Monitor.png'
import stick from './assets/Sticky_Note.png'
import sib from './assets/siblings.png'
import two from './assets/02.png'
import root from './assets/noroot.png'
import tea from './assets/teach.png'
import pen from './assets/Tablet.png'
import roll from './assets/Pencil.png'
import say from './assets/say.png'
import int from './assets/int.jpg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Home(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  

  return (
    <div className='container'>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <h3>CoddyCamp</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">HTML va CSS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                JavaScript
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                React
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
      </Navbar>
      <div className="big">
        <img src={pic} alt="" />
      </div>
      <div className="b_tx">
              <h1>CoddyCamp IT Akademiyasi</h1>
      </div>
      <div className="inf">      
        <div className="infvid">
        <iframe className='video_tag'  src="https://www.youtube.com/embed/YkitvyMDPu8" title="CoddyCamp"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="inf1">
          <h4>CoddyCamp - 7 yoshdan 17 yoshgacha bo'lgan</h4>
          <h4>bolalarga dasturlash bo'yicha sifatli ta'lim beruvchi,</h4>
          <h4>zamonaviy IT Akademiya</h4>
          <h4>O'quv markazimizda hozirda 500dan ortiq</h4>
          <h4>o'quvchilar dasturlashni aynan CoddyCampda</h4>
          <h4>o'rganishmoqda!</h4>
        </div>
      </div> 
      <div className="b_tx2">
        <h1>Kim uchun</h1>
      </div>
      <div className="photo">
        <div className="photo1">
          <img src={cod} alt="" />
          <h5>Dasturlashni</h5>
          <h5>o'rganmoqchi</h5>
          <h5>bo'lganlar</h5>
        </div>
        <div className="photo1">
          <img src={mon} alt="" />
          <h5>IT kasb egasi</h5>
          <h5>bo'lishni</h5>
          <h5>xohlaganlar</h5>
        </div>
        <div className="photo1">
          <img src={stick} alt="" />
          <h5>Bilimga investitsiya</h5>
          <h5>qilmoqchi</h5>
          <h5>bo'lganlar</h5>
        </div>
        <div className="photo1">
          <img src={sib} alt="" />
          <h5>7 - 16 yoshdagilar</h5>
        </div>
      </div>
      <div className="b_tx3">
        <h1>Nima uchun dasturlashni o'rganish kerak?</h1>
      </div>
      <div className="why">
        <h5>Dasturlashni maktab yoshidan o'rgangan ma'qul.</h5>
        <h5>Chunki hozirda rivojlanib borayotgan</h5>
        <h5>sohani mukammal o'rganish uchun ertaroq boshlash</h5>
        <h5>shart. 3-4 yildan so'ng bu sohani bilmaydigan</h5>
        <h5>mutaxassis qolmaydi.</h5>
      </div>
      <div className="b_tx4">
        <h1>Bizning ustunligimiz</h1>
      </div>

        <div className="big1_inf">
        <div className="big_inf1">
          <img src={two} alt="" />
          <h4>Kuchli o’qitish dasturi</h4>
          <div className="litt1">
            <p>Darslarimiz xalqaro "HARVARD-CS50" metodika asosida 
              tuzilgan va tajribali ustozlar tomonidan interaktiv o'yinlar yordamida olib boriladi.
              "HARVARD-CS50" bu Harvard va Yale Universitetlarida
              kompyuter texnologiyalari boʻyicha kurs.</p>
          </div>
        </div>
        <div className="big_inf2">
          <img src={root} alt="" />
          <h4>Tajribali ustozlar</h4>
          <div className="litt2">
            <p>Katta IT loyihalarda ishlash tajribasiga ega bo’lgan dasturchi
               ustozlar tomonidan darslar olib boriladi.
         CoddyCamp IT Akademiya “Sifat”ga katta e’tibor qaratadi va har bir o'quvchi bilan
            yakka tartibda shug’ullaniladi. Darslarni doimiy ravishda metodist nazorat qiladi.
           Har bir o’quvchiga qanchalik ma’lumotlarni oson yetkazib berilishi biz uchun muhim.</p>
          </div>
        </div>
        </div>

        <div className="big2_inf">
        <div className="big_inf3">
          <img src={tea} alt="" />
          <h4>Yordamchi o’qituvchi</h4>
          <div className="litt3">
            <p>Agarda o’quvchilar darsni o'zlashtira olishmasa, bunda muommo yo’q!
               O’quvchilarimiz uchun ikkinchi o’qituvchi xizmati mavjud! Yordamchi 
               ustoz bilan uy vazifalarini vaqtida bajarish va qoldirilgan darslarni 
               o’rganish imkoniga ega bo’lishadi.</p>
          </div>
        </div>
        <div className="big_inf4">
          <img src={pen} alt="" />
          <h4>Innovatsion ta’lim</h4>
          <div className="litt4">
            <p>IT o’rganishda darslarning interaktiv tarzda olib borilishi</p>
               <p>juda muhim. Shuning uchun biz buni innovatsion ta’lim orqali bajaramiz.</p>
               <h6>- Kompyuterlar</h6>
               <h6>- Televizor bilan jihozlangan xonalar</h6>
               <h6>- Har bir dars uchun taqdimotlar</h6>
          </div>
        </div>
        </div>

        <div className="big3_inf">
        <div className="big_inf5">
          <img src={roll} alt="" />
          <h4>Bepul tadbirlar</h4>
          <div className="litt5">
            <p>Ta’lim olishda muhit qandayligi katta ahamiyatga ega! Buni o’quvchilarimiz
            o’zlarida his etishadi, yakshanba kungi bepul tadbirlar orqali har bir o’quvchi
            uchun haqiqiy IT muhitni yaratib beramiz.
            Tadbir davomida o’quvchilar o’rtasida musobaqalar, IT mutaxasislaridan foydali 
            bo’lgan masterklasslar, eng qiziqarli o’yinlar olib boriladi.</p>
          </div>
        </div>
        <div className="big_inf6">
          <img src={say} alt="" />
          <h4>Imtihon tizimi</h4>
          <div className="litt5">
            <p>O’quvchining natijasi ota - ona uchun muhim!
               Bizda har oy o’quvchilar imtihondan o’tishadi va kurs davomida 2 marta ota-onalar 
               ishtirokidagi ochiq eshiklar kunida o’quvchilar o’z loyihalari taqdimotini o’tkazishadi.
               Bu esa o’quvchilarda nutqiy qobilyatlarini rivojlantirishga xizmat qiladi.</p>
          </div>
        </div>
        </div>
        <div className="login">
          <div className="log_tx">
            <h2>Bepul sinov darsi!</h2>
            <p>qatnashish uchun ro'yxatdan o'ting</p>
          </div>
        </div>
        <div className="log_inp">
          <form onSubmit={handleSubmit(onSubmit)}>
      <input className='same' type="email" placeholder="Aziz Askarov" {...register} />
      <input className='same' type="number" placeholder="+998 " {...register("+998 ", {})} />

      <input type="submit" className='sub' />
    </form>
          </div>
        <div className="internet">
          <img src={int} alt="" />
        </div>
    </div>
  );
}

export default Home 
