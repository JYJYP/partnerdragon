// 코드들

function start() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question").style.display = "block";
}

function goback() {
  location.reload();
}

var Dra1 = {
  score: 0,
};
var Dra2 = {
  score: 0,
};
var Dra3 = {
  score: 0,
};
var Dra4 = {
  score: 0,
};
var Dra5 = {
  score: 0,
};

function next1(str) {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "block";

  if (str == "a") {
    Dra3.score += 1;
    Dra5.score += 1;
  } else if (str == "b") {
    Dra1.score += 1;
    Dra2.score += 1;
    Dra4.score += 1;
  }
}

function next2(str) {
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "block";

  if (str == "c") {
    Dra1.score += 1;
    Dra3.score += 1;
    Dra5.score += 1;
  } else if (str == "d") {
    Dra2.score += 1;
    Dra4.score += 1;
  }
}

function next3(str) {
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "block";

  if (str == "e") {
    Dra1.score += 1;
    Dra3.score += 1;
  } else if (str == "f") {
    Dra2.score += 1;
    Dra4.score += 1;
    Dra5.score += 1;
  }
}

function next4(str) {
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "block";

  if (str == "g") {
    Dra2.score += 1;
    Dra3.score += 1;
  } else if (str == "h") {
    Dra1.score += 1;
    Dra4.score += 1;
    Dra5.score += 1;
  }
}

function next5(str) {
  document.getElementById("question").style.display = "none";
  document.getElementById("roading").style.display = "block";

  if (str == "i") {
    Dra2.score += 1;
    Dra5.score += 1;
  } else if (str == "j") {
    Dra1.score += 1;
    Dra3.score += 1;
    Dra4.score += 1;
  }

  setTimeout(function () {
    document.getElementById("roading").style.display = "none";
    document.getElementById("result").style.display = "block";
  }, 2000);
}

