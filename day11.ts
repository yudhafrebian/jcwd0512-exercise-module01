let numb = [2, 2, 1, 1, 1, 2, 2];

const findMostFrequentNumber = (nums: number[]) => {
  let freqMap = new Map();
  let maxCount = 0;
  let mostFreqNumber = 0;

  for (let num of nums) {
    if (freqMap.has(num)) {
      freqMap.set(num, freqMap.get(num) + 1);
      console.log(freqMap);
    } else {
      freqMap.set(num, 1);
      console.log(freqMap);
    }

    if (freqMap.get(num) > maxCount) {
      maxCount = freqMap.get(num);
      mostFreqNumber = num;
    }
  }
  return mostFreqNumber;
};

console.log(findMostFrequentNumber(numb));
