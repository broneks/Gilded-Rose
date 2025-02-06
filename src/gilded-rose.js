class Item {
  static minQuality = 0;
  static maxQuality = 50;
  static qualityChangeIncrement = 1;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.quality === Item.minQuality) return;

    if (this.sellIn <= 0) {
      this.quality -= (Item.qualityChangeIncrement * 2);
    } else {
      this.quality -= Item.qualityChangeIncrement;
    }
  }

  updateSellIn() {
    if (this.sellIn == null) return;

    this.sellIn -= 1;
  }

  update() {
    this.updateQuality();
    this.updateSellIn();
  }
}

class VintageWineItem extends Item {
  static name = 'Vintage Wine';

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality === Item.maxQuality) return;

    if (this.sellIn <= 0) {
      this.quality += (Item.qualityChangeIncrement * 2);
    } else {
      this.quality += Item.qualityChangeIncrement;
    }
  }
}

class ConcertTicketsItem extends Item {
  static name = 'Concert Tickets';

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality === Item.maxQuality) return;

    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality += 2;
    } if (this.sellIn > 10) {
      this.quality += 1;
    }
  }
}

class DiamondItem extends Item {
  static name = 'Diamond';

  constructor(name, _sellIn, quality) {
    super(name, null, quality);
  }

  updateQuality() {
    return; // no-op
  }

  updateSellIn() {
    return; // no-op
  }

  update() {
    return; // no-op
  }
}

class ChocolateCakeItem extends Item {
  static name = 'Chocolate Cake';
  static qualityChangeIncrement = Item.qualityChangeIncrement * 2;

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality === Item.minQuality) return;

    if (this.sellIn <= 0) {
      this.quality -= (ChocolateCakeItem.qualityChangeIncrement * 2);
    } else {
      this.quality -= ChocolateCakeItem.qualityChangeIncrement;
    }
  }
}

function itemFactory({ name, sellIn, quality }) {
  switch (name) {
    case VintageWineItem.name:
      return new VintageWineItem(name, sellIn, quality);

    case ConcertTicketsItem.name:
      return new ConcertTicketsItem(name, sellIn, quality);

    case DiamondItem.name:
      return new DiamondItem(name, sellIn, quality);

    case ChocolateCakeItem.name:
      return new ChocolateCakeItem(name, sellIn, quality);

    default:
      return new Item(name, sellIn, quality);
  }
}

class Shop {
  constructor(items = []) {
    this.items = items.map(itemFactory);
  }

  update() {
    this.items.forEach((item) => item.update());

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
