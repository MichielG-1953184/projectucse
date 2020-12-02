<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/overview">Overview</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#searchBalkForm {
  margin:auto;
  margin-left:6px;
}

.md-primary {
    background-color: #2b2e33 !important; 
}

.centerFromHeader {
  display: flex;
  width: 50%;
  margin: auto;
  /* margin-top:15px;  */
}
.iconWithText {
  text-align: center;
  width: 100px;
  margin-top: 15px;
}

.iconWithText md-icon {
  display: block;
  margin: auto;
  text-align: center;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


<script>
//import Header from './views/Header.vue'

export default {
  name: 'App',

  data() { return{
    newMessagesDPO: 5,
    newMessagesResearcher:1,
    accounts: [
      {
        email:"michiel.guilliams@student.uhasselt.be",
        password:"michiel",
        dpo:false
      },
      {
        email:"steffen.lenaerts@student.uhasselt.be",
        password:"michiel",
        dpo:false
      },
      {
        email:"dpo@uhasselt.be",
        password:"dpo",
        dpo:true 
      },
    ],
    questionsPerTitle:[
      {
        title:"Projectuitvoering",
        questions:[
          {
            id:"1",
            question:"Wie is of zijn de contactpersonen binnen UHasselt?",
            help:"vb naam promotor, naam projectleider,...",
            type:"text",
            data:null,
            answer:null
          },
          {
            id:"2",
            question:"Wie bepaalt de doelstellingen van het onderzoek/project?",
            help:"",
            type:"checkboxes",
            data:[
              "Dit wordt binnen UHasselt bepaald",
              "Je bepaalt dit samen met iemand anders buiten UHasselt",
              "Je voert het uit in opdracht van iemand buiten UHasselt"
            ],
            answer:[]
          }
        ]
      },
      {
        title:"Persoonsgegevens",
        questions:[
          {
            id:"3",
            question:"Worden er persoonsgegevens verwerkt?",
            help:"Persoonsgegevens zijn alle data waarmee een natuurlijk persoon zowel direct als indirect geïdentificeerd kan worden.",
            type:"radiobuttons",
            data:[
              "Ja",
              "Neen"
            ],
            answer:null
          },
          {
            id:"checkbox4",
            question:"Wiens persoonsgegevens onderzoek / verwerk je?",
            help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,...",
            type:"checkboxes",
            data:[
              "Identiteitsgegevens : (eID, Rijksregisternummer, personeels/studenten nummer, naam, elektronische identificatie (login),...",
              "Locatie gegevens: (Adres, IP adres, GPS locatie,...)",
              "Gezinssituatie (Kinderen, familiale situatie,...)",
              "Leefwereld (Leefgewoonte, vrijetijdsbesteding,...)",
              "Onderwijs (Curriculum, opleiding, resultaten, evaluaties,proefwerk, thesis,...)",
              "Loopbaan (Academisch dossier, sollicitaties, evaluaties, proeven)",
              "Financiële gegevens (Lonen, facturatiegegevens,..)",
              "Media (Foto's, video, audio, berichten op social media,...)",
              "Other:"
            ],
            answer:[]
          },
          {
            id:"5",
            question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
            help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
            type:"textarea",
            data:null,
            answer:null
          }
        ]
      },
      {
        title:"Rechtmatigheid van de verwerking",
        questions:[
          {
            id:"6",
            question:"Rechtsbasis",
            help:"",
            type:"checkboxes",
            data:[
              "Het onderzoek wordt gevoerd in het algemeen belang, dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
              "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
              "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
              "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
              "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
            ],
            answer:[]
          }
        ]
      },
      {
        title:"Verwerkingsverantwoordelijke versus verwerker",
        questions:[
          {
            id:"7",
            question:"Hoe worden de persoonsgegevens verwerkt?",
            help:"",
            type:"checkboxes",
            data:[
              "UHasselt regelt alles m.b.t de verwerking van de persoonsgegevens (vb eigenenquete).",
              "UHasselt ontvangt persoonsgegevens van een derde partij en verwerkt die verder (vb contractonderzoek).",
              "UHasselt ontvangt persoonsgegevens van een derde partij en verwerkt die verder en deelt die vervolgens met andere partijen",
              "UHasselt verwerkt persoonsgegevens samen met andere partners (vb consortium)",
              "UHasselt verwerkt de persoonsgegevens op locatie"
            ],
            answer:[]
          },
          {
            id:"8",
            question:"Worden persoonsgegevens gedeeld met personen/ instanties binnen of buiten de EU?",
            help:"",
            type:"checkboxes",
            data:[
              "Binnen de EU",
              "Buiten de EU"
            ],
            answer:[]
          }
        ]
      },
      {
        title:"Technische en organisatorische maatregelen",
        questions:[
          {
            id:"9",
            question:"Waar worden de gegevens bewaard?",
            help:"",
            type:"text",
            data:null,
            answer:null
          },
          {
            id:"10",
            question:"Hoe worden de gegevens uitgewisseld?",
            help:"",
            type:"text",
            data:null,
            answer:null
          },
          {
            id:"11",
            question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
            help:"",
            type:"text",
            data:null,
            answer:null
          },
          {
            id:"12",
            question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
            help:"",
            type:"text",
            data:null,
            answer:null
          },
          {
            id:"13",
            question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
            help:"",
            type:"text",
            data:null,
            answer:null
          }
        ]
      },
      {
        title:"Varia",
        questions:[
          {
            id:"14",
            question:"Indien u nog opmerkingen en/of vragen hebt, kan u die hier invullen",
            help:"",
            type:"text",
            data:null,
            answer:null
          }
        ]
      }
    ],
    forms: [
        {
          id: 1,
          projectname: "5G",
          projectnummer: "abcdefghijklmnop",
          description: "Onderzoek rondom 5G",
          typeAgreement: [],
          beginDate: "12/12/2020",
          endDate: "23/7/2021",
          noDateReason: "",
          teamMembers: [
            {
              email: "michiel.guilliams@student.uhasselt.be",
              write: true,
            },
            {
              email: "steffen.lenaerts@student.uhasselt.be",
              write: true,
            },
          ],
          status: "100",
          answers: [
            {
              id: 1,
              question: "testvraag?",
              answer: "testantwoord",
              type: "text",
            },
            {
              id: 2,
              question: "Zijn er externe personen betrokken?",
              answer: true,
              type: "checkbox",
            },
          ],
          remarks: [
            {
              vraag1: [
                {
                  message: [
                    {
                      text: null,
                      date: null,
                      sender: null,
                    },
                  ],
                },
              ],
            },
            {
              vraag2: [
                {
                  message: [
                    {
                      text: null,
                      date: null,
                      sender: null,
                    },
                  ],
                }],
            }],
        },
      ],
    }
  }
}
</script>