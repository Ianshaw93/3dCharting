// create random points across sphere
function randomSpherePoint(x0,y0,z0,radius){
    var u = Math.random();
    var v = Math.random();
    var theta = 2 * Math.PI * u;
    var phi = Math.acos(2 * v - 1);
    var x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    var y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    var z = z0 + (radius * Math.cos(phi));
    return [x,y,z];
 }


 export let points = []
 let centre = [0, 0, 0]
 let radius = 3
 for (let i = 0; i < 100; i ++) {
    let current = randomSpherePoint(...centre, radius)
    points.push(current)

 }

 export const pointsArray = points