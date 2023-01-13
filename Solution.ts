let start = 0; // holds the start color
function floodFill(image: number[][], x: number, y: number, color: number): number[][] {
    start = image[x][y];
    if (color == start) { return image; } // If we start on our color, we have nothing to fill.
    fill(image, x, y, color); // recursively fill the image.
    return image;
};

function fill(image: number[][], x: number, y: number, color: number) {
    //Start our recursion by checking our exit conditions.
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] != start) {
        return;
    }
    //Flood fill the remainder
    image[x][y] = color;
    fill(image, x + 1, y, color);
    fill(image, x - 1, y, color);
    fill(image, x, y + 1, color);
    fill(image, x, y - 1, color);
};
