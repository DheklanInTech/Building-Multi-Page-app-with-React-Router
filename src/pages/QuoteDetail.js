import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";


const DUMMY_QUOTES = [
    {id: 'q1', author: 'Declan', text: 'Learning React is amazing'},
    {id: 'q2', author: 'Laura', text: 'Here is the best Developer you know'},
]


const QuoteDetail = () => {

const params = useParams()
const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

if(!quote){
    return <p> No Quotes found</p>
}

    return ( 
        <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={`/quotes/${params.quoteId}`} exact>
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </Route>
       
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments/>
        </Route>

        </Fragment>
     );
}
 
export default QuoteDetail;