import { getColorIterator } from "./utils/colors/color.js"
import blob from "./utils/blob/blob.js"
import shape from "./utils/shape/shape.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)

    
    // trecho que cria e desenha um shape
    let s = shape(key.next())
    s.fill("red")
    s.move(40,80).size(800)
    s.addTo(draw)

    let a = shape(key.next())
    a.fill("yellow").opacity(0.8)
    a.move(100,30).size(450)
    a.addTo(draw)

    
    let b = blob(key.next256())
    b.fill("blue").opacity(0.6)
    b.move(400,325).size(600)
    b.addTo(draw)

    b = blob(key.next256())
    b.fill("purple").opacity(0.8)
    b.move(150,150).size(650)
    b.addTo(draw)

    
}

export default widget

