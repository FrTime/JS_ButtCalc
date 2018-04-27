// The below variable is an object that houses all substrates
// Inside each substrate object are the associated parameters:
// The substrate code
// Other names/associated terms
// The average material thickness
// The inner core diameter

const substrates = {
  whiteWoven: {
    substrate: ["hwwx-65-108", "hwwx-65-120"],
    names: [
      "white woven",
      "hww",
      "ww",
      "whitewoven",
      "hww-65a",
      "hww-65",
      "hwwx-65a",
      "hwwx-65",
      "hwwx"
    ],
    coreDiameter: 6, // in inches
    thickness: 3.49 // in mils (thousandths of an inch)
  },

  highPermHP: {
    substrate: ["hwhpx-82-108", "hwhpx-82-114", "hwhpx-82-120"],
    names: [
      "high perm",
      "hp",
      "hpx",
      "highperm",
      "hwhp-82a",
      "hwhp-82",
      "hwhpx-82a",
      "hwhpx-82",
      "hwhpx"
    ],
    coreDiameter: 7, // in inches
    thickness: 6.34 // in mils (thousandths of an inch)
  },

  lowPermLP: {
    substrate: ["hwlpx-82-108", "hwlpx-82-114", "hwlpx-82-120"],
    names: [
      "low perm",
      "lp",
      "lpx",
      "lowperm",
      "hwlp-82a",
      "hwlp-82",
      "hwlpx-82a",
      "hwlpx-82",
      "hwlpx"
    ],
    coreDiameter: 7, // in inches
    thickness: 6.34 // in mils (thousandths of an inch)
  }
};

// The below function takes in as user-input the width of a butt roll in inches
// Based on the selected substrate defined above, the calculator approximates the remaining length in linear feet
buttCalc = (substrate, width) => {
  let length =
    1000 *
    Math.PI /
    (48 * substrate.thickness) *
    (Math.pow(width, 2) - Math.pow(substrate.coreDiameter, 2));
  length = length.toFixed(2) + " LF";
  console.log(length);
  return length; // in linear feet
};

// Test calculation
buttCalc(substrates.lowPermLP, 28);
