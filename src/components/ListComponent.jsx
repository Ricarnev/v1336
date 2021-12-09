import './ListComponent.css';
import {filterItemsByConnection, filterItemsByDepartment} from '../reducers/reducer';
import { useDispatch } from 'react-redux';

export function ListComponent({brigId, brigName, connection, depId, depName, posName, posCluster, posWell, header, filterByDepID, filterByConnection, expandAll}){
    const dispatch = useDispatch();

    function ResetFilters() {
        dispatch(filterItemsByConnection('all'));
        dispatch(filterItemsByDepartment('all'))
    }

    if(header){
        return(
            <div className="list-component flex">
                <p>По состоянию связи</p>
                <select value={filterByConnection} onChange={e => dispatch(filterItemsByConnection(e.target.value))}>
                    <option value={'all'} >Все</option>
                    <option value={1} >На связи</option>
                    <option value={0} >Нет связи</option>
                </select>
                <p>По подразделению</p>
                <select value={filterByDepID} onChange={(e) => dispatch(filterItemsByDepartment(e.target.value))}>
                    <option value={'all'}>Все</option>
                    <option value={0}>Лукойл (0)</option>
                    <option value={1}>Роснефть (1)</option>
                    <option value={2}>Газпром нефть (2)</option>
                </select>
                <button onClick={() => ResetFilters()} className={'reset-btn'}>Сбросить фильтры</button>
        </div>
        )
    }

    return(
        <div className={'list-component'}>
            <div className={connection === 1 ? 'connection on' : 'connection off'} />
            <p>{brigId}</p>
            <p>{brigName}</p>
            <p>{depName} <span> ({depId})</span></p>
            <p>{posName}</p>
            <p>{posCluster}</p>
            <p>{posWell}</p>
        </div>
    )
}