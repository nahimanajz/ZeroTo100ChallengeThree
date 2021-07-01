export default function MessageAndLoader({isLoading, message}){
    return(
        isLoading?( <div className="loader"> Please Wait ... </div>):
        message&& (<div className="message">{message}</div>)
      )
}