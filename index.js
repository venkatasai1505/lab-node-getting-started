class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }
  get(i) {
    if (this.items.indexOf(i) == -1) {
      throw new Error('OutOfBounds')
    }
    else {
      return(this.items.indexOf(i))
    }
  }
  max() {
    if(this.items.length>0)
    {
      return (Math.max(...this.items))
    }
    else{
      throw new Error("EmptySortedList ")
    }
  }
  min() {
    if (this.items.length > 0) {
      return (Math.min(...this.items))
    }
    else {
      throw new Error("EmptySortedList ")
    }
  }
  avg() {
    if (this.items.length > 0) {
      let sum = this.sum()
      return sum/this.items.length
      }
    else {
      throw new Error("EmptySortedList ")
    }
  }

  sum() {
    if (this.items.length > 0) {
     return this.items.reduce((acc, val) =>  acc + val)
    }
    else{
      return 0
    }
  }

};

let Sortedlist = new SortedList();
Sortedlist.add(70)
Sortedlist.add(60)
Sortedlist.add(50)
Sortedlist.add(40)
console.log(Sortedlist.add(30));
console.log(Sortedlist.sum());
console.log(Sortedlist.get(30));
console.log(Sortedlist.max());
console.log(Sortedlist.min());

module.exports = SortedList;