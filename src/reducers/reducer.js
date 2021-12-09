import data from '../data/data.json';
import { calcPages } from '../utils';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const GET_ITEMS = 'GET_ITEMS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const FILTER_ITEMS_BY_CONNECTION = 'FILTER_ITEMS_BY_CONNECTION';
const FILTER_ITEMS_BY_DEPARTMENT = 'FILTER_ITEMS_BY_DEPARTMENT';

const initState = {
  items: data,
  currentPage: 1,
  perPage: 20,
  totalCount: data.length,
  filterByConnection: localStorage.getItem('byConnection') ? localStorage.getItem('byConnection') : 'all',
  pages: calcPages(data.length),
  filterByDepID: localStorage.getItem('byDepID') ? localStorage.getItem('byDepID') : 'all',
}

export function brigades(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
      case GET_ITEMS:
        return{
          ...state
        }
        case FILTER_ITEMS_BY_CONNECTION:
          localStorage.setItem('byConnection', action.payload);
          return{
            ...state,
            filterByConnection: action.payload
          }
          case FILTER_ITEMS_BY_DEPARTMENT:
            localStorage.setItem('byDepID', action.payload);
            return{
              ...state,
              filterByDepID: action.payload
            }
    case SET_TOTAL_COUNT:
      return{
        ...state,
        totalCount: action.payload
      }
      default:
      return state
  }
}

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page })
export const getItems = () => ({ type: GET_ITEMS });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, payload: count });
export const filterItemsByConnection = (state) => ({type: FILTER_ITEMS_BY_CONNECTION, payload: state});
export const filterItemsByDepartment = (depId) => ({type: FILTER_ITEMS_BY_DEPARTMENT, payload: depId});