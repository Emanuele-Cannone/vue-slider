var app = new Vue({
    el: '#box-bandiera',
    data:{
        indiceNumerico: 0,
        message: 'indiceNumerico',
        src: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2000px-Flag_of_Spain.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
            'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1200px-Flag_of_Italy.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg'
        ]
    },
    methods:{
        successivo(){
            this.indiceNumerico++;
        }
    },
    
});
