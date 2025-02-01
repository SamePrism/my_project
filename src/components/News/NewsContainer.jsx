import { NextPageActionCreator, PreviousPageActionCreator } from "../../redux/news-reducer";
import News from "./News";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news,
        start: state.newsPage.start,
        end: state.newsPage.end
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        nextPage: () => dispatch(NextPageActionCreator()),
        prevPage: () => dispatch(PreviousPageActionCreator()),
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;