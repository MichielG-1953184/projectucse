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
a p{
  color:white;
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
    accounts: [
      {
        email:"michiel.guilliams@student.uhasselt.be",
        password:"michiel",
        dpo:false,
        inUse:false,
        faculty:"IT",
        notifications:[ ]
      },
      {
        email:"steffen.lenaerts@student.uhasselt.be",
        password:"steffen",
        dpo:false,
        inUse:false,
        faculty:"IT",
        notifications:[
          // {
          //   notifMessage:"test",
          //   relatedFormId:1
          // }
          // ,
          //  {
          //   notifMessage:"tddgest",
          //   relatedFormId:"1"
          // }
        ]
      },
      {
        email:"maarten.marts@uhasselt.be",
        password:"maarten",
        dpo:false,
        inUse:false,
        faculty:"IT",
        notifications:[ ]
      },
      {
        email:"jimmy.merts@uhasselt.be",
        password:"jimmy",
        dpo:false,
        inUse:false,
        faculty:"MARKETING",
        notifications:[ ]
      },
      {
        email:"tina.voorts@uhasselt.be",
        password:"tina",
        dpo:false,
        inUse:false,
        faculty:"HEALTH",
        notifications:[ ]
      },
      {
        email:"tom.deleier@uhasselt.be",
        password:"tom",
        dpo:false,
        inUse:false,
        faculty:"HEALTH",
        notifications:[ ]
      },
      {
        email:"dpo@uhasselt.be",
        password:"dpo",
        dpo:true,
        inUse:false,
        faculty:"none",
        notifications:[ ]
      },
    ],
    standardQuestions:{
      projectname:{
        question:"Projectname:",
        help:"",
        data:null,
        answer:"",
        remarks:[],
        review:"",
      },
      projectnummer:{
        question:"Projectnummer:",
        help:"",
        data:null,
        answer:"",
        remarks:[],
        review:""
      },
      description:{
        question:"description:",
        help:"",
        data:null,
        answer:"",
        remarks:[],
        review:""
      },
      typeAgreement:{
        question:"type agreement:",
        help:"",
        data:[
              "Project",
              "MTA (Material Transfer Agreement)",
              "CTA (Clinical Trial Agreement)",
              "DSA (Data Sharing Agreement)",
              "Raamovereenkomst",
              "Ander contract",
              "Niet van toepassing"
        ],
        answer:[],
        remarks:[],
        review:"",
      },
      beginDate:{
        question:"begin date:",
        help:"",
        data:null,
        answer:"",
        remarks:[],
        review:"",
      },
      endDate:{
        question:"end date:",
        help:"",
        data:null,
        answer:"",
        remarks:[],
        review:"",
      },
      noDateReason:{
        question:"Reason no date:",
        help:"Reason why you didn't fill in the begin and end date",
        data:null,
        answer:"",
        remarks:[],
        review:"",
      },
    },
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
            answer:null,
            remarks:[],
            review:"",
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
            answer:[],
            remarks:[],
            review:"",
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
            answer:null,
            remarks:[],
            review:"",
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
            answer:[],
            remarks:[],
            review:"",
          },
          {
            id:"5",
            question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
            help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
            type:"textarea",
            data:null,
            answer:null,
            remarks:[],
            review:"",
          }
        ]
      },
      {
        title:"Rechtmatigheid van de verwerking",
        questions:[
          {
            id:"6",
            question:"Rechtsbasis",
            help:"algemeen belang: dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
            type:"checkboxes",
            data:[
              "Het onderzoek wordt gevoerd in het algemeen belang",
              "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
              "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
              "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
              "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
            ],
            answer:[],
            remarks:[],
            review:"",
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
            answer:[],
            remarks:[],
            review:"",
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
            answer:[],
            remarks:[],
            review:"",
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
            answer:null,
            remarks:[],
            review:"",
          },
          {
            id:"10",
            question:"Hoe worden de gegevens uitgewisseld?",
            help:"",
            type:"text",
            data:null,
            answer:null,
            remarks:[],
            review:"",
          },
          {
            id:"11",
            question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
            help:"",
            type:"text",
            data:null,
            answer:null,
            remarks:[],
            review:"",
          },
          {
            id:"12",
            question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
            help:"",
            type:"text",
            data:null,
            answer:null,
            remarks:[],
            review:"",
          },
          {
            id:"13",
            question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
            help:"",
            type:"text",
            data:null,
            answer:null,
            remarks:[],
            review:"",
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
            answer:null,
            remarks:[],
            review:"",
          }
        ]
      }
    ],


    forms: [
        {
          id: 1,
          status: "95",
          reviewstatus: "In Progress",
          faculty: "IT",
          teamMembers: [
            {
              email: "michiel.guilliams@student.uhasselt.be",
              write: false,
            },
            {
              email:"maarten.marts@uhasselt.be",
              write: true,
            }
          ],

          standardAnswers:{
            projectname:{
              question:"projectname:",
              help:"",
              data:null,
              answer:"5G",
              remarks:[],
              review:"",
            },
            projectnummer:{
              question:"projectnummer:",
              help:"",
              data:null,
              answer:"abcdefghijklmnop123",
              remarks:[],
              review:"",
            },
            description:{
              question:"description:",
              help:"",
              data:null,
              answer:"Onderzoek rondom 5G",
              remarks:[],
              review:"",
            },
            typeAgreement:{
              question:"type agreement:",
              help:"",
              data:[
                    "Project",
                    "MTA (Material Transfer Agreement)",
                    "CTA (Clinical Trial Agreement)",
                    "DSA (Data Sharing Agreement)",
                    "Raamovereenkomst",
                    "Ander contract",
                    "Niet van toepassing"
              ],
              answer:["Project"],
              remarks:[],
              review:"",
            },
            beginDate:{
              question:"begin date:",
              help:"",
              data:null,
              answer:"2020-12-18",
              remarks:[],
              review:"",
            },
            endDate:{
              question:"end date:",
              help:"",
              data:null,
              answer:"2021-05-15",
              remarks:[],
              review:"",
            },
            noDateReason:{
              question:"Reason no date:",
              help:"Reason why you didn't fill in the begin and end date",
              data:null,
              answer:"",
              remarks:[],
              review:"",
            }
          },
          answers:[
          {
              title:"Projectuitvoering",
              questions:[
                {
                  id:"1",
                  question:"Wie is of zijn de contactpersonen binnen UHasselt?",
                  help:"vb naam promotor, naam projectleider,...",
                  type:"text",
                  data:null,
                  answer:"maarten marts",
                  remarks:[],
                  review:"",
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
                  answer:["Dit wordt binnen UHasselt bepaald"],
                  remarks:[],
                  review:"",
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
                  answer:"Ja",
                  remarks:[],
                  review:"",
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
                  answer:["Locatie gegevens: (Adres, IP adres, GPS locatie,...)"],
                  remarks:[],
                  review:"",
                },
                {
                  id:"5",
                  question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
                  help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
                  type:"textarea",
                  data:null,
                  answer:"locatie: adress",
                  remarks:[],
                  review:"",
                }
              ]
            },
            {
              title:"Rechtmatigheid van de verwerking",
              questions:[
                {
                  id:"6",
                  question:"Rechtsbasis",
                  help:"algemeen belang: dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
                  type:"checkboxes",
                  data:[
                    "Het onderzoek wordt gevoerd in het algemeen belang",
                    "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
                    "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
                    "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
                    "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
                  ],
                  answer:["Het onderzoek wordt gevoerd in het algemeen belang"],
                  remarks:[],
                  review:"",
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
                  answer:["UHasselt regelt alles m.b.t de verwerking van de persoonsgegevens (vb eigenenquete)."],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:"Database uhasselt",
                  remarks:[],
                  review:"",
                },
                {
                  id:"10",
                  question:"Hoe worden de gegevens uitgewisseld?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:"via email",
                  remarks:[],
                  review:"",
                },
                {
                  id:"11",
                  question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:"Het onderzoekteam",
                  remarks:[],
                  review:"",
                },
                {
                  id:"12",
                  question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:"niemand",
                  remarks:[],
                  review:"",
                },
                {
                  id:"13",
                  question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:"2 jaar",
                  remarks:[],
                  review:"",
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
                  answer:"geen opmerkingen",
                  remarks:[],
                  review:"",
                }
              ]
            }
          ],
        },
        {
          id: 2,
          status: "50",
          reviewstatus: "In Progress",
          faculty: "IT",
          teamMembers: [
            {
              email: "steffen.lenaerts@student.uhasselt.be",
              write: false,
            },
            {
              email: "tom.deleier@uhasselt.be",
              write: true,
            },
            {
              email: "tina.voorts@uhasselt.be",
              write: true,
            },
            {
              email:"maarten.marts@uhasselt.be",
              write: true,
            }
          ],

          standardAnswers:{
            projectname:{
              question:"projectname:",
              help:"",
              data:null,
              answer:"Research Augmented reality",
              remarks:[],
              review:"",
            },
            projectnummer:{
              question:"projectnummer:",
              help:"",
              data:null,
              answer:"abcdefghijklmnopfgdfg",
              remarks:[],
              review:"",
            },
            description:{
              question:"description:",
              help:"",
              data:null,
              answer:"Onderzoek rondom augmented reality",
              remarks:[],
              review:"",
            },
            typeAgreement:{
              question:"type agreement:",
              help:"",
              data:[
                    "Project",
                    "MTA (Material Transfer Agreement)",
                    "CTA (Clinical Trial Agreement)",
                    "DSA (Data Sharing Agreement)",
                    "Raamovereenkomst",
                    "Ander contract",
                    "Niet van toepassing"
              ],
              answer:["Project"],
              remarks:[],
              review:"",
            },
            beginDate:{
              question:"begin date:",
              help:"",
              data:null,
              answer:"2021-06-18",
              remarks:[],
              review:"",
            },
            endDate:{
              question:"end date:",
              help:"",
              data:null,
              answer:"2021-11-12",
              remarks:[],
              review:"",
            },
            noDateReason:{
              question:"Reason no date:",
              help:"Reason why you didn't fill in the begin and end date",
              data:null,
              answer:"",
              remarks:[],
              review:"",
            }
          },
          answers:[
          {
              title:"Projectuitvoering",
              questions:[
                {
                  id:"1",
                  question:"Wie is of zijn de contactpersonen binnen UHasselt?",
                  help:"vb naam promotor, naam projectleider,...",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
                },
                {
                  id:"5",
                  question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
                  help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
                  type:"textarea",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            },
            {
              title:"Rechtmatigheid van de verwerking",
              questions:[
                {
                  id:"6",
                  question:"Rechtsbasis",
                  help:"algemeen belang: dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
                  type:"checkboxes",
                  data:[
                    "Het onderzoek wordt gevoerd in het algemeen belang",
                    "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
                    "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
                    "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
                    "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
                  ],
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"10",
                  question:"Hoe worden de gegevens uitgewisseld?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"11",
                  question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"12",
                  question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"13",
                  question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            }
          ],
        },
        {
          id: 3,
          status: "50",
          reviewstatus: "In Progress",
          faculty: "IT",
          teamMembers: [
            {
              email: "michiel.guilliams@student.uhasselt.be",
              write: true,
            },
            {
              email: "tom.deleier@uhasselt.be",
              write: true,
            },
          ],

          standardAnswers:{
            projectname:{
              question:"projectname:",
              help:"",
              data:null,
              answer:"Quic security",
              remarks:[],
              review:"",
            },
            projectnummer:{
              question:"projectnummer:",
              help:"",
              data:null,
              answer:"abcdefghijklmnopfgdfg",
              remarks:[],
              review:"",
            },
            description:{
              question:"description:",
              help:"",
              data:null,
              answer:"Onderzoek rondom Quic security",
              remarks:[],
              review:"",
            },
            typeAgreement:{
              question:"type agreement:",
              help:"",
              data:[
                    "Project",
                    "MTA (Material Transfer Agreement)",
                    "CTA (Clinical Trial Agreement)",
                    "DSA (Data Sharing Agreement)",
                    "Raamovereenkomst",
                    "Ander contract",
                    "Niet van toepassing"
              ],
              answer:["Project"],
              remarks:[],
              review:"",
            },
            beginDate:{
              question:"begin date:",
              help:"",
              data:null,
              answer:"2020-12-24",
              remarks:[],
              review:"",
            },
            endDate:{
              question:"end date:",
              help:"",
              data:null,
              answer:"2021-01-30",
              remarks:[],
              review:"",
            },
            noDateReason:{
              question:"Reason no date:",
              help:"Reason why you didn't fill in the begin and end date",
              data:null,
              answer:"",
              remarks:[],
              review:"",
            }
          },
          answers:[
          {
              title:"Projectuitvoering",
              questions:[
                {
                  id:"1",
                  question:"Wie is of zijn de contactpersonen binnen UHasselt?",
                  help:"vb naam promotor, naam projectleider,...",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
                },
                {
                  id:"5",
                  question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
                  help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
                  type:"textarea",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            },
            {
              title:"Rechtmatigheid van de verwerking",
              questions:[
                {
                  id:"6",
                  question:"Rechtsbasis",
                  help:"algemeen belang: dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
                  type:"checkboxes",
                  data:[
                    "Het onderzoek wordt gevoerd in het algemeen belang",
                    "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
                    "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
                    "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
                    "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
                  ],
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"10",
                  question:"Hoe worden de gegevens uitgewisseld?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"11",
                  question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"12",
                  question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"13",
                  question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            }
          ],
        },
        {
          id: 4,
          status: "50",
          reviewstatus: "In Progress",
          faculty: "HEALTH",
          teamMembers: [
            {
              email: "tina.voorts@uhasselt.be",
              write: true,
            },
            {
              email: "tom.deleier@uhasselt.be",
              write: true,
            },
          ],

          standardAnswers:{
            projectname:{
              question:"projectname:",
              help:"",
              data:null,
              answer:"Effects 5G on health",
              remarks:[],
              review:"",
            },
            projectnummer:{
              question:"projectnummer:",
              help:"",
              data:null,
              answer:"abcdefghijklmnopfgdfg",
              remarks:[],
              review:"",
            },
            description:{
              question:"description:",
              help:"",
              data:null,
              answer:"Onderzoek rondom de effecten van 5G op de gezondheid",
              remarks:[],
              review:"",
            },
            typeAgreement:{
              question:"type agreement:",
              help:"",
              data:[
                    "Project",
                    "MTA (Material Transfer Agreement)",
                    "CTA (Clinical Trial Agreement)",
                    "DSA (Data Sharing Agreement)",
                    "Raamovereenkomst",
                    "Ander contract",
                    "Niet van toepassing"
              ],
              answer:["Project"],
              remarks:[],
              review:"",
            },
            beginDate:{
              question:"begin date:",
              help:"",
              data:null,
              answer:"2020-11-07",
              remarks:[],
              review:"",
            },
            endDate:{
              question:"end date:",
              help:"",
              data:null,
              answer:"2021-03-14",
              remarks:[],
              review:"",
            },
            noDateReason:{
              question:"Reason no date:",
              help:"Reason why you didn't fill in the begin and end date",
              data:null,
              answer:"",
              remarks:[],
              review:"",
            }
          },
          answers:[
          {
              title:"Projectuitvoering",
              questions:[
                {
                  id:"1",
                  question:"Wie is of zijn de contactpersonen binnen UHasselt?",
                  help:"vb naam promotor, naam projectleider,...",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
                },
                {
                  id:"5",
                  question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
                  help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
                  type:"textarea",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            },
            {
              title:"Rechtmatigheid van de verwerking",
              questions:[
                {
                  id:"6",
                  question:"Rechtsbasis",
                  help:"algemeen belang: dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
                  type:"checkboxes",
                  data:[
                    "Het onderzoek wordt gevoerd in het algemeen belang",
                    "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
                    "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
                    "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
                    "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
                  ],
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"10",
                  question:"Hoe worden de gegevens uitgewisseld?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"11",
                  question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"12",
                  question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"13",
                  question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            }
          ],
        },
        {
          id: 5,
          status: "100",
          reviewstatus: "In Progress",
          faculty: "MARKETING",
          teamMembers: [
            {
              email: "jimmy.merts@uhasselt.be",
              write: true,
            },
            {
              email: "tom.deleier@uhasselt.be",
              write: false,
            },
          ],

          standardAnswers:{
            projectname:{
              question:"projectname:",
              help:"",
              data:null,
              answer:"Market research Apple",
              remarks:[],
              review:"",
            },
            projectnummer:{
              question:"projectnummer:",
              help:"",
              data:null,
              answer:"abcdefghijklmnopfgdfg",
              remarks:[],
              review:"",
            },
            description:{
              question:"description:",
              help:"",
              data:null,
              answer:"Market research rondom Apple",
              remarks:[],
              review:"",
            },
            typeAgreement:{
              question:"type agreement:",
              help:"",
              data:[
                    "Project",
                    "MTA (Material Transfer Agreement)",
                    "CTA (Clinical Trial Agreement)",
                    "DSA (Data Sharing Agreement)",
                    "Raamovereenkomst",
                    "Ander contract",
                    "Niet van toepassing"
              ],
              answer:["Project"],
              remarks:[],
              review:"",
            },
            beginDate:{
              question:"begin date:",
              help:"",
              data:null,
              answer:"2021-04-18",
              remarks:[],
              review:"",
            },
            endDate:{
              question:"end date:",
              help:"",
              data:null,
              answer:"2021-07-15",
              remarks:[],
              review:"",
            },
            noDateReason:{
              question:"Reason no date:",
              help:"Reason why you didn't fill in the begin and end date",
              data:null,
              answer:"",
              remarks:[],
              review:"",
            }
          },
          answers:[
          {
              title:"Projectuitvoering",
              questions:[
                {
                  id:"1",
                  question:"Wie is of zijn de contactpersonen binnen UHasselt?",
                  help:"vb naam promotor, naam projectleider,...",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
                },
                {
                  id:"5",
                  question:"Geef een opsomming van al de gegevens die je van een persoon verwerkt per verwerking",
                  help:"Een verwerking is bijvoorbeeld het voeren van een enquête, het organiseren van een evenement, voeren van het onderzoek zelf,....",
                  type:"textarea",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            },
            {
              title:"Rechtmatigheid van de verwerking",
              questions:[
                {
                  id:"6",
                  question:"Rechtsbasis",
                  help:"algemeen belang: dit wil zeggen dat het leidt tot een vermeerdering van kennis en inzicht die de maatschappij ten goede komt. Dit betekent in beginsel dat de resultaten publiek kenbaar",
                  type:"checkboxes",
                  data:[
                    "Het onderzoek wordt gevoerd in het algemeen belang",
                    "De betrokkene heeft toestemming gegeven voor de verwerking van zijn persoonsgegevens voor een of meer doeleinden",
                    "De verwerking is noodzakelijk voor de uitvoering van een overeenkomst met diegene wiens gegevens worden verwerkt",
                    "De verwerking van persoonsgegevens is noodzakelijk in het kader van een wettelijke verplichting van UHasselt",
                    "De verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van UHasselt of van een derde"
                  ],
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:[],
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"10",
                  question:"Hoe worden de gegevens uitgewisseld?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"11",
                  question:"Wie heeft toegang tot de persoonsgegevens tijdens de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"12",
                  question:"Wie heeft toegang tot de persoonsgegevens na de studie?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
                },
                {
                  id:"13",
                  question:"Hoe lang zullen de persoonsgegevens bewaard worden na het onderzoek?",
                  help:"",
                  type:"text",
                  data:null,
                  answer:null,
                  remarks:[],
                  review:"",
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
                  answer:null,
                  remarks:[],
                  review:"",
                }
              ]
            }
          ],
        },
      ],
    }
  }
}
</script>