import News from "../../Components/News/News";

const NewsPage = () => {

    return ( 
        <>
        <div className="bg-slate-800 w-100 h-auto flex justify-center items-center py-44">
            <News showLoadMoreButton={true} />    
        </div>
        </>
     );
}
 
export default NewsPage;