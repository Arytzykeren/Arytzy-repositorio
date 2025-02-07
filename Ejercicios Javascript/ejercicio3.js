function computeSumAndProduct(arr) {
    
    const sum = arr.reduce((acc, num) => acc + num, 0);
  
    
    const product = arr.reduce((acc, num) => acc * num, 1);
  
    
    console.log(`The sum is: ${sum}`);
    console.log(`The product is: ${product}`);
  }
  
  computeSumAndProduct([1, 2, 3, 4]);