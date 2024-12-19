/**
 * Coding platform: 1st: make a ship class where user can load cargo, unload cargo, 
 * and depart if cargo weight is less than max allowed weight 
 * 2nd: given list of item & price, sort by price ascending. 
 * If 2 or more items have the same price, sort them by name 
 * 3rd: merge 2 of the same data structures into one
 */

const MIN_ALLOWED_DEPART_WEIGHT = 10

interface Cargo {
    id: string
    volume: number
}

export class Ship {
    _cargos: Cargo[]
    constructor() {
        this._cargos = []
    }

    load(cargo: Cargo) {
        this._cargos.push(cargo)
    }

    unload(id: string) {
        const index = this._cargos.findIndex(cargo => cargo.id === id)
        if (index != -1) {
            this._cargos.splice(index, 1)
        }
    }

    allowToDepart(): boolean {
        const totalWeight = this._cargos.reduce((sum, cargo) => sum + cargo.volume, 0)
        return totalWeight >= MIN_ALLOWED_DEPART_WEIGHT
    }
}