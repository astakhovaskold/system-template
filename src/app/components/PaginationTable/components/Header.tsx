import {memo, PropsWithChildren} from 'react';

import EditTableButton from '@/app/components/PaginationTable/components/EditTableButton';
import SearchField from '@/app/components/PaginationTable/components/SearchField';
import {SEARCH_FIELD} from '@/app/components/PaginationTable/features';

interface HeaderProps {
    showEdit?: boolean;
    showSearch?: boolean;
}

const Header = memo<PropsWithChildren<HeaderProps>>(
    ({showEdit = true, showSearch = true, children: buttons}): JSX.Element | null => {
        return (
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-9 flex items-center gap-x-2">
                    {buttons}

                    {showEdit && <EditTableButton />}
                </div>

                <div className="col-span-3">{SEARCH_FIELD && showSearch && <SearchField />}</div>
            </div>
        );
    },
);

export default Header;
