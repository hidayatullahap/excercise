import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { Ship } from "./ship.ts";


describe("ship", () => {
    it(`should return allowed`, () => {
        const ship = new Ship()
        ship.load({ id: "id-1", volume: 10 })
        ship.load({ id: "id-2", volume: 2 })
        ship.unload("id-2")
        const isAllowed = ship.allowToDepart()
        expect(isAllowed).toBe(true)
    });

    it(`should return not allowed`, () => {
        const ship = new Ship()
        ship.load({ id: "id-1", volume: 2 })
        const isAllowed = ship.allowToDepart()
        expect(isAllowed).toBe(false)
    });
});