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
          ]}
      ],
      filteredContacts : [],
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
      this.contacts[index].messages.push(newMessage);
      this.newMessageText = '';

      
      setTimeout(this.pushMessage, 1000);
    },

    receiveMessage() {
      let newMessage = {
        date: this.newDate(),
        message: 'ok!',
        status: 'received',
        messageInfo: 'Message info',
        deleteMessage: 'Delete message',
        visibleDrop: false    

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
        }
        let orario = hour + minutes;
        return orario;
      },

      date() {
        
        this.contacts.forEach(element => {
          element.messages.date = element.messages.date.substr(12, 6);
          
        });
      }
  },
}).mount('#app')