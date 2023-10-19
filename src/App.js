///1
import "./App.css";

function App() {
  let arr = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
  let positive = arr.filter(test);
  function test(item) {
    if (item > 1) {
      return item;
    }
  }
  return <div>{positive}</div>;
}
/////

///2
const messages = [
  { message: "hello Error", error: true },
  { message: "javascript error", error: false },
  { message: "expovisiov error", error: true },
  { message: "react error", error: true },
  { message: "angular error", error: false },
  { message: "es6 error", error: false },
];

const filterMessages = messages.filter((item) => item.error === false);
console.log(filterMessages);

export default App;
/////

///3
const words = ["expo", "js", "react", "css", "angular", "vue", "html"];

const wordsMap = words.map((item) => {
  if (item.length < 5) {
    return "*";
  } else {
    return item;
  }
});

console.log(wordsMap);
/////

///4
const sendMessage = (message) => {
  /*
   * тут какой-то большой код для отправки сообщения
   */
};

const half = (number) => number / 2;

const showConsole = () => {
  console.log("Экспо");
};

const concatWords = (first, second) => first + second;

/////

///5
function justText() {
  return "expo";
}

function logging(text) {
  console.log(text);
}

function add(x, y) {
  const z = 3;
  return z * x * y;
}

function onlyPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}
/////
