// export const backgroundColors = [
//   'rgba(255, 99, 132, 0.2)',
//   'rgba(255, 159, 64, 0.2)',
//   'rgba(255, 205, 86, 0.2)',
//   'rgba(75, 192, 192, 0.2)',
//   'rgba(54, 162, 235, 0.2)',
//   'rgba(153, 102, 255, 0.2)',
//   'rgba(50, 50, 50, 0.2)'
// ];
//
// export const borderColors = [
//   'rgb(255, 99, 132)',
//   'rgb(255, 159, 64)',
//   'rgb(255, 205, 86)',
//   'rgb(75, 192, 192)',
//   'rgb(54, 162, 235)',
//   'rgb(153, 102, 255)',
//   // 'rgb(201, 203, 207)',
//   'rgb(50, 50, 50)'
// ];
//


export const backgroundColors = [
  'rgba(88, 137, 228, 0.2)',
  'rgba(113, 91, 159, 0.2)',
  'rgba(217, 69, 212, 0.2)',
  'rgba(255, 82, 168, 0.2)',
  'rgba(255, 116, 82, 0.2)',
  'rgba(255, 183, 15, 0.2)',
  'rgba(121, 234, 113, 0.2)'
];

export const borderColors = [
  'rgb(88, 137, 228)',
  'rgb(113, 91, 159)',
  'rgb(217, 69, 212)',
  'rgb(255, 82, 168)',
  'rgb(255, 116, 82)',
  'rgb(255, 183, 15)',
  'rgb(121, 234, 113)'
];

