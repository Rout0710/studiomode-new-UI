


export default function Button ({buttonclass, buttonfunction,  buttontext, buttontextclass}) {

return (
    <div>
        <div className = {buttonclass} onClick = {buttonfunction}>
            <p className = {buttontextclass}>{buttontext}</p>
        </div>
    </div>
)

}