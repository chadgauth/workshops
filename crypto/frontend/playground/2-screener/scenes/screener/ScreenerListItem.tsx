import {TableCell, TableRow} from '@mui/material';
import React from 'react';

import {Change, Currency, MarketCap, Price, WatchCheckbox} from '@/components';
import {Asset} from '@/gqty';

// const useAddToWatchlist = () => {
// const [commit, isInFlight] = useMutation(graphql`
//   mutation ScreenerListItemAATWMutation($input: AddAssetToWatchlistInput!) {
//     addAssetToWatchlist(input: $input) {
//       addedAsset {
//         isInWatchlist
//       }
//     }
//   }
// `);

//   const execute = useCallback(
//     ({id, symbol}) => {
//       commit({
//         variables: {input: {symbol}},
//         optimisticUpdater(store) {
//           store.get(id)?.setValue(true, 'isInWatchlist');
//         },
//         updater(store) {
//           store
//             .getRoot()
//             .getLinkedRecord('me')
//             ?.getLinkedRecord('watchlist')
//             ?.invalidateRecord();
//         },
//         onCompleted() {
//           console.log(`${symbol} was added to the watchlist`);
//         },
//         onError() {
//           console.log(
//             `there was a problem with ${symbol} while adding to the watchlist`,
//           );
//         },
//       });
//     },
//     [commit],
//   );

//   return [execute, isInFlight];
// };

// const useRemoveFromWatchlist = () => {
//   // const [commit, isInFlight] = useMutation(graphql`
//   //   mutation ScreenerListItemRAFWMutation(
//   //     $input: RemoveAssetFromWatchlistInput!
//   //   ) {
//   //     removeAssetFromWatchlist(input: $input) {
//   //       removedAsset {
//   //         isInWatchlist
//   //       }
//   //     }
//   //   }
//   // `);

//   // const execute = useCallback(
//   //   ({id, symbol}) => {
//   //     commit({
//   //       variables: {input: {symbol}},
//   //       optimisticUpdater(store) {
//   //         store.get(id)?.setValue(false, 'isInWatchlist');
//   //       },
//   //       updater(store) {
//   //         store
//   //           .getRoot()
//   //           .getLinkedRecord('me')
//   //           ?.getLinkedRecord('watchlist')
//   //           ?.invalidateRecord();
//   //       },
//   //       onCompleted() {
//   //         console.log(`${symbol} was removed from the watchlist`);
//   //       },
//   //       onError() {
//   //         console.log(
//   //           `there was a problem with ${symbol} while removing from the watchlist`,
//   //         );
//   //       },
//   //     });
//   //   },
//   //   [commit],
//   // );

//   return [execute, isInFlight];
// };
function ScreenerListItem({
  asset,
  extended,
}: {
  asset: Asset,
  extended: boolean,
}) {
  const {
    symbol,
    name,
    // imageUrl,
    // isInWatchlist,
    price,
  } = asset;
  const {currency, lastPrice, change24Hour, marketCap} = price;

  // const [addToWatchlist] = useAddToWatchlist();
  // const [removeFromWatchlist] = useRemoveFromWatchlist();

  return (
    <TableRow key={symbol} role="checkbox" tabIndex={-1} hover>
      <TableCell component="th" scope="row" sx={{width: 'auto'}}>
        {symbol && <Currency symbol={symbol || ''} name={name} />}
      </TableCell>
      <TableCell align="right" sx={{width: 100, paddingLeft: 0}}>
        {lastPrice && currency && (
          <Price value={lastPrice} options={{currency}} size="small" />
        )}
      </TableCell>
      <TableCell align="right" sx={{width: 70, paddingLeft: 0}}>
        {price && <Change value={change24Hour} size="small" />}
      </TableCell>
      {extended && (
        <TableCell align="right" sx={{width: 70, paddingLeft: 0}}>
          {marketCap && currency && (
            <MarketCap value={marketCap} options={{currency}} size="small" />
          )}
        </TableCell>
      )}
      <TableCell align="right" sx={{width: 46, paddingLeft: 0}}>
        <WatchCheckbox
          // checked={!!asset.isInWatchlist}
          // disabled={asset.isInWatchlist === null}
          size="small"
          // onChange={(event) => {
          //   if (event.target.checked) {
          //     addToWatchlist(asset);
          //   } else {
          //     removeFromWatchlist(asset);
          //   }
          // }}
        />
      </TableCell>
    </TableRow>
  );
}

export default ScreenerListItem;
