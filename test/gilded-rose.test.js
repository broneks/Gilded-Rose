const { Item, Shop } = require('../src/gilded-rose');

describe('Gilded Rose', () => {
  const run = (items) => {
    const gildedRose = new Shop(items);

    return gildedRose.update();
  };

  describe('update', () => {
    describe('regular items', () => {
      it("should decrease the item's sellIn by 1", () => {
        const items = run([new Item('something', 10, 50)]);

        expect(items[0].sellIn).toBe(9);
      });

      it("should never decrease quality below 0", () => {
        const items = run([new Item('something', 10, 0)]);

        expect(items[0].quality).toBe(0);
      });

      it("should decrease the item's quality by 1 if sellIn is > 0", () => {
        const items = run([new Item('something', 10, 50)]);

        expect(items[0].quality).toBe(49);
      });

      it("should decrease the item's quality by 2 if sellIn is <= 0", () => {
        const items = run([new Item('something', 0, 50)]);

        expect(items[0].quality).toBe(48);
      });
    });

    describe('Vintage Wine', () => {
      it("should decrease the item's sellIn by 1", () => {
        const items = run([new Item('Vintage Wine', 10, 50)]);

        expect(items[0].sellIn).toBe(9);
      });

      it("should increase the item's quality by 1 if sellIn is > 0", () => {
        const items = run([new Item('Vintage Wine', 1, 10)]);

        expect(items[0].quality).toBe(11);
      });

      it("should increase the item's quality by 2 if sellIn is <= 0", () => {
        const items = run([new Item('Vintage Wine', 0, 10)]);

        expect(items[0].quality).toBe(12);
      });

      it("should not increase the item's quality past 50", () => {
        const items = run([new Item('Vintage Wine', 10, 50)]);

        expect(items[0].quality).toBe(50);
      });
    });

    describe('Diamond', () => {
      it("should not change the item's sellIn", () => {
        const items = run([new Item('Diamond', null, 42)]);

        expect(items[0].sellIn).toBe(null);
      });

      it("should not change the item's quality", () => {
        const items = run([new Item('Diamond', null, 42)]);

        expect(items[0].quality).toBe(42);
      });
    });

    describe('Concert Tickets', () => {
      it("should decrease the item's sellIn by 1", () => {
        const items = run([new Item('Concert Tickets', 10, 50)]);

        expect(items[0].sellIn).toBe(9);
      });

      it("should increase the item's quality by 1 if sellIn > 10", () => {
        const items = run([new Item('Concert Tickets', 11, 10)]);

        expect(items[0].quality).toBe(11);
      });

      it("should increase the item's quality by 2 if sellIn <= 10 and > 5", () => {
        const items = run([new Item('Concert Tickets', 10, 10)]);

        expect(items[0].quality).toBe(12);
      });

      it("should increase the item's quality by 3 if sellIn <= 5", () => {
        const items = run([new Item('Concert Tickets', 5, 10)]);

        expect(items[0].quality).toBe(13);
      });

      it("should set the item's quality to 0 if sellIn < 0", () => {
        const items = run([new Item('Concert Tickets', -1, 10)]);

        expect(items[0].quality).toBe(0);
      });
    });

    describe('Chocolate Cake', () => {
      it("should decrease the item's sellIn by 1", () => {
        const items = run([new Item('Chocolate Cake', 10, 50)]);

        expect(items[0].sellIn).toBe(9);
      });

      it("should decrease the item's quality by 2 if sellIn is > 0", () => {
        const items = run([new Item('Chocolate Cake', 10, 50)]);

        expect(items[0].quality).toBe(48);
      });

      it("should decrease the item's quality by 4 if sellIn is <= 0", () => {
        const items = run([new Item('Chocolate Cake', 0, 50)]);

        expect(items[0].quality).toBe(46);
      });
    });
  });
});
