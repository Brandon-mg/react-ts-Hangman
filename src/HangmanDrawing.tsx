const HEAD = (
    <div style={{ width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-30px"}}/>
)
const BODY = (
    <div style={{ width: "10px", height: "100px", background: "black", position: "absolute", top: "120px", right: 0}}/>
)
const RARM = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "150px", right: "-100px", rotate: "-30deg", transformOrigin: "left bottom"}}/>
)
const LARM = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "150px", right: "10px", rotate: "30deg", transformOrigin: "right bottom"}}/>
)
const RLEG = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "210px", right: "-90px", rotate: "60deg", transformOrigin: "left bottom"}}/>
)
const LLEG = (
    <div style={{ width: "100px", height: "10px", background: "black", position: "absolute", top: "210px", right: 0, rotate: "-60deg", transformOrigin: "right bottom"}}/>
)

const PROPS = [HEAD, BODY, RARM, LARM, RLEG, LLEG]
type HangmanDrawingProps = {
    numberOfGuesses: number
}
export function HangmanDrawing({ numberOfGuesses}: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative"}}>
            {PROPS.slice(0, numberOfGuesses)}
            <div style={{ height: "50px", width: "10px", background: "black", top: 0, right: 0, position: "absolute"}} />
            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px"}} />
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px"}} />
            <div style={{ height: "10px", width: "250px", background: "black"}} />
        </div>
    )

}