const translations = {
  ru: {
    eyebrow: "ИИ-помощник для родителей",
    title: "Чем занять ребёнка?",
    subtitle: "Ответьте на несколько вопросов — и получите идею, которая подойдёт именно сейчас",
    ageLabel: "Возраст ребёнка",
    timeLabel: "Сколько времени есть?",
    placeLabel: "Где будет проходить занятие?",
    goalLabel: "Что хочется сейчас?",
    time10: "10 минут",
    time30: "20–30 минут",
    time60: "1 час",
    home: "Дома",
    outside: "На улице",
    travel: "В дороге",
    calm: "Спокойное занятие",
    active: "Активная игра",
    creative: "Творчество",
    learning: "Обучение",
    solo: "Занятие без участия взрослого",
    submit: "Подобрать занятие",
    materials: "Что понадобится",
    benefit: "Чем полезно",
    steps: "Как провести",
    another: "Другая идея",
    copy: "Скопировать",
    copied: "Идея скопирована",
    ageText: { "2-3": "2–3 года", "4-5": "4–5 лет", "6-8": "6–8 лет", "9-12": "9–12 лет" },
  },
  kk: {
    eyebrow: "Ата-аналарға арналған AI көмекші",
    title: "Баланы немен айналыстыруға болады?",
    subtitle: "Бірнеше сұраққа жауап беріңіз — дәл қазірге лайық идея алыңыз",
    ageLabel: "Баланың жасы",
    timeLabel: "Қанша уақыт бар?",
    placeLabel: "Сабақ қай жерде өтеді?",
    goalLabel: "Қазір не керек?",
    time10: "10 минут",
    time30: "20–30 минут",
    time60: "1 сағат",
    home: "Үйде",
    outside: "Далада",
    travel: "Жолда",
    calm: "Тыныш іс",
    active: "Қимылды ойын",
    creative: "Шығармашылық",
    learning: "Оқу",
    solo: "Ересексіз өздігінен",
    submit: "Іс таңдау",
    materials: "Не қажет",
    benefit: "Балаға пайдасы",
    steps: "Қалай өткізуге болады",
    another: "Басқа идея",
    copy: "Көшіру",
    copied: "Идея көшірілді",
    ageText: { "2-3": "2–3 жас", "4-5": "4–5 жас", "6-8": "6–8 жас", "9-12": "9–12 жас" },
  },
};

