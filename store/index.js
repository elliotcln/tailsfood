import Vue from 'vue'
export const state = () => ({
    name: 'Chick Fil A',
    contact: {
        email: 'contact@pretiou.fr',
        phone: '+44 131 9496 0278'
    },
    socials: [
        {
            "label": "Instagram",
            "url": "https://instagram.com/dmastravels",
            "published": true
        },
        {
            "label": "Facebook",
            "url": "https://facebook.com/dmastravels",
            "published": true
        },
        {
            "label": "Twitter",
            "url": "https://twitter.com/dmastravels",
            "published": false
        },
        {
            "label": "Youtube",
            "url": "https://youtube.com/dmastravels",
            "published": false
        }
    ]
});