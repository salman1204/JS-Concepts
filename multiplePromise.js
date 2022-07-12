const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise 1 resolved`)
  }, 3000)
})

const promise2 = Promise.resolve(`Promise 2 resolved`)

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

// Promise.all([promise1, promise2])
// .then(res => console.log(res))

Promise.race([promise1, promise2]).then((res) => console.log(res))
