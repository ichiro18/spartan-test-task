import axios from "axios";
import {API_URL} from "@/common/const/config";


export default {
  loadTrophies({ commit }) {
    return axios({
      method: "GET",
      url: `${API_URL}/zahod/membership/trophies`,
    })
      .then(response => {
        if (response.status === 200) {
          commit('fillTrophies', response.data);
        }
      })
      .catch(error => {
        console.error(error);
      })
  }
}
