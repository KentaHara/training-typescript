/**
 * https://github.com/microsoft/TypeScript/issues/11143
 */
const Types = {
    square: 'square',
    rectangle: 'rectangle'
} as const
type Types = typeof Types[keyof typeof Types];

interface Square {
    kind: typeof Types.square
    size: number
}

interface Rectangle {
    kind: typeof Types.rectangle
    width: number
    height: number
}
type Shape = Square | Rectangle

function areaWithConst(s: Shape) {
    console.log(s)
    switch (s.kind) {
        case Types.square:
            return s.size * s.size
        case Types.rectangle:
            return s.width * s.height
    }
}

function run() {
    const s: Square = {
        kind: Types.square,
        size: 10
    }
    const r: Rectangle = {
        kind: Types.rectangle,
        width: 10,
        height: 20
    }
    areaWithConst(s)
    areaWithConst(r)
}

run()