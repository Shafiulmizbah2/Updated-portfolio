import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  work: {
    catagory: [
      {
        id: "c0",
        title: "featured work",
        work: [
          {
            id: 1001,
            link: "https://shafiul-linkedin-clone.netlify.app/",
            name: "Linkedin Clone",
            img: "./img/linkedinClone.png",
          },
          {
            id: 0,
            link: "https://crown-e-commerce.netlify.app/",
            name: "Crown",
            img: "./img/crown.png",
          },
          {
            id: 1,
            link: "https://jolly-payne-65bcf4.netlify.app/",
            name: "The pig game",
            img: "./img/piggame.png",
          },
          {
            id: 2,
            link: "https://shafiul-mogobari-test.netlify.app",
            name: "Mogobari",
            img: "./img/mogobari.png",
          },

          {
            id: 3,
            link: "https://forkify-shafiul.netlify.app/",
            name: "forkify",
            img: "./img/forkify.png",
          },
          {
            id: 4,
            link: "https://shafiul-kids-creation-tv.netlify.app",
            name: "Kids Creation tv",
            img: "./img/kids.png",
          },
          {
            id: 92,
            link: "exp://exp.host/@shafiul/meals",
            name: "Meals",
            img: "./img/Meals.jpg",
          },
        ],
      },
      {
        id: "c1",
        title: "React projects",
        work: [
          {
            id: 5,
            link: "https://crown-e-commerce.netlify.app/",
            name: "Crown",
            img: "./img/crown.png",
          },
          {
            id: 501,
            link: "https://shafiul-linkedin-clone.netlify.app/",
            name: "Linkedin Clone",
            img: "./img/linkedinClone.png",
          },
          {
            id: 6,
            link: "https://shafiul-todoapp.netlify.app/",
            name: "Todo",
            img: "./img/todo.png",
          },
          {
            id: 7,
            link: "https://react-fetching-data-from-api.netlify.app/",
            name: "Github user",
            img: "./img/github.png",
          },
          {
            id: 8,
            link: "https://react-delete-item.netlify.app",
            name: "Play with card",
            img: "./img/playcard.png",
          },
        ],
      },
      {
        id: "c2",
        title: "Next.js projects",
        work: [
          {
            id: 9,
            link: "https://next-events-psi.vercel.app/",
            name: "Next events",
            img: "./img/nextevents.png",
          },
          {
            id: 10,
            link: "https://shafiul-azim-portfolio.vercel.app/",
            name: "Portfolio",
            img: "./img/portfolio.png",
          },
        ],
      },
      {
        id: "d1",
        title: "React Native projects",
        work: [
          {
            id: 92,
            link: "exp://exp.host/@shafiul/meals",
            name: "Meals",
            img: "./img/Meals.jpg",
          },
          {
            id: 91,
            link: "https://expo.dev/@shafiul/mealsToGo",
            name: "Meals to go",
            img: "./img/mealstogo.jpg",
          },
          {
            id: 93,
            link: "exp://exp.host/@shafiul/DoneWithIt",
            name: "Done With it",
            img: "./img/donewithit.jpg",
          },
        ],
      },
      {
        id: "c3",
        title: "Basic projects",
        work: [
          {
            id: 11,
            link: "https://shafiul-kids-creation-tv.netlify.app",
            name: "Kids Creation tv",
            img: "./img/kids.png",
          },
          {
            id: 12,
            link: "https://findcountryfromapi.netlify.app",
            name: "find country",
            img: "./img/findcountry.png",
          },
          {
            id: 13,
            link: "https://hopeful-knuth-a10599.netlify.app",
            name: "Trillo",
            img: "./img/trillo.JPG",
          },
          {
            id: 14,
            link: "https://cranky-bardeen-906198.netlify.app",
            name: "Nexture",
            img: "./img/nexture.JPG",
          },
          {
            id: 15,
            link: "https://wonderful-darwin-a29951.netlify.app",
            name: "Omnifood",
            img: "./img/omnifood.JPG",
          },
          {
            id: 16,
            link: "https://elegant-mahavira-ddce89.netlify.app/",
            name: "Natours",
            img: "./img/natours.JPG",
          },
          {
            id: 17,
            link: "https://nifty-cori-975de3.netlify.app",
            name: "LoopLab",
            img: "./img/looplab.JPG",
          },
          {
            id: 18,
            link: "https://distracted-haibt-6f13a5.netlify.app/",
            name: "Mizuxe",
            img: "./img/Mizuxe.JPG",
          },
          {
            id: 19,
            link: "https://peaceful-cori-b5ac97.netlify.app/",
            name: "Matrix",
            img: "./img/matrix.png",
          },
        ],
      },
    ],
  },
};
const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = generalSlice.actions;
export default generalSlice.reducer;
