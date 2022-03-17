import {atom, selector} from "recoil"
import {fetchWilders} from "./request"


export const update = atom({
    key: "test compteur",
    default :0
    }
)


export const listOfWilders = selector({
    key: 'listOfWilders',
    get: async ({get}) => {
      const {essai} = get(update)
      const response = fetchWilders()
      console.log(essai)
      return response;
    },
  });
  
