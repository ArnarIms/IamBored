
let bored = new Vue({
    el: '#app-bored',
    data:function() {
        return {
            activity:null,
            color: 'green',
            getSoloData: false,
            myTodos: [],
        }
    },
    methods: {
        getData:function(){
            let apiPath = 'https://www.boredapi.com/api/activity';
            if(this.getSoloData) {
                apiPath += '?participants=1'
            }
            axios.get(apiPath).then(ret => {
                this.activity = ret.data;
                this.changeColor(ret.data.type);
                console.log(ret.data);
            });
        },
        changeColor: function(value){
            switch(value) {
                case 'education':
                    this.color = 'blue';
                    break;
                    case 'recreational':
                    this.color = 'pink';
                    break;
                    case 'social':
                    this.color = 'red';
                    break;
                    

            }
        },
        addTodo: function() {
            this.myTodos.push(this.activity);
        }
    }
})