let images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
let WithDublicates = [...images, ...images];
let count = 0;
let steps = 0;
let first;
let second;
stepsCount.innerText = `steps - ${steps}`
WithDublicates.sort(() => Math.random() - 0.5)


    let audio = new Audio("/audio/05. Title - Menu Legacy.mp3")
    audio.loop = true
    window.onclick = function(){
        audio.play()
    }


for (let i = 0; i < WithDublicates.length; i++) {
    cards_center.innerHTML += `
        <div id="card" data-number='${WithDublicates[i].slice(0,1)}' class="img">
            <div class="front" style="background-image: url('images/front.svg')"></div>
            <div class="back" style="background-image: url('images/${WithDublicates[i]}')"></div>
        </div>
    `
}
cards_center.addEventListener('click', function (e) {
    let parent = e.target.parentElement;
    if (parent.classList.contains('img') && !parent.classList.contains('active')) {

        count <= 2 && count++
        
        if (count === 1) {
            first = parent
            parent.classList.add('active')
            steps++
            stepsCount.innerText = `steps - ${steps}`
        }
        if (count === 2) {
            second = parent
            parent.classList.add('active')
            steps++
            if (first.dataset.number !== second.dataset.number) {
                setTimeout(() => {
                    first.classList.remove('active')
                    second.classList.remove('active')
                    
                    count = 0;
                }, "700")
            }
            
            stepsCount.innerText = `steps - ${steps}`
            if (first.dataset.number === second.dataset.number) {
                first.classList.add('guessed')
                second.classList.add('guessed')
                count = 0;
                let cards = Array.from(document.querySelectorAll('.img'))
                if (cards.every(x => x.classList.contains('guessed'))) {
                    setTimeout(() => {
                        alert(`You win (steps - ${steps})`)
                        location.reload();
                    }, "500")
                    
                }
            }
            
        }
        
    }
})