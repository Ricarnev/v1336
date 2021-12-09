import { connect, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../reducers/reducer';
import { Page } from './page/Page';
import './Pagination.css';

function Pagination(props) {
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(setCurrentPage(id));
    }

    const renderPages = () => {
        const pages = [];
        for(let i = 0; i < Math.ceil(props.totalCount / 20); i++){
            pages.push(i+1);
        }
        if(props.currentPage > pages.length){
            handleClick(1)
        }
        return pages.map(item => <Page key={item} id={item} currentPage={props.currentPage} handleClick={handleClick}/>)
    }

    return (
        <ul className='pagination'>
            {renderPages()}
        </ul>
    )
}

const mapStateToProps = function (state) {
    return {
        totalCount: state.brigades.totalCount,
      currentPage: state.brigades.currentPage
    }
  }

export default connect(mapStateToProps,)(Pagination);