export const scales = [
  {
    id: '1',
    questions: [5, 13, 20, 23, 26],
    priority: 6,
    info: {
      name: 'Базовые настройки',
      link: 'https://blacksquarebrand.ru/detox_free',
      course: 'Детокс личности',
      title: 'Потребность в базовом здоровье',
      resolution: 'Базовое здоровье',
      description: 'психотравмы и наши базовые настройки, патологические состояния',
      full:
          '<strong>Базовое здоровье</strong> &mdash; это состояние психического благополучия ' +
          'и физического здоровья, которое позволяет человеку реализовывать свой потенциал и ' +
          'успешно справляться с повседневными задачами',
      note:
          'Базовое здоровье включает в себя эмоциональную стабильность и способность ' +
          'человека справляться со стрессом и различными жизненными вызовами. <br />' +
          'Пока мы чувствуем себя разбитыми, – физически или психически, вряд ли у нас ' +
          'возникнут другие желания. В ситуации крайней нужды мы, прежде всего, будем думать ' +
          'о том, как выжить: поесть, выспаться, успокоиться, отдохнуть.',
    },
  },
  {
    id: '2',
    questions: [1, 10, 25, 29, 31],
    priority: 4,
    info: {
      name: 'Психологическое здоровье',
      link: 'https://blacksquare.ru/',
      course: 'Black Square Club',
      resolution: 'Безопасность',
      title: 'Потребность в безопасности и внутренних опорах',
      description: 'основы психологического здоровья',
      full:
          '<strong>Безопасность</strong> также относится к базовым потребностям ' +
          'человека. С точки зрения психологии, эта потребность связана с чувством защищенности,' +
          ' уверенности и стабильности в жизни.',
      note:
          'Человек, у которого эта потребность не удовлетворена, ' +
          'может испытывать страх, тревогу, беспокойство и неуверенность в своей жизни. ' +
          'Он может стремиться к защите от угроз, будь то физические или эмоциональные, ' +
          'и искать убежище в безопасных местах и отношениях. <br />' +
          'Когда эта потребность полностью закрыта, мы чувствуем себя защищенным, ' +
          'способным управлять своей жизнью и справляться с жизненными вызовами. ' +
          'Мы можем проявлять инициативу, рисковать и стремиться к достижению своих ' +
          'целей в жизни.',
    },
  },
  {
    id: '3',
    questions: [2, 16, 19, 27, 28],
    priority: 0,
    info: {
      name: 'Отношения',
      link: 'https://blacksquarebrand.ru/relations_school',
      course: 'Школа отношений',
      resolution: 'Принятие',
      title: 'Потребность в принятии',
      description: 'все виды отношений (семья, друзья, любовь, родители и дети)',
      full:
          '<strong>Принятие</strong> &mdash; потребность в любви, внимании, ' +
          'одобрении со стороны окружающих людей. Эта потребность поддерживает самооценку ' +
          'человека и чувство принадлежности к группе.',
      note:
          'Необходимость принятия важна для развития здорового эго и формирования позитивного ' +
          'отношения к себе. <br />' +
          'Люди, которые испытывают удовлетворение этой потребности, чувствуют себя любимыми, ' +
          'нужными, ценными для других людей. Они умеют давать и принимать любовь, а также ' +
          'способны строить качественные отношения с окружающими людьми. В целом, удовлетворение ' +
          'этой потребности способствует повышению самооценки и уверенности в себе. <br />' +
          'Недостаток удовлетворения этой потребности дает чувство одиночества, невыразимую пустоту, ' +
          'страх перед отвержением и нежелание общаться с другими людьми. Это может приводить к ' +
          'социальной изоляции и повышенному уровню стресса.',
    },
  },
  {
    id: '4',
    questions: [7, 14, 21, 30, 34],
    priority: 3,
    info: {
      name: 'Коммуникации',
      link: 'https://blacksquarebrand.ru/communication_school',
      course: 'Школа коммуникаций',
      resolution: 'Социализация',
      title: 'Потребность в социализации',
      description: 'эффективная коммуникация, проекты, первые шаги самореализации',
      full:
          '<strong>Социализация</strong> &mdash; потребность в общении, контактах' +
          ' и взаимодействии с другими людьми. Она связана с нашей природой как социальных ' +
          'существ.',
      note:
          'Социализация имеет множество положительных эффектов на здоровье и благополучие человека.' +
          ' Взаимодействие с другими людьми помогает укреплять отношения, развивать эмоциональную' +
          ' интеллектуальность, улучшать навыки общения и снижать уровень стресса и тревоги.<br />' +
          'Недостаток социализации может привести к ухудшению психического и физического здоровья, ' +
          'к ухудшению качества жизни, к проблемам в общении и установлении отношений с ' +
          'другими людьми.',
    },
  },
  {
    id: '5',
    questions: [3, 6, 11, 12, 15],
    priority: 1,
    info: {
      name: 'Благосостояние',
      link: 'https://blacksquarebrand.ru/multiply_school',
      course: 'Школа умножения',
      resolution: 'Признание',
      title: 'Потребность в признании',
      description: 'деньги и карьерный рост, высокие жизненные достижения',
      full:
          '<strong>Признание. </strong> Эта потребность связана с ' +
          'чувством значимости и ценности своей личности в глазах окружающих и важна ' +
          'для достижения чувства удовлетворения и самореализации.',
      note:
          'В рамках этой потребности можно выделить два аспекта: потребность в уважении ' +
          'со стороны других людей и потребность в самоуважении. Первый аспект связан с желанием ' +
          'быть признанным и уважаемым в глазах других людей, иметь авторитет и статус в обществе. ' +
          'Второй аспект связан с внутренним ощущением уважения и уверенности в своей способности ' +
          'достигать поставленных целей и принимать собственные решения.<br />' +
          'Недостаток уважения и признания может приводить к чувству неполноценности, низкой самооценке,' +
          ' комплексам и депрессии. Закрытие этой потребности может привести к укреплению самооценки,' +
          ' повышению самоуважения и лучшей адаптации в обществе.',
    },
  },
  {
    id: '6',
    questions: [8, 17, 18, 22, 33],
    priority: 2,
    info: {
      name: 'Самореализация',
      link: 'https://blacksquarebrand.ru/identity_code',
      course: 'KOD личности',
      title: 'Потребность в самоактуализации',
      resolution: 'Самоактуализация',
      description: 'я полностью реализую свое предназначение, становлюсь Личностью',
      full:
          '<strong>Самоактуализация </strong> &mdash; потребность в самореализации и саморазвитии. ' +
          'Она связана с реализацией своего личностного потенциала, достижением своих целей и ' +
          'раскрытию своих возможностей.',
      note:
          'Человек стремится к постоянному улучшению своих знаний, навыков и опыта, ' +
          'расширению своего кругозора и совершенствованию своих качеств.<br />' +
          'Эта потребность обусловливает желание человека достичь высоких ' +
          'результатов в своей деятельности, повысить качество своей жизни и реализовывать ' +
          'свой творческий потенциал.<br />' +
          'Эта потребность ведет человека к осознанию смысла своей жизни и поиску своей жизненной цели.<br /><br />' +
          'Признаками того, что потребность в саморазвитии и самореализации удовлетворена не полностью,' +
          ' могут быть:<br /><br />' +
          '<ul>' +
          '<li>1. Чувство недовольства своим текущим уровнем достижений.</li>' +
          '<li>2. Желание обучаться новому или приобретать новые навыки, но отсутствие возможностей для этого.</li>' +
          '<li>3. Чувство стагнации или ограниченности в текущей жизненной ситуации.</li>' +
          '</ul>',
    },
  },
  {
    id: '7',
    questions: [4, 9, 24, 32, 35],
    priority: 5,
    info: {
      name: 'Адаптивность',
      link: 'https://blacksquarebrand.ru/detox20',
      course: 'AQ',
      title: 'Потребность в адаптивности',
      resolution: 'Адаптивность',
      description:
          'адаптивность — способность спокойно принимать любые изменения внешней среды и трансформировать их в свою пользу',
      full:
          '<strong>Адаптивность </strong> &mdash; одна из ключевых потребностей для выживания ' +
          'и успешного развития в современном мире.',
      note:
          'Адаптивность &mdash; это способность человека приспосабливаться к новым ситуациям и менять ' +
          'свое поведение в соответствии с изменяющейся обстановкой.<br />' +
          'Человек, который обладает адаптивностью, более гибок и открыт к новым идеям, способен быстрее ' +
          'и лучше приспосабливаться к изменениям и находить эффективные решения в нестандартных ' +
          'ситуациях.',
    },
  },
];

