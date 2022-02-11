import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/hooks/use-http";
import {  getAllQuotes } from "../lib/lib/api";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Declan', text: 'Learning React is amazing'},
    {id: 'q2', author: 'Laura', text: 'Here is the best Developer you know'},
]

const AllQuotes = () => {
   const {sendRequest, status, data: loadedQuotes,error} = useHttp(getAllQuotes,true);

   console.log(sendRequest,status,loadedQuotes,error)

   useEffect(()=>{
       sendRequest()
   },[sendRequest]);

   if(status === 'pending'){
       <div className="centered">
         <LoadingSpinner/>
       </div>
   }

   if(error){
       return <p className="centered focused">{error}</p>
   }

   if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
       return <NoQuotesFound/>
   }
    return ( 
     
      <QuoteList quotes={DUMMY_QUOTES}/>

     );
}
 
export default AllQuotes;