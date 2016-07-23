/*
 *
 * AdminDashboard constants
 *
 */

export const DEFAULT_ACTION = 'app/AdminDashboard/DEFAULT_ACTION';

export const TEST_PARENT_CATEGORIES = [{
  'id': 1,
  'title': 'beard',
  'category_id': null,
  'created_at': '2016-07-12T18:39:00.905Z',
  'updated_at': '2016-07-12T18:39:00.905Z'
}, {
  'id': 7,
  'title': 'scenester',
  'category_id': null,
  'created_at': '2016-07-12T18:39:01.158Z',
  'updated_at': '2016-07-12T18:39:01.158Z'
}, {
  'id': 13,
  'title': 'meh',
  'category_id': null,
  'created_at': '2016-07-12T18:39:01.360Z',
  'updated_at': '2016-07-12T18:39:01.360Z'
}, {
  'id': 19,
  'title': 'mustache',
  'category_id': null,
  'created_at': '2016-07-12T18:39:01.566Z',
  'updated_at': '2016-07-12T18:39:01.566Z'
}, {
  'id': 25,
  'title': 'tumblr',
  'category_id': null,
  'created_at': '2016-07-12T18:39:01.764Z',
  'updated_at': '2016-07-12T18:39:01.764Z'
}, {
  'id': 31,
  'title': 'meditation',
  'category_id': null,
  'created_at': '2016-07-12T18:39:01.983Z',
  'updated_at': '2016-07-12T18:39:01.983Z'
}, {
  'id': 37,
  'title': 'ramps',
  'category_id': null,
  'created_at': '2016-07-12T18:39:02.198Z',
  'updated_at': '2016-07-12T18:39:02.198Z'
}, {
  'id': 43,
  'title': 'paleo',
  'category_id': null,
  'created_at': '2016-07-12T18:39:02.414Z',
  'updated_at': '2016-07-12T18:39:02.414Z'
}, {
  'id': 49,
  'title': 'plaid',
  'category_id': null,
  'created_at': '2016-07-12T18:39:02.610Z',
  'updated_at': '2016-07-12T18:39:02.610Z'
}, {
  'id': 55,
  'title': 'synth',
  'category_id': null,
  'created_at': '2016-07-12T18:39:02.818Z',
  'updated_at': '2016-07-12T18:39:02.818Z'
}];

