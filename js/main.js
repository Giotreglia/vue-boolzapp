const { createApp } = Vue

  createApp({
    data() {
      return {
        activeContact: 0,
        newMessageText: '',
        filter: '',
        
        contacts: [
          {
            name: 'Conte Mascetti',
            avatar: './img/idolo.jpg',
            visible: true,
            visibleDropUp: false,
            stato: 'Ultimo accesso alle ',
            messages: [
                        {
                          date: this.newDate(),
                          message: 'Tarapio tapioco come se fosse antani, la supercazzola prematurata con dominus vobiscum blinda?',
                          status: 'received',
                          messageInfo: 'Message info',
                          deleteMessage: 'Delete message',
                          visibleDrop: false  
                        }
          ]},
          {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          visibleDropUp: false,
          stato: 'Ultimo accesso alle ',
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
          ]}
      ],
      filteredContacts : [],
      randomAntaniAnswers: ['vicesindaco', 'prefettura', 'ha clacsonato?', 'Antani, blinda la supercazzola prematurata con doppio scappellamento a destra?', 'Eh? Antani, come se fosse Antani, anche per il direttore, la supercazzola con scappellamento!', 'Tarapia tapioco! Prematurata la supercazzola o scherziamo?', 'No, mi permetta, no io... Scusi, noi siamo in quattro, come se fosse antani anche per lei soltanto in due oppure in quattro anche scribai con cofandina, come antifurto, per esempio.', "a no, aspetti, mi porga l'indice, ecco lo alzi così, guardi, guardi, guardi, lo vede il dito, lo vede che stuzzica, e prematura anche! Ma, allora io le potrei dire, anche col rispetto per l'autorità, che anche soltanto le due cose come vicesindaco, capisce?", "No! No! Attenzione, no, pastène soppaltate secondo l'articolo 12, abbia pazienza, sennò posterdati per due anche un pochino antani in prefettura!"],  
      randomAnswers: ['grazie', 'tua sorella!', 'ahahahahha', 'a presto!', 'birretta stasera?', 'ottimo, a dopo!'],

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

        this.contacts[this.activeContact].stato = 'sta scrivendo...'
        setTimeout(this.pushMessage, 3000);
        setTimeout(this.changeStatusOnline, 3000)
        setTimeout(this.changeStatusLastAccess, 6000)
      }
    },

    receiveMessage() {
      let newMessage;
/*       if (this.contacts[this.activeContact].name == 'Conte Mascetti') {

            newMessage = {
            date: this.newDate(),
            message: this.randomAnswerGenerator(this.randomAntaniAnswers),
            status: 'received',
            messageInfo: 'Message info',
            deleteMessage: 'Delete message',
            visibleDrop: false 
  
        } */

      newMessage = {
      date: this.newDate(),
      message: this.randomAnswerGenerator(this.randomAntaniAnswers),
      status: 'received',
      messageInfo: 'Message info',
      deleteMessage: 'Delete message',
      visibleDrop: false,} 
      

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

      deleteMessages() {
        this.contacts[this.activeContact].messages.splice(0, 9999999999);
      },

      deleteChat() {
        this.contacts.splice(this.activeContact, 1);
      },

      newDate() {
        let data = new Date();
        let hour, minutes;
        hour = data.getHours();
        minutes = data.getMinutes();
        if (minutes < 10) {
          minutes = '0' + minutes;
        } else if (hour < 10) {
          hour = '0' + hour;
        }
        let orario = hour + ':' + minutes;
        return orario;
      },

    // Random Answers
    randomNumber(min, max) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      return randomNumber;
    },
    randomAnswerGenerator(array) {
      for (let i = 0; i < array.length; i++) {
        let answer = array[this.randomNumber(0, array.length - 1)];
        return answer;
      }
    },

    // Cambio stato
    changeStatusOnline() {
      this.contacts[this.activeContact].stato = 'online';
    },

    changeStatusLastAccess() {
      this.contacts[this.activeContact].stato = 'Ultimo accesso alle ' + this.contacts[this.activeContact].messages[this.contacts[this.activeContact].messages.length - 1].date;
    }
    

  },
}).mount('#app')



