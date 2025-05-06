const events = [
  {
    date: "2020年05月26日",
    name: "1人ハッカソン vol.1",
    description:
      "Meguru Cosmos 宇宙感ある空間からモダン技術への入り口を回立方体とお届け",
    url: "https://topaz.dev/projects/d41a0662268f7a1aca4a",
  },
  {
    date: "2020年09月24日",
    name: "キャンプハッカソン",
    description: 'Wa:talk みんなで"わ"になって話そう！1つの端末で。複数人と。',
    url: "https://topaz.dev/projects/b319ba459e32910d7015",
  },
  {
    date: "2021年01月21日",
    name: "ハックツハッカソン~プレシオ杯~",
    description:
      "超高性能日時計方式時刻計算アプリ 物体とその陰の写真を投稿することで、現在時刻を表示します。",
    url: "https://topaz.dev/projects/c00svaa23akg008ogeo0",
  },
  {
    date: "2021年03月17日",
    name: "ハックツハッカソン~ブラキオカップ~",
    description: "MAZAKAN ただ「魔剤飲む」を報告するだけのWebアプリ",
    url: "https://topaz.dev/projects/c18n85223akg00aug5mg",
  },
  {
    date: "2021年06月20日",
    name: "ハックツハッカソン~ステゴカップ~",
    description: "無駄にメイドに愛を叫びたかった",
    url: "https://topaz.dev/projects/83e136f000385d10c09f",
  },
  {
    date: "2021年07月12日",
    name: "先輩の背中ハッカソン vol.1",
    description: "Bears Sandbag 飢えたストレスで攻撃衝動を抑えられない獣たちへ",
    url: "https://topaz.dev/projects/207c286d525ad968e969",
  },
  {
    date: "2021年09月21日",
    name: "ハックツハッカソン~スピノカップ~",
    description: "Cheese! オンラインでも皆で集合写真！",
    url: "https://topaz.dev/projects/dd936bbcc01a5be88082",
  },
  {
    date: "2021年12月18日",
    name: "ハックツハッカソン~アロカップ~",
    description: "最初で最後のメンターとしての参加",
    url: "#",
  },
  {
    date: "2022年02月06日",
    name: "SAGA Azure Hackathon vol.1",
    description:
      "RustKnock Rustにちなんだマルチプレイ対応クイズアプリケーション",
    url: "https://topaz.dev/projects/0d7368a458c22aab0b6f",
  },
  {
    date: "2022年03月15日",
    name: "ハックツハッカソン~ギガノトカップ~",
    description:
      "奇声を発してハッピーハッピー 奇声を発声してアプリの負担額を下げよう。",
    url: "https://topaz.dev/projects/4f42624a1a4028f63363",
  },
  {
    date: "2022年06月19日",
    name: "ハックツハッカソン~イクチオカップ~",
    description:
      "デスマTV デスマTVで推しのエンジニアのデスマーチを応援しよう！",
    url: "https://topaz.dev/projects/50a804868af6407eb504",
  },
  {
    date: "2022年07月18日",
    name: "先輩の背中ハッカソン vol.2",
    description: "御魚 なぞの カタカナ 御魚の名前を英語で覚えよう！",
    url: "https://topaz.dev/projects/8a75f0f1a40778afe31a",
  },
  {
    date: "2022年09月21日",
    name: "ハックツハッカソン~プテラカップ~",
    description:
      "Ready Eliminate Dominator リアルタイムPvPタワーディフェンスオンラインゲーム",
    url: "https://topaz.dev/projects/0bdca801952a9a59bba7",
  },
  {
    date: "2022年11月13日",
    name: "SAGA Azure Hackathon vol.2",
    description: "Kinper ノリで海苔巻き出会い系アプリ",
    url: "https://topaz.dev/projects/db51349da8a77c796113",
  },
  {
    date: "2023年03月14日",
    name: "ハックツハッカソン~アロカップ~",
    description:
      "masakari exhibition ハックツの布教（建前）をするために過去作品の展示会場を作ったよ！",
    url: "https://topaz.dev/projects/3cb8f7e2be54f7083f99",
  },
  {
    date: "2023年03月xx日",
    name: "ジムラボハッカソン",
    description: "押せネコちゃん",
    url: "#",
  },
];

const eventList = document.getElementById("joined-event-list");

events.forEach((event) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${event.name}</strong> (${event.date}): ${
    event.description
  } <a href="${event.url}" ${
    event.url === "#" ? "hidden" : ""
  } target="_blank">詳細</a>`;
  eventList.appendChild(listItem);
});
