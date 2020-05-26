interface Square {
    kind: "square"
    size: number
}

interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}
type Shape = Square | Rectangle

function area(s: Shape) {
    if (s.kind === "square") {
        return s.size * s.size
    }
    else {
        return s.width * s.height
    }
}