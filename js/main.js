// call api from: https://newsapi.org/


const HeaderOnClickedHandler = () => {
    let path = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
    let url = path + document.getElementById("api_key").value
    let names = document.getElementById("test")

    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(data => {
            for (let atk of data.articles) {
                let news = document.createElement('h3');
                news.innerHTML = `${atk.source.name}`
                names.appendChild(news)
                // console.log(news)
            }
        })
        .catch(err => console.log(err))

}
