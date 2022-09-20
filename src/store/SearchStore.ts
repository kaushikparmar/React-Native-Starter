import { makeAutoObservable, runInAction } from "mobx"

class SearchStoreMeta {
    public price = 0;
    public amount = 1;
    public users = [];


    constructor() {
        makeAutoObservable(this);
    }

    public setAmount = (value: number) => {
        runInAction(() => {
            this.amount = this.amount + value;
        })
    }

    get total() {
        console.log("Computing...")
        return this.price + this.amount
    }
}

export const SearchStore = new SearchStoreMeta()
