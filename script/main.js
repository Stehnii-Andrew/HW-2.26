const block = document.querySelector('.container');

const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const html = "";

let func = async () => {
    const res = await axios.get(url);

    for (let i = 0; i < 50; i++) {
        block.insertAdjacentHTML("beforeend", `<img src="${res.data[i].thumbnailUrl}" alt="">`);
    }
}

func();