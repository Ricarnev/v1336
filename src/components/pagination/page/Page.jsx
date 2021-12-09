export function Page({id, currentPage, handleClick}){

    return(
        <li
        className={parseInt(currentPage) === id ? 'active page' : 'page'}
        key={id}
        id={id}
        onClick={() => handleClick(id)}
    >
        {id}
    </li>
    )
}