const firebaseConfig = {
  apiKey: "AIzaSyCQZJVcejjvB0jPG7_rJbas2yO1MTAZB5c",
  authDomain: "batch-5-aeaec.firebaseapp.com",
  projectId: "batch-5-aeaec",
  storageBucket: "batch-5-aeaec.appspot.com",
  messagingSenderId: "360570775501",
  appId: "1:360570775501:web:edc5f279449a38f13c0684",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const addItem = () => {
  const item = document.querySelector("#item").value;
  if (!item) return alert("Enter item!");

  firestore
    .collection("items")
    .add({
      //always generate a unique document
      item,
    })
    .then((res) => {
      console.log("Item added : ", res);
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 25 ~ firestore.collection ~ err",
        err
      );
    });
};

const getAllData = () => {
  firestore
    .collection("items")
    .get() //return always an array
    .then((res) => {
      // console.log(res);
      res.forEach((doc) => {
        console.log(doc.data());
      });
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 40 ~ firestore.collection ~ err",
        err
      );
    });
};

//collection => doc => collection => doc => collection => doc =====> (right)
//collection => collection => doc => doc ======> (wrong)

const getSingleData = () => {
  firestore
    .collection("items")
    .doc("h9Mjl040D6DBzTF4N4dR")
    .get()
    .then((doc) => {
      console.log(doc.data());
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 62 ~ firestore.collection ~ err",
        err
      );
    });
};

const addDocumentCollection = () => {
  const docId = document.querySelector("#docId").value;
  const type = document.querySelector("#type").value;

  if (!docId) return alert("Enter document id!");
  if (!type) return alert("Enter tyoe!");

  firestore
    .collection("items")
    .doc(docId)
    .collection("types")
    .add({
      type,
    })
    .then((res) => {
      console.log("Type added : ", res);
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 86 ~ firestore.collection ~ err",
        err
      );
    });
};

const getNestedCollection = () => {
  firestore
    .collection("items")
    .doc("W9TGGTVp7Inf0dC2iDSs")
    .collection("types")
    .get() 
    .then((res) => {
      res.forEach((doc) => {
        console.log(doc.data());
      });
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 105 ~ firestore.collection ~ err",
        err
      );
    });
};

const getNestedDocument = () => {
  firestore
    .collection("items")
    .doc("W9TGGTVp7Inf0dC2iDSs")
    .collection("types")
    .doc("EAvVgwiu5Pp4mkGYkxGl")
    .get()
    .then((doc) => {
      console.log(doc.data());
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 122 ~ firestore.collection ~ err",
        err
      );
    });
};
