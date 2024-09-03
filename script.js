document.querySelector('.showall').addEventListener('click', function () {
    const cardContainer = document.querySelector('.cardContainer');

    // Additional artist cards to be added
    const additionalCards = `
        <div class="card">
            <img src="artistsImg/7.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Atif Aslam</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/8.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Vishal-Shekhar</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/9.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Udit Narayan</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/10.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Karan Aujla</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/11.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Darshan Raval</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/12.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Diljit Dosanjh</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/13.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Badshah</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/14.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>KK</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/15.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Shreya Ghoshal</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/16.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Sonu Nigam</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/17.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Sachet Tandon</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/18.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Shankar Mahadevan</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/19.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Tanishk Bagchi</h2>
            <p>Artist</p>
        </div>
        <div class="card">
            <img src="artistsImg/20.jpeg" alt="">
            <span class="play">
                <img src="svgs/play.svg" alt="">
            </span>
            <h2>Jasleen Royal</h2>
            <p>Artist</p>
        </div>
    `;

    // Append the additional cards to the card container
    cardContainer.innerHTML += additionalCards;

    // Optionally, you can remove the "show all" button after the cards are added
    this.style.display = 'none';

    cardContainer.style.overflowY = 'scroll'
    cardContainer.style.maxHeight = '58vh'; 
});

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href) 
        }
    }
    return songs //return promise
}

async function main() {
    let songs = await getSongs()
    console.log(songs)

    var audio = new Audio(songs[6]);
    console.log(songs[6])

    document.getElementById('playButton').addEventListener('click', () => {
        audio.play();
        audio.addEventListener("loadeddata", () => {
            console.log(audio.duration, audio.currentSrc, audio.currentTime)
        })
    }) 
}  
main() 