export const TEST_CATEGORY = {
  "id": 1,
  "title": "beard",
  "category_id": null,
  "created_at": "2016-07-12T18:39:00.905Z",
  "updated_at": "2016-07-12T18:39:00.905Z",
  "sub_categories": [{
    "id": 2,
    "title": "Ki-Adi-Mundi",
    "category_id": 1,
    "created_at": "2016-07-12T18:39:00.912Z",
    "updated_at": "2016-07-12T18:39:00.912Z",
    "posts": [{
      "id": 4,
      "title": "Chuck Norris' preferred IDE is hexedit.",
      "body": "Pork belly hella ennui. Pitchfork godard franzen freegan trust fund vinyl. Single-origin coffee brooklyn shabby chic. Bushwick fingerstache swag actually intelligentsia organic leggings.",
      "category_id": 2,
      "created_at": "2016-07-12T18:39:00.975Z",
      "updated_at": "2016-07-12T18:39:00.980Z"
    }, {
      "id": 3,
      "title": "Chuck Norris finished World of Warcraft.",
      "body": "Shoreditch pbr&b narwhal fashion axe try-hard. Scenester mixtape blue bottle vice loko small batch cred. Scenester wolf tofu. Selfies irony letterpress chillwave trust fund selvage lo-fi yr. Blog photo booth pitchfork leggings beard pop-up.",
      "category_id": 2,
      "created_at": "2016-07-12T18:39:00.965Z",
      "updated_at": "2016-07-12T18:39:00.969Z"
    }, {
      "id": 2,
      "title": "Chuck Norris doesn't need the cloud to scale his applications, he uses his laptop.",
      "body": "Pinterest cred brooklyn lo-fi. Freegan disrupt cold-pressed 8-bit roof fanny pack. Organic distillery helvetica.",
      "category_id": 2,
      "created_at": "2016-07-12T18:39:00.955Z",
      "updated_at": "2016-07-12T18:39:00.959Z"
    }, {
      "id": 1,
      "title": "Chuck Norris can solve the Towers of Hanoi in one move.",
      "body": "Cardigan lumbersexual distillery tilde viral. Intelligentsia messenger bag keffiyeh hammock hashtag park. Scenester authentic squid 8-bit synth. Fixie truffaut knausgaard typewriter literally. Roof carry slow-carb intelligentsia chambray.",
      "category_id": 2,
      "created_at": "2016-07-12T18:39:00.939Z",
      "updated_at": "2016-07-12T18:39:00.948Z"
    }]
  }, {
    "id": 3,
    "title": "Luke Skywalker",
    "category_id": 1,
    "created_at": "2016-07-12T18:39:00.985Z",
    "updated_at": "2016-07-12T18:39:00.985Z",
    "posts": [{
      "id": 8,
      "title": "Chuck Norris can write multi-threaded applications with a single thread.",
      "body": "Vhs paleo kitsch. Church-key gentrify post-ironic keytar austin taxidermy helvetica. Pickled street actually marfa park hammock gastropub shoreditch. Vhs kombucha locavore.",
      "category_id": 3,
      "created_at": "2016-07-12T18:39:01.015Z",
      "updated_at": "2016-07-12T18:39:01.019Z"
    }, {
      "id": 7,
      "title": "Chuck Norris doesn't need an OS.",
      "body": "Salvia kombucha mumblecore. Try-hard food truck pour-over beard trust fund meh. Loko pour-over you probably haven't heard of them cliche wayfarers bespoke. Mustache fanny pack polaroid ramps fingerstache cray.",
      "category_id": 3,
      "created_at": "2016-07-12T18:39:01.007Z",
      "updated_at": "2016-07-12T18:39:01.011Z"
    }, {
      "id": 6,
      "title": "Chuck Norris can instantiate an abstract class.",
      "body": "Fanny pack ennui yolo paleo. Intelligentsia pop-up meggings williamsburg. Leggings freegan fanny pack pop-up tofu. Viral pug migas keytar helvetica small batch master gastropub.",
      "category_id": 3,
      "created_at": "2016-07-12T18:39:00.998Z",
      "updated_at": "2016-07-12T18:39:01.003Z"
    }, {
      "id": 5,
      "title": "Chuck Norris never gets a syntax error. Instead, the language gets a DoesNotConformToChuck error.",
      "body": "Quinoa chartreuse 90's plaid park ethical viral readymade. Franzen park iphone bushwick. Kogi direct trade fanny pack.",
      "category_id": 3,
      "created_at": "2016-07-12T18:39:00.990Z",
      "updated_at": "2016-07-12T18:39:00.994Z"
    }]
  }, {
    "id": 4,
    "title": "Leia Organa",
    "category_id": 1,
    "created_at": "2016-07-12T18:39:01.023Z",
    "updated_at": "2016-07-12T18:39:01.023Z",
    "posts": [{
      "id": 12,
      "title": "Chuck Norris doesn't need the cloud to scale his applications, he uses his laptop.",
      "body": "Keffiyeh cronut craft beer stumptown. Gastropub mixtape schlitz umami distillery keffiyeh kitsch. Pork belly cronut health pbr&b taxidermy raw denim lomo. Try-hard seitan semiotics tacos chia cronut.",
      "category_id": 4,
      "created_at": "2016-07-12T18:39:01.055Z",
      "updated_at": "2016-07-12T18:39:01.062Z"
    }, {
      "id": 11,
      "title": "Chuck Norris went out of an infinite loop.",
      "body": "Bicycle rights 8-bit hoodie wayfarers. Ethical try-hard godard kogi pickled. Roof hella flexitarian salvia blue bottle. 90's fap flexitarian pop-up.",
      "category_id": 4,
      "created_at": "2016-07-12T18:39:01.045Z",
      "updated_at": "2016-07-12T18:39:01.050Z"
    }, {
      "id": 10,
      "title": "Anonymous methods and anonymous types are really all called Chuck Norris. They just don't like to boast.",
      "body": "Cronut church-key park tote bag tilde. Selvage mixtape small batch. 90's irony umami slow-carb 8-bit neutra. Ramps lomo you probably haven't heard of them. Fashion axe leggings cray pbr&b taxidermy wayfarers plaid.",
      "category_id": 4,
      "created_at": "2016-07-12T18:39:01.037Z",
      "updated_at": "2016-07-12T18:39:01.041Z"
    }, {
      "id": 9,
      "title": "Chuck Norris can recite π. Backwards.",
      "body": "Tumblr tilde raw denim. Letterpress austin etsy umami listicle. Cold-pressed pug ramps keytar flexitarian kombucha. Skateboard butcher typewriter meditation craft beer. Literally readymade pork belly kitsch.",
      "category_id": 4,
      "created_at": "2016-07-12T18:39:01.027Z",
      "updated_at": "2016-07-12T18:39:01.031Z"
    }]
  }, {
    "id": 5,
    "title": "Lando Calrissian",
    "category_id": 1,
    "created_at": "2016-07-12T18:39:01.066Z",
    "updated_at": "2016-07-12T18:39:01.066Z",
    "posts": [{
      "id": 16,
      "title": "The class object inherits from Chuck Norris.",
      "body": "Vinegar single-origin coffee butcher lo-fi park kombucha. Shabby chic drinking vinyl fixie. Vinyl freegan 3 wolf moon schlitz sustainable brooklyn selvage. Xoxo thundercats vegan.",
      "category_id": 5,
      "created_at": "2016-07-12T18:39:01.096Z",
      "updated_at": "2016-07-12T18:39:01.100Z"
    }, {
      "id": 15,
      "title": "All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds.",
      "body": "Park hashtag austin asymmetrical shoreditch scenester 3 wolf moon. Offal flannel actually twee cred viral cornhole. Small batch farm-to-table food truck drinking celiac. Cred echo fap trust fund thundercats microdosing listicle mlkshk. Chia before they sold out sartorial taxidermy chicharrones.",
      "category_id": 5,
      "created_at": "2016-07-12T18:39:01.088Z",
      "updated_at": "2016-07-12T18:39:01.092Z"
    }, {
      "id": 14,
      "title": "The class object inherits from Chuck Norris.",
      "body": "Distillery kitsch selvage food truck. Five dollar toast cardigan occupy. Vinyl retro street narwhal tousled fingerstache slow-carb kombucha.",
      "category_id": 5,
      "created_at": "2016-07-12T18:39:01.079Z",
      "updated_at": "2016-07-12T18:39:01.083Z"
    }, {
      "id": 13,
      "title": "Chuck Norris' addition operator doesn't commute; it teleports to where he needs it to be.",
      "body": "Marfa truffaut helvetica wolf synth leggings vhs. Cred franzen whatever austin meggings swag. Freegan chambray gastropub try-hard.",
      "category_id": 5,
      "created_at": "2016-07-12T18:39:01.071Z",
      "updated_at": "2016-07-12T18:39:01.074Z"
    }]
  }, {
    "id": 6,
    "title": "Leia Organa",
    "category_id": 1,
    "created_at": "2016-07-12T18:39:01.104Z",
    "updated_at": "2016-07-12T18:39:01.104Z",
    "posts": [{
      "id": 20,
      "title": "Chuck Norris' addition operator doesn't commute; it teleports to where he needs it to be.",
      "body": "Typewriter fanny pack thundercats. Small batch sustainable selfies bitters. Master crucifix knausgaard cray fixie. Quinoa offal thundercats knausgaard whatever. Drinking ugh 8-bit lo-fi kinfolk.",
      "category_id": 6,
      "created_at": "2016-07-12T18:39:01.149Z",
      "updated_at": "2016-07-12T18:39:01.153Z"
    }, {
      "id": 19,
      "title": "Chuck Norris can compile syntax errors.",
      "body": "Deep v lo-fi single-origin coffee. Forage mlkshk loko pitchfork. Austin cliche keffiyeh.",
      "category_id": 6,
      "created_at": "2016-07-12T18:39:01.140Z",
      "updated_at": "2016-07-12T18:39:01.144Z"
    }, {
      "id": 18,
      "title": "The only pattern Chuck Norris knows is God Object.",
      "body": "Kombucha drinking sustainable scenester cardigan pork belly mlkshk selfies. Kale chips carry fashion axe 90's normcore. Flannel synth blog.",
      "category_id": 6,
      "created_at": "2016-07-12T18:39:01.117Z",
      "updated_at": "2016-07-12T18:39:01.121Z"
    }, {
      "id": 17,
      "title": "Whiteboards are white because Chuck Norris scared them that way.",
      "body": "Meggings heirloom lomo. Vhs readymade pinterest shoreditch actually beard. Occupy disrupt diy single-origin coffee everyday retro. Echo you probably haven't heard of them ugh yr blog.",
      "category_id": 6,
      "created_at": "2016-07-12T18:39:01.109Z",
      "updated_at": "2016-07-12T18:39:01.113Z"
    }]
  }]
}
