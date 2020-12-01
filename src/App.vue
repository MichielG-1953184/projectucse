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
            question:"Wie is of zijn de contactpersonen binnen UHasselt?",
            help:"vb naam promotor, naam projectleider,...",
            type:"text",
            data:null
          },
          {
            question:"Wie bepaalt de doelstellingen van het onderzoek/project?",
            help:"",
            type:"checkboxes",
            data:[
              "Dit wordt binnen UHasselt bepaald",
              "Je bepaalt dit samen met iemand anders buiten UHasselt",
              "Je voert het uit in opdracht van iemand buiten UHasselt"
            ]
          }
        ]
      },
      {
        title:"Persoonsgegevens",
        questions:[
          {
            question:"Worden er persoonsgegevens verwerkt?",
            help:"Persoonsgegevens zijn alle data waarmee een natuurlijk persoon zowel direct als indirect geïdentificeerd kan worden.",
            type:"radiobuttons",
            data:[
              "Ja",
              "Neen"
            ]
          },
          {
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
            ]
          },
          {
            question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
            help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
            type:"textarea",
            data:null
          }
        ]
      },
      {
        title:"Rechtmatigheid van de verwerking",
        questions:[
          {
            question:"Rechtsbasis",
            help:"",
            type:"checkboxes",
            data:[
              "Het onderzoek wordt gevoerd in het algemeen belang, dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
              "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
              "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
              "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
              "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
            ]
          }
        ]
      },
      {
        title:"Verwerkingsverantwoordelijke versus verwerker",
        questions:[
          {
            question:"Hoe worden de persoonsgegevens verwerkt?",
            help:"",
            type:"checkboxes",
            data:[
              "UHasselt regelt alles m.b.t de verwerking van de persoonsgegevens (vb eigenenquete).",
              "UHasselt ontvangt persoonsgegevens van een derde partij en verwerkt die verder (vb contractonderzoek).",
              "UHasselt ontvangt persoonsgegevens van een derde partij en verwerkt die verder en deelt die vervolgens met andere partijen",
              "UHasselt verwerkt persoonsgegevens samen met andere partners (vb consortium)",
              "UHasselt verwerkt de persoonsgegevens op locatie"
            ]
          },
          {
            question:"Worden persoonsgegevens gedeeld met personen/ instanties binnen of buiten de EU?",
            help:"",
            type:"checkboxes",
            data:[
              "Binnen de EU",
              "Buiten de EU"
            ]
          }
        ]
      },
      {
        title:"Technische en organisatorische maatregelen",
        questions:[
          {
            question:"Waar worden de gegevens bewaard?",
            help:"",
            type:"text",
            data:null
          },
          {
            question:"Hoe worden de gegevens uitgewisseld?",
            help:"",
            type:"text",
            data:null
          },
          {
            question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
            help:"",
            type:"text",
            data:null
          },
          {
            question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
            help:"",
            type:"text",
            data:null
          },
          {
            question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
            help:"",
            type:"text",
            data:null
          }
        ]
      },
      {
        title:"Varia",
        questions:[
          {
            question:"Indien u nog opmerkingen en/of vragen hebt, kan u die hier invullen",
            help:"",
            type:"text",
            data:null
          }
        ]
      }
    ],
    forms: [
        {
          id: 1,
          projectname: "5G",
          description: "Onderzoek rondom 5G",
          typeAgreement: "test",
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
          startDate: "15/11/20",
          endDate: "28/05/2021",
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