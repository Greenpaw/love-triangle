/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let loveOfEl1 = preferences[i];
    if (loveOfEl1 === 0) continue;

    let loveOfEl2 = preferences [loveOfEl1 - 1];
    if (loveOfEl1 === loveOfEl2) continue;

    let loveOfEl3 = preferences [loveOfEl2 - 1];
    if (loveOfEl3 === loveOfEl2) continue;

    if (loveOfEl2 && loveOfEl3 && (loveOfEl3 - 1 === i))
    {
      preferences[i] = 0;
      preferences[loveOfEl1 - 1] = 0;
      preferences[loveOfEl2 - 1] = 0;
      count++;
    }
  }
  return count;
};
