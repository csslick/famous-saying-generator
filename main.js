const data = [
  {
    text: "Carpe Diem!<br> 매 순간을 소중히 살아라.<br>인생을 독특하게 살아라.<br>자신만의 걸음으로<br>자기의 길을 가거라.",
    author: "- 죽은 시인의 사회 중 -",
    color: "#8E3557"
  },
  {
    text: "남이 나를 알아주지 않는다고<br>불평치 말고<br>내가 남을 알지 못함을 걱정하라.",
    author: "- 공자 -",
    color: "#449481"
  },
  {
    text: "기권은 중립이 아니다.<br>암묵적 동조다.",
    author: "- 단테 알리기에리(1265~1321) -",
    color: "#255366"
  },
  {
    text: "가격은 당신이 지불하는 것이고<br>가치는 당신이 얻는 것이다.",
    author: "- 워렌 버핏 -",
    color: "#EA7C7C"
  },
  {
    text: "모든 민주주의에서<br>국민은<br>그들의 수준에 맞는<br>정부를 가진다.",
    author: "- 알렉시스 드 토크빌 -",
    color: "#255366"
  },
  {
    text: "당신이 포기할떄,<br>나는 시작한다.",
    author: "- 엘론 머스크 -",
    color: "#463C68"
  },
  {
    text: "나는 신발이 없음을<br>한탄했는데<br>거리에서 발이 없는<br>사람을 만났다.",
    author: "- 데일 카네기 -",
    color: "#5B2F4F"
  },
]

function setWord() {
  const card = document.querySelector('.card');
  const cardBody = document.querySelector('.card-body');
  const r = Math.floor(Math.random() * data.length);
  
  let text = `
    ${data[r].text}
    <small class="author">${data[r].author}</small>
  `
  cardBody.innerHTML = text;
  card.style.backgroundColor = data[r].color;
}

setWord();