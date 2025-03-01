/**
 * @generated SignedSource<<a3be9b3c573bb8c9a77fcbe0d631bf51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currency",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastPrice",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "change24Hour",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetPrice",
  "kind": "LinkedField",
  "name": "price",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    (v5/*: any*/),
    (v0/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "kind": "Literal",
  "name": "first",
  "value": 5
},
v8 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Asset",
    "kind": "LinkedField",
    "name": "nodes",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isInWatchlist",
        "storageKey": null
      },
      (v6/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardContainerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DashboardTickerFragment_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DashboardFeaturedFragment_query"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "DashboardSpotlightFragment_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardContainerQuery",
    "selections": [
      {
        "alias": "ticker",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          },
          {
            "kind": "Literal",
            "name": "order",
            "value": {
              "price": {
                "tradableMarketCapRank": "ASC"
              }
            }
          }
        ],
        "concreteType": "AssetsConnection",
        "kind": "LinkedField",
        "name": "assets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "assets(first:10,order:{\"price\":{\"tradableMarketCapRank\":\"ASC\"}})"
      },
      {
        "alias": "featured",
        "args": [
          {
            "kind": "Literal",
            "name": "where",
            "value": {
              "symbol": {
                "in": [
                  "BTC",
                  "ADA",
                  "ALGO"
                ]
              }
            }
          }
        ],
        "concreteType": "AssetsConnection",
        "kind": "LinkedField",
        "name": "assets",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetPrice",
                "kind": "LinkedField",
                "name": "price",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "span",
                        "value": "DAY"
                      }
                    ],
                    "concreteType": "AssetPriceChange",
                    "kind": "LinkedField",
                    "name": "change",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "HistoryConnection",
                        "kind": "LinkedField",
                        "name": "history",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AssetPriceHistory",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "epoch",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "price",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ],
                    "storageKey": "change(span:\"DAY\")"
                  },
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "assets(where:{\"symbol\":{\"in\":[\"BTC\",\"ADA\",\"ALGO\"]}})"
      },
      {
        "if": null,
        "kind": "Defer",
        "label": "DashboardSpotlightFragment_query$defer$gainers",
        "selections": [
          {
            "alias": "gainers",
            "args": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "order",
                "value": {
                  "price": {
                    "change24Hour": "DESC"
                  }
                }
              },
              {
                "kind": "Literal",
                "name": "where",
                "value": {
                  "price": {
                    "change24Hour": {
                      "gt": 0
                    }
                  }
                }
              }
            ],
            "concreteType": "AssetsConnection",
            "kind": "LinkedField",
            "name": "assets",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": "assets(first:5,order:{\"price\":{\"change24Hour\":\"DESC\"}},where:{\"price\":{\"change24Hour\":{\"gt\":0}}})"
          }
        ]
      },
      {
        "if": null,
        "kind": "Defer",
        "label": "DashboardSpotlightFragment_query$defer$losers",
        "selections": [
          {
            "alias": "losers",
            "args": [
              (v7/*: any*/),
              {
                "kind": "Literal",
                "name": "order",
                "value": {
                  "price": {
                    "change24Hour": "ASC"
                  }
                }
              },
              {
                "kind": "Literal",
                "name": "where",
                "value": {
                  "price": {
                    "change24Hour": {
                      "lt": 0
                    }
                  }
                }
              }
            ],
            "concreteType": "AssetsConnection",
            "kind": "LinkedField",
            "name": "assets",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": "assets(first:5,order:{\"price\":{\"change24Hour\":\"ASC\"}},where:{\"price\":{\"change24Hour\":{\"lt\":0}}})"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "81e891cea528a3c144a2e5458395682e",
    "id": null,
    "metadata": {},
    "name": "DashboardContainerQuery",
    "operationKind": "query",
    "text": "query DashboardContainerQuery {\n  ...DashboardTickerFragment_query\n  ...DashboardFeaturedFragment_query\n  ...DashboardSpotlightFragment_query\n}\n\nfragment DashboardFeaturedCardFragment_asset on Asset {\n  symbol\n  color\n  price {\n    currency\n    lastPrice\n    change24Hour\n    change(span: DAY) {\n      history {\n        nodes {\n          epoch\n          price\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment DashboardFeaturedFragment_query on Query {\n  featured: assets(where: {symbol: {in: [\"BTC\", \"ADA\", \"ALGO\"]}}) {\n    nodes {\n      id\n      ...DashboardFeaturedCardFragment_asset\n    }\n  }\n}\n\nfragment DashboardSpotlightCardFragment_asset on AssetsConnection {\n  nodes {\n    id\n    ...DashboardSpotlightItemFragment_asset\n  }\n}\n\nfragment DashboardSpotlightFragment_query on Query {\n  ...DashboardSpotlightGainersFragment_query @defer(label: \"DashboardSpotlightFragment_query$defer$gainers\")\n  ...DashboardSpotlightLosersFragment_query @defer(label: \"DashboardSpotlightFragment_query$defer$losers\")\n}\n\nfragment DashboardSpotlightGainersFragment_query on Query {\n  gainers: assets(first: 5, where: {price: {change24Hour: {gt: 0}}}, order: {price: {change24Hour: DESC}}) {\n    ...DashboardSpotlightCardFragment_asset\n  }\n}\n\nfragment DashboardSpotlightItemFragment_asset on Asset {\n  id\n  symbol\n  name\n  imageUrl\n  isInWatchlist\n  price {\n    currency\n    lastPrice\n    change24Hour\n    id\n  }\n}\n\nfragment DashboardSpotlightLosersFragment_query on Query {\n  losers: assets(first: 5, where: {price: {change24Hour: {lt: 0}}}, order: {price: {change24Hour: ASC}}) {\n    ...DashboardSpotlightCardFragment_asset\n  }\n}\n\nfragment DashboardTickerFragment_query on Query {\n  ticker: assets(first: 10, order: {price: {tradableMarketCapRank: ASC}}) {\n    nodes {\n      id\n      symbol\n      ...DashboardTickerItemFragment_asset\n    }\n  }\n}\n\nfragment DashboardTickerItemFragment_asset on Asset {\n  symbol\n  color\n  price {\n    currency\n    lastPrice\n    change24Hour\n    id\n  }\n}\n"
  }
};
})();

node.hash = "36cb06ea9a915eeb17386e150b0cf23b";

module.exports = node;
