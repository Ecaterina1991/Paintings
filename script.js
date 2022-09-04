const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 3 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img4.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 4 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img5.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 4 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img6.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 6 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img7.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 7 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img8.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 8 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img9.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 9 loaded');
//     return wait(3);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img10.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 10 loaded');
//     return wait(3);
//   })
//   .catch(err => console.error(err));

loadAndPause = async function () {
  try {
    let img = await createImage('img/img1.jpg');
    await wait(3);
    img.style.display = 'none';

    img = await createImage('img/img2.jpg');
    await wait(3);
    img.style.display = 'none';

    img = await createImage('img/img3.jpg');
    await wait(3);
    img.style.display = 'none';
    img = await createImage('img/img4.jpg');
    await wait(3);
    img.style.display = 'none';

    img = await createImage('img/img5.jpg');
    await wait(3);
    img.style.display = 'none';
    img = await createImage('img/img6.jpg');
    await wait(3);
    img.style.display = 'none';

    img = await createImage('img/img7.jpg');
    await wait(3);
    img.style.display = 'none';
    img = await createImage('img/img8.jpg');
    await wait(3);
    img.style.display = 'none';

    img = await createImage('img/img9.jpg');
    await wait(3);
    img.style.display = 'none';

    img = await createImage('img/img10.jpg');
    await wait(3);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

loadAndPause();
