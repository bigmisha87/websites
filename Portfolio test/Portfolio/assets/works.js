/* Shared portfolio data — used by all three designs */
window.MISHA = {
  hero: {
    hello: "שלום, אני מישה.",
    lines: [
      "סיימתי ללמוד ארט דיירקשן.",
      "המרצים אומרים שסיימתי בהצלחה.",
      "הקפה השחור אומר אחרת."
    ],
    sub: "אני מייצר רעיונות, קונספטים וקמפיינים. חלקם אפילו הגיוניים."
  },
  about: {
    kicker: "קצת עליי",
    body: [
      "אני בוגר מסלול ארט דיירקשן ב־ACC תרצה גרנות.",
      "אני נהנה לקחת בריף, לפרק אותו לחתיכות, ולהרכיב אותו מחדש בצורה שאנשים באמת יעצרו להסתכל עליה.",
      "אני אוהב פרסום, מיתוג, קופי, טיפוגרפיה וכל מה שנמצא באזור המסוכן שבין רעיון טוב לרעיון שאסור היה לאשר."
    ]
  },
  worksIntro: {
    title: "כמה עבודות שאמא שלי חושבת שהן גאוניות.",
    sub: "לשמחתי, גם עוד כמה אנשים."
  },
  contact: {
    a: "אם אהבתם את העבודות.",
    b: "בואו נדבר.",
    c: "אם לא אהבתם.",
    d: "בואו נדבר בכל זאת.",
    email: "misha.graphics@gmail.com",
    phone: "050-000-0000",
    instagram: "@bigmisha"
  },
  footer: "נבנה עם קפה, פאניקה לפני הגשות, וכמות לא בריאה של שכבות בפוטושופ.",
  works: [
    {
      id: "k3", brand: "K3 · סאנו", title: "שימותו כולם", category: "קמפיין פרינט", year: "2024",
      orient: "portrait", accent: "#F5C518",
      desc: "נתתי לקוטל המקקים פרסונה של נשק יום הדין. שלושה פוסטרים בצהוב-שחור צורם, כל אחד עם איום מנומס להפליא על אוכלוסיית הג׳וקים שגרה אצלכם במטבח.",
      images: ["assets/works/k3/1.jpg","assets/works/k3/2.jpg","assets/works/k3/3.jpg"]
    },
    {
      id: "ninja", brand: "Ninja", title: "מפשלת יותר ממבשלת?", category: "קמפיין פרינט", year: "2024",
      orient: "landscape", accent: "#C8642B",
      desc: "מי שלא יודע לבשל פוגש את הניב׳ה. דמויות שמצליחות להפיל את כל המטבח על עצמן, וקופי שלא משאיר ספק מי האשם — וגם מה הפתרון.",
      images: ["assets/works/ninja/1.jpg","assets/works/ninja/2.jpg","assets/works/ninja/3.jpg"]
    },
    {
      id: "sodastream", brand: "SodaStream", title: "אל תכעיסו את הים", category: "קמפיין סביבתי", year: "2023",
      orient: "landscape", accent: "#1B2A33",
      desc: "הים זוכר כל בקבוק פלסטיק. גלים שמקבלים יד וזעם, כדי להזכיר שכל סודה שמכינים בבית = פחות זבל שצף לכם בחוף.",
      images: ["assets/works/sodastream/1.jpg","assets/works/sodastream/2.jpg","assets/works/sodastream/3.jpg"]
    },
    {
      id: "spotify", brand: "Spotify Premium", title: "אל תתנו לפרסומות להרוס לכם את המוזיקה", category: "קמפיין פרינט", year: "2023",
      orient: "portrait", accent: "#1DB954",
      desc: "דמויות פרסומת מעצבנות שנדחפות לכם לאוזניים בדיוק באמצע השיר. פרימיום זה כל השקט שמגיע אחרי.",
      images: ["assets/works/spotify/1.jpg","assets/works/spotify/2.jpg","assets/works/spotify/3.jpg","assets/works/spotify/4.jpg"]
    },
    {
      id: "ultrasol", brand: "ד״ר פישר · אולטרסול", title: "השמש יוצאת מן הכלל", category: "קמפיין פרינט", year: "2023",
      orient: "portrait", accent: "#1559A3",
      desc: "בחיים כדאי לקחת סיכונים — חוץ מהשמש הישראלית. ספורט אתגרי מול הגנה מקסימלית, בלי פשרות על העור.",
      images: ["assets/works/ultrasol/1.jpg","assets/works/ultrasol/2.jpg","assets/works/ultrasol/3.jpg"]
    },
    {
      id: "wd40", brand: "WD-40", title: "הגיע הזמן ל-WD-40", category: "קמפיין פרינט", year: "2022",
      orient: "portrait", accent: "#0E2A4E",
      desc: "חריקות שהופכות לפחד. ציר שמצייץ כמו עכברוש, דלת שנשמעת כמו סרט אימה — עד הרגע שבו משמנים אותם.",
      images: ["assets/works/wd40/1.jpg","assets/works/wd40/2.jpg","assets/works/wd40/3.jpg"]
    },
    {
      id: "one-in-nine", brand: "אחת מתשע", title: "כל אחת יכולה להיות אחת מתשע", category: "קמפיין מודעות", year: "2023",
      orient: "portrait", accent: "#E5418F",
      desc: "קמפיין העלאת מודעות לסרטן השד. כותרות שמכניסות את הצופָה לתוך התרחיש, כדי שתלך להיבדק היום — לא מחר.",
      images: ["assets/works/one-in-nine/1.jpg","assets/works/one-in-nine/2.jpg","assets/works/one-in-nine/3.jpg","assets/works/one-in-nine/4.jpg"]
    },
    {
      id: "pinuk", brand: "פינוק", title: "שמפו צריך להכיל רק שמפו", category: "קמפיין פרינט", year: "2022",
      orient: "portrait", accent: "#1E4FA3",
      desc: "שדה שיער שהפך לאתר נופש לשקדים, קוקוס ואבוקדו. הומור תלת-ממד על כל ההבטחות המנופחות של המתחרים.",
      images: ["assets/works/pinuk/1.jpg","assets/works/pinuk/2.jpg","assets/works/pinuk/3.jpg"]
    },
    {
      id: "shoshka", brand: "שושקה", title: "לפני שיהיה מאוחר מדי", category: "קמפיין", year: "2024",
      orient: "portrait", accent: "#9B2F7A",
      desc: "אפליקציית היכרויות לגיל 60+. הומור שחור על מצבה, כי גם אחרי שישים מגיע לכם לא להישאר לבד.",
      images: ["assets/works/shoshka/1.jpg"]
    }
  ]
};
