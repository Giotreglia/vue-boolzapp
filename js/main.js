const { createApp } = Vue

  createApp({
    data() {
      return {
        activeContact: 0,
        emoji: false,
        addContactShow: false,
        addContactName: '',
        addContactImg: '',
        newMessageText: '',
        filter: '',
        
        contacts: [
          {
            name: 'Conte Mascetti',
            avatar: './img/idolo.jpg',
            visible: true,
            visibleDropUp: false,
            stato: '',
            messages: [
                        {
                          date: '27/10/1990 13:30:55',
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
          stato: ' ',
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false    
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false    
                      },
                      {
                        date: '10/01/2020 16:15:22',
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
          stato: ' ',
          messages: [
                      {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '20/03/2020 16:35:00',
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
          stato: ' ',
          messages: [
                      {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '28/03/2020 16:15:22',
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
          stato: ' ',
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '10/01/2020 15:50:00',
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
          stato: ' ',
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false      
                      },
                      {
                        date: '10/01/2020 15:50:00',
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
          stato: ' ',
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '10/01/2020 15:51:00',
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
          stato: ' ',
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '10/01/2020 15:50:00',
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
          stato: ' ',
          messages: [
                      {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        messageInfo: 'Message info',
                        deleteMessage: 'Delete message',
                        visibleDrop: false  
                      },
                      {
                        date: '10/01/2020 15:51:00',
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
      emojis: ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','🧞‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣']
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

      this.activeContact = 0;
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
        //10/01/2020 15:50:00
        let data = new Date();
        let day, month, year, hour, minutes, seconds;
        day = data.getDate();
        month = data.getMonth() + 1;
        year = data.getFullYear();
        hour = data.getHours();
        minutes = data.getMinutes();
        seconds = data.getSeconds();
        if (minutes < 10) {
          minutes = '0' + minutes;
        } else if (hour < 10) {
          hour = '0' + hour;
        } else if (day < 10) {
          day = '0' + day;
        } else if (month < 10) {
          month = '0' + month;
        } else if (seconds < 10) {
          seconds = '0' + seconds;
        }
        let dataCompleta = day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
        return dataCompleta;
      },

      getTime(date) {
        const dateSplitted = date.split(' ');
        const hourMinute = dateSplitted[1].split(':');
        return `${hourMinute[0]}:${hourMinute[1]}`
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
      this.contacts[this.activeContact].stato = 'Ultimo accesso il ' + this.contacts[this.activeContact].messages[this.contacts[this.activeContact].messages.length - 1].date;
    },

    // Emoji

    addEmoji(index) {
      this.newMessageText += this.emojis[index];
    },

    // Aggiunta contatti
    addContact() {
      let newContact = 
      {
        name: this.addContactName,
        avatar: this.addContactImg,
        visible: true,
        visibleDropUp: false,
        stato: '',
        messages: []
      }

      this.contacts.unshift(newContact);
    }
    
  },
  mounted() {
    this.contacts.forEach(element => {
      element.stato = 'Ultimo accesso il ' + element.messages[element.messages.length - 1].date;
    });
    
  },
}).mount('#app')



