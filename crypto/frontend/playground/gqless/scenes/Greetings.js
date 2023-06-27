import {Suspense} from 'react';

import {useQuery} from '../gqless';

export function Greetings() {
  const query = useQuery({
    suspense: true,
    staleWhileRevalidate: true,
    onError(error) {},
  });

  return <>
  <h1>{query.greetings()}
  </h1>
  <h2>
    {query.greetings({ name: 'Chad'})}
  </h2>
  </>;
}

export default () => (
  <Suspense fallback={false}>
    <Greetings />
  </Suspense>
);
