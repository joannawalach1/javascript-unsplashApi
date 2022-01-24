async function fetchApi() {
    const API_KEY = "24535628-229b3f069e1ea73ddfc437f03";

    await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=travel&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showPhotos(data);
            createGrid();
            makeLayout();
        })

        .catch((err) => {
            console.log(err)
        });

    function createGrid() {
        const container = document.querySelector(".container");
        container.style.display = "grid";
        container.style.gridTemplateColumns = "20% 20% 20% 20%";
        container.style.gridTemplateRows = "20% auto auto auto auto";
        container.style.gridAutoFlow = "column";
        container.style.gridGap = "10px";
    }

    function makeLayout() {
        const container = document.querySelector(".container");
        const imageDiv = document.createElement("div");
        imageDiv.className = "imageDiv";
        //imageDiv.style.gridColumn = "1/span 2";
        container.appendChild(imageDiv);
    }

    function showPhotos(data) {
        const container = document.querySelector(".container");
        data.hits.forEach(item => {
            const image = document.createElement("img");
            image.src = item.webformatURL;
            image.style.gridColumn = "Math.floor(Math.random() * 10) + 1/Math.floor(Math.random() * 10) + 1";
            image.style.gridRow = "Math.floor(Math.random() * 10) + 1/Math.floor(Math.random() * 10) + 1";
            container.appendChild(image);
        })
    }
}
fetchApi();