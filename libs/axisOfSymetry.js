module.exports = function (b,a) {
    /* 
        The axis of symmetry of y = ax^2 + bx + c is found using the forula
        x = -b / 2 * a, which give the x-coordinate of the vertex.
    */
    const x = (-1 * (b))/(2 * a);
    return x;
};