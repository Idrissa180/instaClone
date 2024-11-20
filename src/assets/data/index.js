import u from "../images/user.png";
import u1 from "../images/user1.png";
import u2 from "../images/user2.png";
import u3 from "../images/user3.jpeg";
import u4 from "../images/user4.png";
import u5 from "../images/user5.jpeg";
import u6 from "../images/user6.jpeg";
import u7 from "../images/user7.jpeg";
import u8 from "../images/user8.png";
import u9 from "../images/user9.png";
import u10 from "../images/user10.png";
import u11 from "../images/user12.jpeg";
const userId="12345678"

export const story = [
  {
    user:{
      username: "benj01",
      img: u1,
    },
    items:[
      {
        _id: "tsfdtysgwe8o7wtfg8",
        img: u4,
        description:"",
        views:[{userId}]
      },
      {
        _id: "tsfdtyscve8o7wtfg8",
        img: u5,
        description:"",
        views:[{userId}]
      },
      {
        _id: "tsfdtys56e8o7wtfg8",
        img: u11,
        description:"",
        views:[{userId}]
      },
    ]
  },
  {
    user:{
      username: "maud01",
      img: u2,
    },
    items:[
      {
        _id: "tsfdtysere8o7wtfg8",
        img: u6,
        description:"",
        views:[{userId}]
      },
      {
        _id: "tsfdjhjcve8o7wtfg8",
        img: u8,
        description:"",
        views:[{userId}]
      },
      {
        _id: "tsfdjhjcve857wtfg8",
        img: u9,
        description:"",
        views:[{userId}]
      },
      {
        _id: "tsfdjhjcv48o7wtfg8",
        img: u10,
        description:"",
        views:[{userId}]
      },
    ]
  },
]

export const userSuggestions = [
  {
    id: 1,
    img: u,
    nbrSuivi: 5,
    username: "Benzeman",
  },
  {
    id: 2,
    img: u1,
    nbrSuivi: 1,
    username: "benjamin01",
  },
  {
    id: 3,
    img: u3,
    nbrSuivi: 8,
    username: "Vanessa",
  },
  {
    id: 4,
    img: u2,
    nbrSuivi: 6,
    username: "Idrissa01",
  },
  {
    id: 5,
    img: u7,
    nbrSuivi: 2,
    username: "Cristiano7",
  },
];
