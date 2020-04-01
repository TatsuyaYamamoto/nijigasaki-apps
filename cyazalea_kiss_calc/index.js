import './index.scss'

window.onerror = function () {
  alert(`想定外のエラーが出ちゃいました...。突貫工事のお叱りは @T28_tatsuyaまで....。`)
};

const showExplosion = () => {
  const explosionElement = document.getElementById("explosion");
  explosionElement.classList.add("explosion--show");
  setTimeout(() => {
    explosionElement.classList.remove("explosion--show");
  }, 1000)
};

(() => {
  // operator
  const calcButtonAdd = document.getElementById("calc-button-add");
  const calcButtonSubtract = document.getElementById("calc-button-subtract");
  const calcButtonMultiple = document.getElementById("calc-button-multiple");
  const calcButtonDivide = document.getElementById("calc-button-divide");

  // number
  const calcButton0 = document.getElementById("calc-button-0");
  const calcButton1 = document.getElementById("calc-button-1");
  const calcButton2 = document.getElementById("calc-button-2");
  const calcButton3 = document.getElementById("calc-button-3");
  const calcButton4 = document.getElementById("calc-button-4");
  const calcButton5 = document.getElementById("calc-button-5");
  const calcButton6 = document.getElementById("calc-button-6");
  const calcButton7 = document.getElementById("calc-button-7");
  const calcButton8 = document.getElementById("calc-button-8");
  const calcButton9 = document.getElementById("calc-button-9");

  // others
  const calcButtonEqual = document.getElementById("calc-button-equal");
  const calcButtonCa = document.getElementById("calc-button-ca");

  const calcDisplayNumber = document.getElementById("calculator-display-number");

  let calculatorElements = ["0", "+"];
  let cyazaleaKissPowerFlow = [];
  const isCyazaleaKissPowerCharged = () => {
    return cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 5] === "3"
      && cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 4] === "+"
      && cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 3] === "3"
      && cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 2] === "+"
      && cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 1] === "3"
  };

  const initCyazaleaKissPowerFlow = () => {
    cyazaleaKissPowerFlow = [];
  };

  const initCalculatorElements = () => {
    calculatorElements = ["0", "+"];
  };

  const isOperator = (element) => {
    return element === "+" || element === "-" || element === "*" || element === "/";
  };
  const isTerm = (value) => {
    const int = parseInt(value);
    return !isNaN(int);
  };

  const isOperatorInputting = () => {
    return calculatorElements.length === 2 && calculatorElements[1] && isOperator(calculatorElements[1]);
  };

  const isCalculateReady = () => {
    return isTerm(calculatorElements[0]) && isOperator(calculatorElements[1]) && isTerm(calculatorElements[2]);
  };

  const calculate = () => {
    const result = new Function("return " + calculatorElements[0] + calculatorElements[1] + calculatorElements[2])();
    console.log("result", result)
    calculatorElements = [String(result)];
    console.log("calculatorElements", calculatorElements)
  };

  const render = () => {
    if (calculatorElements.length === 3) {
      calcDisplayNumber.innerText = calculatorElements[2];
      return;
    }
    calcDisplayNumber.innerText = calculatorElements[0];
  };

  const onClickNumber = (numberString) => {
    if (isOperatorInputting()) {
      console.log("calculator is inputting operator.");
      calculatorElements.push(numberString);
      cyazaleaKissPowerFlow.push(numberString);

      console.log("calculatorElements", calculatorElements);
      console.log("cyazaleaKissPowerFlow", cyazaleaKissPowerFlow);
      render();
      return;
    }

    if (parseInt(calculatorElements[calculatorElements.length - 1]) === 0) {
      calculatorElements[calculatorElements.length - 1] = numberString;
      cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 1] = numberString;
    } else {
      calculatorElements[calculatorElements.length - 1] += numberString;
      cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 1] += numberString;
    }

    console.log("calculatorElements", calculatorElements);
    console.log("cyazaleaKissPowerFlow", cyazaleaKissPowerFlow);
    render();
  };


  const onClickOperator = (operator) => {
    if (isOperatorInputting()) {
      console.log("calculator is inputting operator.");
      calculatorElements[calculatorElements.length - 1] = operator;
      cyazaleaKissPowerFlow[cyazaleaKissPowerFlow.length - 1] = operator;

      console.log("calculatorElements", calculatorElements);
      console.log("cyazaleaKissPowerFlow", cyazaleaKissPowerFlow);
      render();
      return;
    }

    if (isCalculateReady()) {
      console.log("calculator is ready to calc.");
      calculate();
    }

    calculatorElements.push(operator);
    cyazaleaKissPowerFlow.push(operator);

    console.log("calculatorElements", calculatorElements);
    console.log("cyazaleaKissPowerFlow", cyazaleaKissPowerFlow);
    render();
  };

  const onClickEqual = () => {
    if (isCyazaleaKissPowerCharged()) {
      calculatorElements = ["9000000000000000"];
      showExplosion();
    }


    if (isCalculateReady()) {
      console.log("calculator is ready to calc.");
      calculate();
    }

    console.log("calculatorElements", calculatorElements);
    console.log("cyazaleaKissPowerFlow", cyazaleaKissPowerFlow);
    render();
  };

  const onClickClearAll = () => {
    initCalculatorElements();
    initCyazaleaKissPowerFlow();

    console.log("calculatorElements", calculatorElements);
    console.log("cyazaleaKissPowerFlow", cyazaleaKissPowerFlow);
    render();
  };


  const clickLog = (target) => {
    console.log("clicked. target: " + target);
  };

  // operator
  calcButtonAdd.addEventListener("click", (e) => {
    clickLog(e.target.id);
    onClickOperator("+");
  });
  calcButtonSubtract.addEventListener("click", (e) => {
    clickLog(e.target.id);
    onClickOperator("-");
  });
  calcButtonMultiple.addEventListener("click", (e) => {
    clickLog(e.target.id);
    onClickOperator("*");
  });
  calcButtonDivide.addEventListener("click", (e) => {
    clickLog(e.target.id);
    onClickOperator("/");
  });

  // number
  [
    {element: calcButton0, numberText: "0"},
    {element: calcButton1, numberText: "1"},
    {element: calcButton2, numberText: "2"},
    {element: calcButton3, numberText: "3"},
    {element: calcButton4, numberText: "4"},
    {element: calcButton5, numberText: "5"},
    {element: calcButton6, numberText: "6"},
    {element: calcButton7, numberText: "7"},
    {element: calcButton8, numberText: "8"},
    {element: calcButton9, numberText: "9"}
  ].map((button) => {
    button.element.addEventListener("click", (e) => {
      clickLog(e.target.id);
      onClickNumber(button.numberText);
      render();
    });
  });

  // others
  calcButtonEqual.addEventListener("click", (e) => {
    clickLog(e.target.id);
    onClickEqual();
  });
  calcButtonCa.addEventListener("click", (e) => {
    clickLog(e.target.id);
    onClickClearAll();
    render();
  });


  render();
})();
