var app = new Vue({
    el: 'main',
    data:{
        indiceNumerico: 0,
        colore: 'blu',
        src: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2000px-Flag_of_Spain.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg'
        ],
        alt: [
            'spagna',
            'francia',
            'germania',
            'italia',
            'svizzera'
        ]
        
    },
    methods:{
        successivo(){
            this.indiceNumerico++;
            if (this.indiceNumerico == this.src.length) this.indiceNumerico = 0;
        },
        precedente(){
            this.indiceNumerico--;
            if (this.indiceNumerico < 0) this.indiceNumerico = this.src.length - 1;
        },
        scegliBandiera(i){
            this.indiceNumerico = i;
        },
        funzioneProva(e) {
            if (e.keyCode == 39) {
                this.successivo();
            } else if (e.keyCode == 37) {
                this.precedente();
            }
    }
    },
    mounted() {
        window.addEventListener('keyup', function(e){
            app.funzioneProva(e)
        });
    }
});

