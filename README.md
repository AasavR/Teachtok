# Teachtok Overall Structure
Crossover


Use React Navigation for routing between Home and other screens. Home would be the initial route.

Create separate components for each main section:

HomeScreen.tsx - The main Home screen
Feed.tsx - Handles Following and For You feeds
ContentItem.tsx - Renders individual content items
Header.tsx - Top bar with timer, icons etc.
Pull content data from API in Feed component using React Query.

Home Screen

Render Header and Pass countdown timer from state.
Use ScrollView with refreshControl for pull to refresh.
Render Following and For You <Feed> components.
Pass API endpoints to get next page of content.
Feed Component

Make API call with React Query useQuery hook.
Render ContentItem for each item in response data array.
Load more on reach end using FlatList onEndReached.
ContentItem

Destructure props for user, description, etc.
Conditionally show Flashcard/MCQ markup.
Display static icons for interactions.
Make component reusable by passing content data as props.

State Management

Use React Context API for global state like user info, app settings etc.
Manage local state like feed data with useState hooks.
Centralize API call logic in services files.
Navigation

Use React Navigation for routing and stacks.
Handle deep linking to direct access content.
Add tab navigator at the root for top level routes.
Styling

Style components with React Native's StyleSheet.
Extract colors, layouts etc into theme files.
Build a component library for UI consistency.
Data Caching

Use React Query to cache feed data.
Implement pull-to-refresh to fetch latest data.
Testing

Jest with React Testing Library for unit tests.
Detox for end-to-end integration testing.
Snapshot tests for UI components.
Mock API calls.
Accessibility

Add accessibility labels for screen readers.
Support dynamic font sizes.
Follow accessibility best practices.
