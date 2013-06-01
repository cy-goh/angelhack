var commentsData = [
  {
    //id for givenBy is based off company representative id
    givenBy: 1,
    //id for givenTo is based off developer id
    givenTo: 1,
    points: 2,
    category: 'coding',
    text: 'Amazing code on the commit'
  },
  {
    givenBy: 2,
    //id for givenTo is based off developer id
    givenTo: 1,
    points: 3,
    category: 'attitude',
    text: 'Amazing attitude from this guy'
  },
  {
    givenBy: 3,
    //id for givenTo is based off developer id
    givenTo: 1,
    points: -1,
    category: 'communication',
    text: 'Dude has an english problem'
  },
  {
    givenBy: 1,
    //id for givenTo is based off developer id
    givenTo: 2,
    points: -3,
    category: 'coding',
    text: 'This guy needs to read more about coding; horrible coding'
  },
  {
    givenBy: 2,
    //id for givenTo is based off developer id
    givenTo: 2,
    points: -2,
    category: 'attitude',
    text: 'Dont like the attitude of this guy'
  },
  {
    givenBy: 3,
    //id for givenTo is based off developer id
    givenTo: 2,
    points: 1,
    category: 'communication',
    text: 'Dude is good at speaking english'
  }        
];

var developersData = [
  {
    name: 'barret',
    id: 1,
    scoreGivenByCompany: 4,
    //based on github profile
    level: 6,
    src: '../main/static/img/super_1.png'
  },
  {
    name: 'cloud',
    id: 2,
    scoreGivenByCompany: -2,
    //based on github profile
    level: 2,
    src: '../main/static/img/super_2.png'
  }
];