const ideaBank = [
  {
    age: ["2-3", "4-5"],
    time: ["10", "30"],
    place: ["home", "travel"],
    goal: ["calm", "solo"],
    ru: {
      title: "Коробочка находок",
      description: "Ребёнок рассматривает безопасные мелочи и сортирует их по цвету, форме или размеру.",
      materials: "Пластиковая коробка, крупные пуговицы, кубики, ложки, мягкие помпоны.",
      steps: ["Положите 8–10 безопасных предметов в коробку.", "Попросите выбрать все красные, круглые или мягкие предметы.", "Предложите разложить находки на 2–3 кучки.", "В конце вместе назовите, что получилось."],
      duration: "10–20 минут",
      benefit: "Развивает внимание, речь, мелкую моторику и умение сравнивать предметы.",
    },
    kk: {
      title: "Табылған заттар қорабы",
      description: "Бала қауіпсіз ұсақ заттарды қарап, түсі, пішіні немесе өлшемі бойынша бөледі.",
      materials: "Пластик қорап, ірі түймелер, кубиктер, қасықтар, жұмсақ помпондар.",
      steps: ["Қорапқа 8–10 қауіпсіз зат салыңыз.", "Қызыл, дөңгелек немесе жұмсақ заттарды табуын сұраңыз.", "Заттарды 2–3 топқа бөлуді ұсыныңыз.", "Соңында не шыққанын бірге атаңыз."],
      duration: "10–20 минут",
      benefit: "Зейінді, сөйлеуді, ұсақ моториканы және салыстыру дағдысын дамытады.",
    },
  },
  {
    age: ["2-3", "4-5", "6-8"],
    time: ["10", "30"],
    place: ["home"],
    goal: ["active"],
    ru: {
      title: "Мягкая полоса препятствий",
      description: "Небольшой маршрут по комнате: пройти, перешагнуть, проползти и донести мягкую игрушку.",
      materials: "Подушки, плед, мягкая игрушка, свободное место на полу.",
      steps: ["Разложите подушки на полу на расстоянии шага.", "Покажите маршрут без прыжков с высоты.", "Попросите ребёнка пройти путь и перенести игрушку.", "Меняйте порядок: медленно, на носочках, как робот."],
      duration: "10–25 минут",
      benefit: "Помогает выплеснуть энергию, тренирует координацию и уверенность в движениях.",
    },
    kk: {
      title: "Жұмсақ кедергілер жолы",
      description: "Бөлмеде шағын маршрут: жүру, аттап өту, еңбектеу және жұмсақ ойыншықты жеткізу.",
      materials: "Жастықтар, көрпе, жұмсақ ойыншық, еденде бос орын.",
      steps: ["Жастықтарды еденге арақашықтықпен қойыңыз.", "Биіктен секірмейтін қауіпсіз жолды көрсетіңіз.", "Бала ойыншықты алып, маршруттан өтсін.", "Ретін өзгертіңіз: баяу, аяқ ұшымен, робот сияқты."],
      duration: "10–25 минут",
      benefit: "Энергияны жұмсауға, үйлесімділік пен қозғалысқа сенімділікті дамытуға көмектеседі.",
    },
  },
  {
    age: ["4-5", "6-8", "9-12"],
    time: ["30", "60"],
    place: ["home"],
    goal: ["creative", "solo"],
    ru: {
      title: "Открытка для будущего дня",
      description: "Ребёнок делает маленькую открытку с рисунком и добрым пожеланием себе или близкому.",
      materials: "Лист бумаги, карандаши или фломастеры, наклейки по желанию.",
      steps: ["Сложите лист пополам.", "Пусть ребёнок нарисует на обложке настроение дня.", "Внутри напишите или нарисуйте пожелание.", "Открытку можно поставить на стол или подарить."],
      duration: "20–40 минут",
      benefit: "Развивает воображение, эмоциональный словарь и бережное отношение к близким.",
    },
    kk: {
      title: "Келешек күнге ашықхат",
      description: "Бала өзіне немесе жақынына суреті мен жылы тілегі бар шағын ашықхат жасайды.",
      materials: "Қағаз, қарындаштар немесе фломастерлер, қаласа жапсырмалар.",
      steps: ["Қағазды екіге бүктеңіз.", "Бала мұқабаға күннің көңіл күйін салсын.", "Ішіне тілек жазсын немесе сурет салсын.", "Ашықхатты үстелге қоюға немесе сыйлауға болады."],
      duration: "20–40 минут",
      benefit: "Қиялды, эмоцияны сөзбен жеткізуді және жақындарға қамқорлықты дамытады.",
    },
  },
  {
    age: ["6-8", "9-12"],
    time: ["10", "30"],
    place: ["home", "travel"],
    goal: ["learning", "calm", "solo"],
    ru: {
      title: "Охота на слова",
      description: "Ребёнок ищет вокруг слова на выбранную букву или придумывает слова по теме.",
      materials: "Бумага и карандаш или заметки в телефоне взрослого.",
      steps: ["Выберите букву или тему: еда, город, природа.", "Попросите найти или придумать 7 слов.", "За каждое слово ребёнок ставит галочку.", "В конце выберите самое смешное или красивое слово."],
      duration: "10–20 минут",
      benefit: "Тренирует чтение, словарный запас, память и наблюдательность.",
    },
    kk: {
      title: "Сөз аулау",
      description: "Бала айналадан бір әріптен басталатын сөздерді іздейді немесе тақырып бойынша сөз ойлайды.",
      materials: "Қағаз бен қарындаш немесе ересектің телефонындағы жазба.",
      steps: ["Әріп немесе тақырып таңдаңыз: тамақ, қала, табиғат.", "7 сөз табуын немесе ойлап айтуын сұраңыз.", "Әр сөзге белгі қойсын.", "Соңында ең қызық немесе әдемі сөзді таңдаңыз."],
      duration: "10–20 минут",
      benefit: "Оқуды, сөздік қорды, есте сақтауды және байқампаздықты дамытады.",
    },
  },
  {
    age: ["4-5", "6-8", "9-12"],
    time: ["30", "60"],
    place: ["outside"],
    goal: ["calm", "learning", "solo"],
    ru: {
      title: "Прогулка-исследование",
      description: "На прогулке ребёнок отмечает безопасные природные детали: листья, облака, звуки, следы.",
      materials: "Лист бумаги, карандаш, удобная одежда.",
      steps: ["Договоритесь искать только то, что можно рассмотреть без риска.", "Выберите 5 находок: лист, камень, звук, цвет, форма.", "Пусть ребёнок зарисует или отметит каждую находку.", "Обсудите, какая находка удивила больше всего."],
      duration: "20–45 минут",
      benefit: "Развивает любознательность, наблюдательность и спокойный интерес к природе.",
    },
    kk: {
      title: "Зерттеу серуені",
      description: "Серуенде бала қауіпсіз табиғи белгілерді байқайды: жапырақтар, бұлттар, дыбыстар, іздер.",
      materials: "Қағаз, қарындаш, ыңғайлы киім.",
      steps: ["Тек қауіпсіз қарауға болатын нәрселерді іздеуге келісіңіз.", "5 белгі таңдаңыз: жапырақ, тас, дыбыс, түс, пішін.", "Бала әр табылған нәрсені белгілесін немесе салсын.", "Қайсысы көбірек таңғалдырғанын талқылаңыз."],
      duration: "20–45 минут",
      benefit: "Қызығушылықты, байқампаздықты және табиғатқа тыныш қызығуды дамытады.",
    },
  },
  {
    age: ["6-8", "9-12"],
    time: ["30", "60"],
    place: ["home"],
    goal: ["learning", "creative"],
    ru: {
      title: "Мини-лаборатория цвета",
      description: "Ребёнок смешивает цвета на бумаге и делает свою таблицу оттенков.",
      materials: "Бумага, кисточка, вода, краски или фломастеры.",
      steps: ["Нарисуйте 6 пустых кружков.", "Смешайте два безопасных цвета на палитре или бумаге.", "Заполните кружок новым оттенком.", "Придумайте каждому оттенку название."],
      duration: "25–50 минут",
      benefit: "Развивает творческое мышление, аккуратность и понимание причинно-следственных связей.",
    },
    kk: {
      title: "Түстер шағын зертханасы",
      description: "Бала қағазда түстерді араластырып, өз реңктер кестесін жасайды.",
      materials: "Қағаз, қылқалам, су, бояу немесе фломастерлер.",
      steps: ["6 бос дөңгелек салыңыз.", "Екі қауіпсіз түсті палитрада немесе қағазда араластырыңыз.", "Жаңа реңкті дөңгелекке бояңыз.", "Әр реңкке атау ойлап табыңыз."],
      duration: "25–50 минут",
      benefit: "Шығармашылық ойлауды, ұқыптылықты және себеп-салдарды түсінуді дамытады.",
    },
  },
  {
    age: ["9-12"],
    time: ["30", "60"],
    place: ["home", "travel"],
    goal: ["solo", "calm", "creative"],
    ru: {
      title: "Комикс из трёх кадров",
      description: "Ребёнок придумывает короткую историю с началом, поворотом и смешным финалом.",
      materials: "Лист бумаги и карандаш.",
      steps: ["Разделите лист на 3 прямоугольника.", "В первом кадре покажите героя и место.", "Во втором добавьте проблему или сюрприз.", "В третьем придумайте добрый финал."],
      duration: "20–45 минут",
      benefit: "Развивает сюжетное мышление, юмор, письменную речь и самостоятельность.",
    },
    kk: {
      title: "Үш кадрлық комикс",
      description: "Бала басы, тосын бұрылысы және көңілді соңы бар қысқа оқиға ойлап табады.",
      materials: "Қағаз және қарындаш.",
      steps: ["Қағазды 3 бөлікке бөліңіз.", "Бірінші кадрда кейіпкер мен орынды көрсетіңіз.", "Екінші кадрға мәселе немесе тосын жағдай қосыңыз.", "Үшінші кадрға жылы аяқталу ойлаңыз."],
      duration: "20–45 минут",
      benefit: "Оқиға құрауды, әзілді, жазбаша сөйлеуді және дербестікті дамытады.",
    },
  },
  {
    age: ["2-3", "4-5", "6-8"],
    time: ["10", "30"],
    place: ["travel"],
    goal: ["calm", "learning", "solo"],
    ru: {
      title: "Что я вижу?",
      description: "Ребёнок выбирает предмет вокруг, а остальные угадывают его по мягким подсказкам.",
      materials: "Ничего не нужно.",
      steps: ["Попросите ребёнка выбрать глазами безопасный предмет.", "Пусть даст подсказку: цвет, форма или где находится.", "Взрослый или другой ребёнок угадывает.", "Поменяйтесь ролями."],
      duration: "10–20 минут",
      benefit: "Развивает речь, внимание, терпение и умение описывать признаки.",
    },
    kk: {
      title: "Мен не көріп тұрмын?",
      description: "Бала айналадан бір зат таңдайды, ал басқалар оны жұмсақ белгілер арқылы табады.",
      materials: "Ештеңе қажет емес.",
      steps: ["Бала көзбен қауіпсіз бір зат таңдасын.", "Түсін, пішінін немесе қайда тұрғанын айтсын.", "Ересек немесе басқа бала табады.", "Рөлдермен ауысыңыз."],
      duration: "10–20 минут",
      benefit: "Сөйлеуді, зейінді, сабырды және белгілерді сипаттауды дамытады.",
    },
  },
];

