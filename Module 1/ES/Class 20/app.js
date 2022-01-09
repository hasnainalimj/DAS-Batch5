//Topic # 13

// function call(){}
// var call = function() {}

//Arrow function
// const sayHi = () => {}

//The difference b/w arrow and simple is function is just the game of scope.

function sayHi() {
  console.log("This from simple function", this);
}

// sayHi()

const sayBye = () => {
  console.log("This from arrow function", this);
};

// sayBye()

const data = {
  value: "Xyz",
  sayHi: function () {
    console.log("Data => Simple => This", this);
  },
  sayBye: () => {
    console.log("Data => Arrow => This", this);
  },
};

// data.sayHi()
// data.sayBye()

//Topic # 14

const sum = (num1 = 100, num2 = 10) => {
  console.log(num1 + num2);
};

// sum(2,2)
// sum(2)
// sum(undefined,2)

//Topic # 15

// fetch //used to call/connect your front-end with your server/back-end
// API = Application Programmable Interface
// Connect client-side with server-side
// Fetch is a keyword that’s means to request and it’s behavior is asynchronous.
// Default METHOD is GET

//Get
// fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
//   return res.json()
// }).then((data) => {
//   console.log(data)
// })

// fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
//   return res.json()
// }).then((data) => {
//   console.log(data)
//   const newData = data.filter((val) => val.completed)
//   console.log("🚀 ~ file: app.js ~ line 67 ~ fetch ~ newData", newData)
// })

//Topic # 16

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // console.log("🚀 ~ file: app.js ~ line 73 ~ getData ~ res", res)
    const data = await res.json();
    console.log("🚀 ~ file: app.js ~ line 74 ~ getData ~ data", data);
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 75 ~ getData ~ error", error);
  }
};

// getData();

const login = () => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      country_code: "PK",
      phone: "1232132132",
      device_type: "android",
      imei: "3199218390281903",
    }),
  };

  fetch("api/v1/app/login", options)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log("🚀 ~ file: app.js ~ line 95 ~ fetch ~ result", result);
    });
};


const getLink = async (fileName = '1.0.3_1f2ac57_SEC123') => {
  const res = await fetch(`https://dev.api.jogo.ai/jogo/api/v1/app/get-file?version_number=${fileName}`)
  const file = await res.json()
  console.log("🚀 ~ file: app.js ~ line 111 ~ getLink ~ file", file)
}

// getLink('1.0.3_1f2ac57_SEC')

