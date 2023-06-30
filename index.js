// tính tổng số dương
function calculateSum() {
  let input = document.getElementById("arrayInput").value;
  let numbers = input.split(",").map(Number);
  let sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  document.getElementById("result").innerHTML =
    "Tổng các số dương trong mảng là: " + sum;
}

// Đếm số dương
function countNumbers() {
  let inputArray = document.getElementById("inputArray").value;
  let numbers = inputArray.split(",").map(Number);
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }

  document.getElementById("result1").innerHTML =
    "Số dương trong mảng: " + count;
}
// tìm số dương nhỏ nhất
function minNumbers() {
  let inputArray = document.getElementById("inputArray1").value;
  let numbers = inputArray.split(",").map(Number);

  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  document.getElementById("result2").innerHTML = "Số nhỏ nhất là : " + min;
}
// tìm số dương nhỏ nhất
function minNumber() {
  let inputArray = document.getElementById("inputArray2").value;
  let numbers = inputArray.split(",").map(Number);

  let min = Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] < min) {
      min = numbers[i];
    }
  }
  if (min === Infinity) {
    document.getElementById("result3").innerHTML = "không có số dương ";
  } else {
    document.getElementById("result3").innerHTML =
      "số dương nhỏ nhất là :  " + min;
  }
}
// tìm số chẵn cuối cùng trong mảng
function even() {
  let input = document.getElementById("inputArray3").value;
  let numbers = input.split(",").map(Number);
  let lastEven = -1;
  // đảo ngược vòng lập for 2 ,1,0,-1,
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 2 === 0) {
      lastEven = numbers[i];
      break;
    }
  }
  document.getElementById("result4").innerHTML =
    "Số chẵn cuối cùng trong mảng là: " + lastEven;
}
// đổi chỗ 2 vị trí
function changePosition() {
  let num1 = +$("#num1").value1;
  let num2 = +$("#num2").value2;
  let arr = arrNum[num1];
  arrNum[num1] = arrNum[num2];
  arrNum[num2] = arr;
  $("#txtchangePosition").innerHTML = arrNum;
}
// sắp xếp tăng dần
function sortArray() {
  let input = document.getElementById("inputArray4").value;
  let numbers = input.split(",").map(Number);
  numbers.sort(function (a, b) {
    return a - b;
  });
  let sortedArray = document.getElementById("result5");
  sortedArray.textContent = numbers.join(", ");
}
// Tìm số nguyên tố đầu tiên trong mảng
function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  function findFirstPrime(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        return arr[i];
      }
    }
    return -1;
  }
  
  function findNumber() {
    var input = document.getElementById("inputArray5").value;
    var numbers = input.split(",").map(Number);
    var primeNumber = findFirstPrime(numbers);
  
    if (primeNumber === -1) {
      document.getElementById("result6").innerHTML =
        "Không tìm thấy số nguyên tố trong mảng  = -1 ";
    } else {
      document.getElementById("result6").innerHTML =
        "Số nguyên tố đầu tiên trong mảng là: " + primeNumber;
    }
  }
  
  // tìm xem trong mảng có bao nhiêu số nguyên?
  // số nguyên 
  function countIntegers(numbers) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (Number.isInteger(numbers[i])) {
        count++;
      }
    }
    return count;
  }
  
  function findIntegers() {
    var input = document.getElementById("inputArray6").value;
    var numbers = input.split(",").map((num) => parseFloat(num.trim()));
  
    var count = countIntegers(numbers);
  
    if (count === 0) {
      document.getElementById("result7").innerHTML = "Mảng không có số nguyên.";
    } else {
      document.getElementById("result7").innerHTML =
        "Mảng có " + count + " số nguyên.";
    }
  }
  
  
  // So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
  
  function comparePositiveNegative (){
    var input = document.getElementById("inputArray7").value;
    var numbers = input.split(",").map((num) => parseFloat(num.trim()));
    var positiveNumbers = 0 ;
    var negative  = 0 ;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveNumbers++;
      } else if (numbers[i] < 0) {
        negative++;
      }
    }
    const resultElement = document.getElementById("result8");
        if (positiveNumbers > negative) {
          resultElement.textContent = "Số lượng số dương nhiều hơn số lượng số âm.";
        } else if (positiveNumbers < negative) {
          resultElement.textContent = "Số lượng số âm nhiều hơn số lượng số dương.";
        } else {
          resultElement.textContent = "Số lượng số dương và số lượng số âm bằng nhau.";
        }
      }
  
  