let currentLang = "ru";
let lastIdeaIndex = -1;
let currentIdea = null;

const form = document.querySelector("#ideaForm");
const resultPanel = document.querySelector("#resultPanel");
const ideaTitle = document.querySelector("#ideaTitle");
const ideaDescription = document.querySelector("#ideaDescription");
const ideaMaterials = document.querySelector("#ideaMaterials");
const ideaBenefit = document.querySelector("#ideaBenefit");
const ideaSteps = document.querySelector("#ideaSteps");
const ideaTime = document.querySelector("#ideaTime");
const ideaAge = document.querySelector("#ideaAge");
const anotherIdea = document.querySelector("#anotherIdea");
const copyIdea = document.querySelector("#copyIdea");
const toast = document.querySelector("#toast");

function getSelections() {
  return {
    age: form.elements.age.value,
    time: form.elements.time.value,
    place: form.elements.place.value,
    goal: form.elements.goal.value,
  };
}

function scoreIdea(idea, selections) {
  let score = 0;
  if (idea.age.includes(selections.age)) score += 4;
  if (idea.time.includes(selections.time)) score += 3;
  if (idea.place.includes(selections.place)) score += 3;
  if (idea.goal.includes(selections.goal)) score += 4;
  return score;
}

function pickIdea() {
  const selections = getSelections();
  const ranked = ideaBank
    .map((idea, index) => ({ idea, index, score: scoreIdea(idea, selections) }))
    .filter((item) => item.score >= 10)
    .sort((a, b) => b.score - a.score);

  const fallback = ideaBank
    .map((idea, index) => ({ idea, index, score: scoreIdea(idea, selections) }))
    .filter((item) => item.idea.age.includes(selections.age))
    .sort((a, b) => b.score - a.score);

  const options = ranked.length ? ranked : fallback;
  const bestScore = options[0]?.score ?? 0;
  const bestOptions = options.filter((item) => item.score === bestScore || item.score >= bestScore - 1);
  const available = bestOptions.filter((item) => item.index !== lastIdeaIndex);
  const pool = available.length ? available : bestOptions;
  const selected = pool[Math.floor(Math.random() * pool.length)];

  lastIdeaIndex = selected.index;
  currentIdea = selected.idea;
  renderIdea(selected.idea);
}

