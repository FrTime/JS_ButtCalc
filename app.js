// The below variable is an object that houses all substrates
// Inside each substrate object are the associated parameters:
// The substrate code
// Other names/associated terms
// The average material thickness
// The inner core diameter

const substrates = {
  whiteWoven: {
    substrateCode: ["hwwx-65-108", "hwwx-65-120"],
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
    substrateCode: ["hwhpx-82-108", "hwhpx-82-114", "hwhpx-82-120"],
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
    substrateCode: ["hwlpx-82-108", "hwlpx-82-114", "hwlpx-82-120"],
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
  },
  mediumPermMP: {
    substrateCode: ["hwmp-90-108", "hwmp-90-120"],
    names: [
      "medium perm",
      "med perm",
      "mp",
      "mediumperm",
      "medperm",
      "hwmp-90a",
      "hwmp-90",
      "hwmp",
      "clopay"
    ],
    coreDiameter: 7, // in inches
    thickness: 4.23 // in mils (thousandths of an inch)
  },
  rainDrain: {
    substrateCode: ["hwd2-72-108", "hwd2-72-120"],
    names: [
      "rain drain",
      "raindrain",
      "dw",
      "drain",
      "rd",
      "hwd2-72a",
      "hwd2-72",
      "hwd2"
    ],
    coreDiameter: 7, // in inches
    thickness: 7.21 // in mils (thousandths of an inch)
  }
};

// The below function takes in as user-input the width of a butt roll in inches
// Based on the selected substrate defined above, the calculator approximates the remaining length in linear feet
buttCalc = (width, substrate) => {
  let length =
    1000 *
    Math.PI /
    (48 * substrate.thickness) *
    (Math.pow(width, 2) - Math.pow(substrate.coreDiameter, 2));
  length = length.toFixed(2) + " LF";
  console.log(length);
  return length; // in linear feet
};

// Test calculations below
// buttCalc(25, substrates.rainDrain);
let userChoice = "raindrain";
let userWidth = 25;

for (const substrate in substrates) {
  let userSubstrate;
  if (
    substrates[substrate].substrateCode.indexOf(userChoice) > -1 ||
    substrates[substrate].names.indexOf(userChoice) > -1
  ) {
    userSubstrate = substrates[substrate];
    console.log(
      `user has selected ${userChoice}\nuser has entered a width of ${userWidth}\nCalculating...`
    );
    buttCalc(userWidth, userSubstrate);
    return;
  }
}