function getResult() {
  var arr = [
    {
      name: "원더 드래곤",
      dScore: Dra1.score,
      img: "image/sample1.png",
      explain: "씩씩하고 용감한 친구",
      detailEx:
        "만나자마자 10년지기 소꿉친구같은 드래곤.<br/>많은 드래곤 연구가들은 원더 드래곤을 그렇게 평가하곤 합니다.<br/>원더 드래곤은 특유의 친화력과 재미있는 성격 덕분에 누구와도 쉽게 친구가 될 수 있습니다.<br/>파트너가 원한다면 앉은 장소에서 3시간동안 수다를 떨 수도 있고, 저 먼 숲 속으로 여행을 떠날 수도 있습니다.<br/>물론, 원더 드래곤은 당신을 괴롭히는 못된 녀석들도 혼쭐내줄 수 있습니다.<br/><br/>만약 이 드래곤을 파트너로 맞이하게 되었다면, 행운이네요!<br/>평생 끝까지 함께 해줄 의리 넘치는 친구를 사귄 것이나 다름없습니다.",
    },
    {
      name: "엔젤 드래곤",
      dScore: Dra2.score,
      img: "image/sample2.png",
      explain: "조용하지만 든든한 파트너",
      detailEx:
        "많은 드래곤 연구가들은 엔젤 드래곤에 대해 '조용한 수호천사'라고 말하곤 합니다.<br/>말이 적은 편인 이 드래곤은 다른 드래곤들보다 존재감이 조금 희미합니다.<br/>하지만 걱정마세요. 파트너가 힘들 때엔 그 누구보다 제일 먼저 날아와 당신의 옆자리에서 어깨를 토닥여주곤 하니까요.<br/>엔젤 드래곤은 자신의 파트너와 희로애락을 공유하며 놀랍도록 깊은 감정적 유대 관계를 갖는 경향이 있습니다.<br/><br/>이 든든한 드래곤은 한평생 당신의 곁에서 당신을 수호하며 일생을 보낼 것입니다.",
    },
    {
      name: "위너 드래곤",
      dScore: Dra3.score,
      img: "image/sample3.png",
      explain: "엉뚱하지만 다정한 친구",
      detailEx:
        "만능엔터테이너. 이 드래곤을 설명하는 데에 이만한 단어가 또 있을까요?<br/>위너 드래곤은 다재다능한 매력을 가진 엉뚱한 파트너입니다.<br/>운동, 게임, 비행, 심지어 희극공연까지 위너 드래곤은 못하는 것이 없습니다.<br/>하지만 위너 드래곤이 자랑하는 가장 멋진 재능은 바로 '당신의 진정한 친구가 되기'입니다.<br/>위너 드래곤은 매일 헬스장에 들러 고강도 운동을 즐겨하는 운동광이지만,<br/>운동초보인 당신이 다이어트를 시작한다면 기꺼이 헬스장 대신 한강변 달리기를 선택할 것입니다.<br/><br/>이 멋지고 다정한 드래곤을 당신의 파트너로 맞이하는 것은<br/>어쩌면 당신의 인생에 있어 제일 멋있는 선택이 아닐까요?",
    },
    {
      name: "베리 드래곤",
      dScore: Dra4.score,
      img: "image/sample4.png",
      explain: "부끄럼 많은 귀염둥이 파트너",
      detailEx:
        "이 세상에서 제일 귀여운 드래곤을 꼽자면, 단연 베리 드래곤이 아닐까 싶습니다.<br/>정말로요! 많은 사람들이 베리 드래곤의 날카로운 눈매와 뾰족한 이를 보고 '성격이 나쁜 드래곤'이라는 오해를 하곤 하지만,<br/>베리 드래곤은 이름 그대로 새콤달콤한 매력을 가진 귀여운 파트너입니다.<br/><br/>당신이 외로울 기분이 들 때 어디선가 달콤한 향기가 퍼져온다면,<br/>그건 수줍음 많은 당신의 파트너일테니 걱정 말고 베리 드래곤의 이름을 크게 불러주세요.<br/>숨어있던 당신의 귀여운 드래곤이 쏜살같이 날아와 당신의 곁을 지켜줄 테니까요.",
    },
    {
      name: "지니 드래곤",
      dScore: Dra5.score,
      img: "image/sample5.png",
      explain: "어디로 튈지 모르는 개성만점 파트너",
      detailEx:
        "괜찮습니다. 첫만남에 지니 드래곤의 외모를 보고 놀라지 않는 사람은 아마 없을 테니까요.<br/>하지만 이 재치발랄 드래곤은 당신의 그런 무례 정도는 단숨에 잊어버립니다.<br/>당신은 곧 세상에 하나밖에 없는 개성만점 지니 드래곤의 매력에 푸욱 빠져들게 될 것입니다.<br/>지니 드래곤의 친화력은 가히 상상을 초월할 정도입니다. 이 드래곤은 처음 만난 사람의 마음의 벽을 허무는 데에 채 5분이 걸리지 않습니다.<br/>최신 유행 드립부터 인기 드라마, 영화, 만화까지, 지니 드래곤이 모르는 유행은 세상에 존재하지 않습니다.<br/><br/>이 드래곤과 친구가 된다면 세상은 즐거움으로 가득 찰 것입니다.",
    },
  ];
  console.log(arr);

  var scoreResult;

  scoreResult = arr.sort(function (a, b) {
    return a.dScore - b.dScore;
  });

  console.log(scoreResult);
  console.log(scoreResult[4].name); //성공~~~~~~!!!!!!!!!!!

  document.getElementById("b_dragon_name").innerHTML = scoreResult[4].name;
  document.getElementById("s_explain").innerHTML = scoreResult[4].explain;
  document.getElementById("dExplain").innerHTML = scoreResult[4].detailEx;
  document.getElementById("resultdragon").innerHTML +=
    "<img id='dImage' src=" + scoreResult[4].img + ">";
}

//공유

function shareTwitter() {
  var sendText = "나만의 메타-드래곤 찾기"; // 전달할 텍스트
  var sendUrl = "https://jyjyp.github.io/partnerdragon/"; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}

function shareFacebook() {
  var sendUrl = "https://jyjyp.github.io/partnerdragon/"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}

function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("64d47f16d21e6014e6d8a7c3f9b9e105");

  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "나만의 메타-드래곤 찾기", // 보여질 제목
      description: "나와 천생연분인 메타-드래곤 알아보기", // 보여질 설명
      imageUrl: "https://jyjyp.github.io/partnerdragon/", // 콘텐츠 URL
      link: {
        mobileWebUrl: "https://jyjyp.github.io/partnerdragon/",
        webUrl: "https://jyjyp.github.io/partnerdragon/",
      },
    },
  });
}
