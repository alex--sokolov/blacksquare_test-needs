import './TestNeeds.scss';
import { useEffect, useRef, useState } from 'react';
// import { Graphic } from './Graphic';
import Parser from 'html-react-parser';
import { PreGraphic } from './PreGraphic';
import { backgroundColors, borderColors, scales, questionsAll, answersAll } from '../data/constants';
import { useCurrentWidth } from '../hooks/useCurrentWidth';

const initialData = {
  questions: [],
  answers: [],
};

const titles = scales.map((s) => s.info.title);
// const names = scales.map((s) => s.info.name);
const resolutions = scales.map((s) => s.info.resolution);

const setToLocalStorage = (data) => {
  localStorage.setItem('test-needs', JSON.stringify(data));
};

const getFromLocalStorage = () => {
  const data = localStorage.getItem('test-needs');
  return data ? JSON.parse(data) : { ...initialData };
};

const clearLocalStorage = () => {
  localStorage.removeItem('test-needs');
};

const TestNeeds = () => {
  // Properties
  const [data, setData] = useState(getFromLocalStorage());
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState([]);
  // const [isShowDeciphering, setIsShowDeciphering] = useState(false);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const questionCardRef = useRef(null);
  const width = useCurrentWidth();
  const pyramidWidthMultiplier = width > 768 ? 2 : width > 500 ? 1.5 : 1;

  useEffect(() => {
    if (!document.body.classList.contains('gc-user-guest')) {
      setIsAuthorized(true);
    }
  }, []);

  const startQuiz = () => {
    const data = { ...initialData, questions: questionsAll };
    const newData = {
      ...data,
      questions: data.questions.flat(),
    };
    setToLocalStorage(newData);
    setData(newData);
  };

  const confirmResult = (scores) => {
    // const inputsCustom = form.querySelectorAll('input.custom-field-value');
    // console.log('userName =>', userName);
    // console.log('email =>', email);

    const priorities = scales.map((s) => s.info.priority);

    // console.log('scores =>', scores);
    // console.log('priorities =>', priorities);

    const results = scores.map((score, index) => ({
      name: scales[index].info.name,
      title: scales[index].info.title,
      course: scales[index].info.course,
      resolution: scales[index].info.resolution,
      priority: scales[index].priority,
      score: score
    }));

    // console.log('results', results);
    results.sort((a, b) => a.score - b.score);
    results.sort((a, b) => b.score === a.score && a.priority > b.priority ? 1 : -1
    );

    // console.log('results', results);

    const form = document.querySelector('.form02');
    const inputs = form.querySelectorAll('input.f-input');
    inputs[0].value = inputs[0].value || userName;
    inputs[1].value = inputs[1].value || email;
    inputs[2].value = scores.join('-');
    inputs[8].value = scores[0];
    inputs[9].value = scores[1];
    inputs[10].value = scores[2];
    inputs[11].value = scores[3];
    inputs[12].value = scores[4];
    inputs[13].value = scores[5];
    inputs[14].value = scores[6];
    inputs[15].value = `${results[0].title} (${results[0].name}: ${results[0].course})`;
    inputs[16].value = `${results[1].title} (${results[1].name}: ${results[1].course})`;
    inputs[17].value = `${results[2].title} (${results[2].name}: ${results[2].course})`;
    inputs[18].value = `${results[3].title} (${results[3].name}: ${results[3].course})`;
    inputs[19].value = `${results[4].title} (${results[4].name}: ${results[4].course})`;
    inputs[20].value = `${results[5].title} (${results[5].name}: ${results[5].course})`;
    inputs[21].value = `${results[6].title} (${results[6].name}: ${results[6].course})`;
    const btn = form.querySelector('button[type=submit]');

    //
    // console.log('inputs =>', inputs);
    // console.log('0 => ', inputs[0].value);
    // console.log('1 =>', inputs[1].value);
    // console.log('2 =>', inputs[2].value);
    // console.log('8 =>', inputs[8].value);
    // console.log('9 =>', inputs[9].value);
    // console.log('10 =>', inputs[10].value);
    // console.log('11 =>', inputs[11].value);
    // console.log('12 =>', inputs[12].value);
    // console.log('13 =>', inputs[13].value);
    // console.log('14 =>', inputs[14].value);
    // console.log('15 =>', inputs[15].value);
    // console.log('16 =>', inputs[16].value);
    // console.log('17 =>', inputs[17].value);
    // console.log('18 =>', inputs[18].value);
    // console.log('19 =>', inputs[19].value);
    // console.log('20 =>', inputs[20].value);
    // console.log('21 =>', inputs[21].value);
    // console.log('btn', btn)
    btn.click();

    // console.log('inputs[0].value', inputs[0].value);
    // console.log('inputs[1].value', inputs[1].value);
    // console.log('inputs[2].value', inputs[2].value);
    // console.log('inputs[3].value', inputs[3].value);
    // console.log('inputs[4].value', inputs[4].value);
    // console.log('inputs[5].value', inputs[5].value);
    // console.log('inputs[6].value', inputs[6].value);
    // console.log('inputs =>', inputs);
    // console.log('inputsCustom =>', inputsCustom);

    // const link = `https://quickchart.io/chart?v=4&c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE%D0%BC%20%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5%27%2C%20%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D1%85%20%D0%BE%D0%BF%D0%BE%D1%80%D0%B0%D1%85%27%2C%20%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D0%B8%D0%B8%27%2C%20%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%27%2C%20%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%BF%D1%80%D0%B8%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B8%27%2C%20%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D1%81%D0%B0%D0%BC%D0%BE%D0%B0%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%27%2C%20%0A%20%20%20%20%20%20%27%D0%9F%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%B0%D0%B4%D0%B0%D0%BF%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8%27%0A%20%20%20%20%20%20%5D%2C%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data:[${scores}],backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20205%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(201%2C%20203%2C%20207%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%2099%2C%20132)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%20159%2C%2064)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(255%2C%20205%2C%2086)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(75%2C%20192%2C%20192)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(54%2C%20162%2C%20235)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(153%2C%20102%2C%20255)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgb(201%2C%20203%2C%20207)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%201%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20responsive%3A%20true%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20false%2C%0A%20%20%20%20%20%20%20%20position%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20%20%20text%3A%20%22%D0%94%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D1%82%D0%B5%D1%81%D1%82%D0%B0%20%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9%22%2C%0A%20%20%20%20%20%20%20%20fontSize%3A%20%2710px%27%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20scales%3A%20%7B%0A%20%20%20%20%20%20y%3A%20%7B%0A%20%20%20%20%20%20%20%20min%3A%200%2C%0A%20%20%20%20%20%20%20%20max%3A%2025%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20x%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20ticks%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%7D%2C%0A%7D`;

    // inputsCustom[13].files = link;
    // console.log('link', link);

    // function loadURLToInputFiled(url) {
    //   getImgURL(url, (imgBlob) => {
    //     // Load img blob to input
    //     // WIP: UTF8 character error
    //     console.log('imgBlob', imgBlob);
    //     let fileName = 'graphic.webp';
    //     let file = new File(
    //       [imgBlob],
    //       fileName,
    //       { type: 'file', lastModified: new Date().getTime() },
    //       'utf-8'
    //     );
    //     console.log('file', file);
    //     let container = new DataTransfer();
    //     container.items.add(file);
    //
    //
    //     console.log('container.files', container.files);
    //     inputsCustom[13].files = container.files;
    //     console.log('inputsCustom =>', inputsCustom);
    //     console.log('inputsCustom[13].files =>', inputsCustom[13].files);
    //
    //
    //     const inputsCustomDiv = form.querySelectorAll('div.custom-field-input');
    //     console.log('inputsCustomDiv =>', inputsCustomDiv);
    //     const event = new Event('change');
    //     inputsCustom[13].dispatchEvent(event);
    //
    //     setTimeout(() => {
    //       const btn = form.querySelector('button[type=submit]');
    //       // console.log('btn', btn);
    //       btn.click();
    //     }, 5000);
    //
    //   });
    // }

    // xmlHTTP return blob respond

    // function getImgURL(url, callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.onload = function () {
    //     callback(xhr.response);
    //   };
    //   xhr.open('GET', url);
    //   xhr.responseType = 'blob';
    //   xhr.send();
    // }
    //
    // loadURLToInputFiled(link);

    // const reader = new FileReader();
    // reader.
    //   reader.onload = (e) => {
    //     imgEl.src = e.target.result;
    //   }
    //   reader.readAsDataURL(imgInput.files[0]);
    // }
  };

  const finishQuiz = (data) => {
    const scores = [];
    scales.forEach((scale) => {
      const scaleAnswers = scale.questions.map((qNumber) => data.answers[qNumber - 1]);
      const score = scaleAnswers.reduce((acc, cur) => acc + cur);
      scores.push(score);
    });
    setScores(scores);
    setShowResults(true);
    clearLocalStorage();
    if (isAuthorized) {
      confirmResult(scores);
    }
  };

  // Helper Functions

  const optionClicked = (digit) => {
    if (data.answers.length < data.questions.length - 1) {
      if (questionCardRef.current) {
        questionCardRef.current.classList.add('hide');
      }
      setTimeout(() => {
        const dataNew = { ...data };
        dataNew.answers[currentQuestion] = digit;
        setData(dataNew);
        setCurrentQuestion(currentQuestion + 1);
      }, 0);
    } else {
      const dataFinish = { ...data };
      dataFinish.answers.push(digit);
      finishQuiz(dataFinish);
    }
  };

  const goBack = () => {
    if (questionCardRef.current) {
      questionCardRef.current.classList.add('hide');
    }
    setTimeout(() => {
      setCurrentQuestion(currentQuestion - 1);
    }, 0);
  };

  const goForward = () => {
    if (questionCardRef.current) {
      questionCardRef.current.classList.add('hide');
    }
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
    }, 0);
  };

  useEffect(() => {
    if (questionCardRef.current) {
      if (questionCardRef.current.classList.contains('hide')) {
        questionCardRef.current.classList.remove('hide');
      }
    }
  }, [currentQuestion]);

  const minLength = (value, num) => {
    return value.length >= num;
  };
  const maxLength = (value, num) => {
    return value.length <= num;
  };

  const isValidEmail = (value) => {
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return emailPattern.test(value);
  };

  const validateUserName = (value) => {
    const errors = [];

    if (!minLength(value, 3)) {
      errors.push({
        field: 'userName',
        errorText: 'Имя должны быть не менее 3 символов',
      });
    } else {
      if (!maxLength(value, 40)) {
        errors.push({
          field: 'userName',
          errorText: 'Имя должны быть не более 40 символов',
        });
      }
    }
    return errors;
  };

  const validateEmail = (value) => {
    const errors = [];
    if (!isValidEmail(value)) {
      errors.push({
        field: 'email',
        errorText: 'Введите корректный email',
      });
    }
    return errors;
  };

  const validateForm = () => {
    const errors = [...validateUserName(userName), ...validateEmail(email)];
    setErrors(errors);
    if (errors.length === 0) {
      setIsAuthorized(true);
      confirmResult(scores);
    }
  };

  const changeUserName = (value) => {
    setUserName(value);
    if (isSubmitted) {
      setErrors([
        ...errors.filter((error) => error.field !== 'userName'),
        ...validateUserName(value),
      ]);
    }
  };

  const changeEmail = (value) => {
    setEmail(value);
    if (isSubmitted) {
      setErrors([...errors.filter((error) => error.field !== 'email'), ...validateEmail(value)]);
    }
  };

  const onUserInfoSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    validateForm();
  };

  const titleBlockClazz = data.questions.length 
                                ? 'quiz-questions' 
                                : '';

  return (
    <div className={`quiz ${data.questions.length ? 'quiz-questions' : ''}`}>
      {/* 1. Header  */}
      <div className='header'>
        <div className='header-first'>
          <h3 className="company">Black Square University</h3>
          <div className={`title-block ${titleBlockClazz}`}>
            <h1 className={"title-start"}>Тест на определение</h1> 
            <h1 className={"title-end"}>уровня удовлетворения потребностей</h1>
          {/* 2. Show start info, results or show the question quiz  */}
          </div>
        </div>

        {!data.questions.length && (
          /* 3. Start screen */
          <div className='pyramid-wrapper' style={{paddingBottom: 0}}>
            <img
              src="https://fs.getcourse.ru/fileservice/file/download/a/595710/sc/239/h/5dc1ea84ed368c420f3633c71cd54ed4.png"
              alt="Пирамида потребностей"
              className={'pyramid-img'}
            />
          </div>
        )}
      </div>

      {!data.questions.length && (
        <div className='welcome-container'>
          <div className='welcome-block'>
            <div className='welcome-text'>
              <h1>Дорогие друзья!</h1>
              <h3>Этот тест, созданный на основе одной из самых популярных и известных теорий мотивации — теорию иерархии потребностей Абрахама Маслоу, 
и адаптированный к сегодняшней картине мира, поможет вам определить уровень удовлетворения ваших потребностей на текущий момент.</h3>
            </div>

            <div className="welcome-info">
              <h1>Отвечайте на каждый вопрос, используя 5-балльную шкалу:</h1>
              <ul className="start-list">
                {answersAll.map((answer, index) => {
                  return (
                    <li key={index}>
                      <p className='index'>{index}</p>
                      <p>{answer}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className='button-start-container'>
            <button className="auto-flash" onClick={() => startQuiz()}>
              Начать тест
            </button>
          </div>
        </div>
      )} 
      {!!data.questions.length && (showResults ? (
        /* 4. Final Results */

        <div className="final-results">
          {!isAuthorized ? (
            <>
              <h2>
                Благодарим вас за прохождение теста на
                <br />
                определение уровня удовлетворения потребностей
                <br />
                от
                <br /> <strong>Black Square University</strong>
              </h2>
              <form onSubmit={(e) => onUserInfoSubmit(e)} className="user-info">
                <ul className="errors">
                  {errors
                    .filter((err) => err.field === 'userName')
                    .map((err, i) => (
                      <li key={i}>{err.errorText}</li>
                    ))}
                </ul>
                <input
                  name="userName"
                  placeholder={'Ваше имя'}
                  value={userName}
                  type="text"
                  onChange={(e) => changeUserName(e.target.value)}
                />
                <ul className="errors">
                  {errors
                    .filter((err) => err.field === 'email')
                    .map((err, i) => (
                      <li key={i}>{err.errorText}</li>
                    ))}
                </ul>
                <input
                  name="email"
                  value={email}
                  placeholder={'Ваш email'}
                  type="text"
                  onChange={(e) => changeEmail(e.target.value)}
                />
                <button type={'submit'} disabled={!(!isSubmitted || errors.length === 0)}>
                  Узнать результат
                </button>
              </form>
            </>
          ) : (
            <>
              <PreGraphic scores={scores} titles={titles} />
              {/*<Graphic scores={scores} resolutions={resolutions} />*/}

              <h5>
                <strong>Расшифровка диапазона</strong>
              </h5>
              <p>
                <span style={{ color: '#2B7B76' }}>
                  <strong>До 9 баллов</strong>
                </span>{' '}
                &mdash;{' '}
                <i>
                  низко выраженная потребность. В целом, эта потребность, скорее всего, закрыта или
                  на данном этапе вашей жизни пока не актуальна
                </i>
              </p>
              <p>
                <span style={{ color: '#906D2E' }}>
                  <strong>10-17 баллов</strong>
                </span>{' '}
                &mdash;{' '}
                <i>
                  средне-выраженная потребность. В этой сфере есть проблемы, которые скорее всего,
                  их придется решать в скором времени
                </i>
              </p>
              <p>
                <span style={{ color: '#A642A2' }}>
                  <strong>18 - 25 баллов</strong>
                </span>{' '}
                &mdash;{' '}
                <strong>
                  <i>ярко выраженная потребность.</i>
                </strong>
                <br />
                <strong>Обратите внимание</strong> &mdash;{' '}
                <i>
                  это та потребность и те вопросы, на которые вы сейчас реагируете острее всего,
                  возможно, даже неосознанно. Высокие баллы говорят о доминирующей потребности;
                  возможно, вы поставили себе цель из этой области; или столкнулись с
                  ограничивающими проблемами в этой области, которые вам необходимо решить, чтобы
                  двинуться дальше
                </i>
              </p>

              <h5>
                <strong>Расшифровка потребностей</strong>
              </h5>
              {scales.map((scale, index) => {
                return (
                  <div
                    className="scale-info"
                    key={scale.id}
                    style={{
                      border: `2px dashed ${borderColors[index]}`,
                      backgroundColor: `${backgroundColors[index]}`,
                    }}
                  >
                    <p>
                      <strong>{index + 1}. </strong>
                      {scale.info.full ? Parser(scale.info.full) : ''}
                    </p>
                    {scale.info.note ? Parser(scale.info.note) : ''}
                  </div>
                );
              })}
              <h5>
                <strong>Заключительное слово о потребностях</strong>
              </h5>
              <p>
                Пирамида потребностей &mdash; это не жесткая фигура, по которой, как нам всегда
                казалось, нужно взбираться ступенька за ступенькой. Сам Маслоу писал о том, что
                порядок в иерархии может меняться, в зависимости от жизненных обстоятельств, и
                каждая из потребностей не обязательно должна быть утолена полностью — достаточно
                частичного насыщения для перехода на следующую ступень.
              </p>
              <p>
                «Я совершенно убеждён, что человек живёт хлебом единым только в условиях, когда
                хлеба нет. Но что случается с человеческими стремлениями, когда хлеба вдоволь и
                желудок всегда полон? Появляются более высокие потребности, и именно они, а не
                физиологический голод, управляют нашим организмом. По мере удовлетворения одних
                потребностей возникают другие, всё более и более высокие. Так постепенно, шаг за
                шагом человек приходит к потребности в саморазвитии — наивысшей из них». А.Маслоу
              </p>
              <p>
                Именно поэтому в научной системе координат нашего Института, мы исследуем важнейший
                фактор, обеспечивающий спокойный возрастающий, а не компенсаторный переход человека
                от одной потребности к другой — Адаптивный интеллект. Он позволяет не просто идти
                вверх к своей высшей точке саморазвития, но и не “падать” вниз из-за эмоциональных
                состояний, постоянно меняющихся и любых неблагоприятных условий внешней среды.
                Адаптивный интеллект — важнейший фактор, это наша психологическая иммунная система,
                которая обеспечивает удовлетворение наших потребностей.
              </p>
              <h5>
                <strong>Рекомендации для проработки</strong>
              </h5>
              <ul className={'pyramid-container'}>
                {scales
                  .slice(0)
                  .reverse()
                  .map((scale, index) => (
                    <a href={`${scale.info.link}`} key={scale.id}>
                      <li
                        className={`pyramid-level pyramid-${index + 1}`}
                        style={{
                          width: `${(!!index ? 105 + index * 30 : 41) * pyramidWidthMultiplier}px`,
                        }}
                      >
                        <h6>{scale.info.course}</h6>
                        <div>{scale.info.name}</div>
                      </li>
                    </a>
                  ))}
              </ul>
              <p>
                <strong>Результаты теста — перед вами, с чего начать работу?</strong>
              </p>
              <p>
                У вашей доминирующей сейчас потребности — больше всего баллов. Таких может быть
                несколько — определите, что для вас сейчас важнее всего.
              </p>
              <ul className={"not-italic"}>
                Мы рекомендуем начать с одного из <strong>основных курсов</strong>:
                <li>◼️ Школа Отношений,</li>
                <li>◼️ Школа Коммуникаций,</li>
                <li>◼️ Школа Умножения,</li>
                <li>◼️ Школа Отношений,</li>
                который позволит проработать Вашу доминирующую потребность.
              </ul>
              <p>
                <strong>Базовые программы помогут</strong>:
              </p>
              <ul className={"not-italic"}>
                <li>✅ Cнять напряжение и расчистить свой эмоциональный фон (Детокс 1.0)</li>
                <li>
                  ✅ Освоить азы психологического здоровья и системного психологического знания для
                  жизни и любой проблемы (Black Square Club)
                </li>
                <li>
                  ✅ А Школа Адаптивного Интеллекта (AQ) и программа “Детокс 2.0 — Путь героя”
                  проработать адаптивный интеллект и механизм внедрения новых привычек, чтобы
                  изменения, которых вы так давно хотите, не заставили себя ждать❤️
                </li>
              </ul>
            </>
          )}
        </div>
      ) : (
        /* 5. Question Card */
        <div className="question-card-container">
          <div className="question-card" ref={questionCardRef}>
            {/* Current Question  */}
            <h2>
              Вопрос: <span style={{ color: '#d1913c' }}>{currentQuestion + 1}</span> /{' '}
              {data.questions.length}
            </h2>
            <div className="question-text">
              <h3>{data.questions[currentQuestion]}</h3>
            </div>

            {/* List of possible answers  */}
            <ul className="answers">
              {answersAll.map((answer, index) => {
                const optionClazz = data.answers[currentQuestion] === index ? 'active' : '';
                return (
                  <li key={index} onClick={() => optionClicked(index)} className={optionClazz}>
                    {answer}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="nav-buttons">
            <div
              className={`question-back ${currentQuestion + 1 > 1 ? '' : 'disabled'}`}
              onClick={() => goBack()}
            />
            <div
              className={`question-forward ${data.answers[currentQuestion] ? '' : 'disabled'}`}
              onClick={() => goForward()}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestNeeds;
