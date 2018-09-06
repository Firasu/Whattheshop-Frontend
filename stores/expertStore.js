import { decorate, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import axios from "axios";

const instance = axios.create({ baseURL: "http://192.168.100.113:8000/api" });

class ExpertStore {
  constructor() {
    this.experts = [];
    this.currentExpert = [];
    this.loading = true;
    this.query = "";
    this.detail = [];
  }

  fetchExperts() {
    return instance
      .get("/list")
      .then(res => {
        return res.data;
      })
      .then(experts => {
        this.experts = experts;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }

  get filteredExperts() {
    return this.experts.filter(expert =>
      `${expert.first_name}`.toLowerCase().includes(this.query)
    );
  }

  getExpertbyID(id) {
    return this.experts.find(expert => +expert.id === +id);
  }
}

decorate(ExpertStore, {
  experts: observable,
  loading: observable,
  query: observable,
  filteredExperts: computed
});

const expertStore = new ExpertStore();
expertStore.fetchExperts();

export default observer(expertStore);
