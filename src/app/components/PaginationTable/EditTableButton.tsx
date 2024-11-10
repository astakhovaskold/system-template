import {SearchOutlined} from '@ant-design/icons';
import {Button, Checkbox, Dropdown, Form, Input, MenuProps} from 'antd';
import {ColumnsType} from 'antd/es/table';

import {CSSProperties, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import useColumnsPagination from '@/hooks/pagination/useColumnsPagination';
import useConfigPagination from '@/hooks/pagination/useConfigPagination';
import useClickAway from '@/hooks/useClickAway';

interface EditTableButtonProps<T> {
    url: string;
    items: ColumnsType<T>;
}

const {Item} = Form;

const scrollbarStyle: CSSProperties = {
    scrollbarColor: '#C2C9D4 transparent',
    scrollbarWidth: 'thin',
};

function EditTableButton<T>({url, items: itemsBase}: EditTableButtonProps<T>): JSX.Element | null {
    const [search, setSearch] = useState('');

    const [columns, setColumns] = useColumnsPagination(url);
    const [config] = useConfigPagination(url, 'columns');

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<Array<string>>([]);

    useEffect(() => {
        if (Array.isArray(columns) && columns.length > 0) {
            setSelected(columns);
        }
    }, [columns]);

    const dropdown = useRef<HTMLElement | null>(null);

    const items = useMemo(
        () =>
            itemsBase.filter(({key, title}) => {
                const regexp = new RegExp(search, 'gi');

                return typeof key === 'string' && typeof title === 'string' && search
                    ? title.match(regexp) || key.match(regexp)
                    : true;
            }),
        [itemsBase, search],
    );

    const onCancel = useCallback(() => {
        setSelected(columns);
        setOpen(false);
    }, [columns]);

    const onOk = useCallback(() => {
        setColumns(selected);
        setOpen(false);
    }, [selected, setColumns]);

    useClickAway(dropdown, () => {
        onCancel();
    }, ['click']);

    const menu = useMemo<MenuProps>(
        () => ({
            selectable: true,
            multiple: true,
            onSelect: values => setSelected(values.selectedKeys),
            onDeselect: values => setSelected(values.selectedKeys),
            selectedKeys: selected,
            items: [
                {
                    key: 'search',
                    disabled: true,
                    className: '!cursor-default',
                    label: (
                        <Form<{search: string}> onValuesChange={values => setSearch(values.search)}>
                            <Item name="search" noStyle>
                                <Input
                                    placeholder="Search"
                                    prefix={<SearchOutlined className="text-gray" />}
                                    allowClear
                                />
                            </Item>
                        </Form>
                    ),
                },
                {type: 'divider'},
                {
                    type: 'group',
                    key: 'items',
                    className: 'max-h-[248px] overflow-y-scroll',
                    style: scrollbarStyle,
                    children: items.map(item => ({
                        type: 'item',
                        key: item.key as string,
                        label: item.title as string,
                        className: 'gap-x-2 flex-row-reverse !mb-2 last-of-type:!mb-0',
                        itemIcon: ({isSelected}) => <Checkbox checked={isSelected} />,
                    })),
                },
                {type: 'divider'},
                {
                    key: 'buttons',
                    disabled: true,
                    className: '!cursor-default',
                    label: (
                        <div className="w-full flex gap-x-2">
                            <Button
                                onClick={() => setSelected(config)}
                                className="text-gray"
                                type="text"
                                size="small"
                                block
                            >
                                Reset
                            </Button>
                            <Button onClick={onOk} size="small" type="primary" block>
                                OK
                            </Button>
                        </div>
                    ),
                },
            ],
        }),
        [items, onOk, selected],
    );

    return (
        <Dropdown open={open} overlayClassName="min-w-[248px]" trigger={['click']} menu={menu}>
            <Button onClick={() => setOpen(true)}>Edit Table</Button>
        </Dropdown>
    );
}

export default EditTableButton;
