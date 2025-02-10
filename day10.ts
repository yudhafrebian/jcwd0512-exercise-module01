// soal 1

function checkEqualObject(obj1: object, obj2: object): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(checkEqualObject({ a: 1 }, { a: 1 }));

// soal 2

function checkIntersectionObject(obj1: object, obj2: object): object {
  const intersection: object = {};

  for (const key in obj1) {
    if (JSON.stringify(obj2).includes(key)) {
      intersection[key] = obj1[key];
    }
  }

  return intersection;
}

console.log(checkIntersectionObject({ a: 1, b: 2 }, { a: 1, c: 3 }));

//soal 3

function mergeObject(arr1: object[], arr2: object[]): object[] {
  const mergedObject = [...arr1, ...arr2];
  const uniqeMap = new Map();

  mergedObject.forEach((obj) => {
    uniqeMap.set(JSON.stringify(obj), obj);
  });

  return Array.from(uniqeMap.values());
}

const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const arr2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", score: "student3@mail.com" },
];

console.log(mergeObject(arr1, arr2));

//soal 4

function swapProperty(arr: object[]): object[] {
  return arr.map((obj) => {
    const swapped = {};
    for (const key in obj) {
      swapped[obj[key]] = key;
    }
    return swapped;
  });
}

console.log(swapProperty(arr1));


//soal 1
const letterToNumber = (letter: string): number => {
  if (letter.length === 2) {
    return (letter.charCodeAt(0) - 64) * 26 + letter.charCodeAt(1) - 64;
  } else if (letter.length === 3) {
    return (
      (letter.charCodeAt(0) - 64) * 26 * 26 +
      (letter.charCodeAt(1) - 64) * 26 +
      letter.charCodeAt(2) -
      64
    );
  } else {
    return letter.charCodeAt(0) - 64;
  }
};

console.log(letterToNumber("ABC"));

//soal 2

const arr: number[] = [2, 2, 1];

const findNonDuplicateNumber = (arr: number[]): number => {
  const firstSet: Set<number> = new Set();
  const secondSet: Set<number> = new Set();
  for (const num of arr) {
    if (firstSet.has(num)) {
      secondSet.add(num);
    } else {
      firstSet.add(num);
    }
  }
  return Array.from(firstSet).filter((num) => !secondSet.has(num))[0];
};

console.log(findNonDuplicateNumber(arr));


// soal 3

const isAnagram = (str1: string, str2: string): boolean => {
    return str1.split("").sort().join() === str2.split("").sort().join();
}

console.log(isAnagram("anagram", "nagaram"));

// soal 4

const climb = (n:number) => {
    let n1 = 1;
    let n2 = 1;

    for (let i = 2; i <= n; i++) {
        const temp = n1 + n2;
        n2 = n1;
        n1 = temp;
    }
    return n1;
}

console.log(climb(5));
