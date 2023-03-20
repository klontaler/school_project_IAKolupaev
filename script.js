let scrollTop = 0;
let lastScrollTop = 0;
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
  scrollTop = pageYOffset;
  if (scrollTop > 96) {
    if (scrollTop > lastScrollTop) {
      header.classList.add('header_transform');
    } else {
      header.classList.remove('header_transform')
    }  
  }
  lastScrollTop = scrollTop;
});

let ostrovskiy = ["Александр Николаевич Островский", "Гроза", "https://ilibrary.ru/text/994/index.html"];
let turgenev = ["Иван Сергеевич Тургенев", "«Записки охотника»", "https://ilibrary.ru/text/1204/index.html",  "«Отцы и дети»",  "https://ilibrary.ru/text/96/index.html"];
let goncharov = ["Иван Александрович Гончаров", "«Обломов»", "https://ilibrary.ru/text/475/index.html"];
let nekrasov = ["Николай Алексеевич Некрасов", "«Кому на Руси жить хорошо»", "https://ilibrary.ru/text/13/index.html"];
let dostoyevskiy = ["Федор Михайлович Достоевский", "«Преступление и наказание»", "https://ilibrary.ru/text/69/index.html"];
let tolstoy = ["Лев Николаевич Толстой", "«Севастопольские рассказы»", "https://ilibrary.ru/text/1161/p.1/index.html",  "«Война и мир»",  "https://ilibrary.ru/text/11/index.html"];
let leskov = ["Николай Семенович Лесков", "«Очарованный странник»", "https://ilibrary.ru/text/15/p.1/index.html",  "«Леди Макбет Мценского уезда»",  "https://ilibrary.ru/text/439/index.html"];
let saltikov_schedrin = ["Михаил Евграфович Салтыков-Щедрин", "«История одного города»", "https://ilibrary.ru/text/1248/index.html",  "«За рубежом»",  "https://traumlibrary.ru/book/saltykov-ss20-14/saltykov-ss20-14.html"];
let andreev = ["Леонид Николаевич Андреев", "«Жизнь Василия Фивейского»", "http://az.lib.ru/a/andreew_l_n/text_0810.shtml"];
let gorkiy = ["Максим Горький", "«На дне»", "https://ilibrary.ru/text/505/p.1/index.html",  "«Иуда Искариот»",  "https://ilibrary.ru/text/1203/index.html"];
let sholohov = ["Михаил Александрович Шолохов", "«Тихий Дон»", "http://www.lib.ru/PROZA/SHOLOHOW/tihijdon12.txt"];
let martin = ["Джордж Мартин", "«Песнь Льда и Пламени»", "https://librebook.me/a_game_of_thrones"];
let pushkin = ["Александр Сергеевич Пушкин", "«Капитанская дочка»", "https://ilibrary.ru/text/107/p.1/index.html"];
let fitzgerald = ["Фрэнсис Скотт Фицджеральд", "«Великий Гэтсби»", "http://fitzgerald.narod.ru/gatsby/velg1.html"];
let remark = ["Эрих Мария Ремарк", "На Западном фронте без перемен",  "http://militera.lib.ru/prose/foreign/remark1/01.html"];

