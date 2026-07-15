export type BlogContentBlock =
  | {
      type: 'paragraphs';
      title?: string;
      paragraphs: string[];
    }
  | {
      type: 'list';
      title: string;
      items: string[];
    }
  | {
      type: 'quote';
      quote: string;
      attribution: string;
    }
  | {
      type: 'scripture';
      reference: string;
      text: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  coverImage: string;
  coverAlt: string;
  featured: boolean;
  tags: string[];
  highlight: string;
  sidebarNote: string;
  content: BlogContentBlock[];
};

const pastorCyrusMwangi = {
  name: 'Pastor Cyrus Mwangi',
  role: 'Pastoral Reflections',
};

export const mockBlogPosts: BlogPost[] = [
  {
    slug: 'all-the-earth-bows-to-him',
    title: 'All The Earth Bows To Him',
    excerpt:
      'No part of creation escapes God\'s sovereign rule, and history itself moves toward the day when every knee will bow to Jesus.',
    description:
      'A strengthening reflection on Psalm 66:4, God\'s sovereign rule over history, and the future certainty that all creation will bow before Christ.',
    category: 'Sovereignty',
    publishedAt: '08 January 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church interior prepared for worship and praise',
    featured: false,
    tags: ['Sovereignty', 'Hope', 'Praise'],
    highlight:
      'No one has the capacity to resist God\'s rule over His universe, and history itself is already moving toward that final confession.',
    sidebarNote:
      'When moral rebellion seems large, remember that no epoch, empire, or generation has ever escaped God\'s sovereign calendar.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 66:4',
        text:
          'All the earth bows down to you; they sing praise to you, they sing praise to your name.',
      },
      {
        type: 'paragraphs',
        title: 'Nothing Escapes His Rule',
        paragraphs: [
          'Many of us pay just a passing glimpse at such texts and if we think about them at all, we shrug our shoulders and quietly ask, is this real?',
          'The fact is, no part of creation escapes God\'s sovereign rule. While the faithful willingly bow to Yahweh, the rebellious bow to His rule involuntarily. Even human history obeys His calendar.',
          'The Greeks were divinely raised for purposes of providing a universal language so Scripture could reach more nations. The Roman empire came with roads and the Pax Romana so Yahweh\'s message of redemption could reach more people easily. Each epoch unknowingly serves His purposes.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'History Is Moving Somewhere',
        paragraphs: [
          'There are times He stirs nature just to remind man of his limitations and vulnerability.',
          'But even more importantly, this verse is proleptic, representing a future event as if it has already happened. The world is generally moving toward the apocalypse. At the end times, every knee will bow and every tongue confess that Jesus is Lord.',
          'The text therefore is an encouragement to weak-kneed Christians whose faith wobbles when they see the scale of human moral rebellion against Yahweh. No one has the capacity to resist His rule over His universe. Praise the Lord.',
        ],
      },
    ],
  },
  {
    slug: 'when-offerings-become-personal-luxury',
    title: 'When Offerings Become Personal Luxury',
    excerpt:
      'The offerings of God\'s people are sacred, and ministers who turn them into tools of personal enrichment should tremble at Eli\'s story.',
    description:
      'A sobering reflection on sacred offerings, pastoral remuneration, and the danger of enriching oneself through what belongs to the Lord.',
    category: 'Stewardship',
    publishedAt: '05 January 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church ministry team preparing for service',
    featured: false,
    tags: ['Stewardship', 'Integrity', 'Ministry'],
    highlight:
      'Offerings from God\'s people are sacred and must strictly be used for their intended purposes.',
    sidebarNote:
      'There is a difference between honouring God\'s servants well and fattening oneself on what was given as a sacred offering.',
    content: [
      {
        type: 'scripture',
        reference: '1 Samuel 2:29',
        text:
          'Why do you scorn my sacrifice and offering that I prescribed for my dwelling? Why do you honor your sons more than me by fattening yourselves on the choice parts of every offering made by my people Israel?',
      },
      {
        type: 'paragraphs',
        title: 'A Sacred Trust',
        paragraphs: [
          'When I look at the curse that befell Eli and his sons for fattening themselves with offerings given by God\'s people, I shudder.',
          'I strongly believe God\'s servants should be remunerated well. When pastors keep appealing for fund drives to pay even for high school fees, it is a shame to the body that they minister to. We must keep reviewing their salaries so they live comfortably.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'When Ministry Becomes Enrichment',
        paragraphs: [
          'There are churches however where pastors literally enrich themselves with offerings, building personal rental apartments, driving luxury vehicles and funding luxuries oftentimes through manipulation of ignorant congregants.',
          'If they purport to serve Jehovah, they should read Eli\'s story meditatively. A minister can live in as much luxury as he wants as long as he bankrolls it through the sweat of his brow like all other men. Offerings from God\'s people are sacred and must strictly be used for intended purposes.',
        ],
      },
    ],
  },
  {
    slug: 'from-goodies-based-faith-to-ruths-devotion',
    title: 'From Goodies-Based Faith To Ruth\'s Devotion',
    excerpt:
      'At the beginning of a new year, Ruth reminds us that real devotion follows God without demanding promises of comfort first.',
    description:
      'A New Year reflection on Ruth\'s costly devotion and the call to move from goodies-based faith to steadfast commitment to Jesus and His mission.',
    category: 'Devotion',
    publishedAt: '02 January 2026',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church members walking together in fellowship',
    featured: false,
    tags: ['Devotion', 'Faith', 'Ruth'],
    highlight:
      'We must move from goodies-based faith to the unshakable, unrelenting, unyielding faith of Ruth.',
    sidebarNote:
      'True devotion keeps following Christ even when no promise of comfort lies ahead.',
    content: [
      {
        type: 'scripture',
        reference: 'Ruth 1:16-17',
        text:
          'Don’t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.',
      },
      {
        type: 'paragraphs',
        title: 'Beyond New-Year Hype',
        paragraphs: [
          'It is the beginning of a new year, a season where church leaders give prophetic declarations, utterances, and promises of divinely ordained goodies. The big question is whether there is any substance or need for this religio-cultural hullabaloo.',
          'When Ruth uttered these often quoted words, Naomi had not offered any promises or hope of good things ahead. In fact she had given a grim yet realistic picture of what returning with her to Bethlehem would mean. Ruth\'s response was based on pure, uncompromising love and devotion.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Follow Wherever He Leads',
        paragraphs: [
          'That same faith and devotion to Jesus and His cause should be the guiding light to our lives. We shall follow wherever He leads. And whether this elicits an amen or not, the fact is that sometimes participating in His mission may lead us into very difficult terrains.',
          'May God help us to grow in our relationship with Him and our commitment to His mission so that we move from goodies-based faith to the unshakable, unrelenting, unyielding faith of Ruth.',
        ],
      },
    ],
  },
  {
    slug: 'the-lord-will-fulfil-his-purpose-for-me',
    title: 'The Lord Will Fulfil His Purpose For Me',
    excerpt:
      'When God removes the human agents He once used in our lives, faith must learn to rest not in them, but in the Lord who fulfils His purpose.',
    description:
      'A pastoral meditation on grief, destiny helpers, and the necessity of anchoring trust in God rather than in the people He sends for a season.',
    category: 'Trust',
    publishedAt: '29 December 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Church construction project symbolizing ongoing purpose',
    featured: false,
    tags: ['Trust', 'Purpose', 'Grief'],
    highlight:
      'We are here for God\'s purpose, and it is He who will fulfil that purpose as we cooperate with Him.',
    sidebarNote:
      'Honour the people God sends, but train your heart never to transfer to them the trust that belongs to God alone.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 138:8',
        text:
          'The Lord will fulfil His purpose for me; your love, O Lord endures forever.',
      },
      {
        type: 'paragraphs',
        title: 'When Helpers Move On',
        paragraphs: [
          'The evangelical church in Eldoret and the country at large recently lost a great servant of the Lord through death. As people poured out heartfelt feelings through eulogies, one such comment caught my attention: you taught us the Scriptures, taught us service and to love the Lord, but you never taught us how to live without you.',
          'As we strive to play our part in God\'s mission, God brings some people our way whom some have referred to as destiny helpers. But to what extent should we place our hope and trust in these individuals, whoever they are?',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Train Your Heart To Trust God',
        paragraphs: [
          'We should consider these people as God\'s servants whom He sovereignly brings our way to play a specific role in our lives for a season. Once they play their part, we may lose their support through death, transfer, or even their own change of heart.',
          'We must train our hearts to know that we are here for God\'s purpose and that it is He who will fulfil that purpose as we cooperate with Him. When the agents He uses move on for whatever reason, our hearts must remain steadfast, trusting in the Lord.',
        ],
      },
    ],
  },
  {
    slug: 'when-there-is-no-king',
    title: 'When There Is No King',
    excerpt:
      'Judges shows that when a people attempt justice without righteous kingship, they often multiply tears, death, and regret.',
    description:
      'A Christmas meditation from one of Scripture\'s darkest narratives, pointing to humanity\'s need for the righteous, just, and merciful kingship of Christ.',
    category: 'Kingship',
    publishedAt: '24 December 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church interior at Christmas season',
    featured: false,
    tags: ['Justice', 'Kingship', 'Christ'],
    highlight:
      'Only a righteous, just and merciful King can maintain order and save a nation, and Jesus Christ is the only King who perfectly fits that description.',
    sidebarNote:
      'The chaos of self-rule in Judges still confronts every heart that refuses the just and merciful kingship of Christ.',
    content: [
      {
        type: 'paragraphs',
        title: 'One Of Scripture\'s Darkest Narratives',
        paragraphs: [
          'Judges 19 to 21 happens to be one of Scripture\'s darkest narratives. A Levite and his concubine spend the night in the home of a Benjamite, and the woman is eventually given to violent men who rape her to death. What follows only deepens the tragedy, with sixty-five thousand men dying in battles of revenge.',
          'You can never make sense of the happenings until you remember the constant refrain in Judges: in those days Israel had no king, everyone did as he saw fit.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'The Need For A King',
        paragraphs: [
          'Only a righteous, just, and merciful king can maintain order and save a nation. Israel tried to get justice for the defiling and death of an innocent woman, but their efforts ended in more tears, death, and regrets.',
          'This narrative not only applies to a nation but also to individuals. Unless a king with these qualities rules our hearts, our self-directed lives will be characterized by chaos and regrets. Jesus Christ is the only King who perfectly fits that description. Merry Christmas, brethren.',
        ],
      },
    ],
  },
  {
    slug: 'a-calm-firm-and-loving-no',
    title: 'A Calm, Firm, And Loving No',
    excerpt:
      'Christian love in marriage does not mean saying yes to every demand, especially when urgency and emotion are being used to manipulate.',
    description:
      'A sober reflection on Samson, Delilah, and the discernment required to distinguish genuine complaint from self-seeking emotional manipulation.',
    category: 'Marriage',
    publishedAt: '22 December 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church couples and families in fellowship',
    featured: false,
    tags: ['Marriage', 'Discernment', 'Wisdom'],
    highlight:
      'There are times when the holiest response in marriage is a calm, firm, and loving no.',
    sidebarNote:
      'Before responding to urgency and emotion, make room for prayer, consideration, and sober discernment.',
    content: [
      {
        type: 'scripture',
        reference: 'Judges 16:15-16',
        text:
          'With such nagging she prodded him day after day until he was sick to death of it.',
      },
      {
        type: 'paragraphs',
        title: 'Love And Discernment',
        paragraphs: [
          'Clearly, Delilah used emotional manipulation to have her evil way. The question every Christian man must constantly contend with is how to distinguish a genuine complaint that needs serious, loving consideration from ill-motivated, self-seeking nagging.',
          'Every married Christian man has an imperfect wife, which means some demands made on him may not emanate from holy sources. Does loving your wife therefore mean saying yes to everything she says? Samson\'s tragedy suggests a resounding no.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Considerate, But Not Controlled',
        paragraphs: [
          'There will be times when the holiest response will have to be a calm, firm, and loving no. But before making that choice, we must be very careful, considering the injunction in 1 Peter 3:7 that directs Christian husbands to be considerate lest their prayers be hindered.',
          'When emotion coupled with urgency is used without regard for prayer and consideration, that is a red flag. You may be dealing with a case of Delilah\'s strategy. The call to be a Christian husband has never been a walk in the park.',
        ],
      },
    ],
  },
  {
    slug: 'before-you-make-that-vow',
    title: 'Before You Make That Vow',
    excerpt:
      'Jephthah reminds us that spiritual empowerment does not override ignorance, and that careless vows can still produce devastating consequences.',
    description:
      'A cautionary reflection on Jephthah, charismatic empowerment, spiritual immaturity, and the lifelong need for theological groundedness.',
    category: 'Wisdom',
    publishedAt: '19 December 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Dramatic outdoor setting representing serious spiritual decisions',
    featured: false,
    tags: ['Wisdom', 'Vows', 'Maturity'],
    highlight:
      'God\'s empowerment does not override our ignorance, and theological groundedness is never an event but a lifelong pursuit.',
    sidebarNote:
      'Before you vow anything to God, first ask whether the Lord needs that vow in order to act.',
    content: [
      {
        type: 'scripture',
        reference: 'Judges 11:30-31',
        text:
          'Jephthah made a vow to the Lord: whatever comes out of the door of my house to meet me when I return in triumph will be the Lord’s, and I will sacrifice it as a burnt offering.',
      },
      {
        type: 'paragraphs',
        title: 'Did He Have To Make The Vow?',
        paragraphs: [
          'The question is whether Jephthah had to make the vow. The outcome gives a hint. His daughter came out and he had to sacrifice her. This man was Spirit-filled, yet his foolish vow indicates that the Spirit\'s manifestation was charismatic rather than transformative.',
          'Lessons follow quickly. God\'s empowerment does not override our ignorance. Though empowered, Jephthah\'s vow indicates spiritual immaturity. Theological groundedness is not an event. It is a lifelong pursuit.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Groundedness Matters',
        paragraphs: [
          'We must constantly study in order to gain spiritual insight and godly wisdom. Before you make that vow, ask whether the Lord needs it in order to act.',
        ],
      },
    ],
  },
  {
    slug: 'i-want-to-be-among-the-300',
    title: 'I Want To Be Among The 300',
    excerpt:
      'Gideon\'s three hundred expose the difference between retreating to comfort and stepping into the God-ordained adventure of obedient faith.',
    description:
      'A stirring reflection on Gideon\'s three hundred, the comfort of retreat, and the adventure of joining God where the action is.',
    category: 'Calling',
    publishedAt: '28 November 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'A gathered crowd symbolizing those chosen for mission',
    featured: false,
    tags: ['Calling', 'Faith', 'Courage'],
    highlight:
      'The 31,700 enjoyed the comfort of home, but they missed the adventure of seeing God at work.',
    sidebarNote:
      'Living is getting involved. Rolling down our sleeves and going where God\'s action is remains one of the great adventures of faith.',
    content: [
      {
        type: 'scripture',
        reference: 'Judges 7:8',
        text:
          'So Gideon sent the rest of the Israelites home but kept the three hundred, who took over the provisions and trumpets of the others.',
      },
      {
        type: 'paragraphs',
        title: 'Home Or The Frontline?',
        paragraphs: [
          'I find this one of the most fascinating episodes in Scripture. Gideon is assured through various signs that he is God\'s chosen vessel to save Israel, yet after several rounds of sifting only three hundred are left to do the job.',
          'As the rest are going home, what goes on in their minds? Maybe the 31,700 are happy to return to the comfort of home, while the three hundred sense that impossible as the task looks, this job can be done with God on their side.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'The Adventure Of Obedience',
        paragraphs: [
          'The task of saving the world and doing God\'s work is never easy. It seems impossible to those without the eye of faith. But to those in Christ, as long as He says go, then it is doable.',
          'The 31,700 enjoyed the warmth and comfort of home, but they missed the adventure of seeing God at work. Living is getting involved. What an adventure it is to see God at work. I want to be among the 300. How about you?',
        ],
      },
    ],
  },
  {
    slug: 'the-quarrelsome-beauty-and-the-grace-of-discipleship',
    title: 'The Quarrelsome Beauty And The Grace Of Discipleship',
    excerpt:
      'No spouse becomes godly by instinct alone; transformation in marriage requires disciplined discipleship, suspicious self-awareness, and the grace of God.',
    description:
      'A candid marriage reflection on quarrelsomeness, the illusion of courtship, and the transforming power of disciplined discipleship.',
    category: 'Marriage',
    publishedAt: '27 November 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Married couples and families in church community',
    featured: false,
    tags: ['Marriage', 'Discipleship', 'Transformation'],
    highlight:
      'A good wife or husband does not become one naturally; disciplined discipleship and the grace of God remain the medicine.',
    sidebarNote:
      'All of us have the potential to become difficult spouses unless the Word of God keeps shaping and correcting us.',
    content: [
      {
        type: 'scripture',
        reference: 'Proverbs 27:15-16',
        text:
          'A quarrelsome wife is like a constant dripping on a rainy day; restraining her is like restraining the wind or grasping oil with the hand.',
      },
      {
        type: 'paragraphs',
        title: 'After The Honeymoon',
        paragraphs: [
          'During courtship, no beauty seems as though she will turn out to be a quarrelsome wife. The few telltale signs are easily covered up by the love the suitor feels for her. Woe unto him.',
          'But what hope is there for the quarrelsome beauty? Methinks effective discipleship holds the key to the riddle. God\'s Word has the power to transform any heart.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'No Natural Prince Charming',
        paragraphs: [
          'The truth is that all of us have the potential of being a lousy husband or wife. A good wife or husband does not become one naturally. We must look at ourselves suspiciously and put in the effort needed to become the sleeping queen or prince charming.',
          'Disciplined reading and meditation on God\'s Word, reading good books on marriage, and attending couples fellowships are never wasted time. Ignore these and without your knowledge you become a nagging wife or a selfish husband whose spouse lives in regret. Bidii yako na neema ya Mungu tu ndio dawa.',
        ],
      },
    ],
  },
  {
    slug: 'light-in-the-middle-of-stones',
    title: 'Light In The Middle Of Stones',
    excerpt:
      'When God\'s face shines upon His people, He does not always remove the trial, but He fills the trial with His nearness, favour, and peace.',
    description:
      'A devotional meditation on Psalm 80:7, Stephen, Paul, and the quiet strength of God\'s shining face in the middle of suffering.',
    category: 'Presence',
    publishedAt: '26 November 2025',
    readTime: '6 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Quiet church interior symbolizing God’s presence and peace',
    featured: false,
    tags: ['Presence', 'Suffering', 'Hope'],
    highlight:
      'God\'s face may not always shine around our suffering, but it shines into it with a nearness that becomes enough.',
    sidebarNote:
      'Ask not only for changed circumstances, but for the shining face of God that steadies the heart within them.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 80:7',
        text:
          'Restore us, O God Almighty; make Your face shine upon us, that we may be saved.',
      },
      {
        type: 'paragraphs',
        title: 'When His Face Shines',
        paragraphs: [
          'There are days when the world feels dim, when prayers seem to echo back without answer, and when hardship presses heavier than our strength. Israel in Psalm 80 was in that place, so they prayed not first for changed circumstances, but for God\'s face to shine upon them again.',
          'Because when God\'s face shines, darkness does not disappear immediately, but it cannot win.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Stephen And Paul',
        paragraphs: [
          'Stephen\'s martyrdom can be described as light in the middle of stones. Heaven did not open to rescue him from the stones. It opened to show him Jesus, and that was enough.',
          'Paul\'s case was strength in the middle of weakness. He was beaten, imprisoned, rejected, and misunderstood, yet he testified that the Lord stood by him and strengthened him. That is God\'s shining face: not always changing the path, but lighting it with His presence.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'A Prayer',
        paragraphs: [
          'The shining of His face is the warmth the heart feels when Scripture opens with fresh meaning, the quiet peace that settles in the middle of worry, and the unexpected strength to forgive, endure, or hope again.',
          'Lord, shine Your face upon me today. Not by removing every hardship, but by filling my heart with Your nearness. Let Your presence be my peace, Your favour my strength, and Your grace my light. Turn Your face toward me, and let that be enough. Amen.',
        ],
      },
    ],
  },
  {
    slug: 'my-chosen-instrument',
    title: 'My Chosen Instrument',
    excerpt:
      'The real question is not what culture applauds, but whether our life choices are being shaped by God\'s purpose or by comfort, admiration, and ease.',
    description:
      'A searching reflection on Paul\'s calling and the daily choice between God\'s purpose and the seductive praise of culture.',
    category: 'Purpose',
    publishedAt: '24 November 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church team serving as instruments in ministry',
    featured: false,
    tags: ['Purpose', 'Calling', 'Choice'],
    highlight:
      'We must decide what will determine our life choices: culture, human expectation, comfort and ease, or the purpose of God.',
    sidebarNote:
      'A life applauded by culture may still feel empty if it is lived outside the purpose of God.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 9:15',
        text:
          'But the Lord said to Ananias, Go! This man is my chosen instrument to proclaim my name to the Gentiles and their kings and to the people of Israel.',
      },
      {
        type: 'paragraphs',
        title: 'Chosen, Yet Free To Resist',
        paragraphs: [
          'The phrase that captures my attention is my chosen instrument. Like all of us, God had a plan and purpose for Paul\'s life, and He is more than willing to reveal this plan. But what if Paul had decided to choose his own way? The answer is yes, that is possible.',
          'The history of Israel is a great lesson. God chose them to be His instruments, yet they often stubbornly chose their own ways leading to misery and pain.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Choose Today',
        paragraphs: [
          'The main factor that influences our choices is cultural expectation and trend, despite the fact that our culture is fallen. We choose activities that elicit admiration and ease, while the inner witness may still scream that life is empty.',
          'Would Paul have lived his life to the full outside of God\'s plan? And can we? We must decide what will determine our life choices. Uamuzi ni wako. Joshua\'s voice still thunders in our conscience: choose today whom you will serve.',
        ],
      },
    ],
  },
  {
    slug: 'the-disciple-with-one-assignment',
    title: 'The Disciple With One Assignment',
    excerpt:
      'Ananias teaches us that the great life is not the visible life, but the obedient one, lived before the audience of One.',
    description:
      'A quiet meditation on Ananias of Damascus, hidden faithfulness, and the freedom of obeying God without obsession over visibility or applause.',
    category: 'Faithfulness',
    publishedAt: '21 November 2025',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Quiet church interior symbolizing hidden obedience',
    featured: false,
    tags: ['Faithfulness', 'Obedience', 'Ananias'],
    highlight:
      'The great man is the one who hears the voice of his God and obeys, regardless of what men rank as impressive.',
    sidebarNote:
      'Faithfulness is freedom when it is no longer enslaved to human rankings, visibility, or comparison.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 9:10-19',
        text:
          'This is the account of Ananias of Damascus, the disciple sent to place his hands on Saul so that he might regain his sight.',
      },
      {
        type: 'paragraphs',
        title: 'Only One Recorded Assignment',
        paragraphs: [
          'This is the account of a devout disciple, Ananias of Damascus. He is the man with only one recorded assignment: simply place his hands on Saul to restore his sight. After that he disappears from the narrative.',
          'In the meantime, the man whose eyes he opened is all over the New Testament, preaching and writing. Same God, different assignments to different men.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'The Audience Of One',
        paragraphs: [
          'Bottom line: just quietly follow where He leads. Worry not where He sends you to do what. And most importantly, close your ears to whatever men consider great.',
          'The great man is he who hears the voice of his God and obeys. A life lived in obedience to God alone, unbothered by the opinions and rankings of men, is a life lived in freedom. Are you a slave of human opinion or an actor to the audience of One?',
        ],
      },
    ],
  },
  {
    slug: 'entering-his-rest-begins-in-the-heart',
    title: 'Entering His Rest Begins In The Heart',
    excerpt:
      'God\'s rest is often blocked not by circumstance but by the distrustful, discontented attitude that refuses to believe His care is enough.',
    description:
      'A searching reflection on Psalm 95:11, cultural discontent, and the heart condition that keeps believers from enjoying the rest of God.',
    category: 'Rest',
    publishedAt: '09 November 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Quiet church interior expressing stillness and rest',
    featured: false,
    tags: ['Rest', 'Trust', 'Contentment'],
    highlight:
      'We have the key to open the door to God\'s rest. The real question is whether we are willing to confront the heart condition that keeps us from turning it.',
    sidebarNote:
      'Discontent is rarely cured by getting more. It is often healed by learning again to trust the care of God.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 95:11',
        text:
          'So I declared on oath in my anger, “They shall never enter my rest.”',
      },
      {
        type: 'paragraphs',
        title: 'Why They Could Not Enter',
        paragraphs: [
          'How did the stubborn Israelites earn themselves this ominous declaration? The problem was in their hearts. Their attitude. They were the flock under God\'s care, but due to their trust issues, they simply could not perceive or appreciate His love and care. So they could not enter Canaan, the land of plenty, security, and above all God\'s presence.',
          'In our dispensation, we are not going into a physical Canaan. Ours is a spiritual one where God dwells in us and governs from within.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'The Culture Of Discontent',
        paragraphs: [
          'But we can find ourselves living in the sad space of those miserable fellows. It all depends on our attitude. If we live by the cultural waves of our day, we certainly will never enter His rest. This culture fosters discontent and lies. It tells us that happy are those with bigger cars, bigger houses, bigger stomachs, bigger what not.',
          'Culture tells us the only good thing is what we do not have. Even if those who have the bigger things tell us they are groaning all night and hardly sleep, we still wish we were in their position. No wonder we never enjoy His rest.',
          'We have the key to open the door to God\'s rest, our Canaan. The question is whether we are annoyed enough with our current heart condition to turn it.',
        ],
      },
    ],
  },
  {
    slug: 'guided-by-the-divine-owners-manual',
    title: 'Guided By The Divine Owner\'s Manual',
    excerpt:
      'Trusting the Lord with all our heart frees us from the exhaustion of chasing every voice, philosophy, and cultural light demanding attention.',
    description:
      'A brief meditation on Proverbs 3:5 and the freedom of letting biblical principles govern the whole of life.',
    category: 'Guidance',
    publishedAt: '03 November 2025',
    readTime: '2 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church workers following direction together',
    featured: false,
    tags: ['Guidance', 'Trust', 'Wisdom'],
    highlight:
      'To trust in the Lord with all your heart is to be spared the exhaustion of following every rival voice that cries for your attention.',
    sidebarNote:
      'The clearest path is not the one with the loudest voices around it, but the one still governed by God\'s Word.',
    content: [
      {
        type: 'scripture',
        reference: 'Proverbs 3:5',
        text:
          'Trust in the Lord with all your heart and lean not on your own understanding.',
      },
      {
        type: 'paragraphs',
        title: 'A Life Of Freedom',
        paragraphs: [
          'This is a call to make biblical principles guide all our actions. It saves us the exhaustion of trying to follow all the different lights presented by traditional and cultural activists, the many philosophers, sages and gurus screaming for our attention, and inner voices that largely invite us to live a life of ease and rebellion against God.',
          'It is a call to a life of freedom, a life guided by the Divine owner\'s manual.',
        ],
      },
    ],
  },
  {
    slug: 'when-feelings-and-the-word-disagree',
    title: 'When Feelings And The Word Disagree',
    excerpt:
      'In heartbreak, God may feel distant, but faith learns to trust His Word above shifting emotion and to let Jehovah have the final say.',
    description:
      'A gentle reflection on Psalm 34:18 and the necessity of believing God\'s nearness even when our feelings insist otherwise.',
    category: 'Comfort',
    publishedAt: '31 October 2025',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Quiet sanctuary suited to prayer and comfort',
    featured: false,
    tags: ['Comfort', 'Faith', 'Brokenhearted'],
    highlight:
      'When God says He is close to the brokenhearted, faith chooses His Word over the testimony of unstable feelings.',
    sidebarNote:
      'There are seasons when the holiest act is simply to believe God\'s nearness before you can feel it.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 34:18',
        text:
          'The Lord is close to the brokenhearted and saves those who are crushed in spirit.',
      },
      {
        type: 'paragraphs',
        title: 'Who Has The Final Say?',
        paragraphs: [
          'If you are like me, when you are brokenhearted or crushed in spirit, God seems distant. You do not feel His presence. Many times we feel God\'s presence during powerful worship or anointed preaching.',
          'And this is where we have to decide: shall we believe what we feel or what He says in His Word? Who has the final say, your feelings or His Word?',
          'My take: Jehovah has the final say. It does not matter what I feel. When He says He is close, I choose to believe that.',
        ],
      },
    ],
  },
  {
    slug: 'all-things-serve-you',
    title: 'All Things Serve You',
    excerpt:
      'Not all things please God, but even painful and evil events remain under His sovereign hand and are made to serve His purposes.',
    description:
      'A perspective-shaping meditation on Psalm 119:91, inviting believers to trust God\'s sovereign wisdom amid a world full of pain, headlines, and uncertainty.',
    category: 'Sovereignty',
    publishedAt: '29 October 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'A work site reflecting God’s hidden purposes through difficult seasons',
    featured: false,
    tags: ['Sovereignty', 'Trust', 'Providence'],
    highlight:
      'The text does not say all things please God. It says all things serve Him, and that changes how we face the world.',
    sidebarNote:
      'Watching the news becomes less crushing when you remember that God is not surprised by history, pain, or human folly.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 119:91',
        text:
          'Your laws endure to this day, for all things serve you.',
      },
      {
        type: 'paragraphs',
        title: 'Not All Things Please God',
        paragraphs: [
          'A casual look at this text might lead you to shake your head in doubt. How can all things serve God when there is so much evil and pain all around?',
          'First, it is important to set the record straight. It does not say all things please God. Rather, they serve Him. Even the evil and painful things serve Him. Joseph\'s suffering and the crucifixion of Jesus are clear examples of this.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Trust The One Who Knows The Whole Story',
        paragraphs: [
          'If you look at your life, you can also point out instances where things seemed so bad but later brought much good. However, the text does not say all things serve you. It says they serve God. Many times what we call good may not be so from His perspective.',
          'In view of all this, put your faith in God and trust that He knows what He is up to with His creation, which includes you. Armed with this knowledge, you can face each day with joy, enthusiasm, and anticipation rather than despair and hopelessness. Rise up, dust yourself, and enjoy the adventure that life is.',
        ],
      },
    ],
  },
  {
    slug: 'affirmation-before-petition',
    title: 'Affirmation Before Petition',
    excerpt:
      'The disciples teach us that strong prayer begins by affirming God\'s sovereignty before laying our needs before Him.',
    description:
      'A practical reflection on Acts 4 and a prayer pattern that strengthens faith by grounding petition in the power and rule of God.',
    category: 'Prayer',
    publishedAt: '28 October 2025',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Believers gathered in unified prayer',
    featured: false,
    tags: ['Prayer', 'Faith', 'Sovereignty'],
    highlight:
      'Affirming God\'s sovereignty before petition both strengthens faith and aligns what we ask with His overall plan.',
    sidebarNote:
      'Before your next petition, let your soul rehearse who God is, not because He forgets, but because you do.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 4:24',
        text:
          'When they heard this, they raised their voices together in prayer to God. “Sovereign Lord, you made the heavens and the earth and the sea, and everything in them.”',
      },
      {
        type: 'paragraphs',
        title: 'Not Reminding God',
        paragraphs: [
          'Are these disciples reminding God of what He already knows? Of course not. God never forgets and therefore never needs to be reminded.',
          'From verse 24 up to verse 28, they are building the foundation for their petition. This is called affirmation before petition. They are affirming God\'s power and sovereignty before launching their requests.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'A Pattern Worth Emulating',
        paragraphs: [
          'This accomplishes at least two purposes. First, it bolsters their own faith. In essence they are reminding themselves of God\'s power. Second, it grounds and aligns their petition with God\'s overall plan.',
          'It is a good prayer pattern worth emulating.',
        ],
      },
    ],
  },
  {
    slug: 'but-god',
    title: 'But God',
    excerpt:
      'Human malice, ignorance, and misuse of power never stand outside God\'s sovereignty; the same circumstances meant to harm can become instruments in His hand.',
    description:
      'A hope-filled meditation on Acts 3 and the heavy theological weight of two simple words: but God.',
    category: 'Hope',
    publishedAt: '25 October 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'A path through difficulty suggesting divine reversal and hope',
    featured: false,
    tags: ['Hope', 'Providence', 'Destiny'],
    highlight:
      'Your destiny is not in man\'s power, malice, or ignorance. It remains in the hands of God who can use even those things to fulfil His purpose.',
    sidebarNote:
      'Whenever fear rises, pause at the words but God and remember that no human action escapes His sovereign disposal.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 3:15, 17-18',
        text:
          'You killed the author of life, but God raised Him from the dead. I know that you acted in ignorance, but this is how God fulfilled what He had foretold.',
      },
      {
        type: 'paragraphs',
        title: 'The Weight Of A Small Word',
        paragraphs: [
          'I find the word but in the NIV translation very weighty. Fellows kill Jesus thinking it is over, but God. Guys act foolishly out of ignorance, again but God uses this ignorance to fulfil prophecy.',
          'This tells me two things. One, man can have power over you and misuse it to harm you, but God can use those same actions intended for harm to lift you beyond what you imagined possible.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'An Instrument At God\'s Disposal',
        paragraphs: [
          'Secondly, God can use even human ignorance to achieve His purposes. Wisdom, ignorance, folly, malice, shrewdness, all are instruments at God\'s disposal.',
          'In view of this, what are you worried about, child of God? The same situation that has kept you awake is simply an instrument at God\'s disposal. Cheer up. Your destiny is not in man\'s power or malice or any precarious situation. It is in God\'s hands.',
        ],
      },
    ],
  },
  {
    slug: 'let-the-pressure-come',
    title: 'Let The Pressure Come',
    excerpt:
      'Affliction is never pleasant, but history and Scripture both testify that adversity often keeps the church and the believer spiritually awake.',
    description:
      'An unpopular but necessary reflection on Psalm 119 and the role affliction can play in driving believers nearer to Christ.',
    category: 'Spiritual Growth',
    publishedAt: '24 October 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church interior symbolizing spiritual alertness and prayer',
    featured: false,
    tags: ['Affliction', 'Growth', 'Prayer'],
    highlight:
      'What matters most is not physical ease but learning God\'s decrees and staying spiritually awake.',
    sidebarNote:
      'Prosperity can sedate the soul as easily as adversity can awaken it. Pray not first for ease, but for spiritual alertness.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 119:67, 71',
        text:
          'Before I was afflicted I went astray, but now I obey your word. It was good for me to be afflicted so that I might learn your decrees.',
      },
      {
        type: 'paragraphs',
        title: 'An Unpopular Text',
        paragraphs: [
          'In today\'s church, you may never hear such texts quoted from many pulpits. Yet church history testifies that it has often been easier for the church to survive adversity than prosperity.',
          'Church historians have long pondered whether Constantine\'s conversion was a blessing or a curse to the church, because peace and state sponsorship eventually led to spiritual slumber and apostasy.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Pressed To The Breast Of Christ',
        paragraphs: [
          'Let us be honest. When all around us is rosy and cozy, we hardly see the need for prayer. For the psalmist, what matters is not physical ease and comfort, but learning God\'s decrees and being spiritually alert.',
          'Hudson Taylor said, “Let the pressure come, as long as it presses me to the breast of Christ.” With the spiritual slumber currently being experienced in the church, this should be a good, albeit unpopular, intercessory prayer.',
        ],
      },
    ],
  },
  {
    slug: 'teach-me-knowledge-and-good-judgement',
    title: 'Teach Me Knowledge And Good Judgement',
    excerpt:
      'God does not intend us to ask Him fresh questions about every decision; He expects us to grow by applying the wisdom gained from His Word.',
    description:
      'A practical reflection on Proverbs 119:66, spiritual maturity, and using biblical knowledge to make godly decisions in everyday life.',
    category: 'Wisdom',
    publishedAt: '23 October 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Believers learning and serving together',
    featured: false,
    tags: ['Wisdom', 'Knowledge', 'Decision-Making'],
    highlight:
      'Spiritual maturity means learning to use the knowledge gained from God\'s Word to make decisions that please Him.',
    sidebarNote:
      'Study, fellowship, and reflection are not merely informative. They are how God trains judgement for the moments when instant prayer is not realistic.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 119:66',
        text:
          'Teach me knowledge and good judgement, for I believe in your commands.',
      },
      {
        type: 'paragraphs',
        title: 'Growing Beyond Constant Questions',
        paragraphs: [
          'When children are young and learning to speak, they ask many questions. As we teach them and they grow, we expect the questions to decrease as they learn to apply the knowledge gained to obtain the answers and directions they need.',
          'As I grow in my journey of faith, I realize God expects me to use the knowledge I gain as I interact with His Word to make godly decisions.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Judgement Formed By The Word',
        paragraphs: [
          'One troubling example for many married men is how to respond in a godly manner when your wife annoys you. If you keep taking guidance from non-Christian mentors rather than what God has been teaching you, something is very wrong.',
          'I believe we are supposed to use the knowledge gained when we study the Bible, read good books, and fellowship with others, so that we respond in a way pleasing to God. That is the essence of David\'s prayer. May God teach you knowledge and good judgement.',
        ],
      },
    ],
  },
  {
    slug: 'first-obey-further-instructions-will-come',
    title: 'First Obey, Further Instructions Will Come',
    excerpt:
      'Many believers complain that heaven is quiet while all along God has already spoken clearly in His Word and is waiting on obedience.',
    description:
      'A direct exhortation on Proverbs 1 and the danger of preferring spiritual drama to the plain, clear Word of God.',
    category: 'Obedience',
    publishedAt: '01 October 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church interior where Scripture is read and taught',
    featured: false,
    tags: ['Obedience', 'Scripture', 'Guidance'],
    highlight:
      'Read, meditate, and obey. Heaven often feels quiet only because we are ignoring what it has already said.',
    sidebarNote:
      'If the simple Word is being ignored, dramatic new revelations will not solve the deeper issue.',
    content: [
      {
        type: 'scripture',
        reference: 'Proverbs 1:24-26',
        text:
          'Since you refuse to listen when I call and do not accept my rebuke, I in turn will laugh when disaster strikes you.',
      },
      {
        type: 'paragraphs',
        title: 'God Still Speaks',
        paragraphs: [
          'Any Christian who says God does not speak today like He did in the past is being economical with the truth. Yet many make long journeys to hear God through a so-called mighty prophet.',
          'Many times I am tempted to dismiss those gimmicks as wasted effort mostly born of sheer disobedience. These perennial sojourners keep moving from prophet to prophet because they are more attracted to drama than to the simple, clear, straightforward Word from the mouth of the Lord.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Read, Meditate, Obey',
        paragraphs: [
          'If all of us read God\'s Word and followed what we hear, we would realize we do not need other insights from the so-called favourites of God. Read, meditate, and obey.',
          'If however you read and ignore what you hear, you will keep complaining that heaven is quiet while all the time heaven is saying, first obey; further instructions will come, and your fellowship with God is going to be fresh and vibrant.',
        ],
      },
    ],
  },
  {
    slug: 'unless-you-fear-god',
    title: 'Unless You Fear God',
    excerpt:
      'Ecclesiastes strips human effort bare and reminds us that achievement, fame, and ownership all collapse into vanity unless they are surrendered to God\'s mission.',
    description:
      'A sober reflection on Ecclesiastes 12:8 and the only thing that rescues human effort from meaninglessness: fearing God and keeping His commandments.',
    category: 'Wisdom',
    publishedAt: '29 September 2025',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Human effort and building work that point to the question of lasting meaning',
    featured: false,
    tags: ['Wisdom', 'Meaning', 'Ecclesiastes'],
    highlight:
      'Unless all our efforts and creativity are dedicated to God\'s mission, they are eventually reduced to meaningless, meaningless.',
    sidebarNote:
      'Achievement becomes lighter and truer when it is offered back to God rather than used to build a name that time will erase.',
    content: [
      {
        type: 'scripture',
        reference: 'Ecclesiastes 12:8, 13',
        text:
          'Meaningless! Meaningless! says the Teacher, everything is meaningless. Fear God and keep His commandments, for this is the whole duty of man.',
      },
      {
        type: 'paragraphs',
        title: 'The Teacher Is Right',
        paragraphs: [
          'Think about it. You spend your skill and effort building empires, but eventually you have to hand over. Not only that, whatever you thought was very important is reduced to nothing as someone comes up with a better innovation and your fame fades away.',
          'Whatever you currently call yours, your children claim as a right even though they never shed a single drop of sweat for it. So, the Teacher is right. Everything, when given serious thought, is meaningless.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'What Rescues Effort From Vanity',
        paragraphs: [
          'Unless you keep one fact as part and parcel of all your efforts: fear God and keep His commandments. Unless all our efforts, creativity and the fruit thereof are dedicated to God\'s mission, everything is finally reduced to meaningless, meaningless.',
        ],
      },
    ],
  },
  {
    slug: 'my-response-is-faith',
    title: 'My Response Is Faith',
    excerpt:
      'Because we cannot fully understand the work of God, the only fitting response is not control, but obedient faith.',
    description:
      'A short devotional meditation on Ecclesiastes 11:5 and the harmony that often follows simple obedience to God\'s decrees.',
    category: 'Faith',
    publishedAt: '26 September 2025',
    readTime: '2 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Peaceful church setting symbolizing trust and obedience',
    featured: false,
    tags: ['Faith', 'Obedience', 'Trust'],
    highlight:
      'I do not have to understand God\'s decrees in order to follow them. Once He has spoken, my resolve is to obey.',
    sidebarNote:
      'Obedience often clarifies life not by answering every mystery, but by bringing the soul into harmony with God.',
    content: [
      {
        type: 'scripture',
        reference: 'Ecclesiastes 11:5',
        text:
          'You cannot understand the work of God, the Maker of all things.',
      },
      {
        type: 'paragraphs',
        title: 'A Fitting Response',
        paragraphs: [
          'In view of this, my response to you O Lord is faith. I do not have to understand your decrees to follow and obey them. Once you have said it, my resolve is to obey.',
          'Amazingly when I so do, my life seems to flow very well. I experience a harmony which is difficult to describe. Things seem to fit quite neatly. The world makes sense.',
          'Thanks for saving me and giving me the ability to appreciate your blessed decrees. They will rule my life as long as I live.',
        ],
      },
    ],
  },
  {
    slug: 'over-righteous-over-wise',
    title: 'Over-Righteous, Over-Wise',
    excerpt:
      'Adding burdens God never required and trusting too heavily in one\'s own wisdom both destroy the freedom and humility meant to mark life with Christ.',
    description:
      'A practical reflection on Ecclesiastes 7:16, legalism, over-confidence, and the grace-filled posture that keeps life adventurous and sane.',
    category: 'Wisdom',
    publishedAt: '20 September 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church community walking together in grace and humility',
    featured: false,
    tags: ['Wisdom', 'Grace', 'Humility'],
    highlight:
      'Adding strict rules not found in God\'s Word is self-righteousness, and refusing the wisdom of others is another path to ruin.',
    sidebarNote:
      'God\'s grace frees us from both legalism and self-important wisdom, inviting us into a lighter and more teachable life.',
    content: [
      {
        type: 'scripture',
        reference: 'Ecclesiastes 7:16',
        text:
          'Do not be over-righteous, neither be over-wise; why destroy yourself?',
      },
      {
        type: 'paragraphs',
        title: 'Legalism And Over-Wisdom',
        paragraphs: [
          'If to be righteous is difficult, is it really possible to be over-righteous? Solomon\'s point is that adding strict rules that are not in God\'s Word is a sign of self-righteousness. It leads to legalism and robs believers of the freedom enjoyed in Christ.',
          'I also witnessed a good Christian man destroy his family and ruin his marriage through over-wisdom. He knew so much that the opinions of his wife and children were always dismissed until they all ran away from him, leaving him lonely and miserable.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'A Better Way',
        paragraphs: [
          'The call is to depend on God\'s grace, appreciate the limitation of your wisdom, and acknowledge that others, even those you consider less learned, may teach you a thing or two.',
          'With this attitude, life becomes a blissful, adventurous ride.',
        ],
      },
    ],
  },
  {
    slug: 'construction-sites-in-gods-hands',
    title: 'Construction Sites In God\'s Hands',
    excerpt:
      'God specializes in using imperfect people, unfinished people, and weak vessels who still feel deeply aware of their own frailties.',
    description:
      'A deeply personal reflection on patience, anger, weakness, and the encouraging truth that God still uses people who remain under construction.',
    category: 'Grace',
    publishedAt: '19 September 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Construction project symbolizing unfinished lives in God’s hands',
    featured: false,
    tags: ['Grace', 'Weakness', 'Patience'],
    highlight:
      'God does not wait for completed houses to move in. He occupies construction sites and uses incomplete vessels.',
    sidebarNote:
      'Do not confuse spiritual incompleteness with spiritual uselessness. God has always used imperfect men and women.',
    content: [
      {
        type: 'scripture',
        reference: 'Ecclesiastes 7:8b-9',
        text:
          'Patience is better than pride. Do not be provoked in your spirit, for anger resides in the lap of fools.',
      },
      {
        type: 'paragraphs',
        title: 'The Mirror Of The Word',
        paragraphs: [
          'When I read and reflect on such texts, I keep starting my prayer times with repentance and cries to God for help. I cannot hide myself from what the mirror of God\'s Word is clearly revealing about my frailties.',
          'Even small things, like repeated missed phone calls, can expose pride and impatience in me. This text is a sharp rebuke for that kind of policy, and I admit that I am still a construction site. God is not through with me yet.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Used While Under Construction',
        paragraphs: [
          'But can God use a fellow with such weaknesses? Yes. God does not have perfect people this side of heaven to use. He has always used imperfect men and women.',
          'I find it important to share this because some believers shrink back from serving, saying they are still too far off. But that is our God. He specializes in using weak vessels. He occupies incomplete houses. Construction sites. So, my brother, my sister, get up and start using your gifts and talents. Mengine mta-sort na Mungu mkiendelea.',
        ],
      },
    ],
  },
  {
    slug: 'haki-yetu',
    title: 'Haki Yetu!',
    excerpt:
      'Paul\'s protest in Philippi reminds believers that resisting the abuse of power is not a denial of humility, but often a faithful expression of justice.',
    description:
      'A sharp reflection on Acts 16, civil rights, and the mistaken idea that Christian humility always requires silent docility.',
    category: 'Justice',
    publishedAt: '11 September 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church workers standing for truth and justice',
    featured: false,
    tags: ['Justice', 'Courage', 'Witness'],
    highlight:
      'People who abuse human rights are not served by Christian silence; sometimes resisting them is part of being a good soldier of Christ.',
    sidebarNote:
      'There is a difference between meekness and cowardice. Paul shows that holy protest can still be fully Christian.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 16:37',
        text:
          'They beat us publicly without a trial, even though we are Roman citizens, and threw us into prison. And now do they want to get rid of us quietly? No!',
      },
      {
        type: 'paragraphs',
        title: 'The Wrong People To Abuse',
        paragraphs: [
          'This is during Paul\'s second missionary journey in Philippi, a Roman colony. Roman citizens had rights, one of which was that they had to face trial before being imprisoned. But just like in Kenya, officers constantly abused those rights and got away with it because many were fearful or ignorant.',
          'This time round, they touched the wrong people. Paul knew his rights. They could not be released quietly after their rights had been abused. They protested. If it was in Kenya, what they were doing would have been labelled maandamano.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Christianity Is Not Docility',
        paragraphs: [
          'The officers swallowed their pride and came and honorably escorted the soldiers of Christ out. With that, a lesson was learned: stop abusing people\'s rights.',
          'When you read this, you wonder who taught Christians that being docile when fellows abuse office and run roughshod over others is practicing good Christianity. People who abuse human rights are on Satan\'s side. Resisting and protesting against them is being a good soldier of Christ. Haki yetu!',
        ],
      },
    ],
  },
  {
    slug: 'the-two-not-three',
    title: 'The Two, Not Three',
    excerpt:
      'Jesus takes the marriage debate beyond cultural argument and back to the beginning, where God\'s design was always one husband and one wife.',
    description:
      'A discipleship reflection on marriage, bigamy, hard hearts, and why Christ\'s appeal to creation settles the matter more deeply than cultural debate.',
    category: 'Marriage',
    publishedAt: '06 September 2025',
    readTime: '6 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Christian families and couples gathered together',
    featured: false,
    tags: ['Marriage', 'Discipleship', 'Creation'],
    highlight:
      'Jesus went beyond Moses back to the beginning and declared that the two, not three, will become one flesh.',
    sidebarNote:
      'Discipleship in marriage begins not with cultural convenience but with God\'s original and enduring design.',
    content: [
      {
        type: 'scripture',
        reference: 'Mark 10:7-8',
        text:
          'For this reason a man will leave his father and mother and be united to his wife, and the two will become one flesh. So they are no longer two, but one flesh.',
      },
      {
        type: 'paragraphs',
        title: 'A Live Debate',
        paragraphs: [
          'The debate about one man and one wife or more wives is very much alive. Some argue that Christian men should marry several women so that all women are taken care of and single motherhood is reduced. Others blame missionary influence for introducing monogamy as though it were merely a foreign cultural layer.',
          'But the grapevine theory about there being more women than men is not supported by statistics. At the age when people normally get married, there are actually slightly more men than women.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Back To The Beginning',
        paragraphs: [
          'Our focus text is part of Jesus\' answer to the marriage and divorce question. In answering, Jesus goes beyond the law of Moses to the beginning and declares that the two, not three, will become one.',
          'So, all those who argue that godly men under the Mosaic law married several wives and got away with it should remember Jesus\' explanation: it was because their hearts were hardened. God\'s original and eternal plan was one husband, one wife. And He has ensured the numbers support this.',
        ],
      },
    ],
  },
  {
    slug: 'turn-my-eyes-from-ubatili',
    title: 'Turn My Eyes From Ubatili',
    excerpt:
      'Anything pursued outside the mission of God finally collapses into vanity, futility, and the emptiness Scripture names as worthless.',
    description:
      'A searching prayer from Psalm 119:37, calling believers to turn away from vanity and to evaluate every pursuit by eternity and the mission of God.',
    category: 'Devotion',
    publishedAt: '05 September 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'A quiet sanctuary suited for prayer and reflection',
    featured: false,
    tags: ['Devotion', 'Vanity', 'Mission'],
    highlight:
      'If my pursuits and lifestyle choices cannot be defined in terms of the mission of God, then they must be stamped as ubatili.',
    sidebarNote:
      'One of the holiest prayers during a week of prayer and fasting is simply this: turn my eyes away from worthless things.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 119:37',
        text:
          'Turn my eyes away from worthless things; preserve my life according to your word.',
      },
      {
        type: 'paragraphs',
        title: 'What Is Ubatili?',
        paragraphs: [
          'The key phrase here is worthless things. I tried to trace the original word and found it is shav in Hebrew. Seeking its Arabic equivalent led me to batil, and naturally the Swahili equivalent becomes ubatili.',
          'The meaning is emptiness, vanity, lies, futility. Any pursuit that does not have eternity or God\'s mission at its centre must be stamped ubatili.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Measure Every Pursuit',
        paragraphs: [
          'If I pursue academic credentials for titles and status, ubatili. Wealth to appear in great magazine lists, ubatili. A car to communicate opulence to a cheering world, ubatili. Anything that moves an admiring populace to drool in envy, ubatili. If my pursuits and lifestyle choices cannot be defined in terms of the mission of God, ubatili.',
          'This week is one of prayer and fasting. Something inside me says that topmost in our daily prayer lists should be the psalmist\'s prayer: Geuza macho yangu yasiutazame ubatili; unirudishe hai katika njia zako.',
        ],
      },
    ],
  },
  {
    slug: 'forego-anything-for-the-gospel',
    title: 'Forego Anything For The Gospel',
    excerpt:
      'Christian maturity includes a willingness to endure inconvenience and surrender non-essential preferences if doing so removes obstacles to the gospel.',
    description:
      'A practical reflection on Timothy\'s circumcision and the costly flexibility believers need if they are truly committed to the propagation of the gospel.',
    category: 'Mission',
    publishedAt: '04 September 2025',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church servants preparing to reach others with the gospel',
    featured: false,
    tags: ['Mission', 'Sacrifice', 'Gospel'],
    highlight:
      'If a position I hold is not sinful, I should be prepared to forego it if doing so will help win people to Jesus.',
    sidebarNote:
      'The inconvenience you resist may be the very doorway through which the gospel gains a hearing.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 16:3',
        text:
          'Paul wanted to take him along on the journey, so he circumcised him because of the Jews who lived in that area.',
      },
      {
        type: 'paragraphs',
        title: 'Why Circumcise Timothy?',
        paragraphs: [
          'Paul knew that circumcision is not necessary for salvation. It is a culture practiced by Jews and some other communities. So why did he subject Timothy to the inconvenience of a painful and intrusive surgery that required days of recovery?',
          'For Paul, Timothy was just fine uncircumcised. However, in that state it would have been difficult for him to be accepted by the Jews. And remember that during these initial missionary journeys, the first stop was mostly in Jewish synagogues.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'The Agenda Of The Gospel',
        paragraphs: [
          'This tells us that Christians should be prepared to put up with any inconvenience so as to avoid hindrance to the propagation of the gospel.',
          'If I hold one position and a target group holds another, and both positions are not sinful, I should be prepared to forego mine if by doing so people are won to Jesus. His agenda is to bring men to God. I am committed to that agenda, and I should be prepared to forego anything to propagate it.',
        ],
      },
    ],
  },
  {
    slug: 'a-servant-or-a-hopper',
    title: 'A Servant Or A Hopper?',
    excerpt:
      'Shallow excitement is easily swept away by the next wave, but serious servants stay busy advancing the kingdom and do not have time to chase spiritual trends.',
    description:
      'A warning from Lystra against shallow Christianity and an appeal for serious believers whose hands remain occupied in the work of the kingdom.',
    category: 'Faithfulness',
    publishedAt: '02 September 2025',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'A gathered church community representing commitment and service',
    featured: false,
    tags: ['Faithfulness', 'Service', 'Discernment'],
    highlight:
      'The people most easily carried away by waves are usually not the serious serving category, because servants are too busy with their Master\'s work to keep hopping.',
    sidebarNote:
      'Kingdom stability is rarely found in spectators. It is usually found in those whose hands are already on the plough.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 14:19',
        text:
          'Some Jews came from Antioch and Iconium and won the crowd over. They stoned Paul and dragged him outside the city, thinking he was dead.',
      },
      {
        type: 'paragraphs',
        title: 'From Sacrifice To Stones',
        paragraphs: [
          'This happened at Lystra during Paul\'s first missionary journey. When they entered that town, God moved mightily and they healed a well-known cripple. The crowds even offered to sacrifice to the missionaries.',
          'However, after a few days, some silver-tongued fellows came from neighboring cities and convinced the same crowds to stone the very men they had earlier wanted to sacrifice to as gods.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Busy On Your Plough',
        paragraphs: [
          'A huge percentage of church members even today are no different from those shallow converts. As soon as a wave comes, they quickly abandon whatever they were doing in order to follow it.',
          'One thing I have noticed though is that the people carried away by these waves are not the serious serving category. Those are too busy exercising their gifts and serving their Master in their areas of calling to be moved. So, are you a Lystran Christian waiting for the next popular wave, or are you so busy on your plough advancing God\'s kingdom that you only take casual notice of such waves? Are you a servant or a hopper?',
        ],
      },
    ],
  },
  {
    slug: 'when-the-chains-must-fall-off',
    title: 'When The Chains Must Fall Off',
    excerpt:
      'The difference between Peter and John the Baptist is not randomness but sovereignty: when God\'s work is complete, He permits one thing, and when it is not, the chains must fall.',
    description:
      'A meditation on Acts 12:7 and the sovereign wisdom of God, who decides whether a servant\'s chains fall off or a servant\'s life is complete.',
    category: 'Sovereignty',
    publishedAt: '01 September 2025',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'A path through constraint suggesting divine release and purpose',
    featured: false,
    tags: ['Sovereignty', 'Calling', 'Trust'],
    highlight:
      'As long as there is still work for me, I know beyond any doubt that all chains, however strong, will always fall off.',
    sidebarNote:
      'Sovereignty does not always answer why, but it does invite the soul to surrender itself fully to God\'s purpose.',
    content: [
      {
        type: 'scripture',
        reference: 'Acts 12:7',
        text:
          'Suddenly an angel of the Lord appeared and a light shone in the cell. He struck Peter on the side and woke him up. “Quick, get up!” he said, and the chains fell off Peter’s wrists.',
      },
      {
        type: 'paragraphs',
        title: 'Chains Off, Head Off',
        paragraphs: [
          'Think about John the Baptist. Possibly the same prison, servant of the same God and indeed the greatest of those born of women according to Jesus\' own testimony. One, the chains fell off. The other, the head fell off.',
          'Why? Because God, whom both men were serving, is sovereign. When one man\'s work is complete, He allows the head to be severed. When another one\'s work is not complete, the chains must fall off.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'I Am All Yours',
        paragraphs: [
          'What do we say in view of this? I am all yours, Lord. You created me for a purpose and You never consulted me when You did so.',
          'When my work gets completed, do with me as You wish. But as long as there is still work for me, I know beyond any doubt that all chains however strong will always fall off. I am all yours.',
        ],
      },
    ],
  },
  {
    slug: 'teach-us-to-number-our-days',
    title: 'Teach Us To Number Our Days',
    excerpt:
      'Remembering our mortality helps us abandon petty grudges and glamorous distractions so that we can give our short lives to what truly has eternal value.',
    description:
      'A prayerful meditation on Psalm 103:15-16, human mortality, and the need to keep one\'s eye fixed on life objectives that endure.',
    category: 'Prayer',
    publishedAt: '30 August 2025',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Quiet sacred space encouraging prayerful reflection on mortality',
    featured: false,
    tags: ['Prayer', 'Mortality', 'Focus'],
    highlight:
      'Petty jealousies and little grudges misfire the soul and slow us down from achieving the eternal purposes God ordained for us.',
    sidebarNote:
      'A wise life is often nothing more complicated than remembering how short it is and refusing to waste it on smallness.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 103:15-16',
        text:
          'As for man, his days are like grass, he flourishes like a flower of the field; the wind blows over it and it is gone, and its place remembers it no more.',
      },
      {
        type: 'paragraphs',
        title: 'A Prayer About Brevity',
        paragraphs: [
          'Lord, help me to always remember I am mortal, to have a reasonable estimate of my days, and to keep in mind that I am here for a very short time.',
          'Help me therefore to avoid petty jealousies, little grudges, keeping records of offences, and being distracted by the world\'s glamour. These negative-energy-inducing vices act like a vehicle misfiring, obstructing and slowing me down from achieving the eternal purposes you have ordained for me.',
          'Help me to keep my eye on the ball and only entertain those emotions that act like catalysts to propel me toward attaining life objectives which have eternal value. Amen.',
        ],
      },
    ],
  },
  {
    slug: 'faithfulness-over-flamboyance',
    title: 'The Quiet Strength Of Faithfulness',
    excerpt:
      'Timothy\'s quiet temperament reminds us that God delights in steady faithfulness far more than noise, glamour, or bravado.',
    description:
      'A pastoral reflection on Timothy, quiet courage, and why faithful consistency often matters more than personality in the work of God.',
    category: 'Ministry',
    publishedAt: '01 July 2026',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Congregation gathered inside the church sanctuary',
    featured: true,
    tags: ['Faithfulness', 'Ministry', 'Timothy'],
    highlight:
      'What matters in God\'s work is not hubris and flamboyance, but simple, consistent faithfulness and eyes on the ball.',
    sidebarNote:
      'Measure your service today by faithfulness rather than by visibility, personality, or applause.',
    content: [
      {
        type: 'scripture',
        reference: '1 Corinthians 16:10',
        text:
          'If Timothy comes, see to it that he has nothing to fear while he is with you. For he is carrying on the work of the Lord just as I am.',
      },
      {
        type: 'paragraphs',
        title: 'Quiet But Faithful',
        paragraphs: [
          'If you combine this text with Paul\'s exhortation to Timothy, reminding him that God has not given us a spirit of timidity, clearly Timothy was not the exuberant sanguine breed. The picture is that of a quiet, timid, seemingly fearful persona. Yet Paul has all the good things to say about him.',
          'What matters in God\'s work is not hubris and flamboyance. Simple, consistent faithfulness and eyes on the ball matter much more. Of course God can use the outgoing temperament if faithfully dedicated to Him.',
          'But in my short stint in church management and ministry, I have come to learn, sometimes painfully, that what matters is not how glamorous a gift is, but simple faithfulness and consistency. This pedigree is the one that God uses to push His agenda and mission on earth.',
        ],
      },
    ],
  },
  {
    slug: 'a-wake-up-call-to-the-children-of-light',
    title: 'When Darkness Speaks Boldly',
    excerpt:
      'The boldness of darkness should not paralyze believers, but awaken greater courage, clarity, and consistency in gospel witness.',
    description:
      'A sober reflection on cultural darkness, social-media influence, and the urgent call for Christians to speak truth with courage and consistency.',
    category: 'Christian Witness',
    publishedAt: '30 June 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church members standing together outdoors after fellowship',
    featured: false,
    tags: ['Boldness', 'Witness', 'Discernment'],
    highlight:
      'The enemy\'s agents are bold, creative and consistent, and that is a wake-up call to the children of the light.',
    sidebarNote:
      'Ask God to make you bold, unapologetic, and consistent in carrying the message your Master has committed to you.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 52:1-2',
        text:
          'Why do you boast of evil, you mighty man? Why do you boast all day long, you who are a disgrace in the eyes of God? Your tongue plots destruction; it is like a sharpened razor.',
      },
      {
        type: 'paragraphs',
        title: 'When Darkness Speaks Loudly',
        paragraphs: [
          'There is a story trending on social media that can easily grieve and trouble you. A certain content creator feels some people because of their looks should not be allowed to procreate. He suggests involuntary vasectomy for such, arguing that they are propagating inferior genes on earth.',
          'Should a Christian even be reading such? I do. Reason: I consider it part of my responsibility to understand the context in which God expects me to propagate the gospel. I respect the reasons some believers may have for avoiding such content, but I must understand the world I am sent into.',
          'Back to the disgraceful man with a razor sharp tongue. What concerns me is that by his evil boldness and consistency, he is winning many to his school of thought. Even when people expressed great anger at him, he remained bullish and wondered why people were annoyed with him rather than blaming God.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Children Of Darkness And Children Of Light',
        paragraphs: [
          'Jesus said the children of darkness are more shrewd than the children of the light. This man therefore serves as a wake-up call to me. I must be more bold, un-apologetic, and consistent in propagating the message that my Master has committed to me.',
          'It is not time to sleep, despair, or be carried away by worldly concerns. Rather it is time to put on the full armour and get into the action. Our Commander has never lost any battle.',
        ],
      },
    ],
  },
  {
    slug: 'are-your-rooms-filled-with-treasure',
    title: 'Are Your Rooms Filled With Treasure?',
    excerpt:
      'Biblical treasure is not measured merely by visible success, but by the quiet riches God values within a home and a life.',
    description:
      'A wisdom reflection on what true treasure means, and how success in one area can impoverish the places God values most.',
    category: 'Wisdom',
    publishedAt: '24 June 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/kids-sunday-school.jpg',
    coverAlt: 'Children gathered in a church learning setting',
    featured: false,
    tags: ['Wisdom', 'Stewardship', 'Family'],
    highlight:
      'The real question is not who appears successful, but whether I am pursuing one success at the expense of treasures God values elsewhere.',
    sidebarNote:
      'Examine whether your definition of success leaves room for peace, love, family harmony, and faithful stewardship.',
    content: [
      {
        type: 'scripture',
        reference: 'Proverbs 24:3-4',
        text:
          'By wisdom a house is built, and through understanding it is established; through knowledge its rooms are filled with rare and beautiful treasures.',
      },
      {
        type: 'paragraphs',
        title: 'What Counts As Treasure?',
        paragraphs: [
          'The original recipients of this text obviously understood the rare and beautiful treasures in terms of material things. In the New Testament however, treasures are redefined and they are mainly spiritual: peace, love, family harmony, and similar riches.',
          'It is therefore difficult to determine whose house has its rooms filled with treasure, especially considering that man judges the outside.',
          'A man may seem successful in the ministry of the gospel but make it his idol, pursuing it at the expense of his wife and children. His house\'s rooms are not filled with treasure.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Success At What Cost?',
        paragraphs: [
          'Another may pursue wealth and get it in abundance, but use it for ephemeral purposes while neglecting his walk with God, his family, and responsible stewardship. The world decorates and celebrates him as wise, but the rooms of his house are not filled with treasure.',
          'The question then is not, which of my neighbors and acquaintances has treasure, but rather, am I pursuing success in one area at the expense of treasures that God values in other areas? And that is where we all need God\'s grace.',
        ],
      },
    ],
  },
  {
    slug: 'please-send-someone-else',
    title: 'When God Disturbs Calm Waters',
    excerpt:
      'Moses shows how quickly personal comfort and cost-benefit analysis can make divine assignments feel unreasonable and unwelcome.',
    description:
      'A reflection on Moses\' reluctance, personal comfort, and the subtle ways believers decline the difficult assignments God places before them.',
    category: 'Calling',
    publishedAt: '22 May 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Construction scene symbolizing difficult yet necessary work',
    featured: false,
    tags: ['Calling', 'Obedience', 'Moses'],
    highlight:
      'Many of us have politely declined divine appointments because our cost-benefit analysis could not justify obedience.',
    sidebarNote:
      'Revisit the assignments you have resisted and ask whether comfort or obedience has been shaping your decisions.',
    content: [
      {
        type: 'scripture',
        reference: 'Exodus 4:13',
        text: 'But Moses said, O Lord, please send someone else to do it.',
      },
      {
        type: 'paragraphs',
        title: 'Why Moses Hesitated',
        paragraphs: [
          'Apart from personal speech-related challenges, Moses had enough reasons to be reluctant to take the assignment. First, his current life was calm and peaceful. No complications of turning sticks into snakes and leprous hands. Why disturb calm waters?',
          'Secondly, the task God was giving him had two massive political difficulties: getting the slaves to buy into his narrative and confronting a monarch whose power Moses fully appreciated after spending four decades of his formative years in state house.',
          'Thirdly, a quick personal cost-benefit analysis would have yielded negative results. Apart from the many dangers accompanying the task, there was really no personal gain for him. For such a task, please send someone else to do it.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'When Comfort Overrides Calling',
        paragraphs: [
          'Do we not daily face these issues when evaluating divine appointments? Our culture glorifies personal comfort and gain. Truthfully, many of us have politely declined divine appointments on account of personal cost-benefit analysis.',
          'That is how we have ended up living mundane, humdrum lives devoid of the thrill and adventure that God intended when He molded us in the secret place and allowed us to see the sun. Time to evaluate our lives, is it not?',
        ],
      },
    ],
  },
  {
    slug: 'counting-the-cost-of-divine-appointments',
    title: 'The Cost Of Declining A Call',
    excerpt:
      'The life of comfort often appears safer than obedience, but it can quietly rob us of the adventure God intended for us.',
    description:
      'A second meditation on Moses\' reluctance that presses the question of how many divine assignments we quietly refuse for the sake of comfort.',
    category: 'Calling',
    publishedAt: '14 May 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church media team serving during a gathering',
    featured: false,
    tags: ['Calling', 'Comfort', 'Obedience'],
    highlight:
      'Our culture glorifies personal comfort and gain, but that often keeps us from the very assignments that would make life vivid with God.',
    sidebarNote:
      'Consider whether you have been protecting calm waters when God has been inviting you into obedient risk.',
    content: [
      {
        type: 'scripture',
        reference: 'Exodus 4:13',
        text: 'But Moses said, O Lord, please send someone else to do it.',
      },
      {
        type: 'paragraphs',
        title: 'The Reluctance Of Moses',
        paragraphs: [
          'Apart from personal speech-related challenges, Moses had enough reasons to be reluctant to take the assignment. His current life was calm and peaceful, and the divine call introduced snakes, leprous hands, conflict, and political tension.',
          'The assignment also involved persuading the slaves and confronting Pharaoh, a ruler whose power Moses deeply understood. Add to this the reality that there seemed to be no obvious personal gain, and reluctance became understandable.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Beyond Personal Gain',
        paragraphs: [
          'Many believers still weigh divine appointments through the lens of personal advantage. Yet the kingdom of God is not built by people who only accept assignments that preserve convenience and promise immediate benefit.',
          'When we repeatedly decline costly obedience, we settle for a tame life that lacks the thrill and adventure God intended. Time to evaluate our lives, is it not?',
        ],
      },
    ],
  },
  {
    slug: 'is-there-biblical-basis-for-generational-curses',
    title: 'Generational Curses And The New Covenant',
    excerpt:
      'A careful call to read the whole counsel of Scripture before repeating teachings that may not reflect the New Testament standing of believers in Christ.',
    description:
      'A theological note shaped by Dr. John Senyonyi\'s remarks, urging believers to test whether Scripture truly supports the idea of generational curses for Christians.',
    category: 'Doctrine',
    publishedAt: '11 May 2026',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church interior prepared for teaching and reflection',
    featured: false,
    tags: ['Doctrine', 'Scripture', 'Freedom'],
    highlight:
      'Believers must study the full counsel of Scripture rather than build doctrine from isolated Old Testament texts pulled from their original context.',
    sidebarNote:
      'Whenever a teaching becomes common in Christian circles, test it again against the full witness of Scripture in Christ.',
    content: [
      {
        type: 'quote',
        quote:
          'There is no clear biblical justification for what many Christians describe as generational curses.',
        attribution: 'Rev. Canon Dr. John Senyonyi',
      },
      {
        type: 'paragraphs',
        title: 'Testing A Common Teaching',
        paragraphs: [
          'Rev. Canon Dr. John Senyonyi says there is no biblical justification for what many Christians describe as generational curses. The former Uganda Christian University Vice Chancellor made the remarks in a message shared on The Ugandan Gospel social media pages, where he questioned the common interpretation of Scriptures often used to support the teaching.',
          'Dr. Senyonyi says that after extensively searching the Bible, he has not found clear scriptural evidence that believers inherit spiritual curses from previous generations.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Read Scripture In Context',
        paragraphs: [
          'He cautioned against taking Old Testament passages out of context, especially Scriptures where God was addressing the children of Israel concerning the sins of their forefathers.',
          'The respected theologian further urged Christians to study the full counsel of Scripture in order to understand the position of believers under the New Testament through Christ Jesus.',
        ],
      },
    ],
  },
  {
    slug: 'the-heritage-of-those-who-fear-his-name',
    title: 'The Heritage Of Those Who Fear His Name',
    excerpt:
      'One of the great inheritances of those who fear God is settled clarity about life\'s purpose, even when many questions remain unanswered.',
    description:
      'A devotional meditation on purpose, peace, and the quiet inheritance believers receive when they know God and belong to Him.',
    category: 'Purpose',
    publishedAt: '29 April 2026',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Church construction site representing purpose and direction',
    featured: false,
    tags: ['Purpose', 'Peace', 'Heritage'],
    highlight:
      'Part of the heritage of those who fear God is clarity about life\'s purpose: we are here to know Him, reflect Him, enjoy Him, and glorify Him.',
    sidebarNote:
      'Let your peace today rest not in having every answer, but in knowing whose you are and why you are here.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 61:5',
        text: 'You have given me the heritage of those that fear your name.',
      },
      {
        type: 'paragraphs',
        title: 'The Great Divide',
        paragraphs: [
          'One of the questions that baffles the human mind is why we are here. Those who do not know God try to construct answers to these complex questions from scratch. For those who fear God however, part of their heritage is clarity about life\'s purpose.',
          'We are here to know God, to reflect Him, to enjoy and glorify Him. So even when, as happens many times, we still ask why the suffering and why so much evil, we enjoy a settled purpose. We know God, we know that we belong to Him, and most importantly, we can trust Him in what we do not understand.',
          'Right there is the great divide. We enjoy peace while others are drinking themselves silly in order to calm the gnawing pain that eats their souls for lack of answers.',
        ],
      },
    ],
  },
  {
    slug: 'the-cruciform-identity',
    title: 'The Cruciform Identity',
    excerpt:
      'To understand who we are in Christ, we must learn to see ourselves through God\'s love, our own need of grace, and the world\'s misunderstanding.',
    description:
      'A reflection on cruciform identity and the freedom that comes when believers are no longer ruled by the world\'s approval or rejection.',
    category: 'Identity',
    publishedAt: '27 April 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church community gathered together outdoors',
    featured: false,
    tags: ['Identity', 'Grace', 'Victory'],
    highlight:
      'This is the secret of victory in a rebellious world: to know how God sees us, how grace humbles us, and why the world\'s verdict does not rule us.',
    sidebarNote:
      'When the world misunderstands you, return to the cross-shaped identity that keeps pride low and courage high.',
    content: [
      {
        type: 'scripture',
        reference: '1 Corinthians 4:13',
        text:
          'When we are slandered, we answer kindly. Up to this moment, we have become the scum of the earth, the refuse of the world.',
      },
      {
        type: 'paragraphs',
        title: 'Three Perspectives',
        paragraphs: [
          'This sounds like a terrible opinion of oneself until you consider the context. Paul in 1 Corinthians 4 is describing what is technically referred to as cruciform identity. Few Christians understand this, yet grasping it leads to a life of freedom and victory.',
          'There are three perspectives of this identity. God\'s point of view: we are loved, cherished, and valued. Our own self-assessment: we are in need of God\'s saving grace and not self-sufficient, so there is no room for pride.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Before The World',
        paragraphs: [
          'Before the world, since you follow Christ, you may be misunderstood, ridiculed, rejected, or overlooked. But this does not need to bother you at all. In fact, you can look with holy contempt at the titles, accolades, and honors offered by the world. Paul elsewhere says he considers them rubbish.',
          'This is the secret of our victory as we navigate in a world that largely rebels against God. The cruciform identity.',
        ],
      },
    ],
  },
  {
    slug: 'it-is-the-lord-who-judges-me',
    title: 'It Is The Lord Who Judges Me',
    excerpt:
      'A clear conscience can still be misled when it is shaped more by culture than by the searching truth of God\'s Word.',
    description:
      'A sobering reflection on conscience, culture, stewardship, and why Scripture must shape our moral judgement if we hope to please God.',
    category: 'Discernment',
    publishedAt: '25 April 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church team working together during a service',
    featured: false,
    tags: ['Discernment', 'Conscience', 'Scripture'],
    highlight:
      'For our consciences to be as close as possible to divine approval, we must soak our minds and hearts with God\'s Word.',
    sidebarNote:
      'Do not let applause or criticism become your judge. Let Scripture and the Spirit form your inner verdicts.',
    content: [
      {
        type: 'scripture',
        reference: '1 Corinthians 4:4',
        text: 'My conscience is clear, but that does not make me innocent. It is the Lord who judges me.',
      },
      {
        type: 'paragraphs',
        title: 'When Conscience Is Not Enough',
        paragraphs: [
          'I find this quite sobering indeed: it is possible to do something with a very clear conscience while all along being completely off the mark from where God sits.',
          'There are many sources of information that influence my value judgement, and one of them is the dominant culture of my society. Considering that literally all human cultures are badly infused with sin, it is very likely that they will pass something as right and even applaud it while it is evil through and through.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'The Word Shapes Judgement',
        paragraphs: [
          'Paul realizes that his decisions and actions are laced with sin. That is why he treads cautiously, saying that he cannot trust his conscience entirely. It can pass something evil as acceptable.',
          'For our consciences to be as close as possible to divine approval, we must soak our minds and hearts with God\'s Word. The Holy Spirit then easily turns the Logos into Rhema, effectively informing and dictating our decisions and actions. Only then can our actions pass God\'s judgement as acceptable.',
          'At the end of the day, we must never allow ourselves to be charmed by human applause or discouraged by their censure. We must say with Paul: It is the Lord who judges me.',
        ],
      },
    ],
  },
  {
    slug: 'only-god-makes-things-grow',
    title: 'Only God Makes Things Grow',
    excerpt:
      'Ministry must never become a personality cult, because every servant remains a servant and growth belongs to God alone.',
    description:
      'A firm pastoral word against elevating spiritual leaders beyond their place and forgetting that only God gives growth in His church.',
    category: 'Church Leadership',
    publishedAt: '22 April 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church sanctuary set for worship and preaching',
    featured: false,
    tags: ['Leadership', 'Humility', 'Church'],
    highlight:
      'Neither the one who plants nor the one who waters is anything, but only God who makes things grow.',
    sidebarNote:
      'Respect leaders deeply, but never at the expense of God\'s unique place as the source of growth and glory.',
    content: [
      {
        type: 'scripture',
        reference: '1 Corinthians 3:5-7',
        text:
          'What, after all, is Apollos? And what is Paul? Only servants, through whom you came to believe. I planted the seed, Apollos watered it, but God has been making it grow.',
      },
      {
        type: 'paragraphs',
        title: 'Only Servants',
        paragraphs: [
          'Sometimes I find it baffling when I see Christians literally deifying and near-worshipping their spiritual leaders. There is an interesting buzz in social media concerning a comedian who has mimicked a so-called mighty prophet, and his followers are promising earthly and celestial hell for the young lady unless she repents and pulls down her video.',
          'I believe leaders of all cadres should be respected. However, that respect should be earned. Church leaders in the New Testament dispensation especially earn their respect through their example. Theirs is moral authority.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'What Has Actually Grown?',
        paragraphs: [
          'Paul in this text tells the Corinthians not to make a very big deal of him, Apollos, or any other minister, for neither he who plants nor he who waters is anything, but only God who makes things grow.',
          'What things have the so-called mighty whatnot made to grow? I keep wondering.',
        ],
      },
    ],
  },
  {
    slug: 'how-can-a-kenyan-sing-joyfully',
    title: 'How Can A Kenyan Sing Joyfully?',
    excerpt:
      'Biblical praise refuses to surrender to corruption, despair, and national frustration because it learns to interpret reality through the character of God.',
    description:
      'A reflection on praise in troubled times, and how defiance, lament, and hope enable believers to sing joyfully even in a wounded nation.',
    category: 'Hope',
    publishedAt: '27 February 2026',
    readTime: '5 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/construction-project.jpg',
    coverAlt: 'Construction scene pointing to hope amid unfinished realities',
    featured: false,
    tags: ['Hope', 'Praise', 'Kenya'],
    highlight: 'I refuse to interpret reality only through politics and prices. I have biblical, not electoral, hope.',
    sidebarNote:
      'When your national context feels heavy, let praise become both lament and defiant confidence in who God is.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 33:1',
        text: 'Sing joyfully to the Lord, you righteous; it is fitting for the righteous to praise Him.',
      },
      {
        type: 'paragraphs',
        title: 'A Hard Question',
        paragraphs: [
          'Not one very fond of rhetorical, hollow Christianese, I refuse to move on before asking a tough question: how can a Kenyan alive today sincerely sing joyfully?',
          'Let\'s face a few facts. Corruption is massive. Our young people, who are the nation\'s future, are being systematically ruined. None of the politicians in office or in waiting seem to possess the kind of transformative vision that nations in crisis desperately need.',
        ],
      },
      {
        type: 'list',
        title: 'Biblical Praise Has Three Dimensions',
        items: [
          'Defiance: like Habakkuk, I sing even if the fig tree does not bud. My wallet may be empty, but heaven is not.',
          'Lament: praise includes crying, How long, O Lord? Lord, our country is sick, please help us.',
          'Interpretation through who God is: I refuse to interpret reality only through politics and prices. I have biblical, not electoral, hope.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'A Joyful Song In A Broken Land',
        paragraphs: [
          'And so, I will face today with confidence, hope, and a joyful song. Praise is not denial. It is the stubborn insistence that reality is finally governed by God and not by the brokenness around me.',
        ],
      },
    ],
  },
  {
    slug: 'when-a-man-finds-a-wife',
    title: 'When A Man Finds A Wife Wisely',
    excerpt:
      'Proverbs 18:22 is not a guarantee for careless choices, but a call to discerning wisdom in one of life\'s most consequential decisions.',
    description:
      'A marriage reflection using John Wesley\'s painful story to explore the discernment and responsibility implied in Proverbs 18:22.',
    category: 'Marriage',
    publishedAt: '18 February 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church members standing together outdoors',
    featured: false,
    tags: ['Marriage', 'Wisdom', 'Discernment'],
    highlight:
      'The wisdom of Proverbs 18:22 places moral responsibility on the man to choose wisely rather than move recklessly with emotion.',
    sidebarNote:
      'Important life decisions require discerning acquisition, not merely intense emotion or spiritual optimism.',
    content: [
      {
        type: 'scripture',
        reference: 'Proverbs 18:22',
        text: 'He who finds a wife finds what is good and receives favor from the Lord.',
      },
      {
        type: 'paragraphs',
        title: 'Wesley And The Weight Of Choice',
        paragraphs: [
          'John Wesley, the great eighteenth-century reformer, was a prolific writer, preacher, and theologian of repute. He got married to a wealthy widow named Mary Vazeille in 1751 and endured an abusive, violent marriage that could rightly be described as hell on earth. By 1758 she had walked out and never came back.',
          'How do you reconcile this with the text quoted? The key to unlocking the riddle is the Hebrew word masa translated finds. This word carries the nuance of discerning acquisition. It places moral responsibility on the man to choose wisely.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Discernment Matters',
        paragraphs: [
          'Meaning, if you move emotionally the way Wesley is accused of doing, rather than living out a Proverbs 18:22 marriage, you may find yourself trapped in one that better fits a Proverbs 21:19 description.',
          'Over to you, young suitor. But maybe in future we may need a discussion on how the miserable Proverbs 21:19 man upgrades to Proverbs 18:22.',
        ],
      },
    ],
  },
  {
    slug: 'the-lord-is-my-fortress',
    title: 'The Lord Is My Fortress',
    excerpt:
      'God does not only shelter us in suffering, but also restrains us in anger when our passions threaten to damage relationships and witness.',
    description:
      'A devotional reflection on God as fortress, especially in moments of provocation, anger, and the temptation to retaliate.',
    category: 'Self-Control',
    publishedAt: '15 February 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Church sanctuary interior with calm atmosphere',
    featured: false,
    tags: ['Fortress', 'Anger', 'Grace'],
    highlight: 'The Lord is my fortress. He protects me even from my own passions.',
    sidebarNote:
      'When anger rises, let God become your fortress before you let emotion become your strategy.',
    content: [
      {
        type: 'scripture',
        reference: 'Psalm 62:5-6',
        text:
          'Find rest, O my soul, in God alone; my hope comes from Him. He alone is my rock and my salvation; He is my fortress, I will not be shaken.',
      },
      {
        type: 'paragraphs',
        title: 'A Fortress In Provocation',
        paragraphs: [
          'When we speak of the Lord being our fortress, many times we have in mind situations when the storms of life hit us. Rarely do we speak of Him being our fortress when we are provoked, angry, and have the capacity to retaliate.',
          'When you react in anger, you may end up ruining relationships that have taken long to build. Human beings, even the saved ones, unlike God sometimes lack the capacity to forgive you.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Protected From Ourselves',
        paragraphs: [
          'The Lord being our fortress implies taking our time to seek His direction when people provoke us. It means keeping quiet and taking no action when we are not sure we have what it takes to obey Him who commands us to pray for and bless those who hate and provoke us.',
          'This is where we truly appreciate the fact that our salvation is by God\'s grace alone. The Lord is my fortress. He protects me even from my own passions.',
        ],
      },
    ],
  },
  {
    slug: 'the-mephibosheth-complex',
    title: 'The Mephibosheth Complex: Which Report Do You Believe?',
    excerpt:
      'Our own fears and other people\'s reactions may tell us one story, but God\'s verdict may be entirely different and far more gracious.',
    description:
      'A meditation on shame, personal evaluation, and learning to believe God\'s perspective over our own wounded self-image.',
    category: 'Identity',
    publishedAt: '13 February 2026',
    readTime: '3 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-members-outside.jpg',
    coverAlt: 'Church members together in a welcoming community',
    featured: false,
    tags: ['Identity', 'Grace', 'Belonging'],
    highlight:
      'Do your weaknesses and failures make you feel like a dead dog, even though God Himself says you are fit to eat at the King\'s table?',
    sidebarNote:
      'When shame speaks loudly, practice agreeing with God\'s perspective rather than your darkest self-assessment.',
    content: [
      {
        type: 'scripture',
        reference: '2 Samuel 9:8',
        text:
          'Mephibosheth bowed down and said, "What is your servant, that you should notice a dead dog like me?"',
      },
      {
        type: 'paragraphs',
        title: 'Three Reports',
        paragraphs: [
          'The Mephibosheth Complex can be seen in three layers. Personal evaluation: crippled and dependent, a dead dog. Others\' opinion: he was convinced other people also saw him as a dead dog. God\'s perspective: he was fit to eat at the King\'s table.',
          'Do your weaknesses and failures make you feel like a dead dog, even though you do not verbalize it like Saul\'s grandson? Have other people acted toward you in ways that confirm your worst fears?',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Which Report Do You Believe?',
        paragraphs: [
          'So which report do you believe, yours, your neighbor\'s, or God\'s? Mephibosheth took the knife and fork and went ahead to enjoy the delicacies. Grace invites you to do the same.',
        ],
      },
    ],
  },
  {
    slug: 'touch-not-the-lords-anointed',
    title: '\'Touch Not The Lord\'s Anointed\'?',
    excerpt:
      'New Testament believers must test popular phrases by Scripture, especially when spiritual authority is used to silence accountability.',
    description:
      'A doctrinal reflection on anointing, leadership, and why only Christ remains the ultimate untouchable Anointed One.',
    category: 'Doctrine',
    publishedAt: '05 February 2026',
    readTime: '4 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/media-team.jpg',
    coverAlt: 'Church media team preparing resources during a service',
    featured: false,
    tags: ['Doctrine', 'Anointing', 'Truth'],
    highlight:
      'Only Christ is the ultimate, untouchable Anointed of God; leaders today are accountable to Scripture like every other believer.',
    sidebarNote:
      'Whenever fear-based religious language is used to avoid correction, test the claim carefully against the New Testament.',
    content: [
      {
        type: 'scripture',
        reference: '2 Samuel 1:14',
        text:
          'David asked him, "Why weren\'t you afraid to lift your hand to destroy the Lord\'s anointed?"',
      },
      {
        type: 'paragraphs',
        title: 'An Old Testament Category',
        paragraphs: [
          'David orders the killing of the young man who had on Saul\'s request finished the suicide. Tough zeal right there. But the question is whether we still have untouchable Lord\'s anointed figures in the New Testament.',
          'Check the facts. All believers are anointed for service. Church leaders, whatever their title, are not more anointed than other believers. They are simply gifted to build others and they are accountable to Scripture.',
        ],
      },
      {
        type: 'paragraphs',
        title: 'Only Christ',
        paragraphs: [
          'Only Christ is the ultimate, untouchable Anointed of God. So next time someone misbehaves and tries to sell fear with words like touch not the Lord\'s anointed, remember that some Old Testament categories like Saul\'s anointing for kingship do not apply in the New Testament in the same way.',
          'That phrase, when used to shut down truth and accountability, is little more than hot air.',
        ],
      },
    ],
  },
  {
    slug: 'full-vent-or-self-control',
    title: 'Full Vent Or Holy Restraint',
    excerpt:
      'Anger exposed is easy; holy restraint is harder, humbler, and more in step with the wisdom of God.',
    description:
      'A short prayerful reflection on anger, clay-jar weakness, divine mercy, and the wisdom that keeps emotion under control.',
    category: 'Prayer',
    publishedAt: '29 January 2026',
    readTime: '2 min read',
    author: pastorCyrusMwangi,
    coverImage: '/assets/church-inside.jpg',
    coverAlt: 'Quiet church interior suited for prayer and reflection',
    featured: false,
    tags: ['Prayer', 'Anger', 'Self-Control'],
    highlight:
      'A fool gives full vent to his anger, but a wise man keeps himself under control.',
    sidebarNote:
      'Turn moments of anger into prayer quickly, before emotion becomes action and action becomes regret.',
    content: [
      {
        type: 'scripture',
        reference: 'Proverbs 29:11',
        text: 'A fool gives full vent to his anger, but a wise man keeps himself under control.',
      },
      {
        type: 'paragraphs',
        title: 'A Prayer For Wisdom',
        paragraphs: [
          'Where I have acted the fool and given full vent and expression to my anger, remember mercy O Lord. Remember this jar is made of clay.',
          'Enable me to be wise at all times, to tame my emotions and keep myself under control. Amen.',
        ],
      },
    ],
  },
];

export const featuredBlogPost =
  mockBlogPosts.find((post) => post.featured) ?? mockBlogPosts[0];

export const blogCategories = Array.from(new Set(mockBlogPosts.map((post) => post.category)));

function getPublishedAtTimestamp(post: BlogPost) {
  return new Date(post.publishedAt).getTime();
}

export function getAllBlogPosts() {
  return [...mockBlogPosts].sort((a, b) => getPublishedAtTimestamp(b) - getPublishedAtTimestamp(a));
}

export function getBlogPostBySlug(slug: string) {
  return mockBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3) {
  return getAllBlogPosts()
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}
