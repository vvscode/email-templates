var DATA_ORIGINAL = {
    "first_name": "John",
    /*invitation_viewing_room*/
    "tpl1": {
        "recipient_display_name": "Boris Pevzner",
        "url_to_room": "#",
        "items": [
            {
                "img": 'http://richardfox.esy.es/img/viewing-room_1@2x.png',
                "display_name": 'Roy Lichtenstein',
                "description": 'Imperfect 67” x 79 7/8” from Imperfect series”',
                "year": '1988',
                "material": 'Woodcut, screenprint, paper',
                "size": '67 x 79.875 "'
            },
            {
                "img": 'http://richardfox.esy.es/img/viewing-room_6@2x.png',
                "display_name": 'Pablo Picasso',
                "description": 'Portrait of a Bearded Man Wearing a Hat',
                "material": 'aquatint on wove paper',
                "size": '11.8 x 8.9 cm'
            },
            {
                "img": 'http://richardfox.esy.es/img/viewing-room_5@2x.png',
                "display_name": 'Joan Miró',
                "description": 'Ma de Proverbis',
                "year": '1970',
                "material": 'lithograph in colors on watermarked Arches paper',
                "size": '56.5 x 76 cm'
            }
        ],
        "items_count": 14,
        "items_displayed_count": 3,
        "button": "GO TO PRIVATE VIEWING ROOM"
    },
    /*an-invitation-for-you(accept-invitation)*/
    "tpl2": {
        "title": "An invitation for you",
        "intro": "You have been to invited to access <b>Pop Art Collection</b>.",
        "message": '<p>Hello,</p><br/><p class="padding-bottom">I would like to invite you to view my Collectrium account. Please click the button below to create your user account.</p>',
        "the_one_who_invited_display_name": "Bill Smith",
        "button": "ACCEPT INVITATION"
    },
    "tpl3": {
        "file_name": "transportation-quote-answer.pdf"
    }
};

var DATA_TAG = {
    /*invitation_viewing_room*/
    "tpl1": {
        "title": 'Invitation to private viewing room',
        "intro": 'Hello, you have been invited to private viewing room by <b>{{recipient_display_name}}</b>.',
        item: {
            "img": 'http://richardfox.esy.es/img/viewing-room_1@2x.png',
            "img2": 'http://richardfox.esy.es/img/viewing-room_6@2x.png',
            "img3": 'http://richardfox.esy.es/img/viewing-room_5@2x.png',
            "display_name": '{{display_name}}',
            "description": '{{description}} {% if year %}, {{year}}{% endif %}',
            "year": '{{year}}',
            "material": '{{material}}',
            "size": '{{size}}'
        },
        "items_count": "{{items_count}}",
        "items_remaining_count": "{{items_count - items_displayed_count}}",
        "button": "GO TO PRIVATE VIEWING ROOM",
        "more_object_if": "{% if items_count - items_displayed_count >= 0 %}"
    },
    /*an-invitation-for-you(accept-invitation)*/
    "tpl2": {
        "title": "An invitation for you",
        "intro": "You have been to invited to access <b>{{collection name}}</b>.",
        "message": '<p>Hello,</p><br/><p class="padding-bottom">I would like to invite you to view my Collectrium account. Please click the button below to create your user account.</p>',
        "the_one_who_invited_display_name": "{{the_one_who_invited_display_name}}",
        "button": "ACCEPT INVITATION"
    },
    "tpl3": {
        "file_if": "{% if file_name %}",
        "file_name": "{{file_name}}"
    },
    "endif": "{% endif %}"

};

var img_min = "https://placeholdit.imgix.net/~text?txtsize=14&txt=90%C3%9760&w=90&h=60";
var img_max = "https://placeholdit.imgix.net/~text?txtsize=54&txt=400%C3%97275&w=400&h=275";

var long_text = "Lorem Ipsum is simply dummy text of the printing";
var very_long_text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";


var DATA_TEST_MIN = {
    /*invitation_viewing_room*/
    "tpl1": {
        item: {
            "img": img_min,
            "img2": img_min,
            "img3": img_min,
            "display_name": 'Roy Lichtenstein'
        },
        "items_count": 3,
        "items_remaining_count": 0,
        "button": "GO TO PRIVATE VIEWING ROOM"
    },
    /*an-invitation-for-you(accept-invitation)*/
    "tpl2": {
        "title": "An invitation for you",
        "intro": "Intro.",
        "message": 'Message.',
        "the_one_who_invited_display_name": "Bill Smith",
        "button": "ACCEPT INVITATION"
    }
};

var DATA_TEST_MAX = {
    /*invitation_viewing_room*/
    "tpl1": {
        "title": long_text,
        "intro": long_text,
        item: {
            "img": img_max,
            "img2": img_max,
            "img3": img_max,
            "display_name": long_text,
            "description": very_long_text,
            "year": long_text,
            "material": very_long_text,
            "size": long_text
        },
        "button": long_text
    },
    /*an-invitation-for-you(accept-invitation)*/
    "tpl2": {
        "title": long_text,
        "intro": long_text,
        "message": very_long_text,
        "the_one_who_invited_display_name": "Эллен Джорджиане Сер-Леккен",
        "button": long_text
    }
};



var DATA = DATA_ORIGINAL;
module.exports.DATA = DATA;