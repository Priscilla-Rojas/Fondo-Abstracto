const container = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}
function generate(){
    anime({
        targets: '.block',
        translateX : function (){
            return anime.random(-700, 700)
        },
        translateY : function(){
            return anime.random(-700, 700)
        },
        scale: function(){
            return anime.random(1,5)
        }
    })
}