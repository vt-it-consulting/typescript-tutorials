var Shipping;
(function (Shipping) {
    // Available as Shipping.Ferry
    class Ferry {
        constructor(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
    }
    Shipping.Ferry = Ferry;
    // Only available inside of the Shipping module
    const defaultDisplacement = 4000;
    class PrivateShip {
        constructor(name, port, displacement = defaultDisplacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
    }
})(Shipping || (Shipping = {}));