function renderIdea(idea) {
  const data = idea[currentLang];
  const selections = getSelections();

  ideaTitle.textContent = data.title;
  ideaDescription.textContent = data.description;
  ideaMaterials.textContent = data.materials;
  ideaBenefit.textContent = data.benefit;
  ideaTime.textContent = data.duration;
  ideaAge.textContent = translations[currentLang].ageText[selections.age];

  ideaSteps.innerHTML = "";
  data.steps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    ideaSteps.appendChild(li);
  });

  resultPanel.hidden = false;
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "kk" ? "kk" : "ru";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  if (currentIdea) renderIdea(currentIdea);
}

function ideaToText() {
  if (!currentIdea) return "";
  const data = currentIdea[currentLang];
  const labels = translations[currentLang];
  const steps = data.steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
  return `${data.title}

${data.description}

${labels.materials}: ${data.materials}
${labels.steps}:
${steps}

${labels.timeLabel}: ${data.duration}
${labels.benefit}: ${data.benefit}`;
}

async function copyCurrentIdea() {
  if (!currentIdea) return;
  await navigator.clipboard.writeText(ideaToText());
  toast.textContent = translations[currentLang].copied;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pickIdea();
});

anotherIdea.addEventListener("click", pickIdea);
copyIdea.addEventListener("click", copyCurrentIdea);

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
