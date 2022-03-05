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

// const signup = () => {
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#pass").value;

//   if (!email) return alert("enter your email!");
//   if (!password) return alert("enter your password!");

//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((res) => {
//       console.log("User signup successfully : ", res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const signup = async () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pass").value;

  if (!email) return alert("enter your email!");
  if (!password) return alert("enter your password!");

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    console.log("🚀 ~ file: app.js ~ line 41 ~ signup ~ res", res);
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 42 ~ signup ~ error", error);
  }
};

// const signin = () => {
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#pass").value;

//   if (!email) return alert("enter your email!");
//   if (!password) return alert("enter your password!");

//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then((res) => {
//       console.log("User login successfully : ", res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const signin = async () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#pass").value;

  if (!email) return alert("enter your email!");
  if (!password) return alert("enter your password!");

  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    console.log("🚀 ~ file: app.js ~ line 73 ~ signin ~ res", res);
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 74 ~ signin ~ error", error);
  }
};

const checkSession = async () => {
  auth.onAuthStateChanged((res) => {
    console.log("User online : ", res);
  });
};

const updateEmail = () => {
  const email = document.querySelector("#email").value;
  if (!email) return alert("enter your email!");

  auth.onAuthStateChanged((user) => {
    console.log("User online : ", user);

    if (user) {
      user
        .updateEmail(email)
        .then(() => {
          console.log("User email updated!");
        })
        .catch((err) => {
          console.log(
            "🚀 ~ file: app.js ~ line 96 ~ user.updateEmail ~ err",
            err
          );
        });
    }
  });
};

const verifyEmail = () => {
  auth.onAuthStateChanged((user) => {
    console.log("User online : ", user);

    if (user) {
      user
        .sendEmailVerification()
        .then(() => {
          console.log("Please check your email");
        })
        .catch((err) => {
          console.log(
            "🚀 ~ file: app.js ~ line 119 ~ auth.onAuthStateChanged ~ err",
            err
          );
        });
    }
  });
};

const changePassword = () => {
  const password = document.querySelector("#pass").value;
  if (!password) return alert("Enter your new password");

  auth.onAuthStateChanged((user) => {
    if (user) {
      user
        .updatePassword(password)
        .then(() => {
          console.log("Your password has been changed");
        })
        .catch((err) => {
          console.log(
            "🚀 ~ file: app.js ~ line 137 ~ user.updatePassword ~ err",
            err
          );
        });
    }
  });
};

const passResetEmail = () => {
  const email = document.querySelector("#email").value;
  if (!email) return alert("enter your email!");
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log("Email sended");
    })
    .catch((err) => {
      console.log(
        "🚀 ~ file: app.js ~ line 155 ~ auth.sendPasswordResetEmail ~ err",
        err
      );
    });
};

const deleteAccount = () => {
  const user = firebase.auth().currentUser;
  console.log("Current Login User: ", user);
  if (user) {
    user.delete().then(() => {
      console.log("bye bye user");
    });
  } else {
    console.log("User is not logged in!");
  }
};

const signOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Logout");
    })
    .catch((err) => {
      console.log("🚀 ~ file: app.js ~ line 182 ~ user.signOut ~ err", err);
    });
};
