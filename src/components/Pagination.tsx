import { Dispatch, SetStateAction } from 'react';
import { Info } from '../App';
interface PaginationProps {
  info: Info | null
  changePage: Dispatch<SetStateAction<string>>
}
function Pagination({info, changePage}: PaginationProps) {
  return (
    <div className="Pagination">
      <button onClick={() => info?.prev && changePage(info.prev)} disabled={!info?.prev}>⇦</button>
      <button onClick={() => info?.next && changePage(info?.next)} disabled={!info?.next}>⇨</button>
    </div>
  );
}

export default Pagination;
