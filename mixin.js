export default {
    data () {return {
        forms: [
            { 
            id: 1, 
            projectname: '5dfagagG', 
            startDate: '15/11/20', 
            endDate: '28/05/2021', 
            status: '100',
            answers:[
              {
              vraag1:null,
              vraag2:null,
              }
            ],
            remarks:[
              {
              vraag1:[{
                message:[{
                  text:null,
                  date:null,
                  sender:null
                }]
              }],
              vraag2:[{
                message:[{
                  text:null,
                  date:null,
                  sender:null
                }]
              }],
              }
            ]
            },
          ]
    }
},
    created: function () {
       console.log(this.forms)
    },
    methods: {
       displayMessage: function () {
          console.log("print from mixin")
       }
    }
 }