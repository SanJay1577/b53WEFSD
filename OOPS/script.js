//factory function
// returing and obejcect base on the parametes
function manfucatureCar(type, engCap, seat, variant) {
  return {
    type,
    engCap,
    seat,
    variant,
    chaseAssemby: function () {
      console.log(`chase of ${variant} is assembled`);
    },
    engineMounting: function () {
      console.log(`engine of ${engCap} liter capacity is installed`);
    },
    electicalAndBody: function () {
      console.log(`electicals and body of ${type} is fitted`);
    },
    wheelsAndPainting: function () {
      console.log("wheels and painting done");
    },
  };
}

const newCar = manfucatureCar("sedan", 1.5, 5, "virtus");
const newCar1 = manfucatureCar("suv", 1.5, 5, "taigun");
const newCar2 = manfucatureCar("suv", 4, 7, "Tiguan");
console.log(newCar);
console.log(newCar1);
console.log(newCar2);

newCar.chaseAssemby();
newCar2.engineMounting();

// what is actually this in JS
const GrandFatherObj = {
  name: "Grandfather",
  getName: function () {
    console.log(this.name);
  },
  fatherObj: {
    name: "Father",
    getName: function () {
      console.log(this.name);
    },
    childObj: {
      name: "Child",
      getName: function () {
        console.log(this.name);
      },
      getDetails: () => {
        // arrow method will always target global obj
        console.log(this);
      },
      // wrapping arrow in a normal method
      // will make this targte immideate parent obj
      wrapperDeatils() {
        const arrow = () => {
          console.log(this.name);
        };
        arrow();
      },
    },
  },
};

GrandFatherObj.getName();
GrandFatherObj.fatherObj.getName();
GrandFatherObj.fatherObj.childObj.getName();
GrandFatherObj.fatherObj.childObj.getDetails();
GrandFatherObj.fatherObj.childObj.wrapperDeatils();

// constructor functions
// using new creates an obj{}
// this.name = "value" ---> obj{name:value}
function Manufacture(type, engCap, seat, variant) {
  this.type = type;
  this.engCap = engCap;
  this.seat = seat;
  this.varaint = variant;
  this.chaseAssemby = function () {
    console.log(`chase of ${this.variant} is assembled`);
  };
  this.engineMounting = function () {
    console.log(`engine of ${this.engCap} liter capacity is installed`);
  };
  this.electicalAndBody = function () {
    console.log(`electicals and body of ${this.type} is fitted`);
  };
  this.wheelsAndPainting = function () {
    console.log("wheels and painting done");
  };
}

/// we have access to create prototype
Manufacture.prototype.startProduction = function () {
  console.log(
    `
          The car of ${this.varaint} and type ${this.type}
          Car is ready for sale.
          `
  );
};

const conCar = new Manufacture("sedan", 1.5, 5, "virtus");
console.log(conCar);
console.log(conCar.type);
conCar.electicalAndBody();
conCar.startProduction();

//Class
// four pillar
// enncapsulation
// inheritance
// abstaction
// polymorphism
class CarProduce {
  // encapsulation
  constructor(type, engCap, seat, variant) {
    this.type = type;
    this.engCap = engCap;
    this.seat = seat;
    this.variant = variant;
  }

  getCarDetails() {
    console.log(`
          The Type of the car is ${this.type}
          The engine capacity of the car is ${this.engCap} liters
          The seat of the car is ${this.seat}
          The variant of the car is ${this.variant}
          `);
  }
}

// inheritance
class Features extends CarProduce {
  constructor(type, engCap, seat, variant, seatType, sunroof, safety) {
    super(type, engCap, seat, variant);
    this.seatType = seatType;
    this.sunroof = sunroof;
    this.safety = safety;
  }

  getFeatureDetails() {
    // abstraction
    let bhp = (this.engCap * 100) / 1.8;
    let milegae = "15kmpl";

    console.log(`
    Tha car of ${this.type} and varint of ${this.variant}
    will have features such as ${this.seatType} seatType 
    and ${this.sunroof} with safety rating of ${this.safety}
    and it produces around ${bhp.toFixed(1)} BHP
    and the milege claimed is ${milegae}
          `);
  }
}
const newClassCar = new CarProduce("suv", 4, 7, "Tiguan");
newClassCar.getCarDetails();

const newFeatureCar = new Features(
  "suv",
  1.5,
  5,
  "taigun",
  "leather",
  "sunroof",
  5
);

newFeatureCar.getFeatureDetails();
newFeatureCar.getCarDetails();
// polymorphism
class square {
  constructor(length) {
    this.length = length;
  }
  sqaureArea() {
    console.log("The area of the sqaure is l*b", this.length * this.length);
  }
}

class triangle {
  traingleArea() {
    console.log("The area of the Traingle is 1/2(l*b)");
  }
}

function calculateArea(shape) {
  shape.sqaureArea ? shape.sqaureArea() : shape.traingleArea();
}

const Sqaure = new square(5);
console.log(Sqaure);
const Traingle = new triangle();
calculateArea(Sqaure);
calculateArea(Traingle);
