import React, {useState} from 'react';
import style from './Paginator.module.css'

let Paginator = (props, {portionSize = 10}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
            props.onPageChanged(leftPortionPageNumber - 10)
        }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return  <span className={props.currentPage === p ? style.active : ''}
                              key={p}
                              onClick={(e) => {
                                  props.onPageChanged(p);
                              }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
            props.onPageChanged(leftPortionPageNumber + 10)
        }}>NEXT</button>}
    </div>
}

export default Paginator;
