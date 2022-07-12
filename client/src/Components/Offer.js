import OfferItem from "./OfferItem";

function Offer({ offerList })
{
    const displayList = offerList.map((item) =>
    {
        return (
            <OfferItem item={ item } />
        )
    })

    return (
        <div className="offer">
            <h2>Offer</h2>
            <ul>
                { displayList }
            </ul>
        </div>
    )
}
export default Offer