import { connect, useDispatch } from 'react-redux';
import { ListComponent } from './components/ListComponent';
import Pagination from './components/pagination/Pagination';
import {
  setTotalCount
} from "./reducers/reducer";

function App(props) {
  const dispatch = useDispatch();

  const renderBrigades = () => {
  let brigades = [...props.items];
    if(props.filterByConnection === '0' || props.filterByConnection === '1'){
    brigades = brigades.filter(item => item.connection_state === parseInt(props.filterByConnection));
  }
  if(props.filterByDepID === '0' || props.filterByDepID === '1' || props.filterByDepID === '2'){
    brigades = brigades.filter(item => item.department.id === parseInt(props.filterByDepID));
  }
  dispatch(setTotalCount(brigades.length));
  brigades = brigades.slice((props.currentPage * 20 - 20), (props.currentPage * 20));
    return brigades.map(item => <ListComponent key={item.id} brigId={item.id} brigName={item.brigade_name} connection={item.connection_state} depName={item.department.name} depId={item.department.id} posName={item.position.field} posCluster={item.position.cluster} posWell={item.position.well} />)
  }

  return (
    <div className="App">
      <h1 className={'header-text'}>Тестовое задание В-1336</h1>
        <div className='brigades-list'>
          <ListComponent header={true} filterByDepID={props.filterByDepID} filterByConnection={props.filterByConnection}/>
          <div className="list-component columns-header">
            <p>Состояние связи с бригадой</p>
            <p>Идентификатор бригады</p>
            <p>Наименование бригады</p>
            <p>Наименование подразделения <span> (Идентификатор подразделения)</span></p>
            <p>Месторождение</p>
            <p>Номер куста</p>
            <p>Номер скважины</p>
          </div>
          {renderBrigades()}
        </div>
        <Pagination />
      </div>
  );
}

const mapStateToProps = function (state) {
  return {
    items: state.brigades.items,
    currentPage: state.brigades.currentPage,
    perPage: state.brigades.perPage,
    totalCount: state.brigades.totalCount,
    filterByDepID: state.brigades.filterByDepID,
    filterByConnection: state.brigades.filterByConnection
  }
}

export default connect(mapStateToProps)(App);