export const questionsAll = [
  'Я испытываю тревогу из-за неопределенности. Я не уверен(а) в завтрашнем дне',
  'Я считаю, что я больше забочусь о других, чем о себе',
  'У меня есть конкретная финансовая цель в этом году, которую я хотел бы достичь',
  'Я не всегда довожу начатое до конца',
  'Мне сложно расслабиться, я испытываю дискомфорт, когда позволяю себе лениться и ничего не делать',
  'Я хочу, чтобы о моих достижениях и успехах узнало больше людей',
  'Я испытываю дискомфорт, когда мне приходится общаться с незнакомыми людьми',
  'Я еще не реализовал(а) весь свой потенциал в работе',
  'Мне было тяжело пережить события последних двух лет',
  'Я редко остаюсь наедине с собой',
  'Я еще не достиг того уровня материального комфорта, к которому стремлюсь',
  'Моя работа или мои ежедневные занятия не позволяют мне уделять достаточно времени, чтобы постоянно узнавать что-то новое',
  'Часто я не чувствую себя полностью восстановившимся после сна',
  'Я согласна(согласен), что в конфликте всегда кто-то виноват больше, чем другой',
  'Карьера и достижения должны соответствовать целям и мечтам',
  'Я хочу, чтобы меня принимали такой (таким), как я есть',
  'Я хочу точно знать свое предназначение и понять, на что я способен (способна)',
  'Моя высшая ценность — постоянное развитие',
  'Я считаю, что мои отношения с близкими родственниками сложно назвать идеальными',
  'Я испытываю стресс и мне тяжело справляться с эмоциями',
  'Я хочу, чтобы коллеги всегда считались с моим мнением',
  'Я еще не живу свою жизнь так, как хочу',
  'В последнее время я очень часто испытываю стресс и мне тяжело справляться с эмоциями',
  'Я хочу изменить свой образ жизни',
  'В моем прошлом было много неприятного, некоторые люди и события до сих пор негативно влияют на меня',
  'Я не забочусь о своем состоянии здоровья так, как мне бы этого хотелось',
  'Мой прошлый негативный опыт в отношениях мешает мне в текущих или потенциальных отношениях',
  'Я хочу, чтобы другим людям было комфортно со мной',
  'Я часто сомневаюсь в правильности принятого решения',
  'У меня сложившийся круг друзей и коллег, но иногда мне не хватает общения',
  'Я спокоен, когда все контролирую сам',
  'Кажется, я до сих пор не пережил некоторые трагические события в своей жизни',
  'Помогать другим людям стать всем, чем они могут стать — очень важно для меня',
  'Для меня важно чувствовать себя уверенно и комфортно, когда приходится выступать перед публикой или коллегами, или высказать свое мнение людям',
  'Иногда мне не хватает силы воли, чтобы выполнить задуманное',
];

export const answersAll = [
  'совершенно неверно',
  'скорее неверно',
  'частично верно',
  '50/50, затрудняюсь выбрать',
  'скорее верно',
  'полностью верно',
];