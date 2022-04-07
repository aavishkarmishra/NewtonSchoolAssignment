const obj = {
  bike: 'red',
  birds: {
    parrot: {
      parrot1: 'red'
    },
    sparrow: {
      sparrow2: {
        sparrow3: 'green'
      },
      sparrow4: 'blue'
    }
  },
  cars: {
    audi: {
      audi1: {
        audi4: 'grey'
      },
      audi2: 'pink'
    },
    bmw: {
      bmw1: 'white'
    }
  }
};

/*-------------------------------------------------------
------------------- Code Start Fron Here ----------------
-------------------------------------------------------*/

/* -----------------------------
- Global Array to Store restul for each
- key or the solution of easy part
--------------------------------*/
var currVal = [];

/*--------------------
- Helper funtion and solution of easy part
---------------------- */
function helper(obj) {
  if (typeof obj === typeof '') {
    currVal.push(obj);
  } else {
    for (key in obj) helper(obj[key]);
  }
}

/*--------------------
- Main funtion and solution of hard part
---------------------- */

function main(obj) {
  var res = {};
  var currKey = '';
  for (key in obj) {
    currVal = [];
    currKey = key;
    helper(obj[currKey]);
    res[currKey] = currVal;
  }
  return res;
}

main(obj);
