import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Prise de rendez-vous en ligne",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:"See Profile",
      foodImg:"https://cdn.onlinewebfonts.com/svg/img_222368.png"
    },
    {
      id:2,
      foodName:"Paiement en ligne",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:"See Profile",
      foodImg:"https://cdn-icons-png.flaticon.com/512/4183/4183122.png"
    },
    {
      id:3,
      foodName:"BPC travailleurs de Maison",
      foodDetails:"panner",
      foodPrice:"See Profile",
      foodImg:"https://e7.pngegg.com/pngimages/536/1003/png-clipart-computer-icons-house-home-building-house-angle-household.png"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:"See Profile",
      foodImg:"https://cdn-icons-png.flaticon.com/512/1907/1907674.png"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:"See Profile",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:"See Profile",
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]

  data =[{
    id: 1,
    dataName: "Diligord",
    datadetails: "lorm ipsum",
    dataImg: "https://unsplash.it/500/500/"
  },
    {
    id: 2,
  dataName: "Rocogged",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/511/511/"
},
    {
id: 3,
  dataName: "Strizzes",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/502/502/"
},
    {
id: 4,
  dataName: "Clossyo",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/503/503/"
},
    {
id: 5,
  dataName: "Rendann",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/504/504/"
},
    {
id: 6,
  dataName: "Reflupper",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/505/505/"
},
{
id: 7,
  dataName: "Acirassi",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/506/506/"
},{
id: 8,
  dataName: "Sohanidd",
  datadetails: "lorm ipsum",
  dataImg: "https://unsplash.it/508/508/"
},

    ]
}
