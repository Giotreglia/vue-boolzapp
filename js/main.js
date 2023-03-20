const { createApp } = Vue

  createApp({
    data() {
      return {
        activeContact: 0,
        newMessageText: '',
        filter: '',
        contacts: [
          {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false    
                      },
                      {
                        date: this.newDate(),
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false    
                      },
                      {
                        date: this.newDate(),
                        message: 'Tutto fatto!',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false    
                      }
        ]},
          {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Ciao come stai?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Ah scusa!',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false      
                      },
                      {
                        date: this.newDate(),
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Non ancora',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
                      {
                        date: this.newDate(),
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: this.newDate(),
                        message: 'OK!!',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      }
          ]},
          {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                        {
                          date: this.newDate(),
                          message: 'Ciao, andiamo a mangiare la pizza stasera?',
                          status: 'received',
                          messageInfo: 'Message info',
                          deleteMessage: 'Delete message',
                          visibleDrop: false  
                        },
                        {
                          date: this.newDate(),
                          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                          status: 'sent',
                          messageInfo: 'Message info',
                          deleteMessage: 'Delete message',
                          visibleDrop: false  
                        },
                        {
                          date: this.newDate(),
                          message: 'OK!!',
                          status: 'received',
                          messageInfo: 'Message info',
                          deleteMessage: 'Delete message',
                          visibleDrop: false  
                        }
          ]},
          {
            name: 'Chat GPT',
            avatar: './img/ChatGPT_logo.svg.png',
            visible: true,
            messages: [
                        {
                          date: this.newDate(),
                          message: 'Ciao, chiedimi quello che vuoi e ti aiuterò!',
                          status: 'received',
                          messageInfo: 'Message info',
                          deleteMessage: 'Delete message',
                          visibleDrop: false  
                        }
          ]}
      ],
      filteredContacts : [],
      txtOutput: ''
    }
  },
  methods: {

    // Milestone 2
    changeContact(index) {
      this.activeContact = index;
    },

    // Milestone 3
    addMessage(index) {
      let newMessage = {
        date: this.newDate(),
        message: this.newMessageText,
        status: 'sent',
        messageInfo: 'Message info',
        deleteMessage: 'Delete message',
        visibleDrop: false           
      }
      console.log(this.contacts[index].messages);
      if (newMessage.message.length > 0) {
        
        this.contacts[index].messages.push(newMessage);
        this.newMessageText = '';

        setTimeout(this.pushMessage, 1000);
      }
    },

    receiveMessage() {
      let newMessage;
      if (this.contacts[this.activeContact].name !== 'Chat GPT') {
        
          newMessage = {
          date: this.newDate(),
          message: 'ok!',
          status: 'received',
          messageInfo: 'Message info',
          deleteMessage: 'Delete message',
          visibleDrop: false 

          
          
      }} else {

            newMessage = {
            date: this.newDate(),
            message: txtOutput,
            status: 'received',
            messageInfo: 'Message info',
            deleteMessage: 'Delete message',
            visibleDrop: false    
  
        }
      }

      return newMessage;
    },

    pushMessage() {
      let newReceivedMessage = this.receiveMessage();
      this.contacts[this.activeContact].messages.push(newReceivedMessage);
    },

    //Milestone 4
    filterContacts() {

      newFilter = this.filter.toLowerCase();

      this.contacts.forEach(element => {
        element.visible = false;
        let lcName = element.name.toLowerCase();
        if (lcName.includes(newFilter)) {
          element.visible = true;
        }
      });
      console.log(this.contacts);


      let filteredContacts = this.contacts.filter((item) => item.visible);
      console.log(filteredContacts);

      this.filteredContacts = filteredContacts;
      },
      
      // Milestone 5
      deleteMessage(index) {
        this.contacts[this.activeContact].messages.splice(index, 1);
      },

      newDate() {
        let data = new Date();
        let hour, minutes;
        hour = data.getHours() + ":";
        minutes = data.getMinutes();
        if (minutes < 10) {
          minutes = '0' + minutes;
        } else if (hour < 10) {
          hour = '0' + hour
        }
        let orario = hour + minutes;
        return orario;
      },

      date() {
        
        this.contacts.forEach(element => {
          element.messages.date = element.messages.date.substr(12, 6);
          
        });
      },

      // Chat GPT
      Send() {

        var selLang = "en-US"
    
        var sQuestion = txtMsg.value;
        if (sQuestion == "") {
            alert("Type in your question!");
            txtMsg.focus();
            return;
        }
    
        var oHttp = new XMLHttpRequest();
        oHttp.open("POST", "https://api.openai.com/v1/completions");
        oHttp.setRequestHeader("Accept", "application/json");
        oHttp.setRequestHeader("Content-Type", "application/json");
        oHttp.setRequestHeader("Authorization", "Bearer " + "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")
    
        oHttp.onreadystatechange = function () {
            if (oHttp.readyState === 4) {
                //console.log(oHttp.status);
                var oJson = {}
                if (txtOutput.value != "") txtOutput.value += "\n";
    
                try {
                    oJson = JSON.parse(oHttp.responseText);
                } catch (ex) {
                    txtOutput.value += "Error: " + ex.message
                }
    
                if (oJson.error && oJson.error.message) {
                    txtOutput.value += "Error: " + oJson.error.message;
                } else if (oJson.choices && oJson.choices[0].text) {
                    var s = oJson.choices[0].text;
    
                    if (selLang.value != "en-US") {
                        var a = s.split("?\n");
                        if (a.length == 2) {
                            s = a[1];
                        }
                    }
    
                    if (s == "") s = "No response";
                    txtOutput.value += "Chat GPT: " + s;
                    TextToSpeech(s);
                }            
            }
        };
    
        var sModel = "text-davinci-003";
        var iMaxTokens = 2048;
        var sUserId = "1";
        var dTemperature = 0.5;    
    
        var data = {
            model: sModel,
            prompt: sQuestion,
            max_tokens: iMaxTokens,
            user: sUserId,
            temperature:  dTemperature,
            frequency_penalty: 0.0, //Number between -2.0 and 2.0  
                                    //Positive values decrease the model's likelihood 
                                    //to repeat the same line verbatim.
            presence_penalty: 0.0,  //Number between -2.0 and 2.0. 
                                    //Positive values increase the model's likelihood 
                                    //to talk about new topics.
            stop: ["#", ";"]        //Up to 4 sequences where the API will stop 
                                    //generating further tokens. The returned text 
                                    //will not contain the stop sequence.
        }
    
        oHttp.send(JSON.stringify(data));
    
        if (txtOutput.value != "") txtOutput.value += "\n";
        txtOutput.value += "Me: " + sQuestion;
        txtMsg.value = "";
    }
  },
}).mount('#app')