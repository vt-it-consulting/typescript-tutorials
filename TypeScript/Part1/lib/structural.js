"use strict";
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
/** Extra info ok */
point2D = point3D;
function takesPoint2D(point) { }
takesPoint2D(point3D);
/** Error: missing info */
// point3D = point2D;
// function takesPoint3D(point: Point3D) { /** ... */ }
// takesPoint3D(point2D);
