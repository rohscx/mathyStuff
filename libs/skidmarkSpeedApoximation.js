/*
The speed,s, that a vehicle was traveling in miles per hour can be approximated by the formula s = sqrt(30df)
where d represents the length of the skid marks in feet and f represents the drag factor of the road
*/

module.exports = function (d , f) {
    const s = Math.sqrt(30*d*f)
    return s;
}