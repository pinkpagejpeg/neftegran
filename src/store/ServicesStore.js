import { makeAutoObservable } from 'mobx'
import { catalog } from '../mockData/catalogData'

class ServicesStore {
  services = [];

  constructor() {
    makeAutoObservable(this)
  }

  fetchCatalogByCategory (category) {
    const allCatalog = catalog

    this.services = allCatalog.filter(item => item.category === category)
  }
}

export default new ServicesStore()