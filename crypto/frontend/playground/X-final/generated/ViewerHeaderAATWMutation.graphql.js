/**
 * @generated SignedSource<<099d5c3f7d081e8855b162664e12a8e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isInWatchlist",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerHeaderAATWMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddAssetToWatchlistPayload",
        "kind": "LinkedField",
        "name": "addAssetToWatchlist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "addedAsset",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ViewerHeaderAATWMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddAssetToWatchlistPayload",
        "kind": "LinkedField",
        "name": "addAssetToWatchlist",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "addedAsset",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "95bb430137a5da9988f26d7e9c310e85",
    "id": null,
    "metadata": {},
    "name": "ViewerHeaderAATWMutation",
    "operationKind": "mutation",
    "text": "mutation ViewerHeaderAATWMutation(\n  $input: AddAssetToWatchlistInput!\n) {\n  addAssetToWatchlist(input: $input) {\n    addedAsset {\n      isInWatchlist\n      id\n    }\n  }\n}\n"
  }
};
})();

node.hash = "a29ea45d39a4ad058d81bf2e5d0d1a82";

module.exports = node;
