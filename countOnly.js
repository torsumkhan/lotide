const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`❌ Asserion Failed: ${actual} !== ${expected}`);
    }
  };

  const countOnly = function(allItems, itemsToCount) {
      const results = {}

 

      for (const item in allItems) {


          if(itemsToCount[item]) {
            if(results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
            }
          }


      }

      return results
  }

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  