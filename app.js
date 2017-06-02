const Promise = require('bluebird');

const happy = false;


// ======================================
// BASIC PROMISE CREATION AND CONSUMPTION
// ======================================

// function greeting() {
//   return new Promise ((resolve,reject) => {
//     if (!happy) {
//       console.log('promise being rejected');
//       reject (new Error("Promise rejected"))
//     } else {
//       console.log('Promise being resolved');
//       rsolve('resolving promise')
//     }
//   })
// }

//creating a promise
greeting = () =>
  new Promise ((resolve,reject) => {
    if (!happy) {
      console.log('promise being rejected');
      reject (new Error("Promise rejected"))
    } else {
      console.log('Promise being resolved');
      rsolve('resolving promise')
    }
  })


//CONSUME
// greeting()
//   .then ((data) => data)
//   .catch((error) => error);


// ==================
//PROMISE CHAINING
// ==================

one = () =>
  new Promise((resolve, reject) => {
    resolve (console.log('found function one'))
  })

two = () =>
    new Promise((resolve, reject) => {
      resolve (console.log('found function two'))
    })

three = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve (console.log('found function three'))
        }, 5000);
      })

four = () =>
        new Promise((resolve, reject) => {
          resolve (console.log('found function four'))
        })

// one()
//   .then(() => two())
//   .then(() => three())
//   .then(() => four())
//   .catch(err => err)


// ===========
// Promise.all
// ===========

aone = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ('found function one')
    }, 3000);
  })

atwo = () =>
    new Promise((resolve, reject) => {
      resolve ('found function two')
    })

athree = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve ('found function three')
        }, 5000);
      })

afour = () =>
        new Promise((resolve, reject) => {
          resolve ('found function four')
        })

// Promise.all([aone(), atwo(), athree(), afour()])
//   .then((data) => console.log(data))
//   .catch((err) => err)


// =======================================
// CHAINING PROMISES AND PASSING DATA
// =======================================


makeArrayOfNumbers = () => {
  let arr = [];
  for (var i = 1; i < 31; i++) {
    arr.push(i);
  }
  return new Promise((resolve, reject) => {
    if (arr.length > 29) {
      resolve(arr)
    } else {
      reject (new Error("array must be greater than 29"))
    }
  })
}

getRandomNumberFromArray = (a) =>
  new Promise((resolve, reject) => {
    if (a) {
      const item = a[Math.floor(Math.random() * a.length)];
      resolve(item)
    } else {
      reject(new Error('Sorry did not get a new array'))
    }
  })


// makeArrayOfNumbers()
//   .then((data) => getRandomNumberFromArray(data))
//   .then ((result) => console.log("Your random number is: ", result))
//   .catch((error) => {
//     console.log(error);
//     error
//   })



// PromisfyAll(mongoose);
//
// app.get = (req, res) => {
//   Bear.find()
//     .then(data => res.json(data))
//     .catch(err => err)
// });


// ======================================
// buy iphone if we have money
// if we buy it, lets show it off...
// ======================================

const money = true;

purchaseIphone = () =>
  new Promise((resolve, reject) => {
    //if money make phone and resolve
    //else reject with error
    if (money) {
      const phone = {name: 'Iphone25', price: '$100,000' }
      resolve(phone)
    } else {
      reject(new Error('You do not have the funds to make this purchase'))
    }
  })


  showIphoneOff = (phone) =>
    new Promise ((resolve, reject) => {
      //if we get phone show message or something with ittem
      // if no phone send reject msg with error
      if (phone) {
        const msg = `Check out my new ${phone.name} it costs ${phone.price}`
        resolve(msg)
      } else {
        reject(new Error('You do not have an Iphone to show off'))
      }
    })


  //execute function

purchaseIphone()
.then((data) => showIphoneOff(data))
.then((bbkhb) => console.log(bbkhb))
.catch((error) => {
  console.log(error);
  error
})
