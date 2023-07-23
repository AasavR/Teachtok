// Feed.tsx

import { useQuery } from 'react-query';
import ContentItem from './ContentItem';

export default function Feed({ section, apiEndpoint }) {

  const { data, isLoading } = useQuery(['feed', section], () => {
    return fetch(apiEndpoint)
      .then(res => res.json())
  });

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ContentItem {...item} />}
      onEndReached={() => fetchNextPage()}
    />
  )

}
