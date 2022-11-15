# Welcome to the Gilded Rose

We are a small store selling only the finest goods. Unfortunately, our goods are constantly degrading in *quality* as they approach their *sellIn* date.

We have a system in place that updates our inventory for us.

## But the code is terrible!

Your task is to add a *new feature* to our system so that we can begin selling a *new category of items*.

## Here's how the system works:

- All items have a `sellIn` value which denotes the number of days we have left to sell the item. This value decreases by 1 every time `update()` is called.
- All items have a `quality` that decreases by 1 whenever `update()` is called.

Pretty simple, right? Well, this is where it gets interesting:

- The `quality` of an item is _never negative_.
- The `quality` of an item is _never more than 50_.
- Once the `sellIn` time has reached zero, `quality` degrades _twice as fast every day_.
- "Diamond" has no `sellIn` time and has a quality that _does not change_.
- "Vintage Wine" _increases in quality_ the older it gets, at the same rate as regular items.
- "Concert Tickets" _increase in quality_ as its `sellIn` value decreases.
  - Its quality increases by 1 every day when the `sellIn > 10`.
  - Its quality increases by 2 every day when the `sellIn <= 10 && sellIn > 5`.
  - Its quality increases by 3 every day when the `sellIn <= 5`.
  - Its quality drops to 0 after the concert.

## Your task

Update our system to include "Chocolate Cake". This item degrades in quality twice as fast as normal items (`-2`, `-4 if sellIn <= 0`).
