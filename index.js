class SortedList {
  constructor() {
    this.items = [],
    this.length = []
  }
  add(item) {
    var newitem = this.items;
    newitem.push(item);
    newitem.sort((a,b) => a>b ? 1 : -1)
    this.items = newitem;
    this.length = this.items.length;
  }
  get(pos) {
    if(pos>this.length-1){
      throw new Error('OutOfBounds');
    }
    else{
      return this.items[pos];
    }
  }
  max() {
    if(this.length==0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.max(...this.items);
    }
  }
  min() {
    if(this.length==0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items);
    }
  }
  avg() {
    if(this.length==0){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length;   
  }

  sum() {
    var sum = this.items.reduce((total, val) => {
      return total+val
    }, 0)
    return sum
  }
};

module.exports = SortedList;
