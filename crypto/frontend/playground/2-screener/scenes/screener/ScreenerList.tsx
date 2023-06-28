import {
  Divider,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
  TextField,
} from '@mui/material';
import {
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react';

import {LoadMoreButton, NoData, TransitionIndicator} from '@/components';
import {usePaginatedQuery} from '@/gqty';
import {useSize} from '@/hooks';
import {SearchIcon} from '@/icons';

import ScreenerListItem from './ScreenerListItem';

const Order = [
  {
    title: 'Market cap ↓',
    expression: {price: {marketCap: 'DESC'}},
  },
  {
    title: 'Change 24H ↓',
    expression: {price: {change24Hour: 'DESC'}},
  },
  {
    title: 'Change 24H ↑',
    expression: {price: {change24Hour: 'ASC'}},
  },
  {
    title: 'Symbol ↑',
    expression: {symbol: 'ASC'},
  },
  {
    title: 'Slug ↑',
    expression: {slug: 'ASC'},
  },
  {
    title: 'Name ↑',
    expression: {name: 'ASC'},
  },
];
function ScreenerList() {
  const {data, fetchMore, isLoading} = usePaginatedQuery(
    (
      // Auto-generated query object
      query,
      input: {
        first: number,
        after: string | undefined,
      },
      {getArrayFields},
    ) => {
      const assets = query.assets({
        ...input,
      });
      if (!assets)
        return {
          hasNextPage: false,
        };
      const {
        nodes,
        pageInfo: {hasNextPage, endCursor},
      } = assets;
      return {
        nodes: getArrayFields(nodes, 'name'),
        hasNextPage,
        endCursor,
      };
    },
    {
      initialArgs: {
        first: 20,
        after: undefined,
      },
      merge({data: {existing, incoming}, uniqBy}) {
        if (existing?.nodes && incoming?.nodes) {
          return {
            ...incoming,
            // If using 'cache-and-network', you have to use `uniqBy`
            nodes: uniqBy([...existing.nodes, ...incoming.nodes], (v) => v.id),
          };
        }
        return incoming;
      },
      fetchPolicy: 'cache-and-network',
      suspense: true,
    },
  );

  // const {data, hasNext, loadNext, isLoadingNext, refetch} =
  //   usePaginationFragment(
  //     graphql`
  //       fragment ScreenerListFragment_query on Query
  //       @argumentDefinitions(
  //         cursor: {type: "String"}
  //         count: {type: "Int", defaultValue: 10}
  //         where: {type: "AssetFilterInput"}
  //         order: {
  //           type: "[AssetSortInput!]"
  //           defaultValue: {price: {marketCap: DESC}}
  //         }
  //       )
  //       @refetchable(queryName: "ScreenerListRefetchableQuery") {
  //         assets(after: $cursor, first: $count, where: $where, order: $order)
  //           @connection(key: "ScreenerList_assets") {
  //           edges {
  //             node {
  //               id
  //               ...ScreenerListItemFragment_asset
  //             }
  //           }
  //         }
  //       }
  //     `,
  //     fragmentRef,
  //   );

  const [q, setQ] = useState('');
  const qRef = useRef(q);
  const deferredQ = useDeferredValue(q);

  const [order, setOrder] = useState(0);
  const orderRef = useRef(order);

  const [busy, startTransition] = useTransition();

  useEffect(() => {
    if (qRef.current !== deferredQ || orderRef.current !== order) {
      qRef.current = deferredQ;
      orderRef.current = order;

      startTransition(() => {
        const variables = Object.assign(
          {},
          !!deferredQ && {
            where: {
              or: [
                {symbol: {contains: deferredQ}},
                {name: {contains: deferredQ}},
                {slug: {contains: deferredQ}},
              ],
            },
          },
          {order: Order[order]?.expression},
        );

        // refetch(variables);
      });
    }
  }, [deferredQ, order]);

  const [tableRef, size] = useSize();
  const extended = size?.width > 400;

  const Toolbar = (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      gap={20}
    >
      <TextField
        type="search"
        variant="standard"
        value={q}
        placeholder="Search all assets"
        autoComplete="off"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        autoFocus
        sx={{flex: 1, border: 0}}
        onChange={(event) => {
          setQ(event.target.value);
        }}
      />
      {/* <SortButton options={Order} active={order} onChange={setOrder} /> */}
    </Stack>
  );

  return (
    <Stack gap={2}>
      {Toolbar}
      <Divider />
      <Stack px={4}>
        <TransitionIndicator in={isLoading}>
          {data?.nodes?.length || data?.hasNextPage ? (
            <Table ref={tableRef} size="medium">
              <TableBody>
                {data?.nodes?.map((asset) => {
                  const {id = 0} = asset;
                  return (
                    <ScreenerListItem
                      key={id}
                      asset={asset}
                      extended={extended}
                    />
                  );
                })}
              </TableBody>
              {data?.hasNextPage && (
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <LoadMoreButton
                        busy={busy}
                        onClick={() =>
                          fetchMore({
                            first: 10,
                            after: data.endCursor,
                          })
                        }
                      />
                    </TableCell>
                  </TableRow>
                </TableFooter>
              )}
            </Table>
          ) : (
            <NoData message="Hmm, we can’t find that asset." />
          )}
        </TransitionIndicator>
      </Stack>
    </Stack>
  );
}

export default ScreenerList;
