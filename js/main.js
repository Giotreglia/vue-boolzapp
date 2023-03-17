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
          nameLC: 'michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                      },
                      {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                      }
        ]},
          {
          name: 'Fabio',
          nameLC: 'fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
                      {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                      },
                      {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                      },
                      {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                      }
          ]},
          {
          name: 'Samuele',
          nameLC: 'samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
                      {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                      },
                      {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                      },
                      {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                      }
          ]},
          {
          name: 'Alessandro B.',
          nameLC: 'alessandro b.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                      }
          ]},
          {
          name: 'Alessandro L.',
          nameLC: 'alessandro l.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'    
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                      }
          ]},
          {
          name: 'Claudia',
          nameLC: 'claudia',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                      },
                      {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                      }
          ]},
          {
          name: 'Federico',
          nameLC: 'federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                      }
          ]},
          {
          name: 'Davide',
          nameLC: 'davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                      },
                      {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                      }
          ]},
          {
            name: 'Davide',
            nameLC: 'davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
                        {
                          date: '10/01/2020 15:30:55',
                          message: 'Ciao, andiamo a mangiare la pizza stasera?',
                          status: 'received'
                        },
                        {
                          date: '10/01/2020 15:50:00',
                          message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                          status: 'sent'
                        },
                        {
                          date: '10/01/2020 15:51:00',
                          message: 'OK!!',
                          status: 'received'
                        }
          ]}
      ],
      filteredContacts : []
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
        date: 'adesso',
        message: this.newMessageText,
        status: 'sent'
      }
      console.log(this.contacts[index].messages);
      this.contacts[index].messages.push(newMessage);
      this.newMessageText = '';

      
      setTimeout(this.pushMessage, 1000);
    },

    receiveMessage() {
      let newMessage = {
        date: 'adesso',
        message: 'ok!',
        status: 'received'
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
        if (element.nameLC.includes(newFilter)) {
          element.visible = true;
        }
      });
      console.log(this.contacts);


      let filteredContacts = this.contacts.filter((item) => item.visible);
      console.log(filteredContacts);

      this.filteredContacts = filteredContacts;
      }
  },
}).mount('#app')