//Topic # 19

//Promise is basically to control your async code. We have two different phases of promises (resolve, reject)

console.log(1);

// setTimeout(() => {
//   console.log(2)
// },0)

// console.log(3)

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(2);
//     resolve();
//     reject("Error");
//   }, 0);
// });

// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const ids = [3000, 2000, 1000];
const promises = [];

const promiseForThread = (id, resolve, reject) => {
  setTimeout(() => {
    console.log();
    resolve(`Promise of id : ${id} got resolved.`);
  }, id);
};

ids.map((val) => {
  promises.push(
    new Promise((resolve, reject) => {
      promiseForThread(val, resolve, reject);
    })
  );
});

//Topic # 20

// Promise.all(promises).then((res) => {
//   console.log("🚀 ~ file: app.js ~ line 51 ~ Promise.all ~ res", res)
// })

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise one resolved");
  }, 500);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise two resolved");
  }, 2000);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise three resolved");
    // reject("Promise three rejected");
  }, 1000);
});

const data = [promiseOne, promiseTwo, promiseThree];

// Promise.all(data)
//   .then((res) => {
//     console.log("🚀 ~ file: app.js ~ line 75 ~ Promise.all ~ res", res);
//   })
//   .catch((err) => {
//     console.log("🚀 ~ file: app.js ~ line 76 ~ Promise.all ~ err", err);
//   });

// Promise.race(data).then((res) => {
//   console.log("🚀 ~ file: app.js ~ line 83 ~ Promise.race ~ res", res);
// });
